import type { MarketingPageDefinition } from "@/content/page-definitions";

import FOUNDERSTORY_DATA from "./founder-story.json";
import INQUIRY_DATA from "./inquiry.json";
import PAGE_DATA from "./page.json";
import VALUES_DATA from "./values.json";

export const ABOUT_FOUNDER_STORY = FOUNDERSTORY_DATA;

export const ABOUT_VALUES = {
  ...VALUES_DATA,
  centerText: ABOUT_FOUNDER_STORY.story,
};

export const ABOUT_INQUIRY = {
  ...INQUIRY_DATA,
  illustration: null,
};

export const ABOUT_PAGE = PAGE_DATA as MarketingPageDefinition;

export { default as ABOUT_CORE_VALUES } from "./core-values.json";
export { default as ABOUT_RECENT_EVENTS } from "./events.json";
export { default as ABOUT_HERO } from "./hero.json";
export { default as ABOUT_ORIGIN_TIMELINE } from "./origin-timeline.json";
export { default as ABOUT_PRESENCE } from "./presence.json";
export { default as ABOUT_SIGNATURE_SERVICES } from "./services.json";
export { default as ABOUT_SIGNATURE_SERVICES_STACK } from "./signature-services-stack.json";
export { default as ABOUT_VISION_MISSION } from "./vision-mission.json";
