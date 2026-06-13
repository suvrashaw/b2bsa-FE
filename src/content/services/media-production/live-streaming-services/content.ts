import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";
import CINEMATIC_CTA_SHARED from "@/content/shared/cinematic-cta.json";

import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACT_CTA_DATA from "./contact-cta.json";
import PROOF_BAR_DATA from "./proof-bar.json";
import STREAMINGSPOTLIGHT_DATA from "./streaming-spotlight.json";

export { default as LIVE_STREAMING_FAQ } from "./faq.json";

export const LIVE_STREAMING_PROOF_BAR = {
  ...PROOF_BAR_DATA,
  stats: GLOBAL_PROOF_STATS,
};

export const LIVE_STREAMING_CASE_STUDIES = {
  ...CASE_STUDIES_DATA,
  items: GLOBAL_CASE_STUDIES,
};

export const LIVE_STREAMING_SPOTLIGHT = {
  ...STREAMINGSPOTLIGHT_DATA,
  triggerContactModal: true,
};

export const LIVE_STREAMING_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export { default as LIVE_STREAMING_HERO } from "./hero.json";
export { default as LIVE_STREAMING_PAGE } from "./page.json";
export { default as LIVE_STREAMING_RELATED_SERVICES } from "./related-services.json";
export { default as LIVE_STREAMING_DELIVERABLES } from "./streaming-deliverables.json";
export { default as LIVE_STREAMING_WHY_CHOOSE_US } from "./why-choose-us.json";
export { default as LIVE_STREAMING_WHY } from "./why.json";
