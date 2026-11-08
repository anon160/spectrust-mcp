import { CATALOG } from "../data/catalog.js";

export interface PermalinkResult {
  product_id: string;
  brand: string;
  model: string;
  merchant: string;
  unit_price_usd: number;
  quantity: number;
  total_price_usd: number;
  in_stock: boolean;
  checkout_url: string;
  affiliate_disclosure: string;
}

export function generateCheckoutPermalink(
  productId: string,
  quantity: number = 1,
  preferredMerchant?: string,
  affiliateTags: Record<string, string> = {
    amazon: "pctrust01-20",
    newegg: "pctrust_mcp",
    bestbuy: "pctrust"
  }
): PermalinkResult {
  const product = CATALOG.find((p) => p.id === productId);
  if (!product) {
    throw new Error(`Product '${productId}' not found in catalog.`);
  }

  let selectedOffer = product.offers[0];
  if (preferredMerchant) {
    const match = product.offers.find((o) => o.merchant.toLowerCase() === preferredMerchant.toLowerCase());
    if (match) {
      selectedOffer = match;
    }
  }

  // Fallback to in-stock offer if preferred is out of stock
  if (!selectedOffer.in_stock) {
    const inStock = product.offers.find((o) => o.in_stock);
    if (inStock) {
      selectedOffer = inStock;
    }
  }

  const tag = affiliateTags[selectedOffer.merchant] || "pctrust";
  const url = new URL(selectedOffer.direct_url);

  if (selectedOffer.merchant === "amazon") {
    url.searchParams.set("tag", tag);
  } else if (selectedOffer.merchant === "newegg") {
    url.searchParams.set("cm_mmc", `afc-cjc-${tag}`);
  } else if (selectedOffer.merchant === "bestbuy") {
    url.searchParams.set("irclickid", tag);
  }

  return {
    product_id: product.id,
    brand: product.brand,
    model: product.model,
    merchant: selectedOffer.merchant,
    unit_price_usd: selectedOffer.price_usd,
    quantity,
    total_price_usd: Number((selectedOffer.price_usd * quantity).toFixed(2)),
    in_stock: selectedOffer.in_stock,
    checkout_url: url.toString(),
    affiliate_disclosure: "Independent affiliate link. The merchant pays a small commission at no extra cost to the buyer."
  };
}
