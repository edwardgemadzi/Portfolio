import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/skills', destination: '/about#skills', permanent: true },
      { source: '/services', destination: '/#how-i-work', permanent: true },
    ];
  },
};

export default nextConfig;
