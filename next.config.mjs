/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  experimental: {
    trailingSlash: false, // or true, depending on your preference
  },
};

export default nextConfig;
