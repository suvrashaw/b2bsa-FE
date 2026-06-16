import type { MarketingPageDefinition } from "@/content/page-definitions";

import SHARED_EVENTS_DATA from "@/content/shared/events.json";

import EVENTS_SECTION_DATA from "./events.json";
import FOUNDERSTORY_DATA from "./founder-story.json";
import INQUIRY_DATA from "./inquiry.json";
import PAGE_DATA from "./page.json";
import VALUES_DATA from "./values.json";
import VISION_MISSION_DATA from "./vision-mission.json";

const ABOUT_EVENT_IDS = new Set([
  "adobe-summit-2026",
  "hannover-messe-2026",
  "itw-2026",
  "sap-sapphire-2026",
]);

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

export const ABOUT_VISION_SPOTLIGHT = {
  align: VISION_MISSION_DATA.visionAlign as "left" | "right",
  description: VISION_MISSION_DATA.vision,
  titleLine1: VISION_MISSION_DATA.visionTitleLine1,
  titleLine2: VISION_MISSION_DATA.visionTitleLine2,
};

export { default as ABOUT_CORE_VALUES } from "./core-values.json";
export const ABOUT_RECENT_EVENTS = {
  ...EVENTS_SECTION_DATA,
  events: SHARED_EVENTS_DATA.filter((e) => ABOUT_EVENT_IDS.has(e.id)),
};
export { default as ABOUT_HERO } from "./hero.json";
export { default as ABOUT_ORIGIN_TIMELINE } from "./origin-timeline.json";
export { default as ABOUT_PRESENCE } from "./presence.json";
export { default as ABOUT_SIGNATURE_SERVICES } from "./services.json";
export { default as ABOUT_SIGNATURE_SERVICES_STACK } from "./signature-services-stack.json";
export { default as ABOUT_VISION_MISSION } from "./vision-mission.json";
