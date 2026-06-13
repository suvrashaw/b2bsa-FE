import { GLOBAL_CASE_STUDIES } from "@/content/shared";
import DATA from "./data.json";

const mediaProofLogos = [
  { alt: "Airtel", src: "/images/client-logos/circle-airtel.svg" },
  { alt: "SingleStore", src: "/images/client-logos/circle-singlestore.svg" },
  { alt: "CSC", src: "/images/client-logos/circle-csc.svg" },
  { alt: "United Payments", src: "/images/client-logos/circle-united-payments.svg" },
] as const;



export const VIRTUAL_VIDEO_PROOF_BAR = DATA.virtualVideoProofBar;

export const VIRTUAL_VIDEO_INTRO = DATA.virtualVideoIntro;

export const VIRTUAL_VIDEO_DELIVERABLES = DATA.virtualVideoDeliverables;

export const VIRTUAL_VIDEO_CAPABILITIES = DATA.virtualVideoCapabilities;

export const VIRTUAL_VIDEO_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES.slice(0, 5),
};



export const VIRTUAL_VIDEO_BLOGS_SECTION = DATA.virtualVideoBlogsSection;



export const VIRTUAL_VIDEO_RELATED_SERVICES = DATA.virtualVideoRelatedServices;

export const VIRTUAL_VIDEO_CONTACT_CTA = {
    ...DATA.virtualVideoContactCta,
    headingLines: ["Ready to Produce Your", "Next Virtual Event?"] as [string, string],
  proofLogos: mediaProofLogos
};



export {default as VIRTUAL_VIDEO_FAQ} from "./faq.json";
export {default as VIRTUAL_VIDEO_IMAGE_HERO} from "./hero.json";
export {default as VIRTUAL_VIDEO_PAGE} from "./page.json";
export {default as VIRTUAL_VIDEO_WHY_CHOOSE_US} from "./why-choose-us.json";