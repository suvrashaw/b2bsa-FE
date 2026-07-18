import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

import BLOG_DATA from "./blog.json";
import BOOTHDESIGNCASESTUDIESDATA from "./case-studies.json";
import CONTACT_DATA from "./contact-cta.json";
import BOOTHDESIGNPROOFBARDATA from "./intro.json";

export const BOOTH_DESIGN_INTRO = {
  ...BOOTHDESIGNPROOFBARDATA,
  stats: GLOBAL_PROOF_STATS,
};

export const BOOTH_DESIGN_CASE_STUDIES = {
  ...BOOTHDESIGNCASESTUDIESDATA,
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_DESIGN_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export const BOOTH_DESIGN_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export { default as BOOTH_DESIGN_CAPABILITIES } from "./capabilities.json";
export { default as BOOTH_DESIGN_CLIENT_LOGOS } from "./client-logos.json";

export { default as BOOTH_DESIGN_FAQ } from "./faq.json";
export { default as BOOTH_DESIGN_HERO } from "./hero.json";
export { default as BOOTH_DESIGN_PAGE } from "./page.json";
export { default as BOOTH_DESIGN_PROCESS } from "./process.json";
export { default as BOOTH_DESIGN_DELIVERABLES } from "./services.json";
export { default as BOOTH_DESIGN_WHY_CHOOSE_US } from "./why-choose-us.json";
