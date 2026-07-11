import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import BLOG_DATA from "./blog.json";
import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACT_CTA_DATA from "./contact.json";
import PROOF_BAR_DATA from "./intro.json";

export const EVENT_VIDEO_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;

export { default as EVENT_VIDEO_CLIENT_LOGOS } from "./client-logos.json";

export const EVENT_VIDEO_INTRO = {
  ...PROOF_BAR_DATA,
  stats: GLOBAL_PROOF_STATS,
  triggerContactModal: true,
};

export const EVENT_VIDEO_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_VIDEO_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export { default as EVENT_VIDEO_FAQ } from "./faq.json";
export { default as EVENT_VIDEO_HERO } from "./hero.json";
export { default as EVENT_VIDEO_PAGE } from "./page.json";
export { default as EVENT_VIDEO_DELIVERABLES } from "./services.json";

export { default as EVENT_VIDEO_WHY } from "./why-spotlight.json";
