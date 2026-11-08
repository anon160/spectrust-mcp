-- PC Trust MCP Database Schema
-- Compatible with SQLite 3 and Cloudflare D1

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  category TEXT NOT NULL, -- 'cpu', 'gpu', 'motherboard', 'ram', 'storage', 'psu', 'case', 'cooler'
  release_year INTEGER NOT NULL,
  overall_trust_score INTEGER NOT NULL,
  spec_accuracy_score INTEGER NOT NULL,
  fake_review_resistance INTEGER NOT NULL,
  rma_reliability_score INTEGER NOT NULL,
  independent_lab_tested INTEGER NOT NULL DEFAULT 1,
  known_issues_json TEXT NOT NULL DEFAULT '[]',
  specs_json TEXT NOT NULL,
  lowest_price_usd REAL NOT NULL DEFAULT 0.0,
  
  -- Fast filter columns extracted from specs
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
  merchant TEXT NOT NULL, -- 'amazon', 'newegg', 'bestbuy', 'bhphoto'
  price_usd REAL NOT NULL,
  in_stock INTEGER NOT NULL DEFAULT 1,
  direct_url TEXT NOT NULL,
  shipping_days INTEGER DEFAULT 2,
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  UNIQUE(product_id, merchant)
);

-- Indices for sub-millisecond querying
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_trust ON products(overall_trust_score);
CREATE INDEX IF NOT EXISTS idx_products_category_trust ON products(category, overall_trust_score);
CREATE INDEX IF NOT EXISTS idx_products_price ON products(lowest_price_usd);
CREATE INDEX IF NOT EXISTS idx_products_socket ON products(socket);
CREATE INDEX IF NOT EXISTS idx_offers_product ON merchant_offers(product_id);
