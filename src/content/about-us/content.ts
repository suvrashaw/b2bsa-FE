import type { MarketingPageDefinition } from "@/content/page-definitions";

import { TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";
import { mapCalendarEventToEvent } from "@/content/tradeshow-calendar";

import CONTACTUS_DATA from "./contactus.json";
import EVENTS_SECTION_DATA from "./events.json";
import FOUNDERSTORY_DATA from "./founder-story.json";
import PAGE_DATA from "./page.json";
import VALUES_DATA from "./values.json";

const ABOUT_EVENT_IDS = new Set([
  "adobe-summit-2026",
  "gitex-global",
  "hannover-messe-2026",
  "itw-2026",
  "sap-sapphire-2026",
  "sibos-amsterdam",
]);

export const ABOUT_FOUNDER_STORY = FOUNDERSTORY_DATA;

export const ABOUT_VALUES = {
  ...VALUES_DATA,
  centerText: ABOUT_FOUNDER_STORY.story,
};

export const ABOUT_CONTACTUS = CONTACTUS_DATA.cta;

export const ABOUT_PAGE = PAGE_DATA as MarketingPageDefinition;



export { default as ABOUT_CORE_VALUES } from "./core-values.json";
export const ABOUT_RECENT_EVENTS = {
  ...EVENTS_SECTION_DATA,
  events: TRADE_SHOW_CALENDAR_EVENTS.filter((e) => ABOUT_EVENT_IDS.has(e.id)).map((e, i) => mapCalendarEventToEvent(e, i)),
};
export { default as ABOUT_HERO } from "./hero.json";
export { default as ABOUT_ORIGIN_TIMELINE } from "./origin-timeline.json";
export { default as ABOUT_SIGNATURE_SERVICES } from "./services.json";
export { default as ABOUT_SIGNATURE_SERVICES_STACK } from "./signature-services-stack.json";
export { default as ABOUT_VISION_MISSION } from "./vision-mission.json";
