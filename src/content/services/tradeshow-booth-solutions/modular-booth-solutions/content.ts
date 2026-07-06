import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

import BLOG_DATA from "./blog.json";
import MODULARBOOTHSCASESTUDIESDATA from "./case-studies.json";
import MODULARBOOTHSPROOFBARDATA from "./intro.json";

export const MODULAR_BOOTH_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const MODULAR_BOOTHS_INTRO = {
  ...MODULARBOOTHSPROOFBARDATA,
  stats: GLOBAL_PROOF_STATS,
};

export const MODULAR_BOOTHS_CASE_STUDIES = {
  ...MODULARBOOTHSCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as MODULAR_BOOTHS_CLIENT_LOGOS } from "./client-logos.json";

export { default as MODULAR_BOOTHS_CONTACT_CTA } from "./contact.json";
export { default as MODULAR_BOOTHS_FAQ } from "./faq.json";
export { default as MODULAR_BOOTHS_HERO } from "./hero.json";
export { default as MODULAR_BOOTHS_PAGE } from "./page.json";

export { default as MODULAR_BOOTHS_RANGE_SECTION } from "./secondary-services.json";
export { default as MODULAR_BOOTHS_DELIVERABLES } from "./services.json";
export { default as MODULAR_BOOTHS_WHY } from "./why.json";
