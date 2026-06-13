import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import DATA from "./data.json";

const mediaProofLogos = [
  { alt: "Airtel", src: "/images/client-logos/circle-airtel.svg" },
  { alt: "SingleStore", src: "/images/client-logos/circle-singlestore.svg" },
  { alt: "CSC", src: "/images/client-logos/circle-csc.svg" },
  { alt: "United Payments", src: "/images/client-logos/circle-united-payments.svg" },
] as const;

export const EVENT_EXPERIENCE_VIDEO_PROOF_BAR = DATA.experienceVideoProofBar;

export const EVENT_EXPERIENCE_VIDEO_INTRO = DATA.experienceVideoIntro;

export const EVENT_EXPERIENCE_VIDEO_DELIVERABLES = DATA.experienceVideoDeliverables;

export const EVENT_EXPERIENCE_VIDEO_CAPABILITIES = DATA.experienceVideoCapabilities;

export const EVENT_EXPERIENCE_VIDEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES.slice(0, 5),
};

export const EVENT_EXPERIENCE_VIDEO_EVENT_TYPES_SECTION = DATA.experienceVideoEventTypesSection;

export const EVENT_EXPERIENCE_VIDEO_BLOGS_SECTION = DATA.experienceVideoBlogsSection;

export const EVENT_EXPERIENCE_VIDEO_RELATED_SERVICES = DATA.experienceVideoRelatedServices;

export const EVENT_EXPERIENCE_VIDEO_CONTACT_CTA = {
  ...DATA.experienceVideoContactCta,
  headingLines: ["Ready to Capture Your", "Next Event Experience?"] as [string, string],
  proofLogos: mediaProofLogos,
};

export { default as EVENT_EXPERIENCE_VIDEO_FAQ } from "./faq.json";
export { default as EVENT_EXPERIENCE_VIDEO_IMAGE_HERO } from "./hero.json";
export { default as EVENT_EXPERIENCE_VIDEO_PAGE } from "./page.json";
export { default as EVENT_EXPERIENCE_VIDEO_WHY_CHOOSE_US } from "./why-choose-us.json";
