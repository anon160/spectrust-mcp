import test from "node:test";
import assert from "node:assert/strict";
import { SqliteAdapter } from "../db/sqlite-adapter.js";
import { ProductRepository } from "../db/repository.js";

async function setupTestDb(): Promise<ProductRepository> {
  const adapter = new SqliteAdapter(":memory:");
  const repo = new ProductRepository(adapter);
  await repo.init();
  return repo;
}

test("Agent Reviews: saves and retrieves agent feedback in Alpha phase", async () => {
  const repo = await setupTestDb();

  const saved = await repo.saveAgentReview({
    agent_name: "Claude-3.7-Sonnet",
    rating: 5,
    feedback: "Correctly flagged socket mismatch on AM4 board and AM5 Ryzen 7800X3D.",
    missing_parts: "RTX 5080, B650E-I",
    metadata: { session_id: "test-sess-123" }
  });

  assert.ok(saved.id > 0);

  const reviews = await repo.getAgentReviews(10);
  assert.equal(reviews.length, 1);
  assert.equal(reviews[0].agent_name, "Claude-3.7-Sonnet");
  assert.equal(reviews[0].rating, 5);
  assert.equal(reviews[0].missing_parts, "RTX 5080, B650E-I");
});
