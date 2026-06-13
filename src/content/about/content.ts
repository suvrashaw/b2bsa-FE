import DATA from "./data.json";
import HERO_DATA from "./hero.json";
import PAGE_DATA from "./page.json";
import EVENTS_DATA from "./events.json";
import SERVICES_DATA from "./services.json";

export const ABOUT_HERO = HERO_DATA;

export const ABOUT_ORIGIN_TIMELINE = DATA.originTimeline;

export const ABOUT_VISION_MISSION = DATA.visionMission;

export const ABOUT_PRESENCE = DATA.presence;

export const ABOUT_RECENT_EVENTS = EVENTS_DATA;

export const ABOUT_CORE_VALUES = DATA.coreValues;

export const ABOUT_SIGNATURE_SERVICES = SERVICES_DATA;

export const ABOUT_SIGNATURE_SERVICES_STACK = DATA.signatureServicesStack;

export const ABOUT_FOUNDER_STORY = DATA.founderStory;

export const ABOUT_VALUES = {
  ...DATA.values,
  centerText: ABOUT_FOUNDER_STORY.story,
};

export const ABOUT_INQUIRY = {
  ...DATA.inquiry,
  illustration: null,
};

export const ABOUT_PAGE = PAGE_DATA;
