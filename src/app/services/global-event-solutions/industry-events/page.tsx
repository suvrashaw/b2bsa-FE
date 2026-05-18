import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  INDUSTRY_EVENTS_CASE_STUDIES,
  INDUSTRY_EVENTS_DELIVERABLES,
  INDUSTRY_EVENTS_FAQ,
  INDUSTRY_EVENTS_HERO,
  INDUSTRY_EVENTS_MARKETS_SECTION,
  INDUSTRY_EVENTS_PAGE,
  INDUSTRY_EVENTS_PROOF_BAR,
  INDUSTRY_EVENTS_WHY,
} from "@/content/services/detail/industry-events";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(INDUSTRY_EVENTS_PAGE);

const industryEventsCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Get a Free Event ROI Assessment",
  description: "",
  title:
    "The strongest strategy is not about showing up everywhere — it is about choosing the rooms where your buyers already gather.",
};

const industryEventsRelatedServices = [
  {
    href: "/services/global-event-solutions/trade-show-booth-design",
    title: "Trade Show Booth Design",
  },
  {
    href: "/services/global-event-solutions/event-lead-generation",
    title: "Event Lead Generation",
  },
  { href: "/services/global-event-solutions/custom-events", title: "Custom Events" },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={INDUSTRY_EVENTS_CASE_STUDIES}
      ctaBanner={industryEventsCtaBanner}
      deliverables={INDUSTRY_EVENTS_DELIVERABLES}
      faq={INDUSTRY_EVENTS_FAQ}
      hero={INDUSTRY_EVENTS_HERO}
      page={INDUSTRY_EVENTS_PAGE}
      parentPage={GES_PAGE}
      proofBar={INDUSTRY_EVENTS_PROOF_BAR}
      relatedServices={industryEventsRelatedServices}
      secondaryServices={INDUSTRY_EVENTS_MARKETS_SECTION}
      secondaryServicesSectionType="carousel"
      why={INDUSTRY_EVENTS_WHY}
    />
  );
};

export default Page;
