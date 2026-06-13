import type { NextConfig } from "next";

import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
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
  redirects: async () => {
    return [
      {
        destination: "/services/performance-marketing",
        permanent: true,
        source: "/services/performance-marketing/paid-advertising",
      },
      {
        destination: "/services/performance-marketing",
        permanent: true,
        source: "/services/performance-marketing/linkedin-ads",
      },
      {
        destination: "/services/performance-marketing",
        permanent: true,
        source: "/services/performance-marketing/linkedin-ads-b2b",
      },
      { destination: "/about", permanent: true, source: "/about-us" },
      { destination: "/contact", permanent: true, source: "/contact-us" },
      { destination: "/blogs", permanent: true, source: "/blog" },
      { destination: "/blogs", permanent: true, source: "/insights" },
      {
        destination: "/services/global-event-solutions/modular-booth-solutions",
        permanent: true,
        source: "/services/booth-design-production/modular-portable-booths",
      },
      {
        destination: "/services/media-production/event-live-streaming-services",
        permanent: true,
        source: "/services/media-production/live-streaming-services",
      },
    ];
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default analyzer(nextConfig);
