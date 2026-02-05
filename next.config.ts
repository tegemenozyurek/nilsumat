import type { NextConfig } from "next";
import path from "path";

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
  // Repo adına göre basePath ayarı
  basePath: "/nilsumat",
  // Asset prefix ayarı
  assetPrefix: "/nilsumat",
  // Trailing slash için
  trailingSlash: true,
  // Görsel optimizasyonu devre dışı (static export için gerekli)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
