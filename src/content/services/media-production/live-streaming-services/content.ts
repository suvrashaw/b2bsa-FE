import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import STREAMINGSPOTLIGHT_DATA from "./streaming-spotlight.json";

export { default as LIVE_STREAMING_FAQ } from "./faq.json";

export const LIVE_STREAMING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const LIVE_STREAMING_SPOTLIGHT = {
  ...STREAMINGSPOTLIGHT_DATA,
  triggerContactModal: true,
};

export { default as LIVE_STREAMING_HERO } from "./hero.json";
export { default as LIVE_STREAMING_PAGE } from "./page.json";
export { default as LIVE_STREAMING_DELIVERABLES } from "./streaming-deliverables.json";
export { default as LIVE_STREAMING_WHY_CHOOSE_US } from "./why-choose-us.json";
export { default as LIVE_STREAMING_WHY } from "./why.json";

export { GLOBAL_PROOF_STATS as LIVE_STREAMING_PROOF_BAR } from "@/content/shared";
