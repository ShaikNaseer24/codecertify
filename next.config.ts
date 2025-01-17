import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = {
  eslint:{
    ignoreDuringBuilds: true
  }
}

export default nextConfig;
