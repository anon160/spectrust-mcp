import test from "node:test";
import assert from "node:assert/strict";
import { SqliteAdapter } from "../db/sqlite-adapter.js";
import { ProductRepository } from "../db/repository.js";
import { CATALOG } from "../data/catalog.js";
import { evaluateBuildCompatibility } from "../engine/compatibility.js";
import { generateCheckoutPermalink } from "../engine/permalinks.js";

async function setupTestDb(): Promise<ProductRepository> {
  const adapter = new SqliteAdapter(":memory:");
  const repo = new ProductRepository(adapter);
  await repo.init();
  await repo.seedIfEmpty(CATALOG);
  return repo;
}

test("Database: repository seeds and filters by category and trust score", async () => {
  const repo = await setupTestDb();
  const cpus = await repo.search({ category: "cpu", min_trust_score: 90 });
  assert.ok(cpus.length > 0);
  for (const cpu of cpus) {
    assert.equal(cpu.category, "cpu");
    assert.ok(cpu.trust.overall_trust_score >= 90);
  }
});

test("Database: repository filters by max price via SQL query", async () => {
  const repo = await setupTestDb();
  const budget = await repo.search({ max_price: 150 });
  assert.ok(budget.length > 0);
  for (const item of budget) {
    const minOffer = Math.min(...item.offers.map((o) => o.price_usd));
    assert.ok(minOffer <= 150);
  }
});

test("Database: text search matches partial model or specs", async () => {
  const repo = await setupTestDb();
  const results = await repo.search({ query: "Terra" });
  assert.equal(results.length, 1);
  assert.equal(results[0].id, "case-fractal-terra");
});

test("Database: compatibility engine identifies valid build via DB lookups", async () => {
  const repo = await setupTestDb();
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

  const report = await evaluateBuildCompatibility(compatibleIds, repo);
  assert.equal(report.is_compatible, true);
  assert.equal(report.issues.filter((i) => i.severity === "CRITICAL_INCOMPATIBLE").length, 0);
  assert.ok(report.total_estimated_tdp_watts > 300);
  assert.ok(report.recommended_psu_wattage <= 850);
});

test("Database: compatibility engine flags socket mismatch", async () => {
  const repo = await setupTestDb();
  const mismatchedIds = ["cpu-amd-7800x3d", "mobo-asus-z790-e"];
  const report = await evaluateBuildCompatibility(mismatchedIds, repo);
  assert.equal(report.is_compatible, false);
  const socketIssue = report.issues.find((i) => i.severity === "CRITICAL_INCOMPATIBLE");
  assert.ok(socketIssue);
  assert.match(socketIssue.message, /Socket mismatch/i);
});

test("Database: compatibility engine flags ITX case form-factor mismatch", async () => {
  const repo = await setupTestDb();
  const mismatchedIds = ["mobo-msi-b650-tomahawk", "case-fractal-terra"];
  const report = await evaluateBuildCompatibility(mismatchedIds, repo);
  assert.equal(report.is_compatible, false);
  const formIssue = report.issues.find((i) => i.severity === "CRITICAL_INCOMPATIBLE");
  assert.ok(formIssue);
  assert.match(formIssue.message, /Form factor mismatch/i);
});

test("Database: generateCheckoutPermalink retrieves live offer and attaches tag", async () => {
  const repo = await setupTestDb();
  const permalink = await generateCheckoutPermalink("gpu-asus-tuf-4070ts", 1, "amazon", undefined, repo);
  assert.equal(permalink.product_id, "gpu-asus-tuf-4070ts");
  assert.equal(permalink.merchant, "amazon");
  assert.match(permalink.checkout_url, /tag=pctrust01-20/);
  assert.ok(permalink.total_price_usd > 0);
});
