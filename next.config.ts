/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos"], // Configure allowed domains
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
};

module.exports = nextConfig;
