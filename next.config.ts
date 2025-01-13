import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'localhost',
      '192.168.0.219',
      'ec2-3-66-164-148.eu-central-1.compute.amazonaws.com',
      'strapi-aws-s3-images-build-stack.s3.eu-central-1.amazonaws.com'
    ],
  },
};

export default nextConfig;
