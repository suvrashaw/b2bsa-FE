import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import DATA from "./data.json";





export const BOOTH_DESIGN_PROOF_BAR = {
  heading: "Introduction to Our Services",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};

export const BOOTH_DESIGN_SHOWCASE_ITEMS = DATA.designShowcaseItems;

export const BOOTH_DESIGN_SPOTLIGHT = DATA.designSpotlight;

export const BOOTH_DESIGN_DELIVERABLES = DATA.designDeliverables;

export const BOOTH_DESIGN_PROCESS = DATA.designProcess;

export const BOOTH_DESIGN_CASE_STUDIES = {
  description: "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};





export const BOOTH_DESIGN_RELATED_SERVICES = DATA.designRelatedServices;

export const BOOTH_DESIGN_WHY_CHOOSE_US = DATA.designWhyChooseUs;

export const BOOTH_DESIGN_BLOGS_SECTION = DATA.designBlogsSection;

export const BOOTH_DESIGN_CONTACT_CTA = {
  ...DATA.designContactCta,
  headingLines: ["Every Square Foot", "Should Earn Its Place"] as [string, string],
};

export {default as BOOTH_DESIGN_FAQ} from "./faq.json";
export {default as BOOTH_DESIGN_HERO} from "./hero.json";
export {default as BOOTH_DESIGN_PAGE} from "./page.json";