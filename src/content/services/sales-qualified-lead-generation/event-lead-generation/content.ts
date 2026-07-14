import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import BLOG_DATA from "./blog.json";
import EVENT_LEAD_CASESTUDIES_DATA from "./case-studies.json";
import CONTACTCTA_DATA from "./contact.json";

export const EVENT_LEAD_GEN_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const EVENT_LEAD_CONTACT_CTA = {
  ...CONTACTCTA_DATA,
  ...CINEMATIC_CTA_SHARED,
};

export { default as EVENT_LEAD_CLIENT_LOGOS } from "./client-logos.json";
export { default as EVENT_LEAD_FAQ } from "./faq.json";
export { default as EVENT_LEAD_HERO } from "./hero.json";
export { default as EVENT_LEAD_INTRO } from "./intro.json";
export { default as EVENT_LEAD_PAGE } from "./page.json";

export const EVENT_LEAD_CASE_STUDIES = {
  ...EVENT_LEAD_CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export { default as EVENT_LEAD_PIPELINE } from "./pipeline.json";
export { default as EVENT_LEAD_PROCESS } from "./process.json";
export { default as EVENT_LEAD_SERVICES } from "./services.json";
export { default as EVENT_LEAD_WHY } from "./why-spotlight.json";
