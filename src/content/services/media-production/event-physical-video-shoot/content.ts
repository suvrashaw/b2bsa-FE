import { GLOBAL_CASE_STUDIES } from "@/content/shared";
import DATA from "./data.json";

const mediaProofLogos = [
  { alt: "Airtel", src: "/images/client-logos/circle-airtel.svg" },
  { alt: "SingleStore", src: "/images/client-logos/circle-singlestore.svg" },
  { alt: "CSC", src: "/images/client-logos/circle-csc.svg" },
  { alt: "United Payments", src: "/images/client-logos/circle-united-payments.svg" },
] as const;



export const EVENT_PHYSICAL_VIDEO_PROOF_BAR = DATA.physicalVideoProofBar;

export const EVENT_PHYSICAL_VIDEO_INTRO = DATA.physicalVideoIntro;

export const EVENT_PHYSICAL_VIDEO_DELIVERABLES = DATA.physicalVideoDeliverables;

export const EVENT_PHYSICAL_VIDEO_PRODUCTION_PLAN = DATA.physicalVideoProductionPlan;



export const EVENT_PHYSICAL_VIDEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES.slice(0, 3),
};



export const EVENT_PHYSICAL_VIDEO_BLOGS_SECTION = DATA.physicalVideoBlogsSection;



export const EVENT_PHYSICAL_VIDEO_RELATED_SERVICES = DATA.physicalVideoRelatedServices;

export const EVENT_PHYSICAL_VIDEO_CONTACT_CTA = {
    ...DATA.physicalVideoContactCta,
    headingLines: ["Ready to Capture", "Your Event On-Site?"] as [string, string],
  proofLogos: mediaProofLogos
};



export {default as EVENT_PHYSICAL_VIDEO_FAQ} from "./faq.json";
export {default as EVENT_PHYSICAL_VIDEO_IMAGE_HERO} from "./hero.json";
export {default as EVENT_PHYSICAL_VIDEO_PAGE} from "./page.json";
export {default as EVENT_PHYSICAL_VIDEO_PROCESS} from "./process.json";
export {default as EVENT_PHYSICAL_VIDEO_WHY_CHOOSE_US} from "./why-choose-us.json";