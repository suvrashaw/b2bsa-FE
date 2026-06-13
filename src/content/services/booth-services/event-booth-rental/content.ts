import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import DATA from "./data.json";


export const BOOTH_RENTAL_RENT_VS_BUY = DATA.rentalRentVsBuy;



export { GLOBAL_PROOF_STATS as BOOTH_RENTAL_PROOF_BAR } from "../../shared";



export const BOOTH_RENTAL_PROCESS = DATA.rentalProcess;

export const BOOTH_RENTAL_CASE_STUDIES = {
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