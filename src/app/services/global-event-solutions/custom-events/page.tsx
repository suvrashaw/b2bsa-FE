import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  CUSTOM_EVENTS_CASE_STUDIES,
  CUSTOM_EVENTS_DELIVERABLES,
  CUSTOM_EVENTS_FAQ,
  CUSTOM_EVENTS_FORMATS_SECTION,
  CUSTOM_EVENTS_HERO,
  CUSTOM_EVENTS_PAGE,
  CUSTOM_EVENTS_PROOF_BAR,
} from "@/content/services/detail/custom-events";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(CUSTOM_EVENTS_PAGE);

const customEventsContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Design Your Event",
  description:
    "Senior buyers protect their time. The event that earns it must justify every element, the invitation, the room, the agenda, and the follow-up.",
  headingLines: ["Senior Buyers", "Protect Their Time."] as [string, string],
  primaryCta: { href: "/contact", label: "Plan Your Custom Event" },
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
      closingSections={
        <>
          <FAQ {...CUSTOM_EVENTS_FAQ} />
          <RelatedServices services={customEventsRelatedServices} />
          <ContactCinematicCTA {...customEventsContactCta} />
        </>
      }
      deliverables={CUSTOM_EVENTS_DELIVERABLES}
      deliverablesSectionType="carousel"
      faq={CUSTOM_EVENTS_FAQ}
      hero={CUSTOM_EVENTS_HERO}
      page={CUSTOM_EVENTS_PAGE}
      parentPage={GES_PAGE}
      proofBar={CUSTOM_EVENTS_PROOF_BAR}
      secondaryServices={CUSTOM_EVENTS_FORMATS_SECTION}
      secondaryServicesSectionType="carousel"
    />
  );
};

export default Page;
