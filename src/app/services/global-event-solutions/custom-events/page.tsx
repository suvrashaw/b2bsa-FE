import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  CUSTOM_EVENTS_CASE_STUDIES,
  CUSTOM_EVENTS_DELIVERABLES,
  CUSTOM_EVENTS_FAQ,
  CUSTOM_EVENTS_FORMATS,
  CUSTOM_EVENTS_HERO,
  CUSTOM_EVENTS_PAGE,
  CUSTOM_EVENTS_PROOF_BAR,
} from "@/content/services/detail/custom-events";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(CUSTOM_EVENTS_PAGE);

const customEventsCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Plan Your Custom Event",
  description:
    "The event that earns it must justify every element — the invitation, the room, the agenda, and the follow-up.",
  title: "Senior buyers protect their time.",
};

const customEventsRelatedServices = [
  { href: "/services/global-event-solutions/industry-events", title: "Industry Events" },
  {
    href: "/services/global-event-solutions/trade-show-booth-design",
    title: "Trade Show Booth Design",
  },
  {
    href: "/services/global-event-solutions/event-lead-generation",
    title: "Event Lead Generation",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={CUSTOM_EVENTS_CASE_STUDIES}
      ctaBanner={customEventsCtaBanner}
      deliverables={CUSTOM_EVENTS_DELIVERABLES}
      faq={CUSTOM_EVENTS_FAQ}
      hero={CUSTOM_EVENTS_HERO}
      page={CUSTOM_EVENTS_PAGE}
      parentPage={GES_PAGE}
      pricing={CUSTOM_EVENTS_FORMATS}
      proofBar={CUSTOM_EVENTS_PROOF_BAR}
      relatedServices={customEventsRelatedServices}
    />
  );
};

export default Page;
