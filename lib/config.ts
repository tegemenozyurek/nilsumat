/** Must match `next.config.ts`: GitHub Pages uses /nilsumat; local dev uses /. */
export const basePath =
  process.env.NODE_ENV === "production" ? "/nilsumat" : "";
