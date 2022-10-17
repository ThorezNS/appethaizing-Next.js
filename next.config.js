/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['spoonacular.com'],
  },
  swcMinify: true,
};

module.exports = nextConfig;
