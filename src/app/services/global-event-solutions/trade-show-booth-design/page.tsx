import type { Metadata } from "next";

import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_DESIGN_CASE_STUDIES,
  BOOTH_DESIGN_DELIVERABLES,
  BOOTH_DESIGN_FAQ,
  BOOTH_DESIGN_HERO,
  BOOTH_DESIGN_PAGE,
  BOOTH_DESIGN_PRICING,
  BOOTH_DESIGN_PRICING_GUIDANCE,
  BOOTH_DESIGN_PROCESS,
  BOOTH_DESIGN_PROOF_BAR,
  BOOTH_DESIGN_WHY,
} from "@/content/services/detail/trade-show-booth-design";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_DESIGN_PAGE);

const boothDesignCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Start Your Design Project",
  description: "Build a custom trade show booth engineered for commercial momentum.",
  title: "Every square foot of your booth should earn its place.",
};

const boothDesignRelatedServices = [
  {
    href: "/services/global-event-solutions/event-lead-generation",
    title: "Event Lead Generation",
  },
  { href: "/services/global-event-solutions/custom-events", title: "Custom Events" },
  {
    href: "/services/global-event-solutions/event-booth-rental",
    title: "Event Booth Rental",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_DESIGN_CASE_STUDIES}
      ctaBanner={boothDesignCtaBanner}
      deliverables={BOOTH_DESIGN_DELIVERABLES}
      faq={BOOTH_DESIGN_FAQ}
      hero={BOOTH_DESIGN_HERO}
      page={BOOTH_DESIGN_PAGE}
      parentPage={GES_PAGE}
      pricing={BOOTH_DESIGN_PRICING}
      pricingGuidance={BOOTH_DESIGN_PRICING_GUIDANCE}
      process={BOOTH_DESIGN_PROCESS}
      proofBar={BOOTH_DESIGN_PROOF_BAR}
      relatedServices={boothDesignRelatedServices}
      why={BOOTH_DESIGN_WHY}
    />
  );
}

export default Page;
