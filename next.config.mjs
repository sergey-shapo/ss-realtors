/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "corp-promotores.es",
      },
    ],
  },
};

export default nextConfig;
