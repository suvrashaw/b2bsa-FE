import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import BLOG_DATA from "./blog.json";
import CORPORATE_VIDEO_CASESTUDIES_DATA from "./case-studies.json";
import CONTACT_CTA_DATA from "./contact.json";
import CORPORATE_VIDEO_INTRO_DATA from "./intro.json";

export const CORPORATE_VIDEO_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export const CORPORATE_VIDEO_CASE_STUDIES = {
  ...CORPORATE_VIDEO_CASESTUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const CORPORATE_VIDEO_INTRO = {
  ...CORPORATE_VIDEO_INTRO_DATA,
  triggerContactModal: true,
};

export const CORPORATE_VIDEO_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export { default as CORPORATE_VIDEO_CAPABILITIES } from "./capabilities.json";
export { default as CORPORATE_VIDEO_CLIENT_LOGOS } from "./client-logos.json";
export { default as CORPORATE_VIDEO_FAQ } from "./faq.json";
export { default as CORPORATE_VIDEO_HERO } from "./hero.json";
export { default as CORPORATE_VIDEO_PAGE } from "./page.json";
export { default as CORPORATE_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
export { default as CORPORATE_VIDEO_WHY } from "./why-spotlight.json";
