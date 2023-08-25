/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "cdn.pixabay.com", "i.pcmag.com"],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
