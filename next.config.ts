import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arsengabrielyan.github.io",
        pathname: "/scientific-crafts/**",
        port: ""
      }
    ]
  }
};

export default nextConfig;
