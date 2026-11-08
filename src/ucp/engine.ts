import { ProductRepository } from "../db/repository.js";
import { evaluateBuildCompatibility } from "../engine/compatibility.js";
import {
  UcpCart,
  UcpCartSchema,
  UcpCartValidationResult,
  UcpCheckoutSession,
  UcpDiscoveryProfile,
  UcpMerchantAllocation
} from "./types.js";

/**
 * Validates any UCP Cart or LineItems against SpecTrust's hardware
 * compatibility rules and RMA/fraud trust thresholds before checkout.
 */
export async function validateUcpCart(
  cartPayload: unknown,
  repository: ProductRepository,
  minTrustScoreThreshold: number = 70
): Promise<UcpCartValidationResult> {
  const parsedCart = UcpCartSchema.safeParse(cartPayload);
  if (!parsedCart.success) {
    throw new Error(`Invalid UCP Cart schema: ${parsedCart.error.message}`);
  }

  const cart: UcpCart = parsedCart.data;
  const skus = cart.line_items.map((item) => item.sku);

  // 1. Run deterministic hardware compatibility check
  const compatReport = await evaluateBuildCompatibility(skus, repository);

  // 2. Run trust score and known-issue verification
  const trustWarnings: Array<{ sku: string; overall_trust_score: number; message: string }> = [];

  for (const item of cart.line_items) {
    const product = await repository.getById(item.sku);
    if (!product) {
      trustWarnings.push({
        sku: item.sku,
        overall_trust_score: 0,
        message: `Product SKU '${item.sku}' is not verified in the SpecTrust catalog.`
      });
      continue;
    }

    if (product.trust.overall_trust_score < minTrustScoreThreshold) {
      trustWarnings.push({
        sku: item.sku,
        overall_trust_score: product.trust.overall_trust_score,
        message: `Overall trust score of ${product.trust.overall_trust_score}/100 is below the recommended safety threshold (${minTrustScoreThreshold}). High defect/RMA risk.`
      });
    }

    if (product.trust.known_issues_flagged.length > 0) {
      trustWarnings.push({
        sku: item.sku,
        overall_trust_score: product.trust.overall_trust_score,
        message: `Known hardware issues reported: ${product.trust.known_issues_flagged.join("; ")}`
      });
    }
  }

  const criticalIssues = compatReport.issues.filter((i) => i.severity === "CRITICAL_INCOMPATIBLE");
  const validForCheckout = criticalIssues.length === 0;

  return {
    valid_for_checkout: validForCheckout,
    hardware_compatible: compatReport.is_compatible,
    compatibility_issues: compatReport.issues,
    trust_warnings: trustWarnings,
    power_budget: {
      total_estimated_tdp_watts: compatReport.total_estimated_tdp_watts,
      recommended_psu_wattage: compatReport.recommended_psu_wattage
    },
    item_count: cart.line_items.length
  };
}

export interface CreateUcpSessionOptions {
  product_ids: string[];
  preferred_merchant?: string;
  buyer_agent_id?: string;
  facilitator_id?: string;
}

/**
 * Creates an interoperable UCP Checkout Session with multi-merchant
 * allocations and an Agent Payments Protocol (AP2) payment mandate.
 */
export async function createUcpCheckoutSession(
  options: CreateUcpSessionOptions,
  repository: ProductRepository
): Promise<UcpCheckoutSession> {
  const {
    product_ids,
    preferred_merchant,
    buyer_agent_id = "agent-gemini-client",
    facilitator_id = "spectrust-oracle"
  } = options;

  if (!product_ids || product_ids.length === 0) {
    throw new Error("Cannot create UCP checkout session with empty product_ids.");
  }

  // Group items by selected merchant
  const merchantBaskets = new Map<
    string,
    Array<{
      sku: string;
      brand: string;
      model: string;
      quantity: number;
      unit_price_usd: number;
      subtotal_usd: number;
      direct_url: string;
    }>
  >();

  let grandTotal = 0;

  for (const id of product_ids) {
    const product = await repository.getById(id);
    if (!product) {
      throw new Error(`Product '${id}' not found in verified catalog.`);
    }

    if (product.offers.length === 0) {
      throw new Error(`No active merchant offers for product '${id}'.`);
    }

    let chosenOffer = product.offers[0];
    if (preferred_merchant) {
      const match = product.offers.find((o) => o.merchant.toLowerCase() === preferred_merchant.toLowerCase());
      if (match) {
        chosenOffer = match;
      }
    }

    // Fall back to in-stock merchant if preferred is out of stock
    if (!chosenOffer.in_stock) {
      const inStock = product.offers.find((o) => o.in_stock);
      if (inStock) {
        chosenOffer = inStock;
      }
    }

    const itemPrice = chosenOffer.price_usd;
    grandTotal += itemPrice;

    const currentList = merchantBaskets.get(chosenOffer.merchant) || [];
    currentList.push({
      sku: product.id,
      brand: product.brand,
      model: product.model,
      quantity: 1,
      unit_price_usd: itemPrice,
      subtotal_usd: itemPrice,
      direct_url: chosenOffer.direct_url
    });
    merchantBaskets.set(chosenOffer.merchant, currentList);
  }

  const allocations: UcpMerchantAllocation[] = [];
  for (const [merchant, items] of merchantBaskets.entries()) {
    const merchantSubtotal = Number(
      items.reduce((sum, item) => sum + item.subtotal_usd, 0).toFixed(2)
    );
    allocations.push({
      merchant,
      items,
      merchant_subtotal_usd: merchantSubtotal
    });
  }

  const roundedGrandTotal = Number(grandTotal.toFixed(2));
  const sessionId = `ucp_ses_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const mandateId = `ap2_man_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000).toISOString(); // 30 minutes expiry

  return {
    session_id: sessionId,
    ucp_version: "2026-01-15",
    facilitator_id,
    status: "ready_for_payment",
    currency: "USD",
    total_price_usd: roundedGrandTotal,
    allocations,
    ap2_payment_mandate: {
      mandate_id: mandateId,
      buyer_agent_id,
      facilitator_id,
      max_authorized_usd: Number((roundedGrandTotal * 1.05).toFixed(2)), // 5% buffer for tax/shipping variance
      currency: "USD",
      expires_at: expiresAt,
      status: "pending_user_signature",
      delegation_scope: "agent_hardware_purchase"
    },
    created_at: new Date().toISOString()
  };
}

/**
 * Returns the machine-readable UCP 1.0 Discovery profile
 * served at `/.well-known/ucp`.
 */
export function getUcpDiscoveryProfile(hostBaseUrl: string = "https://spectrust.workers.dev"): UcpDiscoveryProfile {
  return {
    ucp_version: "2026-01-15",
    profile_type: "validator",
    name: "SpecTrust Hardware Trust & Compatibility Engine",
    description: "Neutral, multi-vendor hardware verification, parametric spec validation, and UCP cart pre-flight oracle.",
    facilitator_id: "spectrust-oracle",
    transports: ["mcp", "streamable_http", "rest"],
    capabilities: [
      "hardware_validation",
      "multi_merchant_cart",
      "ap2_mandate_generation",
      "parametric_clearance_reasoning"
    ],
    endpoints: {
      mcp: `${hostBaseUrl}/mcp`,
      sse: `${hostBaseUrl}/sse`,
      discovery: `${hostBaseUrl}/.well-known/ucp`,
      cart_validator: `${hostBaseUrl}/mcp#validate_ucp_cart`,
      checkout_session: `${hostBaseUrl}/mcp#create_ucp_checkout_session`
    }
  };
}
