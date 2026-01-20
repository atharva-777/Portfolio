const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "cdn.sanity.io" },
    ],
  },
  staticPageGenerationTimeout: 100,
};

module.exports = nextConfig
