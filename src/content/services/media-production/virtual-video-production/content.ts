import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import CASE_STUDIES_DATA from "./case-studies.json";
import VIRTUALVIDEOCONTACTCTA_DATA from "./virtual-video-contact-cta.json";

export const VIRTUAL_VIDEO_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const VIRTUAL_VIDEO_CONTACT_CTA = {
  ...VIRTUALVIDEOCONTACTCTA_DATA,
};

export { default as VIRTUAL_VIDEO_BLOGS_SECTION } from "./blog.json";
export { default as VIRTUAL_VIDEO_FAQ } from "./faq.json";
export { default as VIRTUAL_VIDEO_IMAGE_HERO } from "./hero.json";
export { default as VIRTUAL_VIDEO_PAGE } from "./page.json";

export { default as VIRTUAL_VIDEO_CAPABILITIES } from "./virtual-video-capabilities.json";
export { default as VIRTUAL_VIDEO_DELIVERABLES } from "./virtual-video-deliverables.json";
export { default as VIRTUAL_VIDEO_INTRO } from "./virtual-video-intro.json";
export { default as VIRTUAL_VIDEO_RELATED_SERVICES } from "./virtual-video-related-services.json";
export { default as VIRTUAL_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
