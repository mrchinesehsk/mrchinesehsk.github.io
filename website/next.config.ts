import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (user site, served at domain root)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: {
    // Required for a global 404 page with multiple root layouts (fa/en/zh)
    globalNotFound: true,
  },
};

export default nextConfig;
