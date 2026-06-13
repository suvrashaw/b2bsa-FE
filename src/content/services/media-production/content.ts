import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";





export const MEDIA_PROOF_BAR = {
  heading: "About Media Production",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};







export const MEDIA_CASE_STUDIES = {
  description:
    "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};





export const MEDIA_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Build Your Asset Library",
  description:
    "Content should keep working long after the campaign ends. Build video assets your team can use for months.",
  headingLines: ["Content Should", "Keep Working."] as [string, string],
  primaryCta: { href: "/contact", label: "Start Your Media Project" },
};

export {default as MEDIA_FAQ} from "./faq.json";
export {default as MEDIA_HERO} from "./hero.json";
export {default as MEDIA_PAGE} from "./page.json";
export {default as MEDIA_PROCESS} from "./process.json";
export {default as MEDIA_SERVICES} from "./services.json";
export {default as MEDIA_WHY} from "./why.json";