import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";





export const RESEARCH_PROOF_BAR = {
  heading: "About Market Research",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};







export const RESEARCH_CASE_STUDIES = {
  description:
    "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};





export const RESEARCH_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Intelligence First",
  description: "Own your competitive intelligence advantage.",
  headingLines: ["Own Your Competitive", "Intelligence Advantage."] as [string, string],
  primaryCta: { href: "/contact", label: "Start a Research Project" },
};

export {default as RESEARCH_FAQ} from "./faq.json";
export {default as RESEARCH_HERO} from "./hero.json";
export {default as RESEARCH_PAGE} from "./page.json";
export {default as RESEARCH_PROCESS} from "./process.json";
export {default as RESEARCH_SERVICES} from "./services.json";
export {default as RESEARCH_WHY} from "./why.json";