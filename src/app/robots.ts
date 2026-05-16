import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    allow: "/",
    userAgent: "*",
  },
  sitemap: "https://b2bsalesarrow.com/sitemap.xml",
});

export default robots;
