import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";

import CASE_STUDIES_DATA from "./case-studies.json";
import EXPERIENCEVIDEOCONTACTCTA_DATA from "./contact.json";
import INTRO_DATA from "./intro.json";

export const EVENT_EXPERIENCE_VIDEO_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_EXPERIENCE_VIDEO_CONTACT_CTA = {
  ...EXPERIENCEVIDEOCONTACTCTA_DATA,
};

export { default as EVENT_EXPERIENCE_VIDEO_BLOGS_SECTION } from "./blog.json";
export { default as EVENT_EXPERIENCE_VIDEO_CAPABILITIES } from "./capabilities.json";
export { default as EVENT_EXPERIENCE_VIDEO_CLIENT_LOGOS } from "./client-logos.json";

export const EVENT_EXPERIENCE_VIDEO_INTRO = {
  ...INTRO_DATA,
  stats: GLOBAL_PROOF_STATS,
  triggerContactModal: true,
};
export { default as EVENT_EXPERIENCE_VIDEO_FAQ } from "./faq.json";
export { default as EVENT_EXPERIENCE_VIDEO_IMAGE_HERO } from "./hero.json";
export { default as EVENT_EXPERIENCE_VIDEO_PAGE } from "./page.json";
export { default as EVENT_EXPERIENCE_VIDEO_RELATED_SERVICES } from "./related-services.json";
export { default as EVENT_EXPERIENCE_VIDEO_DELIVERABLES } from "./whats-included.json";
export { default as EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
