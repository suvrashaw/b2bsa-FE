import DATA from "./data.json";

export const ABOUT_HERO = {
  description:
    "B2B Sales Arrow is not a vendor. We are a strategic growth partner, bringing event solutions, video production, performance marketing, and market research under one team with one commercial brief and clear accountability to outcomes.",
  eyebrow: "WHO WE ARE",
  image: {
    alt: "B2B Sales Arrow team and office",
    loaderAlt: "Loading",
    src: "/images/about/hero.avif",
  },
  primaryCtaHref: "/contact",
  primaryCtaLabel: "Request a Strategy Consultation",
  secondaryCtaHref: "#founder",
  secondaryCtaLabel: "Meet Paras",
  showPreloader: false,
  stat: {
    icon: "Globe2",
    label: "Countries Served",
    value: "40+",
  },
  title: <>We Are the Growth Partner Your Enterprise Deserves</>,
};

export const ABOUT_ORIGIN_TIMELINE = DATA.originTimeline;

export const ABOUT_VISION_MISSION = DATA.visionMission;

export const ABOUT_PRESENCE = DATA.presence;

export const ABOUT_RECENT_EVENTS = DATA.recentEvents;

export const ABOUT_CORE_VALUES = DATA.coreValues;

export const ABOUT_SIGNATURE_SERVICES = DATA.signatureServices;

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

export const ABOUT_PAGE = {
  pageId: "about",
  pageName: "About Us",
  pageType: "company",
  seo: {
    canonicalPath: "/about",
    description:
      "B2B Sales Arrow is a global enterprise growth agency delivering event solutions, video production, performance marketing, and market research across 40+ countries. Built to connect strategy to measurable commercial outcomes.",
    focusKeyphrase: "B2B growth agency",
    secondaryKeywords: [
      "enterprise marketing company",
      "global B2B agency",
      "B2B Sales Arrow",
      "event solutions company",
    ],
    title: "About B2B Sales Arrow | Enterprise Growth Partners",
  },
} as const;
