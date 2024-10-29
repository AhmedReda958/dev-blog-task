import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media2.dev.to", "dev-to-uploads.s3.amazonaws.com"],
  },
};

export default nextConfig;
