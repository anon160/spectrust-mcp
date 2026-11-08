import test from "node:test";
import assert from "node:assert/strict";
import { searchCatalog, getProductById, compareProducts } from "../engine/search.js";
import { evaluateBuildCompatibility } from "../engine/compatibility.js";
import { generateCheckoutPermalink } from "../engine/permalinks.js";

test("searchCatalog filters by category and trust score", () => {
  const cpus = searchCatalog({ category: "cpu", min_trust_score: 90 });
  assert.ok(cpus.length > 0);
  for (const cpu of cpus) {
    assert.equal(cpu.category, "cpu");
    assert.ok(cpu.trust.overall_trust_score >= 90);
  }
});

test("searchCatalog filters by max price", () => {
  const budget = searchCatalog({ max_price: 150 });
  assert.ok(budget.length > 0);
  for (const item of budget) {
    const minOffer = Math.min(...item.offers.map((o) => o.price_usd));
    assert.ok(minOffer <= 150);
  }
});

test("evaluateBuildCompatibility identifies compatible PC build", () => {
  // Compatible build: Ryzen 7 7800X3D + MSI B650 Tomahawk + ASUS 4070 Ti Super + Peerless Assassin + Fractal North + Corsair RM850x + Corsair 32GB RAM + WD SN850X 2TB
  const compatibleIds = [
    "cpu-amd-7800x3d",
    "mobo-msi-b650-tomahawk",
    "gpu-asus-tuf-4070ts",
    "cooler-thermalright-pa120se",
    "case-fractal-north",
    "psu-corsair-rm850x",
    "ram-corsair-vengeance-32gb-6000",
    "ssd-wd-black-sn850x-2tb"
  ];

  const report = evaluateBuildCompatibility(compatibleIds);
  assert.equal(report.is_compatible, true);
  assert.equal(report.issues.filter((i) => i.severity === "CRITICAL_INCOMPATIBLE").length, 0);
  assert.ok(report.total_estimated_tdp_watts > 300);
  assert.ok(report.recommended_psu_wattage <= 850);
});

test("evaluateBuildCompatibility flags socket mismatch", () => {
  // Incompatible: AM5 CPU with Intel LGA1700 Motherboard
  const mismatchedIds = [
    "cpu-amd-7800x3d",
    "mobo-asus-z790-e"
  ];

  const report = evaluateBuildCompatibility(mismatchedIds);
  assert.equal(report.is_compatible, false);
  const socketIssue = report.issues.find((i) => i.severity === "CRITICAL_INCOMPATIBLE");
  assert.ok(socketIssue);
  assert.match(socketIssue.message, /Socket mismatch/i);
});

test("evaluateBuildCompatibility flags ITX case form-factor mismatch", () => {
  // Incompatible: ATX Motherboard inside Fractal Terra Mini-ITX case
  const mismatchedIds = [
    "mobo-msi-b650-tomahawk", // ATX
    "case-fractal-terra"       // Mini-ITX only
  ];

  const report = evaluateBuildCompatibility(mismatchedIds);
  assert.equal(report.is_compatible, false);
  const formIssue = report.issues.find((i) => i.severity === "CRITICAL_INCOMPATIBLE");
  assert.ok(formIssue);
  assert.match(formIssue.message, /Form factor mismatch/i);
});

test("generateCheckoutPermalink constructs valid affiliate tags", () => {
  const permalink = generateCheckoutPermalink("gpu-asus-tuf-4070ts", 1, "amazon");
  assert.equal(permalink.product_id, "gpu-asus-tuf-4070ts");
  assert.equal(permalink.merchant, "amazon");
  assert.match(permalink.checkout_url, /tag=pctrust01-20/);
  assert.ok(permalink.total_price_usd > 0);
});
