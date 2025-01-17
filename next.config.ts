import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains:['picsum.photos']
  }

};

export default nextConfig;
const eslintConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export { eslintConfig };