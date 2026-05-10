/**
 * Global TypeScript type augmentations.
 * Tambahkan custom types di sini — JANGAN di cloudflare-env.d.ts (auto-generated).
 */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    NEXT_PUBLIC_APP_URL: string;
    // Cloudflare credentials
    CLOUDFLARE_ACCOUNT_ID?: string;
    CLOUDFLARE_D1_DATABASE_ID?: string;
    CLOUDFLARE_API_TOKEN?: string;
  }
}

// Global Cloudflare bindings augmentation
interface CloudflareEnv {
  DB: D1Database;
  KV_CACHE: KVNamespace;
  R2_BUCKET: R2Bucket;
  // Tambahkan bindings lainnya jika perlu
}
