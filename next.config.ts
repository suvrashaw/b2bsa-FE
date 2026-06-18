import type { NextConfig } from "next";

import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/hpmi",
        destination: "/services/hpmi/human-powered-market-intelligence",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/tradeshow-calendar",
        permanent: true,
      },
    ];
  },
  headers: async () => [
    {
      headers: [
        {
          key: "Content-Security-Policy",
          value:
            "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https: wss:; media-src 'self' https:; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
        },
      ],
      source: "/(.*)",
    },
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        hostname: "b2bsalesarrow.com",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "www.b2bsalesarrow.com",
        protocol: "https",
      },
    ],
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default analyzer(nextConfig);
