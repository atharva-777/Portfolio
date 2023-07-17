const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {

  //   return [

  //     {

  //       // matching all API routes

  //       source: "/",

  //       headers: [

  //         { key: "Access-Control-Allow-Credentials", value: "true" },

  //         { key: "Access-Control-Allow-Origin", value: "*" },

  //         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },

  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },

  //       ]

  //     }

  //   ]

  // },
  // async rewrites () {
  //   return [
  //     {
  //       source: "/",
  //       destination:
  //         "https://k8of7rz5.apicdn.sanity.io/",
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [{ hostname: "picsum.photos" }],
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};

module.exports = nextConfig
