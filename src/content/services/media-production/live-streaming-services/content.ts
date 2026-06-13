import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import DATA from "./data.json";

export { GLOBAL_PROOF_STATS as LIVE_STREAMING_PROOF_BAR } from "../../shared";

export const LIVE_STREAMING_DELIVERABLES = DATA.streamingDeliverables;

export const LIVE_STREAMING_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const LIVE_STREAMING_SPOTLIGHT = {
  ...DATA.streamingSpotlight,
  triggerContactModal: true,
};

export { default as LIVE_STREAMING_FAQ } from "./faq.json";
export { default as LIVE_STREAMING_HERO } from "./hero.json";
export { default as LIVE_STREAMING_PAGE } from "./page.json";
export { default as LIVE_STREAMING_WHY_CHOOSE_US } from "./why-choose-us.json";
export { default as LIVE_STREAMING_WHY } from "./why.json";
