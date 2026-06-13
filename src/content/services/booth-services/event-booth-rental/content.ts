import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";

import DATA from "./data.json";


export const BOOTH_RENTAL_RENT_VS_BUY = DATA.rentalRentVsBuy;



export const BOOTH_RENTAL_PROOF_BAR = {
  heading: "About Event Booth Rental",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};



export const BOOTH_RENTAL_PROCESS = DATA.rentalProcess;

export const BOOTH_RENTAL_CASE_STUDIES = {
  description: "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};



export const BOOTH_RENTAL_RELATED_SERVICES = DATA.rentalRelatedServices;

export const BOOTH_RENTAL_BLOGS_SECTION = DATA.rentalBlogsSection;

export const BOOTH_RENTAL_CONTACT_CTA = {
  ...DATA.rentalContactCta,
  headingLines: ["Fast Does Not Have To", "Feel Temporary"] as [string, string],
};



export {default as BOOTH_RENTAL_FAQ} from "./faq.json";
export {default as BOOTH_RENTAL_HERO} from "./hero.json";
export {default as BOOTH_RENTAL_PAGE} from "./page.json";
export {default as BOOTH_RENTAL_WHY} from "./why.json";