import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import CASE_STUDIES_DATA from "./case-studies.json";
import EXPERIENCEVIDEOCONTACTCTA_DATA from "./experience-video-contact-cta.json";

export const EVENT_EXPERIENCE_VIDEO_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_EXPERIENCE_VIDEO_CONTACT_CTA = {
  ...EXPERIENCEVIDEOCONTACTCTA_DATA,
};

export { default as EVENT_EXPERIENCE_VIDEO_BLOGS_SECTION } from "./blog.json";
export { default as EVENT_EXPERIENCE_VIDEO_CAPABILITIES } from "./experience-video-capabilities.json";
export { default as EVENT_EXPERIENCE_VIDEO_DELIVERABLES } from "./experience-video-deliverables.json";

export { default as EVENT_EXPERIENCE_VIDEO_INTRO } from "./experience-video-intro.json";
export { default as EVENT_EXPERIENCE_VIDEO_RELATED_SERVICES } from "./experience-video-related-services.json";
export { default as EVENT_EXPERIENCE_VIDEO_FAQ } from "./faq.json";
export { default as EVENT_EXPERIENCE_VIDEO_IMAGE_HERO } from "./hero.json";
export { default as EVENT_EXPERIENCE_VIDEO_PAGE } from "./page.json";
export { default as EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
