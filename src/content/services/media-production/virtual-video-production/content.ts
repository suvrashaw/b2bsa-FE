import mediaProofLogos from "@/content/services/media-production/media-proof-logos.json";
import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import VIRTUALVIDEOCONTACTCTA_DATA from "./virtual-video-contact-cta.json";

export const VIRTUAL_VIDEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES.slice(0, 5),
};

export const VIRTUAL_VIDEO_CONTACT_CTA = {
  ...VIRTUALVIDEOCONTACTCTA_DATA,
  proofLogos: mediaProofLogos,
};

export { default as VIRTUAL_VIDEO_FAQ } from "./faq.json";
export { default as VIRTUAL_VIDEO_IMAGE_HERO } from "./hero.json";
export { default as VIRTUAL_VIDEO_PAGE } from "./page.json";
export { default as VIRTUAL_VIDEO_BLOGS_SECTION } from "./virtual-video-blogs-section.json";

export { default as VIRTUAL_VIDEO_CAPABILITIES } from "./virtual-video-capabilities.json";
export { default as VIRTUAL_VIDEO_DELIVERABLES } from "./virtual-video-deliverables.json";
export { default as VIRTUAL_VIDEO_INTRO } from "./virtual-video-intro.json";
export { default as VIRTUAL_VIDEO_PROOF_BAR } from "./virtual-video-proof-bar.json";
export { default as VIRTUAL_VIDEO_RELATED_SERVICES } from "./virtual-video-related-services.json";
export { default as VIRTUAL_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
