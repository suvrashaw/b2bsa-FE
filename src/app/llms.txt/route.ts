import { NextResponse } from "next/server";

import { CASE_STUDY_DETAILS } from "@/content/case-studies";
import { HOME_PAGE } from "@/content/home/content";
import { TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";
import { siteUrl } from "@/lib/json-ld";
import { getLLMSContentLists } from "@/lib/llms";

export const dynamic = "force-static";

const abs = (path: string) => `${siteUrl}${path}`;

const pageTitle = (seoTitle: string) => seoTitle.split(" | ", 1)[0];

export const GET = () => {
  const { companyPages, publishedPosts, serviceDetails, serviceHubs } =
    getLLMSContentLists();

  const lines: string[] = [
    `# B2B Sales Arrow`,
    ``,
    `> ${HOME_PAGE.seo.description}`,
    ``,
    `## Service Categories`,
    ``,
    ...serviceHubs.map(
      (p) =>
        `- [${pageTitle(p.seo.title)}](${abs(p.seo.canonicalPath)}): ${p.seo.description}`,
    ),
    ``,
    `## Services`,
    ``,
    ...serviceDetails.map(
      (p) =>
        `- [${pageTitle(p.seo.title)}](${abs(p.seo.canonicalPath)}): ${p.seo.description}`,
    ),
    ``,
    `## Blog Posts`,
    ``,
    ...publishedPosts.map(
      (p) =>
        `- [${p.title}](${abs("/blogs/" + p.id)}): ${p.excerpt ?? p.title}`,
    ),
    ``,
    `## Case Studies`,
    ``,
    ...CASE_STUDY_DETAILS.map(
      (s) =>
        `- [${s.title}](${abs("/case-studies/" + s.slug)}): ${s.outcome.split(".", 1)[0]}.`,
    ),
    ``,
    `## Tradeshow Calendar`,
    ``,
    ...TRADE_SHOW_CALENDAR_EVENTS.map(
      (e) =>
        `- [${e.name}](${abs("/tradeshow-calendar/" + e.id)}): ${e.summary}`,
    ),
    ``,
    `## Company`,
    ``,
    ...companyPages.map(
      (p) =>
        `- [${p.pageName}](${abs(p.seo.canonicalPath)}): ${p.seo.description}`,
    ),
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
