import CINEMATIC_CTA_SHARED from "@/content/cinematic-cta-shared.json";
import { GLOBAL_CASE_STUDIES, GLOBAL_PROOF_STATS } from "@/content/shared";





export const PERF_PROOF_BAR = {
  heading: "About Performance Marketing",
  imageUrl: "/images/Frames/ezgif-frame-017.jpg",
  stats: GLOBAL_PROOF_STATS,
};







export const PERF_CASE_STUDIES = {
  description:
    "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  heading: "Real Events. Real Results.",
  items: GLOBAL_CASE_STUDIES,
};





export const PERF_CONTACT_CTA = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Audit Your Pipeline",
  description:
    "Stop guessing. Start knowing. A performance marketing audit reveals where spend is leaking and where pipeline can improve.",
  headingLines: ["Stop Guessing.", "Start Knowing."] as [string, string],
  primaryCta: { href: "/contact", label: "Request a Free Performance Marketing Audit" },
};

export {default as PERF_FAQ} from "./faq.json";
export {default as PERF_HERO} from "./hero.json";
export {default as PERF_PAGE} from "./page.json";
export {default as PERF_PROCESS} from "./process.json";
export {default as PERF_SERVICES} from "./services.json";
export {default as PERF_WHY} from "./why.json";