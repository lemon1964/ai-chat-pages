// next.config.ts
import type { NextConfig } from 'next';

const isProd = process.env.NEXT_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: 'localhost' }]
  },
  reactStrictMode: false,
  basePath: isProd ? '/ai-chat-pages' : '',
  assetPrefix: isProd ? '/ai-chat-pages/' : '',
};

export default nextConfig;