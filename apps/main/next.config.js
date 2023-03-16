/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  images: {
    domains: ["images.unsplash.com", "tailwindui.com"],
  },
};
