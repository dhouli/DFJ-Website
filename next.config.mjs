/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "danceforjoynj.com",
      },
    ],
  },
};

export default nextConfig;
