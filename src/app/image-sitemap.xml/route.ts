import { NextResponse } from "next/server";

import { SHARED_BLOG_POSTS } from "@/content/blogs";
import { CASE_STUDY_DETAILS } from "@/content/case-studies";
import { TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";
import { siteUrl } from "@/lib/json-ld";

export const dynamic = "force-static";

const escapeXml = (str: string) =>
  str.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const absImage = (path: string) => (path.startsWith("http") ? path : `${siteUrl}${path}`);

const imageEntry = (loc: string, image: string, title: string, caption: string) =>
  `  <url>
    <loc>${loc}</loc>
    <image:image>
      <image:loc>${escapeXml(absImage(image))}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
      <image:caption>${escapeXml(caption)}</image:caption>
    </image:image>
  </url>`;

export const GET = () => {
  const blogEntries = SHARED_BLOG_POSTS.filter((p) => p.body && p.image).map((post) =>
    imageEntry(`${siteUrl}/blogs/${post.id}`, post.image, post.title, post.excerpt ?? post.title)
  );

  const caseStudyEntries = CASE_STUDY_DETAILS.filter((s) => s.image).map((study) =>
    imageEntry(
      `${siteUrl}/case-studies/${study.slug}`,
      study.image,
      study.title,
      study.outcome.split(".", 1)[0]
    )
  );

  const eventEntries = TRADE_SHOW_CALENDAR_EVENTS.filter((e) => e.image).map((event) =>
    imageEntry(`${siteUrl}/tradeshow-calendar/${event.id}`, event.image!, event.name, event.summary)
  );

  const urlElements = [...blogEntries, ...caseStudyEntries, ...eventEntries].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlElements}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
