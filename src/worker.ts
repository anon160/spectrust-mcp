import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { createHardwareMcpServer } from "./server.js";
import { D1Adapter, D1Database } from "./db/d1-adapter.js";
import { ProductRepository } from "./db/repository.js";
import { getUcpDiscoveryProfile } from "./ucp/engine.js";

export interface Env {
  ENVIRONMENT?: string;
  AFFILIATE_TAG_AMAZON?: string;
  AFFILIATE_TAG_NEWEGG?: string;
  AFFILIATE_TAG_BESTBUY?: string;
  API_KEY?: string;
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, DELETE",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, x-session-id, last-event-id"
        }
      });
    }

    // Optional API key gating
    if (env.API_KEY) {
      const authHeader = request.headers.get("Authorization");
      const apiKeyParam = url.searchParams.get("api_key");
      const valid = authHeader === `Bearer ${env.API_KEY}` || apiKeyParam === env.API_KEY;
      if (!valid) {
        return new Response(
          JSON.stringify({ error: "Unauthorized. Provide a valid Bearer token or ?api_key= query parameter." }),
          {
            status: 401,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            }
          }
        );
      }
    }

    // Root info and documentation endpoint
    if (url.pathname === "/" || url.pathname === "/health") {
      const hostUrl = `${url.protocol}//${url.host}`;
      return new Response(
        JSON.stringify(
          {
            service: "SpecTrust MCP Server & UCP Oracle",
            version: "0.2.0",
            phase: "Alpha Phase (v0.2.0 - Early Preview)",
            description: "A neutral, multi-vendor hardware trust layer, parametric spec normalization catalog, and deterministic compatibility reasoning engine built for AI agents, the Model Context Protocol (MCP), and the Universal Commerce Protocol (UCP).",
            alpha_notice: "SpecTrust is in active Alpha. The catalog contains verified high-trust core PC hardware. AI agents and developers can rate accuracy, provide feedback, or report missing parts using the submit_agent_review tool or POST /api/reviews.",
            status: "ready",
            database: "Cloudflare D1 (Edge SQLite)",
            transports: ["Streamable HTTP", "SSE", "UCP Discovery"],
            endpoints: {
              mcp: "/mcp",
              sse: "/sse",
              api_reviews: "/api/reviews",
              ucp_discovery: "/.well-known/ucp",
              mcp_discovery: "/.well-known/mcp.json",
              robots: "/robots.txt",
              sitemap: "/sitemap.xml"
            },
            tools: [
              {
                name: "check_compatibility",
                purpose: "Deterministic hardware constraint solving",
                description: "Evaluates multi-component PC builds for physical clearance (GPU length vs case, cooler height vs case width), motherboard socket matching, RAM DDR generation, and PSU wattage headroom."
              },
              {
                name: "search_products",
                purpose: "Parametric catalog discovery",
                description: "Search verified components filtered by category, price, text query, and independent trust ratings (1-100) based on lab bench testing and RMA defect telemetry."
              },
              {
                name: "get_product_details",
                purpose: "Deep technical specifications & live offers",
                description: "Retrieves complete parametric specs (dimensions in mm, TDP watts, PCIe lanes), independent lab notes, known issues, and live vendor offers."
              },
              {
                name: "compare_specs",
                purpose: "Side-by-side component evaluation",
                description: "Compares 2 to 5 components side-by-side across parametric specifications and trust metrics."
              },
              {
                name: "validate_ucp_cart",
                purpose: "Universal Commerce Protocol pre-flight validation",
                description: "Audits any UCP cart or checkout session against physical hardware safety rules and defect thresholds before agents trigger payments."
              },
              {
                name: "create_ucp_checkout_session",
                purpose: "Autonomous multi-merchant purchasing",
                description: "Assembles multi-merchant baskets with protocol-level facilitator attribution and generates an Agent Payments Protocol (AP2) cryptographic spend mandate."
              },
              {
                name: "create_checkout_permalink",
                purpose: "Fallback web checkout with affiliate attribution",
                description: "Generates browser-ready purchase links across Amazon, Newegg, and Best Buy with stock verification and affiliate attribution."
              },
              {
                name: "submit_agent_review",
                purpose: "Alpha Agent Performance Feedback & Missing Parts Reporter",
                description: "Allows calling AI agents to rate tool accuracy (1-5), provide qualitative feedback on compatibility checks, and report missing catalog parts."
              }
            ],
            quickstart: {
              claude_desktop_config: {
                mcpServers: {
                  spectrust: {
                    url: `${hostUrl}/mcp`
                  }
                }
              },
              cursor_config: {
                url: `${hostUrl}/mcp`,
                type: "sse"
              }
            },
            links: {
              repository: "https://github.com/anon160/spectrust-mcp",
              documentation: "https://github.com/anon160/spectrust-mcp#readme",
              ucp_manifest: `${hostUrl}/.well-known/ucp`,
              mcp_manifest: `${hostUrl}/.well-known/mcp.json`
            }
          },
          null,
          2
        ),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }

    // UCP Standard Discovery Manifest (RFC-compliant profile)
    if (url.pathname === "/.well-known/ucp") {
      const hostUrl = `${url.protocol}//${url.host}`;
      const profile = getUcpDiscoveryProfile(hostUrl);
      return new Response(JSON.stringify(profile, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600"
        }
      });
    }

    // Standard MCP 1.0 Discovery Manifest (for AI Crawlers and Agents)
    if (url.pathname === "/.well-known/mcp.json" || url.pathname === "/.well-known/mcp") {
      const hostUrl = `${url.protocol}//${url.host}`;
      const mcpManifest = {
        $schema: "https://modelcontextprotocol.io/schemas/mcp-discovery.json",
        name: "SpecTrust",
        description: "Neutral hardware trust, parametric spec normalization, compatibility reasoning, and UCP commerce oracle for AI agents.",
        version: "0.2.0",
        endpoint: `${hostUrl}/mcp`,
        transports: ["streamable_http", "sse"],
        capabilities: {
          tools: true,
          prompts: false,
          resources: false
        },
        tools: [
          {
            name: "search_products",
            description: "Search verified PC hardware components filtered by category, price, text query, and trust score."
          },
          {
            name: "get_product_details",
            description: "Retrieve complete parametric specs, independent test notes, known issues, and live vendor offers."
          },
          {
            name: "check_compatibility",
            description: "Analyze component IDs for physical clearance, motherboard socket matching, and PSU headroom."
          },
          {
            name: "compare_specs",
            description: "Side-by-side spec and trust metric comparison between 2 to 5 products."
          },
          {
            name: "validate_ucp_cart",
            description: "Pre-flight validate a Universal Commerce Protocol (UCP) cart for hardware compatibility and trust scores before payment."
          },
          {
            name: "create_ucp_checkout_session",
            description: "Initiate an autonomous multi-merchant UCP checkout session with an AP2 payment mandate."
          },
          {
            name: "create_checkout_permalink",
            description: "Generate a browser-ready purchase link with verified stock and affiliate attribution."
          },
          {
            name: "submit_agent_review",
            description: "Submit performance feedback, rate compatibility accuracy, or report missing catalog hardware back to SpecTrust during this Alpha phase."
          }
        ],
        repository: "https://github.com/anon160/spectrust-mcp",
        documentation: "https://github.com/anon160/spectrust-mcp#readme"
      };

      return new Response(JSON.stringify(mcpManifest, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600"
        }
      });
    }

    // Robots.txt: Welcomes AI crawlers (GPTBot, ClaudeBot, PerplexityBot) and points to sitemap
    if (url.pathname === "/robots.txt") {
      const hostUrl = `${url.protocol}//${url.host}`;
      const robots = [
        "User-agent: *",
        "Allow: /",
        `Sitemap: ${hostUrl}/sitemap.xml`
      ].join("\n");

      return new Response(robots, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=86400"
        }
      });
    }

    // Sitemap.xml: Machine-readable URL catalog for AI crawlers
    if (url.pathname === "/sitemap.xml") {
      const hostUrl = `${url.protocol}//${url.host}`;
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${hostUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${hostUrl}/.well-known/mcp.json</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${hostUrl}/.well-known/ucp</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${hostUrl}/mcp</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

      return new Response(sitemap, {
        status: 200,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=86400"
        }
      });
    }

    // REST API: Agent & Developer Reviews / Feedback (Alpha Phase)
    if (url.pathname === "/api/reviews") {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: "Missing database binding 'DB'." }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }

      const adapter = new D1Adapter(env.DB);
      const repository = new ProductRepository(adapter);

      if (request.method === "POST") {
        try {
          const body = (await request.json()) as any;
          const rating = Number(body.rating);
          const feedback = String(body.feedback || "").trim();
          const agentName = String(body.agent_model || body.agent_name || "external-agent").trim();
          const missingParts = body.missing_parts ? String(body.missing_parts).trim() : undefined;

          if (!rating || rating < 1 || rating > 5) {
            return new Response(JSON.stringify({ error: "Rating must be an integer between 1 and 5." }), {
              status: 400,
              headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
            });
          }

          if (!feedback) {
            return new Response(JSON.stringify({ error: "Feedback string is required." }), {
              status: 400,
              headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
            });
          }

          const result = await repository.saveAgentReview({
            agent_name: agentName,
            rating,
            feedback,
            missing_parts: missingParts,
            metadata: body.metadata || undefined
          });

          return new Response(
            JSON.stringify(
              {
                status: "success",
                review_id: result.id,
                phase: "Alpha Phase",
                message: "Thank you! Your feedback helps train and improve the SpecTrust catalog during our Alpha phase.",
                recorded: {
                  agent: agentName,
                  rating,
                  missing_parts: missingParts || null
                }
              },
              null,
              2
            ),
            {
              status: 201,
              headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
            }
          );
        } catch (err: any) {
          return new Response(JSON.stringify({ error: `Invalid JSON body: ${err.message}` }), {
            status: 400,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
          });
        }
      }

      if (request.method === "GET") {
        const limitParam = url.searchParams.get("limit");
        const limit = limitParam ? Math.min(50, Math.max(1, parseInt(limitParam, 10))) : 10;
        const reviews = await repository.getAgentReviews(limit);

        return new Response(
          JSON.stringify(
            {
              phase: "Alpha Phase",
              count: reviews.length,
              reviews
            },
            null,
            2
          ),
          {
            status: 200,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
          }
        );
      }

      return new Response(JSON.stringify({ error: "Method Not Allowed. Use GET or POST." }), {
        status: 405,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    // Handle MCP Streamable HTTP & SSE connections
    if (url.pathname === "/mcp" || url.pathname === "/sse" || url.pathname === "/messages") {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: "Missing D1 database binding 'DB'." }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }

      const affiliateTags = {
        amazon: env.AFFILIATE_TAG_AMAZON || "spectrust-20",
        newegg: env.AFFILIATE_TAG_NEWEGG || "spectrust",
        bestbuy: env.AFFILIATE_TAG_BESTBUY || "spectrust"
      };

      const adapter = new D1Adapter(env.DB);
      const repository = new ProductRepository(adapter);
      const server = createHardwareMcpServer(repository, affiliateTags);

      const transport = new WebStandardStreamableHTTPServerTransport({
        sessionIdGenerator: undefined, // Stateless edge mode
        enableJsonResponse: true
      });

      await server.connect(transport);
      const response = await transport.handleRequest(request);

      // Ensure CORS headers are attached
      const headers = new Headers(response.headers);
      headers.set("Access-Control-Allow-Origin", "*");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
      });
    }

    return new Response(JSON.stringify({ error: "Not Found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
};
