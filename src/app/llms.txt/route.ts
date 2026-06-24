import { NextResponse } from "next/server";

import { SHARED_BLOG_POSTS } from "@/content/blogs";
import { CASE_STUDY_DETAILS } from "@/content/case-studies";
import { HOME_PAGE } from "@/content/home/content";
import { marketingPages } from "@/content/marketing-pages";
import { TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";
import { siteUrl } from "@/lib/json-ld";

export const dynamic = "force-static";

const abs = (path: string) => `${siteUrl}${path}`;

const pageTitle = (seoTitle: string) => seoTitle.split(" | ", 1)[0];

export const GET = () => {
  const serviceHubs = marketingPages.filter((p) => p.pageType === "serviceHub");
  const serviceDetails = marketingPages.filter((p) => p.pageType === "serviceDetail");
  const companyPages = marketingPages.filter(
    (p) => p.pageType === "company" || p.pageType === "contact"
  );
  const publishedPosts = SHARED_BLOG_POSTS.filter((p) => p.body);

  const lines: string[] = [
    `# B2B Sales Arrow`,
    ``,
    `> ${HOME_PAGE.seo.description}`,
    ``,
    `## Service Categories`,
    ``,
    ...serviceHubs.map(
      (p) => `- [${pageTitle(p.seo.title)}](${abs(p.seo.canonicalPath)}): ${p.seo.description}`
    ),
    ``,
    `## Services`,
    ``,
    ...serviceDetails.map(
      (p) => `- [${pageTitle(p.seo.title)}](${abs(p.seo.canonicalPath)}): ${p.seo.description}`
    ),
    ``,
    `## Blog Posts`,
    ``,
    ...publishedPosts.map(
      (p) => `- [${p.title}](${abs("/blogs/" + p.id)}): ${p.excerpt ?? p.title}`
    ),
    ``,
    `## Case Studies`,
    ``,
    ...CASE_STUDY_DETAILS.map(
      (s) => `- [${s.title}](${abs("/case-studies/" + s.slug)}): ${s.outcome.split(".", 1)[0]}.`
    ),
    ``,
    `## Tradeshow Calendar`,
    ``,
    ...TRADE_SHOW_CALENDAR_EVENTS.map(
      (e) => `- [${e.name}](${abs("/tradeshow-calendar/" + e.id)}): ${e.summary}`
    ),
    ``,
    `## Company`,
    ``,
    ...companyPages.map(
      (p) => `- [${p.pageName}](${abs(p.seo.canonicalPath)}): ${p.seo.description}`
    ),
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
