import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/samstick' : undefined,
  assetPrefix: isProd ? '/samstick' : undefined,
};

export default nextConfig;