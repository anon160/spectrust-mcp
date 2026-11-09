# ⚡ SpecTrust: The Hardware Trust & Compatibility Layer for AI Agents

> A neutral, multi-vendor, parametric spec-normalized hardware catalog, compatibility reasoning engine, and Universal Commerce Protocol (UCP) oracle built for AI Agents and the Model Context Protocol (MCP).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![MCP](https://img.shields.io/badge/MCP-Compatible-green.svg)](https://modelcontextprotocol.io)
[![UCP](https://img.shields.io/badge/UCP-Compatible-orange.svg)](https://ucp.dev)
[![Status](https://img.shields.io/badge/Status-Alpha%20Phase-blueviolet.svg)](#-alpha-phase-notice)

> [!NOTE]
> ### 🧪 Alpha Phase Notice
> SpecTrust is currently in **Alpha (v0.2.0)**. The catalog actively covers core high-trust components and is expanding weekly. AI agents and developers can rate engine accuracy, submit operational feedback on SpecTrust itself, or report missing hardware directly via the `submit_spectrust_feedback` MCP tool or the `POST /api/feedback` REST endpoint.

---

## 💡 Why SpecTrust Exists

Vendor-specific endpoints (Shopify, Salesforce, Amazon) are closed silos:
* No single vendor will tell an AI agent to buy from a competitor.
* No single vendor exposes honest defect, return rate, or VRM throttling data.
* Generic commerce protocols (like UCP) handle carts and payments, but have zero domain knowledge of physical component clearance, socket matching, or electrical safety.

**SpecTrust** provides:
1. **Normalized Parametric Specs:** Dimensions in mm, TDP in watts, socket types, and PCIe lanes without marketing fluff.
2. **Fraud-Weighted Trust Scores (1–100):** Spec accuracy, RMA reliability, and fake review resistance based on independent lab bench testing.
3. **Deterministic Compatibility Checking:** Hardware-level validation (socket match, GPU length vs. case clearance, cooler height, PSU wattage headroom).
4. **Universal Commerce Protocol (UCP) Pre-Flight Oracle:** Validate any UCP cart or checkout session against physical hardware safety rules before payments are triggered.
5. **Dual-Mode Autonomous & Web Checkout:** Native multi-merchant UCP checkout sessions with AP2 (Agent Payments Protocol) cryptographic mandates, plus legacy browser affiliate permalinks.

---

## 🛠️ Tools Exposed to AI Agents

| Tool | Protocol | Description |
| :--- | :--- | :--- |
| `search_products` | MCP | Search verified components filtered by category, price, text query, and minimum trust score (1–100). |
| `get_product_details` | MCP | Retrieve complete parametric specs, independent lab notes, known issues, and live vendor offers. |
| `check_compatibility` | MCP | Analyze a list of component IDs for physical clearance, socket fit, cooler clearance, and PSU headroom. |
| `compare_specs` | MCP | Side-by-side spec and trust metric comparison between 2 to 5 products. |
| `validate_ucp_cart` | UCP / MCP | Pre-flight validate a Universal Commerce Protocol (UCP) cart for hardware compatibility and trust scores before payment. |
| `create_ucp_checkout_session` | UCP / AP2 | Initiate an autonomous, multi-merchant UCP checkout session with protocol-level facilitator attribution and an AP2 payment mandate. |
| `create_checkout_permalink` | MCP / Web | Generate a fallback browser checkout permalink with real-time stock check and affiliate attribution. |
| `submit_spectrust_feedback` | MCP / Telemetry | Submit operational feedback on SpecTrust itself: rate reasoning accuracy (1-5), report compatibility bugs, or request catalog additions. |

---

## 🌐 Universal Commerce Protocol (UCP) Discovery

SpecTrust serves a standard UCP 1.0 Discovery Profile at:
```http
GET /.well-known/ucp
```

This manifest enables consumer AI assistants (e.g., Gemini, Claude) and retail agents to automatically discover SpecTrust as a hardware validation oracle and checkout session facilitator.

---

## 🚀 Quickstart: Local Setup (Claude Desktop)

### Local Configuration via NPX / Node
Add SpecTrust to your `claude_desktop_config.json`:

* **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
* **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
* **Linux:** `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "spectrust": {
      "command": "node",
      "args": ["/home/anon/Code/mcp/dist/cli.js"]
    }
  }
}
```

---

## ☁️ Remote Cloudflare Workers Edge Connection

Agents and clients can connect to the hosted SpecTrust instance via **Streamable HTTP / SSE**:

```json
{
  "mcpServers": {
    "spectrust-cloud": {
      "url": "https://spectrust.<your-subdomain>.workers.dev/mcp"
    }
  }
}
```

---

## 🧪 Testing

```bash
npm run build
npm test         # Unit & database test suite
npm run simulate # End-to-end agent simulation
```

---

## 📄 License
MIT
