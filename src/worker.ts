import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { createHardwareMcpServer } from "./server.js";

export interface Env {
  ENVIRONMENT?: string;
  AFFILIATE_TAG_AMAZON?: string;
  AFFILIATE_TAG_NEWEGG?: string;
  AFFILIATE_TAG_BESTBUY?: string;
  API_KEY?: string;
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

    // Root info endpoint
    if (url.pathname === "/" || url.pathname === "/health") {
      return new Response(
        JSON.stringify(
          {
            service: "PC Trust Layer MCP Server",
            version: "0.1.0",
            status: "ready",
            transport: "Streamable HTTP (Web Standards / SSE)",
            endpoints: {
              mcp: "/mcp",
              sse: "/sse"
            },
            tools_supported: [
              "search_products",
              "get_product_details",
              "check_compatibility",
              "compare_specs",
              "create_checkout_permalink"
            ],
            documentation: "Point Claude Desktop or your agent runtime to /mcp or /sse"
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

    // Handle MCP Streamable HTTP & SSE connections
    if (url.pathname === "/mcp" || url.pathname === "/sse" || url.pathname === "/messages") {
      const affiliateTags = {
        amazon: env.AFFILIATE_TAG_AMAZON || "pctrust01-20",
        newegg: env.AFFILIATE_TAG_NEWEGG || "pctrust_mcp",
        bestbuy: env.AFFILIATE_TAG_BESTBUY || "pctrust"
      };

      const server = createHardwareMcpServer(affiliateTags);

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
