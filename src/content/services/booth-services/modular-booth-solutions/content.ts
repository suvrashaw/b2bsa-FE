import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import DATA from "./data.json";

export const MODULAR_BOOTHS_PROOF_BAR = {
  heading: "About Modular Booth Solutions",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};

export const MODULAR_BOOTHS_DELIVERABLES = DATA.modularBoothsDeliverables;

export const MODULAR_BOOTHS_RANGE_SECTION = DATA.modularBoothsRangeSection;

export const MODULAR_BOOTHS_CASE_STUDIES = {
  description: "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};

export const MODULAR_BOOTHS_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Flexible Presence",
  description: "One booth system. Every event. Any market.",
  headingLines: ["One Booth System.", "Every Event. Any Market."] as [string, string],
  primaryCta: { href: "/contact", label: "Get a Modular Booth Quote" },
};

export { default as MODULAR_BOOTHS_FAQ } from "./faq.json";
export { default as MODULAR_BOOTHS_HERO } from "./hero.json";
export { default as MODULAR_BOOTHS_PAGE } from "./page.json";
export { default as MODULAR_BOOTHS_WHY } from "./why.json";
