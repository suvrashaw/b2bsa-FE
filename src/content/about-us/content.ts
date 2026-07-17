import type { MarketingPageDefinition, StaticPageHero } from "@/content/page-definitions";

import { TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";
import { mapCalendarEventToEvent } from "@/content/tradeshow-calendar";

import EVENTS_SECTION_DATA from "./events.json";
import FOUNDERSTORY_DATA from "./founder-story.json";
import HERO_DATA from "./hero.json";
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

export const ABOUT_PAGE = PAGE_DATA as MarketingPageDefinition;
export const ABOUT_RECENT_EVENTS = {
  ...EVENTS_SECTION_DATA,
  events: TRADE_SHOW_CALENDAR_EVENTS.filter((e) => ABOUT_EVENT_IDS.has(e.id)).map((e, i) =>
    mapCalendarEventToEvent(e, i)
  ),
};
export { default as ABOUT_CORE_VALUES } from "./core-values.json";
export const ABOUT_HERO: StaticPageHero = HERO_DATA;
export { default as ABOUT_ORIGIN_TIMELINE } from "./origin-timeline.json";
export { default as ABOUT_SIGNATURE_SERVICES } from "./services.json";
export { default as ABOUT_TEAM_IMAGES } from "./team-images.json";

export { default as ABOUT_VISION_MISSION } from "./vision-mission.json";
export { default as ABOUT_WHO_WE_ARE } from "./who-we-are.json";
