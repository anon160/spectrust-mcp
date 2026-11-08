import { CATALOG } from "../data/catalog.js";
import { Product, ComponentCategory } from "../types.js";

export interface SearchFilters {
  category?: ComponentCategory;
  query?: string;
  max_price?: number;
  min_trust_score?: number;
  in_stock_only?: boolean;
}

export function searchCatalog(filters: SearchFilters): Product[] {
  return CATALOG.filter((product) => {
    // Category filter
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    // Trust filter
    if (filters.min_trust_score && product.trust.overall_trust_score < filters.min_trust_score) {
      return false;
    }

    // Best price among offers
    const lowestPrice = Math.min(...product.offers.map((o) => o.price_usd));
    if (filters.max_price && lowestPrice > filters.max_price) {
      return false;
    }

    // In-stock filter
    if (filters.in_stock_only) {
      const hasStock = product.offers.some((o) => o.in_stock);
      if (!hasStock) return false;
    }

    // Text search query
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const textMatches =
        product.brand.toLowerCase().includes(q) ||
        product.model.toLowerCase().includes(q) ||
        JSON.stringify(product.specs).toLowerCase().includes(q);
      if (!textMatches) return false;
    }

    return true;
  });
}

export function getProductById(id: string): Product | undefined {
  return CATALOG.find((p) => p.id === id);
}

export function compareProducts(productIds: string[]) {
  const products = productIds
    .map((id) => CATALOG.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);

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
