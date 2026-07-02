import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      // Kamu bisa menambahkan domain lain di bawah sini nanti,
      // misalnya domain dari Google Maps API atau Supabase
    ],
  },
};

export default nextConfig;
