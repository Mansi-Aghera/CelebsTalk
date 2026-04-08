import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "celebstalks.pythonanywhere.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
