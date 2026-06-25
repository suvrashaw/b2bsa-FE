import { NextResponse } from "next/server";

import { BLOG_PAGE } from "@/content/blogs";
import { CASE_STUDY_DETAILS } from "@/content/case-studies";
import { HOME_PAGE } from "@/content/home/content";
import { TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";
import { siteUrl } from "@/lib/json-ld";
import { getLLMSContentLists } from "@/lib/llms";

export const dynamic = "force-static";

type Block = {
  alt?: string;
  caption?: string;
  level?: number;
  src?: string;
  text?: string;
  type: "divider" | "heading" | "image" | "paragraph";
};

const renderBlocks = (blocks: Block[]): string =>
  blocks
    .map((block) => {
      if (block.type === "heading" && block.text)
        return `${"#".repeat((block.level ?? 2) + 1)} ${block.text}`;
      if (block.type === "paragraph" && block.text) return block.text;
      return "";
    })
    .filter(Boolean)
    .join("\n\n");

const abs = (path: string) => `${siteUrl}${path}`;
const pageTitle = (seoTitle: string) => seoTitle.split(" | ", 1)[0];

export const GET = () => {
  const { companyPages, publishedPosts, serviceDetails, serviceHubs } = getLLMSContentLists();

  const lines: string[] = [
    `# B2B Sales Arrow`,
    ``,
    `> ${HOME_PAGE.seo.description}`,
    ``,
    `Site: ${siteUrl}`,
    ``,
    `---`,
    ``,
    `## Service Categories`,
    ``,
    ...serviceHubs.flatMap((p) => [
      `### [${pageTitle(p.seo.title)}](${abs(p.seo.canonicalPath)})`,
      ``,
      p.seo.description,
      ``,
    ]),
    `## Services`,
    ``,
    ...serviceDetails.flatMap((p) => [
      `### [${pageTitle(p.seo.title)}](${abs(p.seo.canonicalPath)})`,
      ``,
      p.seo.description,
      ``,
    ]),
    `## Blog Posts`,
    ``,
    `> ${BLOG_PAGE.seo.description}`,
    ``,
    ...publishedPosts.flatMap((post) => [
      `### [${post.title}](${abs("/blogs/" + post.id)})`,
      ``,
      ...(post.date ? [`Published: ${post.date}`] : []),
      ...(post.category ? [`Category: ${post.category}`] : []),
      ...(post.tags?.length ? [`Tags: ${post.tags.join(", ")}`] : []),
      ``,
      ...(post.excerpt ? [post.excerpt, ``] : []),
      ...(post.body ? [renderBlocks(post.body as Block[]), ``] : []),
    ]),
    `## Case Studies`,
    ``,
    ...CASE_STUDY_DETAILS.flatMap((study) => [
      `### [${study.title}](${abs("/case-studies/" + study.slug)})`,
      ``,
      `Client: ${study.client}`,
      `Event: ${study.event}`,
      `Location: ${study.location}`,
      `Services: ${study.services.join(", ")}`,
      ``,
      `**Challenge:** ${study.challenges}`,
      ``,
      `**Solution:** ${study.solution}`,
      ``,
      `**Outcome:** ${study.outcome}`,
      ...(study.outcomeStats?.length ? [``, `Key results: ${study.outcomeStats.join(" | ")}`] : []),
      ``,
    ]),
    `## Tradeshow Calendar`,
    ``,
    ...TRADE_SHOW_CALENDAR_EVENTS.flatMap((e) => [
      `### [${e.name}](${abs("/tradeshow-calendar/" + e.id)})`,
      ``,
      e.summary,
      ``,
    ]),
    `## Company`,
    ``,
    ...companyPages.flatMap((p) => [
      `### [${p.pageName}](${abs(p.seo.canonicalPath)})`,
      ``,
      p.seo.description,
      ``,
    ]),
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
