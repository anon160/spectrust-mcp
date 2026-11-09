import { DbAdapter } from "./adapter.js";
import { SCHEMA_SQL } from "./schema.js";
import { Product, MerchantOffer, ComponentCategory } from "../types.js";
import { SearchFilters } from "../engine/search.js";

interface ProductRow {
  id: string;
  brand: string;
  model: string;
  category: string;
  release_year: number;
  overall_trust_score: number;
  spec_accuracy_score: number;
  fake_review_resistance: number;
  rma_reliability_score: number;
  independent_lab_tested: number;
  known_issues_json: string;
  specs_json: string;
  lowest_price_usd: number;
  socket?: string;
  form_factor?: string;
  tdp_watts?: number;
  max_dimension_mm?: number;
}

interface MerchantOfferRow {
  product_id: string;
  merchant: string;
  price_usd: number;
  in_stock: number;
  direct_url: string;
  shipping_days?: number;
}

export class ProductRepository {
  constructor(private adapter: DbAdapter) {}

  async init(): Promise<void> {
    await this.adapter.execute(SCHEMA_SQL);
  }

  async seedIfEmpty(catalog: Product[]): Promise<void> {
    const counts = await this.adapter.query<{ cnt: number }>("SELECT COUNT(*) as cnt FROM products;");
    if (counts.length > 0 && counts[0].cnt > 0) {
      return; // Already populated
    }

    const statements: { sql: string; params: unknown[] }[] = [];

    for (const p of catalog) {
      const lowestPrice = Math.min(...p.offers.map((o) => o.price_usd));
      const specsAny = p.specs as any;

      const socket = specsAny.socket || (Array.isArray(specsAny.supported_sockets) ? specsAny.supported_sockets[0] : null);
      const formFactor = specsAny.form_factor || null;
      const tdpWatts = specsAny.tdp_watts || specsAny.max_tdp_dissipation_watts || null;
      const maxDimensionMm = specsAny.length_mm || specsAny.height_mm || null;

      statements.push({
        sql: `INSERT OR REPLACE INTO products (
          id, brand, model, category, release_year,
          overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
          independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
          socket, form_factor, tdp_watts, max_dimension_mm
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        params: [
          p.id,
          p.brand,
          p.model,
          p.category,
          p.release_year,
          p.trust.overall_trust_score,
          p.trust.spec_accuracy_score,
          p.trust.fake_review_resistance,
          p.trust.rma_reliability_score,
          p.trust.independent_lab_tested ? 1 : 0,
          JSON.stringify(p.trust.known_issues_flagged || []),
          JSON.stringify(p.specs),
          lowestPrice,
          socket,
          formFactor,
          tdpWatts,
          maxDimensionMm
        ]
      });

      for (const o of p.offers) {
        statements.push({
          sql: `INSERT OR REPLACE INTO merchant_offers (
            product_id, merchant, price_usd, in_stock, direct_url, shipping_days
          ) VALUES (?, ?, ?, ?, ?, ?);`,
          params: [p.id, o.merchant, o.price_usd, o.in_stock ? 1 : 0, o.direct_url, o.shipping_days || 2]
        });
      }
    }

    await this.adapter.batch(statements);
  }

  async getById(id: string): Promise<Product | undefined> {
    const rows = await this.adapter.query<ProductRow>("SELECT * FROM products WHERE id = ? LIMIT 1;", [id]);
    if (rows.length === 0) return undefined;

    const offerRows = await this.adapter.query<MerchantOfferRow>(
      "SELECT merchant, price_usd, in_stock, direct_url, shipping_days FROM merchant_offers WHERE product_id = ?;",
      [id]
    );

    return this.mapToProduct(rows[0], offerRows);
  }

  async getByIds(ids: string[]): Promise<Product[]> {
    if (ids.length === 0) return [];
    const placeholders = ids.map(() => "?").join(",");
    const rows = await this.adapter.query<ProductRow>(
      `SELECT * FROM products WHERE id IN (${placeholders});`,
      ids
    );

    const offerRows = await this.adapter.query<MerchantOfferRow>(
      `SELECT product_id, merchant, price_usd, in_stock, direct_url, shipping_days FROM merchant_offers WHERE product_id IN (${placeholders});`,
      ids
    );

    const offersByProduct = new Map<string, MerchantOfferRow[]>();
    for (const o of offerRows) {
      const list = offersByProduct.get(o.product_id) || [];
      list.push(o);
      offersByProduct.set(o.product_id, list);
    }

    return rows.map((r) => this.mapToProduct(r, offersByProduct.get(r.id) || []));
  }

  async search(filters: SearchFilters): Promise<Product[]> {
    const whereClauses: string[] = ["1 = 1"];
    const params: unknown[] = [];

    if (filters.category) {
      whereClauses.push("category = ?");
      params.push(filters.category);
    }

    if (filters.min_trust_score !== undefined) {
      whereClauses.push("overall_trust_score >= ?");
      params.push(filters.min_trust_score);
    }

    if (filters.max_price !== undefined) {
      whereClauses.push("lowest_price_usd <= ?");
      params.push(filters.max_price);
    }

    if (filters.in_stock_only) {
      whereClauses.push(
        "EXISTS (SELECT 1 FROM merchant_offers WHERE merchant_offers.product_id = products.id AND in_stock = 1)"
      );
    }

    if (filters.query) {
      const wildcard = `%${filters.query.toLowerCase()}%`;
      whereClauses.push("(LOWER(brand) LIKE ? OR LOWER(model) LIKE ? OR LOWER(specs_json) LIKE ?)");
      params.push(wildcard, wildcard, wildcard);
    }

    const sql = `SELECT * FROM products WHERE ${whereClauses.join(" AND ")} ORDER BY overall_trust_score DESC, lowest_price_usd ASC;`;
    const rows = await this.adapter.query<ProductRow>(sql, params);

    if (rows.length === 0) return [];

    const productIds = rows.map((r) => r.id);
    const placeholders = productIds.map(() => "?").join(",");
    const offerRows = await this.adapter.query<MerchantOfferRow>(
      `SELECT product_id, merchant, price_usd, in_stock, direct_url, shipping_days FROM merchant_offers WHERE product_id IN (${placeholders});`,
      productIds
    );

    const offersByProduct = new Map<string, MerchantOfferRow[]>();
    for (const o of offerRows) {
      const list = offersByProduct.get(o.product_id) || [];
      list.push(o);
      offersByProduct.set(o.product_id, list);
    }

    return rows.map((r) => this.mapToProduct(r, offersByProduct.get(r.id) || []));
  }

  async upsert(product: Product): Promise<void> {
    const lowestPrice = Math.min(...product.offers.map((o) => o.price_usd));
    const specsAny = product.specs as any;
    const socket = specsAny.socket || (Array.isArray(specsAny.supported_sockets) ? specsAny.supported_sockets[0] : null);
    const formFactor = specsAny.form_factor || null;
    const tdpWatts = specsAny.tdp_watts || specsAny.max_tdp_dissipation_watts || null;
    const maxDimensionMm = specsAny.length_mm || specsAny.height_mm || null;

    const statements: { sql: string; params: unknown[] }[] = [
      {
        sql: `INSERT OR REPLACE INTO products (
          id, brand, model, category, release_year,
          overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
          independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
          socket, form_factor, tdp_watts, max_dimension_mm
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        params: [
          product.id,
          product.brand,
          product.model,
          product.category,
          product.release_year,
          product.trust.overall_trust_score,
          product.trust.spec_accuracy_score,
          product.trust.fake_review_resistance,
          product.trust.rma_reliability_score,
          product.trust.independent_lab_tested ? 1 : 0,
          JSON.stringify(product.trust.known_issues_flagged || []),
          JSON.stringify(product.specs),
          lowestPrice,
          socket,
          formFactor,
          tdpWatts,
          maxDimensionMm
        ]
      }
    ];

    for (const o of product.offers) {
      statements.push({
        sql: `INSERT OR REPLACE INTO merchant_offers (
          product_id, merchant, price_usd, in_stock, direct_url, shipping_days
        ) VALUES (?, ?, ?, ?, ?, ?);`,
        params: [product.id, o.merchant, o.price_usd, o.in_stock ? 1 : 0, o.direct_url, o.shipping_days || 2]
      });
    }

    await this.adapter.batch(statements);
  }

  async saveAgentReview(review: {
    agent_name: string;
    rating: number;
    feedback: string;
    missing_parts?: string;
    metadata?: Record<string, unknown>;
  }): Promise<{ id: number }> {
    await this.adapter.execute(
      `INSERT INTO agent_reviews (agent_name, rating, feedback, missing_parts, metadata_json)
       VALUES (?, ?, ?, ?, ?);`,
      [
        review.agent_name,
        review.rating,
        review.feedback,
        review.missing_parts || null,
        review.metadata ? JSON.stringify(review.metadata) : null
      ]
    );

    const rows = await this.adapter.query<{ id: number }>(
      "SELECT last_insert_rowid() as id;"
    );
    return { id: rows[0]?.id || 1 };
  }

  async getAgentReviews(limit: number = 10): Promise<Array<{
    id: number;
    agent_name: string;
    rating: number;
    feedback: string;
    missing_parts: string | null;
    created_at: string;
  }>> {
    try {
      return await this.adapter.query(
        "SELECT id, agent_name, rating, feedback, missing_parts, created_at FROM agent_reviews ORDER BY id DESC LIMIT ?;",
        [limit]
      );
    } catch {
      return [];
    }
  }

  private mapToProduct(row: ProductRow, offerRows: MerchantOfferRow[]): Product {
    const offers: MerchantOffer[] = offerRows.map((o) => ({
      merchant: o.merchant as any,
      price_usd: o.price_usd,
      in_stock: Boolean(o.in_stock),
      direct_url: o.direct_url,
      shipping_days: o.shipping_days ?? 2
    }));

    return {
      id: row.id,
      brand: row.brand,
      model: row.model,
      category: row.category as ComponentCategory,
      release_year: row.release_year,
      trust: {
        overall_trust_score: row.overall_trust_score,
        spec_accuracy_score: row.spec_accuracy_score,
        fake_review_resistance: row.fake_review_resistance,
        rma_reliability_score: row.rma_reliability_score,
        independent_lab_tested: Boolean(row.independent_lab_tested),
        known_issues_flagged: JSON.parse(row.known_issues_json || "[]")
      },
      specs: JSON.parse(row.specs_json),
      offers
    };
  }
}
