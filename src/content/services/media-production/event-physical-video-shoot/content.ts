import mediaProofLogos from "@/content/services/media-production/media-proof-logos.json";
import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import CASE_STUDIES_DATA from "./case-studies.json";
import PHYSICALVIDEOCONTACTCTA_DATA from "./physical-video-contact-cta.json";

export const EVENT_PHYSICAL_VIDEO_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES.slice(0, 3),
};

export const EVENT_PHYSICAL_VIDEO_CONTACT_CTA = {
  ...PHYSICALVIDEOCONTACTCTA_DATA,
  proofLogos: mediaProofLogos,
};

export { default as EVENT_PHYSICAL_VIDEO_FAQ } from "./faq.json";
export { default as EVENT_PHYSICAL_VIDEO_IMAGE_HERO } from "./hero.json";
export { default as EVENT_PHYSICAL_VIDEO_PAGE } from "./page.json";
export { default as EVENT_PHYSICAL_VIDEO_BLOGS_SECTION } from "./physical-video-blogs-section.json";
export { default as EVENT_PHYSICAL_VIDEO_DELIVERABLES } from "./physical-video-deliverables.json";

export { default as EVENT_PHYSICAL_VIDEO_INTRO } from "./physical-video-intro.json";
export { default as EVENT_PHYSICAL_VIDEO_PRODUCTION_PLAN } from "./physical-video-production-plan.json";
export { default as EVENT_PHYSICAL_VIDEO_PROOF_BAR } from "./physical-video-proof-bar.json";
export { default as EVENT_PHYSICAL_VIDEO_RELATED_SERVICES } from "./physical-video-related-services.json";
export { default as EVENT_PHYSICAL_VIDEO_PROCESS } from "./process.json";
export { default as EVENT_PHYSICAL_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
