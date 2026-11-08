#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createHardwareMcpServer } from "./server.js";

async function main() {
  const server = createHardwareMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("PC Trust MCP Server running on stdio");
}

main().catch((err) => {
  console.error("Fatal error in PC Trust MCP Server:", err);
  process.exit(1);
});
