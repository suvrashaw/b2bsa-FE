import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";





export const SQL_PROOF_BAR = {
  heading: "About Sales Qualified Lead Generation",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};







export const SQL_CASE_STUDIES = {
  description:
    "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};





export const SQL_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Pipeline-Ready Leads",
  description:
    "A lead is only valuable when your team can act on it with confidence. Give them prospects that are ready.",
  headingLines: ["Give Your Team", "Leads That Are Ready."] as [string, string],
  primaryCta: { href: "/contact", label: "Build Your SQL Generation Program" },
};

export {default as SQL_FAQ} from "./faq.json";
export {default as SQL_HERO} from "./hero.json";
export {default as SQL_PAGE} from "./page.json";
export {default as SQL_PROCESS} from "./process.json";
export {default as SQL_SERVICES} from "./services.json";
export {default as SQL_WHY} from "./why.json";