import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... outras configs
  distDir: ".next", // <--- Garanta que é PONTO e não VÍRGULA
};

export default nextConfig;