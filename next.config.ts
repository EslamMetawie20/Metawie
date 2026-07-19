import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for Cloudflare Pages (build output: `out/`)
  output: "export",
  images: {
    // next/image optimization requires a server; serve images as-is
    unoptimized: true,
  },
};

export default nextConfig;
