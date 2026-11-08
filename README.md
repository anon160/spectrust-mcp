# ⚡ SpecTrust: The Hardware Trust & Compatibility Layer for AI Agents

> A neutral, multi-vendor, parametric spec-normalized hardware catalog and compatibility reasoning engine built for the Model Context Protocol (MCP).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![MCP](https://img.shields.io/badge/MCP-Compatible-green.svg)](https://modelcontextprotocol.io)

---

## 💡 Why SpecTrust Exists

Vendor-specific MCP endpoints (Shopify, Salesforce, Amazon) are closed silos:
* No single vendor will tell an AI agent to buy from a competitor.
* No single vendor exposes honest defect, return rate, or VRM throttling data.
* AI agents fail when reading unstructured, JavaScript-heavy retail product pages.

**SpecTrust** provides:
1. **Normalized Parametric Specs:** Dimensions in mm, TDP in watts, socket types, and PCIe lanes without marketing fluff.
2. **Fraud-Weighted Trust Scores (1–100):** Spec accuracy, RMA reliability, and fake review resistance based on independent lab bench testing.
3. **Deterministic Compatibility Checking:** Hardware-level validation (socket match, GPU length vs. case clearance, cooler height, PSU wattage headroom).
4. **Multi-Merchant Checkout Permalinks:** Real-time stock status and direct pre-configured purchase links across Amazon, Newegg, and Best Buy with transparent affiliate attribution.

---

## 🛠️ Tools Exposed to AI Agents

| Tool | Description |
| :--- | :--- |
| `search_products` | Search verified components filtered by category, price, text query, and minimum trust score (1–100). |
| `get_product_details` | Retrieve complete parametric specs, independent lab notes, known issues, and live vendor offers. |
| `check_compatibility` | Analyze a list of component IDs for physical clearance, socket fit, cooler clearance, and PSU headroom. |
| `compare_specs` | Side-by-side spec and trust metric comparison between 2 to 5 products. |
| `create_checkout_permalink` | Generate an instant checkout permalink with stock verification and affiliate attribution. |

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
