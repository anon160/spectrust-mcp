#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createHardwareMcpServer } from "./server.js";
import { SqliteAdapter } from "./db/sqlite-adapter.js";
import { ProductRepository } from "./db/repository.js";
import { CATALOG } from "./data/catalog.js";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, "../data/pctrust.db");

async function main() {
  const adapter = new SqliteAdapter(DB_PATH);
  const repository = new ProductRepository(adapter);

  // Auto-migrate schema and seed if empty
  await repository.init();
  await repository.seedIfEmpty(CATALOG);

  const server = createHardwareMcpServer(repository);
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`PC Trust MCP Server running on stdio (SQLite DB: ${DB_PATH})`);
}

main().catch((err) => {
  console.error("Fatal error in PC Trust MCP Server:", err);
  process.exit(1);
});
