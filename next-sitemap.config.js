/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next-sitemap').IConfig} */

const BLOGS_JSON = require("./src/content/blogs/blogs.json");
const BLOGS_CONFIG = require("./src/content/blogs/config.json");
const EVENTS_JSON = require("./src/content/tradeshow-calendar/events.json").events || [];

const BLOG_HOST = BLOGS_CONFIG.BLOG_HOST || "https://b2bsalesarrow.com";

const getBlogSlug = (url, fallbackIndex) => {
  try {
    const pathname = new URL(url, BLOG_HOST).pathname;
    const slug = pathname
      .split("/")
      .findLast(Boolean)
      ?.replaceAll(/[^a-z0-9-]+/gi, "-")
      .replaceAll(/(^-|-$)/g, "")
      .toLowerCase();
    return slug || `blog-${fallbackIndex + 1}`;
  } catch {
    return `blog-${fallbackIndex + 1}`;
  }
};

const BLOG_LASTMOD = {};
for (const [index, post] of BLOGS_JSON.entries()) {
  if (!(post.date && post.url)) {
    continue;
  }

  const slug = getBlogSlug(post.url, index);
  BLOG_LASTMOD[`/blogs/${slug}`] = new Date(post.date).toISOString();
}

const EVENT_LASTMOD = {};
for (const event of EVENTS_JSON) {
  if (event.id && event.startDate) {
    EVENT_LASTMOD[`/tradeshow-calendar/${event.id}`] = new Date(event.startDate).toISOString();
  }
}

module.exports = {
  exclude: [
    "/icon.png",
    "/favicon.ico",
    "/apple-icon.png",
    "/manifest.webmanifest",
    "/demo",
    "/thank-you",
  ],
  generateIndexSitemap: false,
  // robots.txt and sitemap.xml are maintained as static files in public/ to
  // match an external spec verbatim. This config is no longer run as part
  // of `npm run build` (see package.json) — kept only for manual/local use.
  generateRobotsTxt: false,
  siteUrl: process.env.SITE_URL || "https://b2bsalesarrow.com",
  transform: async (config, path) => {
    let priority = config.priority || 0.7;
    let changefreq = config.changefreq || "daily";

    if (path === "/") {
      priority = 1;
      changefreq = "weekly";
    } else if (path.startsWith("/services") || path === "/tradeshow-calendar") {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/blogs") || path.startsWith("/case-studies")) {
      priority = 0.7;
      changefreq = "weekly";
    } else if (["/cookie-policy", "/privacy-policy", "/terms-and-conditions"].includes(path)) {
      priority = 0.3;
      changefreq = "yearly";
    } else if (["/about-us", "/contact-us"].includes(path)) {
      priority = 0.8;
      changefreq = "monthly";
    }

    const contentLastmod = BLOG_LASTMOD[path] ?? EVENT_LASTMOD[path];

    return {
      alternateRefs: config.alternateRefs ?? [],
      changefreq,
      lastmod: contentLastmod ?? (config.autoLastmod ? new Date().toISOString() : undefined),
      loc: path,
      priority,
    };
  },
};
