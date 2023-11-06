/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
     
    },
    env: {
      DB_URI: "mongodb://localhost:27017/qrcrud",
      NEXTAUTH_SECRET: "hshsjshjahaj",
    },
  };
  
  module.exports = nextConfig;
  