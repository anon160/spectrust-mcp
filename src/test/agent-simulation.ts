import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function runAgentSimulation() {
  console.log("🤖 Starting AI Agent MCP Session...\n");

  const transport = new StdioClientTransport({
    command: "node",
    args: ["dist/cli.js"]
  });

  const client = new Client(
    {
      name: "antigravity-test-agent",
      version: "1.0.0"
    },
    {
      capabilities: {}
    }
  );

  await client.connect(transport);
  console.log("✅ Connected to PC Trust MCP Server via stdio!\n");

  // Step 1: Discover Tools
  console.log("--- 1. Agent Discovers Tools ---");
  const toolsResponse = await client.listTools();
  console.log(`Discovered ${toolsResponse.tools.length} tools:`);
  for (const t of toolsResponse.tools) {
    console.log(` • ${t.name}: ${(t.description || '').slice(0, 70)}...`);
  }
  console.log("\n");

  // Step 2: Agent searches for high-trust Mini-ITX cases
  console.log("--- 2. Agent Searches: 'search_products' (case: 'Terra') ---");
  const searchResult = await client.callTool({
    name: "search_products",
    arguments: {
      category: "case",
      query: "Terra",
      min_trust_score: 90
    }
  });
  console.log("Agent received search results:");
  console.log(JSON.stringify(JSON.parse((searchResult.content as any)[0].text), null, 2));
  console.log("\n");

  // Step 3: Agent tests an incompatible build intentional stress test
  console.log("--- 3. Agent Compatibility Check: Incompatible Build Test ---");
  console.log("Attempting build: Fractal Terra (ITX) + MSI B650 Tomahawk (ATX) + Corsair RM850x (ATX PSU)...");
  const incompatibleCheck = await client.callTool({
    name: "check_compatibility",
    arguments: {
      product_ids: [
        "case-fractal-terra",
        "mobo-msi-b650-tomahawk", // Incompatible ATX board in ITX case!
        "psu-corsair-rm850x",      // Incompatible ATX PSU in SFX-only case!
        "cpu-amd-7800x3d"
      ]
    }
  });
  const incompReport = JSON.parse((incompatibleCheck.content as any)[0].text);
  console.log(`Compatibility result: ${incompReport.is_compatible ? "PASSED" : "FAILED (Expected)"}`);
  console.log("Issues detected by MCP server:");
  for (const issue of incompReport.issues) {
    console.log(` [${issue.severity}] ${issue.message}`);
    console.log(`  👉 Remedy: ${issue.remedy}`);
  }
  console.log("\n");

  // Step 4: Agent corrects the build to verified Mini-ITX components
  console.log("--- 4. Agent Compatibility Check: Validated SFF Mini-ITX Build ---");
  console.log("Testing corrected parts: Fractal Terra + Gigabyte B650I + Corsair SF750 + Noctua NH-L9a + Sapphire Pulse 7800XT...");
  const validCheck = await client.callTool({
    name: "check_compatibility",
    arguments: {
      product_ids: [
        "case-fractal-terra",
        "mobo-gigabyte-b650i-aorus",
        "psu-corsair-sf750-2024",
        "cooler-noctua-nh-l9a",
        "gpu-sapphire-pulse-7800xt",
        "cpu-amd-7600x",
        "ram-gskill-flare-x5-32gb",
        "ssd-samsung-990-pro-2tb"
      ]
    }
  });
  const validReport = JSON.parse((validCheck.content as any)[0].text);
  console.log(`Compatibility result: ${validReport.is_compatible ? "✅ 100% COMPATIBLE" : "❌ FAILED"}`);
  console.log(`Total System TDP: ${validReport.total_estimated_tdp_watts}W`);
  console.log(`Recommended PSU: ${validReport.recommended_psu_wattage}W (Selected PSU has 750W capacity)`);
  console.log(`Warnings/Notes: ${validReport.issues.length}`);
  for (const issue of validReport.issues) {
    console.log(` [${issue.severity}] ${issue.message}`);
  }
  console.log("\n");

  // Step 5: Agent generates checkout permalink for the GPU
  console.log("--- 5. Agent Generates Checkout Permalink ---");
  const checkoutResult = await client.callTool({
    name: "create_checkout_permalink",
    arguments: {
      product_id: "gpu-sapphire-pulse-7800xt",
      quantity: 1,
      preferred_merchant: "amazon"
    }
  });
  console.log("Checkout link generated for user:");
  console.log(JSON.stringify(JSON.parse((checkoutResult.content as any)[0].text), null, 2));

  await client.close();
  console.log("\n🎉 Simulation finished successfully!");
}

runAgentSimulation().catch((err) => {
  console.error("Simulation failed:", err);
  process.exit(1);
});
