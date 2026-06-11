import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Allow the dev server to be reached from other devices on the LAN
  // (phones, the Synology IP, etc.) instead of only localhost.
  // Next.js needs explicit hosts here, not CIDR ranges. Add your machine's
  // LAN IP(s); update this list if your IP changes.
  allowedDevOrigins: [
    "192.168.10.20",
    "192.168.229.1",
    "192.168.31.1",
  ],
};

export default nextConfig;
