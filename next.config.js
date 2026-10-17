/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.frittenherz.de',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
    ],
    /* Allow unoptimized images so static assets in /public work on Vercel
       without needing the Image Optimization API for every image */
    unoptimized: true,
  },
  /* Ensure trailing slashes for clean URLs on Vercel */
  trailingSlash: false,
};

module.exports = nextConfig;
