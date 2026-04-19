/** `next.config.ts` ile aynı kural: prod’da `/<repo>`, Actions’ta env’den. */
const repoSlug = process.env.GITHUB_REPOSITORY?.split("/")[1];
const ghProdBase = repoSlug ? `/${repoSlug}` : "/nilsumat";

export const basePath =
  process.env.NODE_ENV === "production" ? ghProdBase : "";
