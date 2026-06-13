import { SHARED_BLOG_POSTS } from "@/content/blogs/data";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import DATA from "./data.json";

export const BOOTH_BUILDER_PROOF_BAR = {
  heading: "Exhibition Stand Builder and Turnkey Solutions",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};

export const BOOTH_BUILDER_FUTURE_READY = DATA.builderFutureReady;

export const BOOTH_BUILDER_CASE_STUDIES = {
  description: "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_BUILDER_RELATED_SERVICES = DATA.builderRelatedServices;

export const BOOTH_BUILDER_BLOGS_SECTION = DATA.builderBlogsSection;

const BOOTH_BUILDER_BLOG_IDS = [
  "hiring-trade-show-booth-design-company",
  "5-trade-show-booth-design-setup",
  "b2b-exhibit-booth-design-features",
  "booth-design-metrics",
  "mid-event-trade-show-engagement-ideas",
  "eco-booth-design-5-unexpected-materials-that-make-a-big-impact",
];

export const BOOTH_BUILDER_BLOG_POSTS = BOOTH_BUILDER_BLOG_IDS.flatMap((id) => {
  const post = SHARED_BLOG_POSTS.find((blogPost) => blogPost.id === id);
  return post ? [post] : [];
});

export const BOOTH_BUILDER_CONTACT_CTA = {
  ...DATA.builderContactCta,
  headingLines: ["Let's Build Your Next", "Exhibition Stand"] as [string, string],
};

export { default as BOOTH_BUILDER_FAQ } from "./faq.json";
export { default as BOOTH_BUILDER_HERO } from "./hero.json";
export { default as BOOTH_BUILDER_PAGE } from "./page.json";
export { default as BOOTH_BUILDER_PROCESS } from "./process.json";
