export interface DbAdapter {
  query<T = any>(sql: string, params?: unknown[]): Promise<T[]>;
  execute(sql: string, params?: unknown[]): Promise<void>;
  batch(statements: { sql: string; params?: unknown[] }[]): Promise<void>;
  close?(): Promise<void> | void;
}
