import { DbAdapter } from "./adapter.js";

// Cloudflare D1 interface
export interface D1Database {
  prepare(query: string): {
    bind(...values: unknown[]): {
      all<T = unknown>(): Promise<{ results: T[]; success: boolean; error?: string }>;
      run(): Promise<{ success: boolean; error?: string }>;
    };
    all<T = unknown>(): Promise<{ results: T[]; success: boolean; error?: string }>;
    run(): Promise<{ success: boolean; error?: string }>;
  };
  batch<T = unknown>(statements: any[]): Promise<any[]>;
  exec(query: string): Promise<any>;
}

export class D1Adapter implements DbAdapter {
  constructor(private d1: D1Database) {}

  async query<T = any>(sql: string, params: unknown[] = []): Promise<T[]> {
    const stmt = params.length > 0 ? this.d1.prepare(sql).bind(...params) : this.d1.prepare(sql);
    const res = await stmt.all<T>();
    return res.results || [];
  }

  async execute(sql: string, params: unknown[] = []): Promise<void> {
    if (params.length === 0) {
      await this.d1.exec(sql);
    } else {
      const stmt = this.d1.prepare(sql).bind(...params);
      await stmt.run();
    }
  }

  async batch(statements: { sql: string; params?: unknown[] }[]): Promise<void> {
    const prepared = statements.map((s) => {
      return s.params && s.params.length > 0
        ? this.d1.prepare(s.sql).bind(...s.params)
        : this.d1.prepare(s.sql);
    });
    await this.d1.batch(prepared);
  }
}
