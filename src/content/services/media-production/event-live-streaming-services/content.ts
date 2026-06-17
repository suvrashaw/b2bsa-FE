import CINEMATIC_CTA_SHARED from "@/content/shared/cinematic-cta.json";

import CAPABILITIES_DATA from "./capabilities.json";
import CASE_STUDIES_DATA from "./case-studies.json";
import CONTACT_CTA_DATA from "./contact-cta.json";
import LIVE_STREAM_PROJECTS_DATA from "./live-stream-projects.json";
import STREAMINGSPOTLIGHT_DATA from "./streaming-spotlight.json";



export const LIVE_STREAMING_PROJECTS = {
  ...CASE_STUDIES_DATA,
  items: LIVE_STREAM_PROJECTS_DATA,
  playlistLabel: "Live Streaming Projects",
};

export const LIVE_STREAMING_SPOTLIGHT = {
  ...STREAMINGSPOTLIGHT_DATA,
  showCta: false,
  triggerContactModal: true,
};

export const LIVE_STREAMING_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  ...CONTACT_CTA_DATA,
};

export const LIVE_STREAMING_CAPABILITIES = {
  description: CAPABILITIES_DATA.description,
  heading: CAPABILITIES_DATA.heading,
};

export const LIVE_STREAMING_CAPABILITIES_FEATURES = CAPABILITIES_DATA.features;

export { default as LIVE_STREAMING_AREAS_SERVED } from "./areas-served.json";
export { default as LIVE_STREAMING_BLOGS_SECTION } from "./blogs-section.json";
export { default as LIVE_STREAMING_FAQ } from "./faq.json";
export { default as LIVE_STREAMING_HERO } from "./hero.json";
export { default as LIVE_STREAMING_PAGE } from "./page.json";
export { default as LIVE_STREAMING_RELATED_SERVICES } from "./related-services.json";
export { default as LIVE_STREAMING_DELIVERABLES } from "./streaming-deliverables.json";
export { default as LIVE_STREAMING_WHY_CHOOSE_US } from "./why-choose-us.json";
