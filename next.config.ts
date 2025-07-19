// ai-chat-page/next.config.ts
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  reactStrictMode: false,
  basePath: isProd ? '/ai-chat-pages' : '',
  assetPrefix: isProd ? '/ai-chat-pages/' : '',
};

export default nextConfig;
// // ai-chat-page/next.config.ts
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: false,
// };

// export default nextConfig;
