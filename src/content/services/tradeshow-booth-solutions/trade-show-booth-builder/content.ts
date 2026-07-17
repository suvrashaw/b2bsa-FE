import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

import BOOTHBUILDERCASESTUDIESDATA from "./case-studies.json";
import CONTACT_DATA from "./contact.json";
import BOOTH_BUILDER_INTRO_DATA from "./intro.json";

export const BOOTH_BUILDER_INTRO = {
  ...BOOTH_BUILDER_INTRO_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const BOOTH_BUILDER_CASE_STUDIES = {
  ...BOOTHBUILDERCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

import type { BlogsSectionContent } from "@/content/blogs";

import BLOG_DATA from "./blog.json";

export const BOOTH_BUILDER_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export const BOOTH_BUILDER_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;
export { default as BOOTH_BUILDER_FUTURE_READY } from "./builder-future-ready.json";
export { default as BOOTH_BUILDER_CLIENT_LOGOS } from "./client-logos.json";
export { default as BOOTH_BUILDER_FAQ } from "./faq.json";
export { default as BOOTH_BUILDER_HERO } from "./hero.json";
export { default as BOOTH_BUILDER_PAGE } from "./page.json";
export { default as BOOTH_BUILDER_PRICING } from "./pricing.json";
export { default as BOOTH_BUILDER_PROCESS } from "./process.json";
export { default as BOOTH_BUILDER_DELIVERABLES } from "./services.json";
export { default as BOOTH_BUILDER_WHY_CHOOSE_US } from "./why-choose-us.json";
