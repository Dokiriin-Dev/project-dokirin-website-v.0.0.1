/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    api: {
      externalResolver: true,
    },
  },
};

module.exports = nextConfig;
