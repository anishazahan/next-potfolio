const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "cdn.pixabay.com", "i.pcmag.com"],
  },
  devIndicators: {
    buildActivity: false,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/pdf/", // Change this to your desired output path
            publicPath: "/_next/static/pdf/", // Change this to match the outputPath
            esModule: false, // This is important to prevent issues with Next.js
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
