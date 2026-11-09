-- Migration: 0003_agent_reviews.sql
-- Enables AI agents and clients to submit performance feedback and missing catalog requests during MVP phase

CREATE TABLE IF NOT EXISTS agent_reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  agent_name TEXT NOT NULL,
  rating INTEGER NOT NULL,
  feedback TEXT NOT NULL,
  missing_parts TEXT,
  metadata_json TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_reviews_rating ON agent_reviews(rating);
CREATE INDEX IF NOT EXISTS idx_reviews_created ON agent_reviews(created_at);
