import type { NextConfig } from "next";

import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      headers: [
        {
          key: "Content-Security-Policy",
          value:
            "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https: wss:; media-src 'self' https: data:; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
        },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
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
  reactCompiler: true,
  redirects: async () => {
    return [
      {
        destination: "/services/hpmi/human-powered-market-intelligence",
        permanent: true,
        source: "/services/hpmi",
      },
      {
        destination: "/tradeshow-calendar",
        permanent: true,
        source: "/events",
      },
    ];
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default analyzer(nextConfig);
