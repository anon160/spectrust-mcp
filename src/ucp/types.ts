import { z } from "zod";

// UCP 1.0 Discovery Profile Specification
export const UcpDiscoveryProfileSchema = z.object({
  ucp_version: z.string().default("2026-01-15"),
  profile_type: z.enum(["oracle", "aggregator", "merchant", "validator"]).default("validator"),
  name: z.string(),
  description: z.string(),
  facilitator_id: z.string(),
  transports: z.array(z.string()),
  capabilities: z.array(z.string()),
  endpoints: z.record(z.string(), z.string())
});

export type UcpDiscoveryProfile = z.infer<typeof UcpDiscoveryProfileSchema>;

// UCP Cart Line Item
export const UcpLineItemSchema = z.object({
  sku: z.string().describe("Product SKU or catalog ID (e.g. 'cpu-amd-7800x3d')"),
  quantity: z.number().int().positive().default(1),
  unit_price_usd: z.number().positive().optional(),
  preferred_merchant: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional()
});

export type UcpLineItem = z.infer<typeof UcpLineItemSchema>;

// UCP Cart Definition
export const UcpCartSchema = z.object({
  cart_id: z.string().optional(),
  currency: z.string().default("USD"),
  line_items: z.array(UcpLineItemSchema).min(1),
  buyer_id: z.string().optional(),
  created_at: z.string().optional()
});

export type UcpCart = z.infer<typeof UcpCartSchema>;

// AP2 (Agent Payments Protocol) Mandate Schema
export const Ap2PaymentMandateSchema = z.object({
  mandate_id: z.string(),
  buyer_agent_id: z.string().default("client-agent"),
  facilitator_id: z.string().default("spectrust"),
  max_authorized_usd: z.number().positive(),
  currency: z.string().default("USD"),
  expires_at: z.string(),
  status: z.enum(["pending_user_signature", "authorized", "settled", "expired"]).default("pending_user_signature"),
  delegation_scope: z.literal("agent_hardware_purchase")
});

export type Ap2PaymentMandate = z.infer<typeof Ap2PaymentMandateSchema>;

// UCP Checkout Allocation (Splits cart across optimal merchants)
export const UcpMerchantAllocationSchema = z.object({
  merchant: z.string(),
  items: z.array(
    z.object({
      sku: z.string(),
      brand: z.string(),
      model: z.string(),
      quantity: z.number(),
      unit_price_usd: z.number(),
      subtotal_usd: z.number(),
      direct_url: z.string()
    })
  ),
  merchant_subtotal_usd: z.number()
});

export type UcpMerchantAllocation = z.infer<typeof UcpMerchantAllocationSchema>;

// UCP Checkout Session
export const UcpCheckoutSessionSchema = z.object({
  session_id: z.string(),
  ucp_version: z.string().default("2026-01-15"),
  facilitator_id: z.string(),
  status: z.enum(["draft", "ready_for_payment", "processing", "completed", "failed"]),
  currency: z.string().default("USD"),
  total_price_usd: z.number().positive(),
  allocations: z.array(UcpMerchantAllocationSchema),
  ap2_payment_mandate: Ap2PaymentMandateSchema,
  created_at: z.string()
});

export type UcpCheckoutSession = z.infer<typeof UcpCheckoutSessionSchema>;

// SpecTrust UCP Cart Validation Report
export const UcpCartValidationResultSchema = z.object({
  valid_for_checkout: z.boolean(),
  hardware_compatible: z.boolean(),
  compatibility_issues: z.array(
    z.object({
      severity: z.enum(["CRITICAL_INCOMPATIBLE", "WARNING", "NOTE"]),
      component_a_id: z.string(),
      component_b_id: z.string().optional(),
      message: z.string(),
      remedy: z.string().optional()
    })
  ),
  trust_warnings: z.array(
    z.object({
      sku: z.string(),
      overall_trust_score: z.number(),
      message: z.string()
    })
  ),
  power_budget: z.object({
    total_estimated_tdp_watts: z.number(),
    recommended_psu_wattage: z.number()
  }),
  item_count: z.number()
});

export type UcpCartValidationResult = z.infer<typeof UcpCartValidationResultSchema>;
