import { ProductRepository } from "../db/repository.js";
import { Product, ComponentCategory } from "../types.js";

export interface SearchFilters {
  category?: ComponentCategory;
  query?: string;
  max_price?: number;
  min_trust_score?: number;
  in_stock_only?: boolean;
}

export async function compareProducts(productIds: string[], repository: ProductRepository) {
  const products = await repository.getByIds(productIds);

  if (products.length === 0) {
    throw new Error("No valid products found for comparison.");
  }

  return {
    count: products.length,
    products: products.map((p) => ({
      id: p.id,
      brand: p.brand,
      model: p.model,
      category: p.category,
      trust_score: p.trust.overall_trust_score,
      spec_accuracy: p.trust.spec_accuracy_score,
      lowest_price_usd: Math.min(...p.offers.map((o) => o.price_usd)),
      specs: p.specs,
      known_issues: p.trust.known_issues_flagged
    }))
  };
}
