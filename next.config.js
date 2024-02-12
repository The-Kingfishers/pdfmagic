/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    webpack: (config) => {
      // Add the following rule to handle .node files
      config.module.rules.push({
        test: /\.node$/,
        loader: 'node-loader',
      });
  
      // Disable canvas alias
      config.resolve.alias.canvas = false;
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  