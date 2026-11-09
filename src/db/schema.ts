export const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  category TEXT NOT NULL,
  release_year INTEGER NOT NULL,
  overall_trust_score INTEGER NOT NULL,
  spec_accuracy_score INTEGER NOT NULL,
  fake_review_resistance INTEGER NOT NULL,
  rma_reliability_score INTEGER NOT NULL,
  independent_lab_tested INTEGER NOT NULL DEFAULT 1,
  known_issues_json TEXT NOT NULL DEFAULT '[]',
  specs_json TEXT NOT NULL,
  lowest_price_usd REAL NOT NULL DEFAULT 0.0,
  socket TEXT,
  form_factor TEXT,
  tdp_watts INTEGER,
  max_dimension_mm REAL,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS merchant_offers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id TEXT NOT NULL,
  merchant TEXT NOT NULL,
  price_usd REAL NOT NULL,
  in_stock INTEGER NOT NULL DEFAULT 1,
  direct_url TEXT NOT NULL,
  shipping_days INTEGER DEFAULT 2,
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  UNIQUE(product_id, merchant)
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_trust ON products(overall_trust_score);
CREATE INDEX IF NOT EXISTS idx_products_category_trust ON products(category, overall_trust_score);
CREATE INDEX IF NOT EXISTS idx_products_price ON products(lowest_price_usd);
CREATE INDEX IF NOT EXISTS idx_products_socket ON products(socket);
CREATE INDEX IF NOT EXISTS idx_offers_product ON merchant_offers(product_id);

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
`;
