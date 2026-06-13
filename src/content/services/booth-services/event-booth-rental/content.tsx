import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import WHY_DATA from "./why.json";
import PAGE_DATA from "./page.json";
import DATA from "./data.json";

export const BOOTH_RENTAL_RENT_VS_BUY = DATA.rentalRentVsBuy;

export const BOOTH_RENTAL_HERO = {
  description:
    "When speed matters or you're testing a new market, trade show booth rental gives your brand a polished, fully branded exhibition presence, without the fabrication lead time or capital commitment.",
  title: (
    <strong className="font-bold">
      Trade Show Booth Rental, Enterprise Presence Without the Build Timeline
    </strong>
  ),
};

export { GLOBAL_PROOF_STATS as BOOTH_RENTAL_PROOF_BAR } from "../../shared";

export const BOOTH_RENTAL_WHY = WHY_DATA;

export const BOOTH_RENTAL_PROCESS = DATA.rentalProcess;

export const BOOTH_RENTAL_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const BOOTH_RENTAL_FAQ = {
  faqs: [
    {
      answer: (
        <>
          For major global events, <strong className="font-bold">rental booths</strong> book 6–10
          weeks in advance. Enquire as soon as participation is confirmed.
        </>
      ),
      id: "booking",
      question: "How far ahead should I book?",
    },
    {
      answer:
        "Yes, graphics, messaging, colour system, and engagement setup. A well-executed branded rental is indistinguishable from a custom build to visitors.",
      id: "branded",
      question: "Can the rental be fully branded?",
    },
    {
      answer:
        "Yes, inter-event storage, graphic refresh between shows, and logistics coordination available.",
      id: "multiple-events",
      question: "Can we use the same rental at multiple events?",
    },
    {
      answer: (
        <>
          A <strong className="font-bold">rental booth</strong> uses a pre-existing structural
          system with custom branding. A custom booth is designed and built specifically for your
          brand. Rental suits speed and budget flexibility; custom delivers maximum creative and
          commercial impact for flagship events.
        </>
      ),
      id: "vs-custom",
      question: "What is the difference between rental and custom?",
    },
    {
      answer:
        "Yes, installation, quality review, and post-event breakdown included in all rental packages.",
      id: "installation",
      question: "Is installation included?",
    },
  ],
  heading: "Event Booth Rental FAQs",
  layoutMode: "fit" as const,
};

export const BOOTH_RENTAL_RELATED_SERVICES = DATA.rentalRelatedServices;

export const BOOTH_RENTAL_BLOGS_SECTION = DATA.rentalBlogsSection;

export const BOOTH_RENTAL_CONTACT_CTA = {
    ...DATA.rentalContactCta,
    headingLines: ["Fast Does Not Have To", "Feel Temporary"] as [string, string]
};

export const BOOTH_RENTAL_PAGE = PAGE_DATA;
