/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "dummyimage.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
