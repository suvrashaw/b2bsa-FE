import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  ELG_CASE_STUDIES,
  ELG_DELIVERABLES,
  ELG_FAQ,
  ELG_HERO,
  ELG_PAGE,
  ELG_PROCESS,
  ELG_PROOF_BAR,
  ELG_WHY,
} from "@/content/services/detail/event-lead-generation";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(ELG_PAGE);

const eventLeadGenerationContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Capture Every Lead",
  description:
    "Stop leaving trade show leads on the floor. Build a system that captures, qualifies, and routes every qualified conversation.",
  headingLines: ["Stop Leaving", "Leads on the Floor."] as [string, string],
  primaryCta: { href: "/contact", label: "Build Your Lead Generation System" },
};

const eventLeadGenerationRelatedServices = [
  {
    href: "/services/global-event-solutions/trade-show-booth-design",
    title: "Trade Show Booth Design",
  },
  { href: "/services/global-event-solutions/industry-events", title: "Industry Events" },
  {
    href: "/services/global-event-solutions/event-booth-rental",
    title: "Event Booth Rental",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={ELG_CASE_STUDIES}
      closingSections={
        <>
          <FAQ {...ELG_FAQ} />
          <RelatedServices services={eventLeadGenerationRelatedServices} />
          <ContactCinematicCTA {...eventLeadGenerationContactCta} />
        </>
      }
      deliverables={ELG_DELIVERABLES}
      deliverablesSectionType="carousel"
      faq={ELG_FAQ}
      hero={ELG_HERO}
      page={ELG_PAGE}
      parentPage={GES_PAGE}
      process={ELG_PROCESS}
      proofBar={ELG_PROOF_BAR}
      why={ELG_WHY}
    />
  );
};

export default Page;
