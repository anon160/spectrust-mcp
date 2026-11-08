# ⚡ PC Trust MCP: Independent Hardware Trust Layer for AI Agents

> A neutral, multi-vendor, parametric spec-normalized hardware catalog and compatibility reasoning engine built for the Model Context Protocol (MCP).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![MCP](https://img.shields.io/badge/MCP-Compatible-green.svg)](https://modelcontextprotocol.io)

---

## 💡 Why This Exists

Vendor-specific MCP endpoints (Shopify, Salesforce, Amazon) are closed silos:
* No single vendor will tell an AI agent to buy from a competitor.
* No single vendor exposes honest defect, return rate, or VRM throttling data.
* AI agents fail when reading unstructured, JavaScript-heavy retail product pages.

**PC Trust MCP** provides:
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

### 1. Build from Source
```bash
git clone https://github.com/your-org/pc-trust-mcp.git
cd pc-trust-mcp
npm install
npm run build
```

### 2. Add to Claude Desktop Configuration
Add the server to your `claude_desktop_config.json`:

* **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
* **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
* **Linux:** `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "pc-trust": {
      "command": "node",
      "args": ["/absolute/path/to/pc-trust-mcp/dist/cli.js"]
    }
  }
}
```

---

## ☁️ Zero-Cost Deployment to Cloudflare Workers

This project natively implements the **Web Standards Streamable HTTP / SSE transport**, allowing you to deploy it to Cloudflare Workers for **$0.00/month** (100,000 free requests/day with **0ms cold start**).

### 1. Authenticate with Cloudflare
```bash
npx wrangler login
```

### 2. Deploy to Edge
```bash
npm run deploy
```

Your MCP server will be immediately live globally at:
```
https://pc-trust-mcp.<your-subdomain>.workers.dev/mcp
```

### 3. Connect Remote Agents / Claude Desktop
```json
{
  "mcpServers": {
    "pc-trust-cloud": {
      "url": "https://pc-trust-mcp.<your-subdomain>.workers.dev/mcp"
    }
  }
}
```

---

## 🧪 Testing

Run the test suite covering parametric filters, compatibility engine logic, and affiliate permalinks:
```bash
npm test
```

---

## 📄 License
MIT
