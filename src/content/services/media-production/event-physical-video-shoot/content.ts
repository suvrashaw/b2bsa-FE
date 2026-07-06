import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";

import BLOG_DATA from "./blog.json";
import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACT_DATA from "./contact.json";

export const EVENT_PHYSICAL_VIDEO_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_PHYSICAL_VIDEO_CONTACT_CTA = {
  ...CONTACT_DATA,
};

export const EVENT_PHYSICAL_VIDEO_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;
export { default as EVENT_PHYSICAL_VIDEO_CLIENT_LOGOS } from "./client-logos.json";
export { default as EVENT_PHYSICAL_VIDEO_FAQ } from "./faq.json";
export { default as EVENT_PHYSICAL_VIDEO_IMAGE_HERO } from "./hero.json";
export { default as EVENT_PHYSICAL_VIDEO_INTRO } from "./intro.json";

export { default as EVENT_PHYSICAL_VIDEO_PAGE } from "./page.json";
export { default as EVENT_PHYSICAL_VIDEO_PRODUCTION_PLAN } from "./physical-video-production-plan.json";
export { default as EVENT_PHYSICAL_VIDEO_PROCESS } from "./process.json";
export { default as EVENT_PHYSICAL_VIDEO_DELIVERABLES } from "./services.json";
export { default as EVENT_PHYSICAL_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
