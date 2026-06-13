import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";





export const GES_PROOF_BAR = {
  heading: "About Global Event Solutions",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};







export const GES_CASE_STUDIES = {
  description:
    "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};





export const GES_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Ready to Build",
  description:
    "250+ events. $1.2B+ influenced. One team, one brief, one outcome. Let's build your event solutions strategy.",
  headingLines: ["250+ Events.", "$1.2B+ Influenced."] as [string, string],
  primaryCta: { href: "/contact", label: "Book a Free Strategy Session" },
};

export {default as GES_FAQ} from "./faq.json";
export {default as GES_HERO} from "./hero.json";
export {default as GES_PAGE} from "./page.json";
export {default as GES_PROCESS} from "./process.json";
export {default as GES_SERVICES} from "./services.json";
export {default as GES_WHY} from "./why.json";