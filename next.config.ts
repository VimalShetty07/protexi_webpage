import type { NextConfig } from "next";
import path from "path";

const projectRoot = path.resolve(process.env.INIT_CWD ?? process.cwd());

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
