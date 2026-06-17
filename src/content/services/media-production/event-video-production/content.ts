import { GLOBAL_CASE_STUDIES } from "@/content/case-studies";
import { GLOBAL_PROOF_STATS } from "@/content/services";
import CINEMATIC_CTA_SHARED from "@/content/services/cinematic-cta.json";

import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACT_CTA_DATA from "./contact-cta.json";
import PROOF_BAR_DATA from "./proof-bar.json";

export { default as EVENT_VIDEO_FAQ } from "./faq.json";

export const EVENT_VIDEO_PROOF_BAR = {
  ...PROOF_BAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const EVENT_VIDEO_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const EVENT_VIDEO_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export { default as EVENT_VIDEO_HERO } from "./hero.json";
export { default as EVENT_VIDEO_PAGE } from "./page.json";
export { default as EVENT_VIDEO_RELATED_SERVICES } from "./related-services.json";
export { default as EVENT_VIDEO_CREATIVE_PRICING } from "./video-creative-pricing.json";
export { default as EVENT_VIDEO_DELIVERABLES } from "./video-deliverables.json";

export { default as EVENT_VIDEO_WHY } from "./why.json";
