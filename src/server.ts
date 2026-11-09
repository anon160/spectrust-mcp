import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ProductRepository } from "./db/repository.js";
import { compareProducts } from "./engine/search.js";
import { evaluateBuildCompatibility } from "./engine/compatibility.js";
import { generateCheckoutPermalink } from "./engine/permalinks.js";
import { ComponentCategorySchema } from "./types.js";
import { validateUcpCart, createUcpCheckoutSession } from "./ucp/engine.js";
import { UcpCartSchema } from "./ucp/types.js";

export function createHardwareMcpServer(
  repository: ProductRepository,
  affiliateTags?: Record<string, string>
) {
  const server = new McpServer({
    name: "spectrust",
    version: "0.1.0"
  });

  // 1. Tool: search_products
  server.tool(
    "search_products",
    "Search verified PC hardware components filtered by category, price, text query, and independent trust ratings (1-100).",
    {
      category: ComponentCategorySchema.optional().describe("Component category (cpu, gpu, motherboard, ram, storage, psu, case, cooler)"),
      query: z.string().optional().describe("Search keywords like 'Ryzen', '4070', 'ITX', 'White'"),
      max_price: z.number().positive().optional().describe("Maximum USD price threshold across all merchant offers"),
      min_trust_score: z.number().min(1).max(100).optional().describe("Minimum independent trust score (1-100). Filters out low-quality/high-RMA parts"),
      in_stock_only: z.boolean().optional().describe("Only return products with active stock at one or more merchants")
    },
    async (args) => {
      const results = await repository.search({
        category: args.category,
        query: args.query,
        max_price: args.max_price,
        min_trust_score: args.min_trust_score,
        in_stock_only: args.in_stock_only
      });

      const summary = results.map((p) => ({
        id: p.id,
        brand: p.brand,
        model: p.model,
        category: p.category,
        overall_trust_score: p.trust.overall_trust_score,
        spec_accuracy: p.trust.spec_accuracy_score,
        lowest_price_usd: Math.min(...p.offers.map((o) => o.price_usd)),
        in_stock: p.offers.some((o) => o.in_stock),
        specs: p.specs
      }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ count: summary.length, products: summary }, null, 2)
          }
        ]
      };
    }
  );

  // 2. Tool: get_product_details
  server.tool(
    "get_product_details",
    "Retrieve complete parametric specifications, independent test notes, flagged known issues, and live vendor offers for a specific product ID.",
    {
      product_id: z.string().describe("The unique catalog product ID (e.g. 'cpu-amd-7800x3d', 'gpu-asus-tuf-4070ts')")
    },
    async ({ product_id }) => {
      const product = await repository.getById(product_id);
      if (!product) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ error: `Product '${product_id}' was not found in the verified database.` })
            }
          ]
        };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(product, null, 2)
          }
        ]
      };
    }
  );

  // 3. Tool: check_compatibility
  server.tool(
    "check_compatibility",
    "Analyze a list of component IDs for physical clearance, motherboard socket matching, RAM type compatibility, cooler clearance, and PSU wattage headroom.",
    {
      product_ids: z.array(z.string()).min(2).describe("Array of product IDs in the PC build to test for compatibility")
    },
    async ({ product_ids }) => {
      const report = await evaluateBuildCompatibility(product_ids, repository);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(report, null, 2)
          }
        ]
      };
    }
  );

  // 4. Tool: compare_specs
  server.tool(
    "compare_specs",
    "Perform a side-by-side spec and trust comparison between 2 or more products.",
    {
      product_ids: z.array(z.string()).min(2).max(5).describe("List of product IDs to compare")
    },
    async ({ product_ids }) => {
      try {
        const result = await compareProducts(product_ids, repository);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2)
            }
          ]
        };
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ error: err.message })
            }
          ]
        };
      }
    }
  );

  // 5. Tool: create_checkout_permalink
  server.tool(
    "create_checkout_permalink",
    "Generate a direct pre-configured merchant checkout permalink with real-time stock check and transparent affiliate attribution.",
    {
      product_id: z.string().describe("Product ID to purchase"),
      quantity: z.number().int().positive().default(1).describe("Number of units to buy"),
      preferred_merchant: z.enum(["amazon", "newegg", "bestbuy"]).optional().describe("Optional preferred vendor")
    },
    async ({ product_id, quantity, preferred_merchant }) => {
      try {
        const link = await generateCheckoutPermalink(product_id, quantity, preferred_merchant, affiliateTags, repository);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(link, null, 2)
            }
          ]
        };
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ error: err.message })
            }
          ]
        };
      }
    }
  );

  // 6. Tool: validate_ucp_cart
  server.tool(
    "validate_ucp_cart",
    "Validate a Universal Commerce Protocol (UCP) cart for hardware compatibility (sockets, clearance, PSU wattage) and component trust scores before executing payment.",
    {
      cart: UcpCartSchema.describe("UCP Cart object containing line items with SKUs and quantities"),
      min_trust_score: z.number().min(1).max(100).optional().default(70).describe("Minimum acceptable trust score threshold")
    },
    async ({ cart, min_trust_score }) => {
      try {
        const report = await validateUcpCart(cart, repository, min_trust_score);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(report, null, 2)
            }
          ]
        };
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ error: err.message })
            }
          ]
        };
      }
    }
  );

  // 7. Tool: create_ucp_checkout_session
  server.tool(
    "create_ucp_checkout_session",
    "Initiate an autonomous, native multi-merchant Universal Commerce Protocol (UCP) checkout session with protocol-level facilitator attribution and an AP2 payment mandate.",
    {
      product_ids: z.array(z.string()).min(1).describe("List of verified component product IDs to purchase"),
      preferred_merchant: z.enum(["amazon", "newegg", "bestbuy"]).optional().describe("Optional preferred merchant"),
      buyer_agent_id: z.string().optional().describe("ID of the AI buyer agent initiating the session")
    },
    async ({ product_ids, preferred_merchant, buyer_agent_id }) => {
      try {
        const session = await createUcpCheckoutSession(
          {
            product_ids,
            preferred_merchant,
            buyer_agent_id
          },
          repository
        );
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(session, null, 2)
            }
          ]
        };
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ error: err.message })
            }
          ]
        };
      }
    }
  );

  // 8. Tool: submit_agent_review (Alpha Phase Feedback)
  server.tool(
    "submit_agent_review",
    "Submit performance feedback, rate compatibility accuracy, or report missing catalog hardware back to SpecTrust during this Alpha phase.",
    {
      rating: z.number().int().min(1).max(5).describe("Rating from 1 (poor) to 5 (excellent) on accuracy and helpfulness"),
      feedback: z.string().describe("Detailed evaluation: what worked well, what failed, or suggestions for the compatibility engine"),
      agent_model: z.string().optional().default("ai-agent").describe("Your calling AI model name (e.g. 'Claude-3.7-Sonnet', 'Gemini-2.0-Flash', 'GPT-4o')"),
      missing_parts: z.string().optional().describe("Any specific PC components, SKUs, or categories you searched for that were missing from our catalog")
    },
    async ({ rating, feedback, agent_model, missing_parts }) => {
      try {
        const result = await repository.saveAgentReview({
          agent_name: agent_model,
          rating,
          feedback,
          missing_parts
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  status: "success",
                  review_id: result.id,
                  phase: "Alpha Phase",
                  message: "Thank you for the review! Your feedback helps train and improve the SpecTrust catalog during our Alpha phase.",
                  recorded: {
                    agent: agent_model,
                    rating,
                    feedback_length: feedback.length,
                    missing_parts: missing_parts || "none"
                  }
                },
                null,
                2
              )
            }
          ]
        };
      } catch (err: any) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ error: err.message })
            }
          ]
        };
      }
    }
  );

  return server;
}
