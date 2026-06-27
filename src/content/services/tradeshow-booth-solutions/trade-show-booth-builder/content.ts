import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

import CONTACT_DATA from "./contact.json";
import BOOTHBUILDERCASESTUDIESDATA from "./case-studies.json";
import BOOTHBUILDERPROOFBARDATA from "./proof-bar.json";

export const BOOTH_BUILDER_PROOF_BAR = {
  ...BOOTHBUILDERPROOFBARDATA,
  stats: GLOBAL_PROOF_STATS,
};

export const BOOTH_BUILDER_CASE_STUDIES = {
  ...BOOTHBUILDERCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

import { getBlogsByTags } from "@/content/blogs";

export const BOOTH_BUILDER_BLOG_POSTS = getBlogsByTags(["Trade Show Booth Builder"], 5);

export const BOOTH_BUILDER_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export { default as BOOTH_BUILDER_BLOGS_SECTION } from "./blog.json";
export { default as BOOTH_BUILDER_FUTURE_READY } from "./builder-future-ready.json";
export { default as BOOTH_BUILDER_PRICING } from "./builder-pricing.json";
export { default as BOOTH_BUILDER_RELATED_SERVICES } from "./related-services.json";
export { default as BOOTH_BUILDER_FAQ } from "./faq.json";

export { default as BOOTH_BUILDER_HERO } from "./hero.json";
export { default as BOOTH_BUILDER_PAGE } from "./page.json";
export { default as BOOTH_BUILDER_PROCESS } from "./process.json";
export { default as BOOTH_BUILDER_CLIENT_LOGOS } from "./client-logos.json";
