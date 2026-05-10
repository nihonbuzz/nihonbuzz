import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default defineCloudflareConfig({
	// Enable R2-based incremental cache for ISR/caching support
	// The R2 bucket binding "R2_BUCKET" must be configured in wrangler.jsonc
	// See https://opennext.js.org/cloudflare/caching for more details
	incrementalCache: r2IncrementalCache,
});
