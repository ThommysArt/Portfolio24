/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
        {
          protocol: "https",
          hostname: "api.microlink.io"
        }
      ]
    },
  };

export default nextConfig;
