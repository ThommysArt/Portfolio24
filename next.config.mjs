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
        {
          protocol: "https",
          hostname: "icons8.com"
        },
        {
          protocol: "https",
          hostname: "www.dropbox.com"
        },
        {
          protocol: "https",
          hostname: "drive.google.com"
        },
      ]
    },
  };

export default nextConfig;
