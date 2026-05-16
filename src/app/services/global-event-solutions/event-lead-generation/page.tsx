import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
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

const eventLeadGenerationCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Build Your Lead Generation System",
  description: "Build a system that captures, qualifies, and routes every qualified conversation.",
  title: "Stop leaving trade show leads on the floor.",
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
      ctaBanner={eventLeadGenerationCtaBanner}
      deliverables={ELG_DELIVERABLES}
      faq={ELG_FAQ}
      hero={ELG_HERO}
      page={ELG_PAGE}
      parentPage={GES_PAGE}
      process={ELG_PROCESS}
      proofBar={ELG_PROOF_BAR}
      relatedServices={eventLeadGenerationRelatedServices}
      why={ELG_WHY}
    />
  );
}

export default Page;
