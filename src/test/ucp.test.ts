import test from "node:test";
import assert from "node:assert/strict";
import { SqliteAdapter } from "../db/sqlite-adapter.js";
import { ProductRepository } from "../db/repository.js";
import { CATALOG } from "../data/catalog.js";
import {
  validateUcpCart,
  createUcpCheckoutSession,
  getUcpDiscoveryProfile
} from "../ucp/engine.js";
import {
  UcpCart,
  UcpDiscoveryProfileSchema
} from "../ucp/types.js";

async function setupTestDb(): Promise<ProductRepository> {
  const adapter = new SqliteAdapter(":memory:");
  const repo = new ProductRepository(adapter);
  await repo.init();
  await repo.seedIfEmpty(CATALOG);
  return repo;
}

test("UCP Discovery: profile conforms to UCP 1.0 specification", () => {
  const profile = getUcpDiscoveryProfile("https://api.spectrust.dev");
  const parsed = UcpDiscoveryProfileSchema.safeParse(profile);

  assert.equal(parsed.success, true);
  assert.equal(profile.ucp_version, "2026-01-15");
  assert.equal(profile.profile_type, "validator");
  assert.equal(profile.facilitator_id, "spectrust-oracle");
  assert.ok(profile.capabilities.includes("hardware_validation"));
  assert.ok(profile.capabilities.includes("ap2_mandate_generation"));
  assert.equal(profile.endpoints.discovery, "https://api.spectrust.dev/.well-known/ucp");
});

test("UCP Cart Validation: passes for fully compatible hardware build", async () => {
  const repo = await setupTestDb();
  const validCart: UcpCart = {
    cart_id: "cart-gaming-01",
    currency: "USD",
    line_items: [
      { sku: "cpu-amd-7800x3d", quantity: 1 },
      { sku: "mobo-msi-b650-tomahawk", quantity: 1 },
      { sku: "gpu-asus-tuf-4070ts", quantity: 1 },
      { sku: "cooler-thermalright-pa120se", quantity: 1 },
      { sku: "case-fractal-north", quantity: 1 },
      { sku: "psu-corsair-rm850x", quantity: 1 },
      { sku: "ram-corsair-vengeance-32gb-6000", quantity: 1 },
      { sku: "ssd-wd-black-sn850x-2tb", quantity: 1 }
    ]
  };

  const report = await validateUcpCart(validCart, repo, 70);

  assert.equal(report.valid_for_checkout, true);
  assert.equal(report.hardware_compatible, true);
  assert.equal(report.compatibility_issues.filter((i) => i.severity === "CRITICAL_INCOMPATIBLE").length, 0);
  assert.ok(report.power_budget.total_estimated_tdp_watts > 0);
  assert.ok(report.power_budget.recommended_psu_wattage > 0);
});

test("UCP Cart Validation: rejects checkout when hardware has critical incompatibilities", async () => {
  const repo = await setupTestDb();
  // Case is ITX only, motherboard is ATX, PSU is ATX
  const incompatibleCart: UcpCart = {
    cart_id: "cart-flawed-02",
    currency: "USD",
    line_items: [
      { sku: "case-fractal-terra", quantity: 1 },
      { sku: "mobo-msi-b650-tomahawk", quantity: 1 },
      { sku: "psu-corsair-rm850x", quantity: 1 }
    ]
  };

  const report = await validateUcpCart(incompatibleCart, repo, 70);

  assert.equal(report.valid_for_checkout, false);
  assert.equal(report.hardware_compatible, false);
  const critical = report.compatibility_issues.filter((i) => i.severity === "CRITICAL_INCOMPATIBLE");
  assert.ok(critical.length >= 2);
  assert.ok(critical.some((c) => c.message.includes("does not support 'ATX' motherboards")));
});

test("UCP Cart Validation: flags trust score risk and known issues", async () => {
  const repo = await setupTestDb();
  const cartWithHighRiskPart: UcpCart = {
    cart_id: "cart-risk-03",
    currency: "USD",
    line_items: [
      { sku: "cpu-intel-14900k", quantity: 1 }, // Has known issues flagged in catalog
      { sku: "mobo-msi-z790-tomahawk", quantity: 1 }
    ]
  };

  const report = await validateUcpCart(cartWithHighRiskPart, repo, 85);

  assert.ok(report.trust_warnings.length > 0);
  assert.ok(report.trust_warnings.some((w) => w.sku === "cpu-intel-14900k"));
});

test("UCP Checkout Session: creates multi-merchant allocations and AP2 payment mandate", async () => {
  const repo = await setupTestDb();
  const productIds = [
    "cpu-amd-7800x3d",
    "gpu-asus-tuf-4070ts"
  ];

  const session = await createUcpCheckoutSession(
    {
      product_ids: productIds,
      buyer_agent_id: "claude-desktop-agent",
      facilitator_id: "spectrust-oracle"
    },
    repo
  );

  assert.equal(session.ucp_version, "2026-01-15");
  assert.equal(session.facilitator_id, "spectrust-oracle");
  assert.equal(session.status, "ready_for_payment");
  assert.ok(session.total_price_usd > 1000);
  assert.ok(session.allocations.length >= 1);

  // Check AP2 mandate
  assert.equal(session.ap2_payment_mandate.delegation_scope, "agent_hardware_purchase");
  assert.equal(session.ap2_payment_mandate.buyer_agent_id, "claude-desktop-agent");
  assert.equal(session.ap2_payment_mandate.status, "pending_user_signature");
  assert.ok(session.ap2_payment_mandate.max_authorized_usd >= session.total_price_usd);
  assert.ok(new Date(session.ap2_payment_mandate.expires_at) > new Date());
});
