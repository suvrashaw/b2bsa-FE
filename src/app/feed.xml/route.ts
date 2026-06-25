import { NextResponse } from "next/server";

import { BLOG_PAGE, SHARED_BLOG_POSTS } from "@/content/blogs";
import { siteUrl } from "@/lib/json-ld";

export const dynamic = "force-static";

const escapeXml = (str: string) =>
  str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const toRfc2822 = (dateStr: string) => new Date(dateStr).toUTCString();

export const GET = () => {
  const publishedPosts = SHARED_BLOG_POSTS.filter((p) => p.body).slice(0, 20);

  const items = publishedPosts
    .map(
      (post) => `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${siteUrl}/blogs/${post.id}</link>
    <guid isPermaLink="true">${siteUrl}/blogs/${post.id}</guid>
    <description>${escapeXml(post.excerpt ?? post.title)}</description>
    ${post.date ? `<pubDate>${toRfc2822(post.date)}</pubDate>` : ""}
    ${post.category ? `<category>${escapeXml(post.category)}</category>` : ""}
  </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(BLOG_PAGE.seo.title.split(" | ", 1)[0])}</title>
    <link>${siteUrl}/blogs</link>
    <description>${escapeXml(BLOG_PAGE.seo.description)}</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/media/logo/logo-512.png</url>
      <title>${escapeXml(BLOG_PAGE.seo.title.split(" | ", 1)[0])}</title>
      <link>${siteUrl}/blogs</link>
    </image>${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
