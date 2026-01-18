import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {hostname:"upload.wikimedia.org"}
      // we nee to add this in this file because it is a exteranl image and we supose to add this coz of optimization
    ]
  }
  /* config options here */
};

export default nextConfig;
