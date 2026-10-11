/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
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
