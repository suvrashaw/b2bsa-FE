import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

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

export { default as VIRTUAL_VIDEO_BLOGS_SECTION } from "./blog.json";
export { default as VIRTUAL_VIDEO_CAPABILITIES } from "./capabilities.json";
export { default as VIRTUAL_VIDEO_CLIENT_LOGOS } from "./client-logos.json";
export { default as VIRTUAL_VIDEO_FAQ } from "./faq.json";

export { default as VIRTUAL_VIDEO_IMAGE_HERO } from "./hero.json";
export { default as VIRTUAL_VIDEO_PAGE } from "./page.json";
export const VIRTUAL_VIDEO_INTRO = {
  ...INTRO_DATA,
  stats: GLOBAL_PROOF_STATS,
  triggerContactModal: true,
};
export { default as VIRTUAL_VIDEO_DELIVERABLES } from "./whats-included.json";
export { default as VIRTUAL_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
