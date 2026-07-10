import type { BlogsSectionContent } from "@/content/blogs";

import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

import BLOG_DATA from "./blog.json";
import CASE_STUDIES_DATA from "./case-studies.json";
import VIRTUALVIDEOCONTACTCTA_DATA from "./contact.json";
import INTRO_DATA from "./intro.json";

export const VIRTUAL_VIDEO_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const VIRTUAL_VIDEO_CONTACT_CTA = {
  ...VIRTUALVIDEOCONTACTCTA_DATA,
};

export const VIRTUAL_VIDEO_BLOGS_SECTION = BLOG_DATA satisfies BlogsSectionContent;
export { default as VIRTUAL_VIDEO_PROCESS } from "./process.json";
export { default as VIRTUAL_VIDEO_CLIENT_LOGOS } from "./client-logos.json";
export { default as VIRTUAL_VIDEO_FAQ } from "./faq.json";

export { default as VIRTUAL_VIDEO_IMAGE_HERO } from "./hero.json";
export { default as VIRTUAL_VIDEO_PAGE } from "./page.json";
export { default as VIRTUAL_VIDEO_RELATED_SERVICES } from "./related-services.json";
export const VIRTUAL_VIDEO_INTRO = {
  ...INTRO_DATA,
  stats: GLOBAL_PROOF_STATS,
  triggerContactModal: true,
};
export { default as VIRTUAL_VIDEO_DELIVERABLES } from "./services.json";
export { default as VIRTUAL_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
