import type { NextConfig } from "next";

import withBundleAnalyzer from "@next/bundle-analyzer";
import { withNextVideo } from "next-video/process";

const nextConfig: NextConfig = {
  images: {
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
        destination: "/services/seo-services",
        permanent: true,
        source: "/services/performance-marketing/seo-services",
      },
      {
        destination: "/services/paid-advertising",
        permanent: true,
        source: "/services/performance-marketing/paid-advertising",
      },
      {
        destination: "/services/linkedin-ads",
        permanent: true,
        source: "/services/performance-marketing/linkedin-ads",
      },
      {
        destination: "/services/linkedin-ads",
        permanent: true,
        source: "/services/performance-marketing/linkedin-ads-b2b",
      },
      {
        destination: "/services/data-augmentation",
        permanent: true,
        source: "/services/market-research/data-augmentation",
      },
      {
        destination: "/services/data-validation",
        permanent: true,
        source: "/services/market-research/data-validation",
      },
      {
        destination: "/services/market-intelligence",
        permanent: true,
        source: "/services/market-research/human-powered-market-intelligence",
      },
      { destination: "/about", permanent: true, source: "/about-us" },
      { destination: "/contact", permanent: true, source: "/contact-us" },
      { destination: "/blogs", permanent: true, source: "/blog" },
      { destination: "/blogs", permanent: true, source: "/insights" },
      {
        destination: "/services/global-event-solutions/modular-portable-booths",
        permanent: true,
        source: "/services/booth-design-production/modular-portable-booths",
      },
    ];
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default analyzer(withNextVideo(nextConfig));
