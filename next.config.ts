import type { NextConfig } from "next";
import path from "path";

/** GitHub Pages lives under /nilsumat; local dev is easier at /. */
const isProd = process.env.NODE_ENV === "production";
const ghPagesBase = "/nilsumat";

const nextConfig: NextConfig = {
  /**
   * Birden fazla package-lock.json olduğu için Next.js çalışma dizinini
   * yanlış tahmin ediyordu. Bu ayarlar, kök dizini net bir şekilde
   * bu projenin bulunduğu klasör olarak işaretler ve uyarıyı kaldırır.
   */
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
  },
  // GitHub Pages için static export
  output: "export",
  // Repo adına göre basePath (yalnızca production build; dev’de kök /)
  basePath: isProd ? ghPagesBase : "",
  assetPrefix: isProd ? ghPagesBase : "",
  // Trailing slash için
  trailingSlash: true,
  // Görsel optimizasyonu devre dışı (static export için gerekli)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
