import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { DbAdapter } from "./adapter.js";

export class SqliteAdapter implements DbAdapter {
  private db: DatabaseSync;

  constructor(location: string = ":memory:") {
    if (location !== ":memory:") {
      mkdirSync(dirname(location), { recursive: true });
    }
    this.db = new DatabaseSync(location);
    // Enable Write-Ahead Logging (WAL) and foreign keys for performance and integrity
    this.db.exec("PRAGMA journal_mode = WAL;");
    this.db.exec("PRAGMA foreign_keys = ON;");
  }

  async query<T = any>(sql: string, params: unknown[] = []): Promise<T[]> {
    const stmt = this.db.prepare(sql);
    return stmt.all(...(params as any[])) as T[];
  }

  async execute(sql: string, params: unknown[] = []): Promise<void> {
    if (params.length === 0) {
      this.db.exec(sql);
    } else {
      const stmt = this.db.prepare(sql);
      stmt.run(...(params as any[]));
    }
  }

  async batch(statements: { sql: string; params?: unknown[] }[]): Promise<void> {
    this.db.exec("BEGIN TRANSACTION;");
    try {
      for (const s of statements) {
        if (!s.params || s.params.length === 0) {
          this.db.exec(s.sql);
        } else {
          const stmt = this.db.prepare(s.sql);
          stmt.run(...(s.params as any[]));
        }
      }
      this.db.exec("COMMIT;");
    } catch (err) {
      this.db.exec("ROLLBACK;");
      throw err;
    }
  }

  close(): void {
    this.db.close();
  }
}
