import "server-only";

import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Wrapper getCloudflareContext untuk digunakan di server code.
 * Selalu gunakan ini daripada import getCloudflareContext langsung.
 */
export async function getCFContext() {
  return getCloudflareContext({ async: true });
}

export async function getCFEnv() {
  const { env } = await getCFContext();
  return env;
}
