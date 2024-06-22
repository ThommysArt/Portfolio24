/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.icons8.com"
        },
      ]
    },
  };

export default nextConfig;
