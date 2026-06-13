import type { Metadata } from "next";

import { ContactUs } from "@/components/sections/ContactUs";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import CINEMATIC_CTA_SHARED from "@/content/shared/cinematic-cta.json";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  MARKET_INTELLIGENCE_CARDS,
  MARKET_INTELLIGENCE_CASE_STUDIES,
  MARKET_INTELLIGENCE_CTA,
  MARKET_INTELLIGENCE_DELIVERABLES,
  MARKET_INTELLIGENCE_FAQ,
  MARKET_INTELLIGENCE_HERO,
  MARKET_INTELLIGENCE_PAGE,
  MARKET_INTELLIGENCE_SPOTLIGHT,
} from "@/content/services/market-research/market-intelligence/content";

export const metadata: Metadata = getMarketingPageMetadata(MARKET_INTELLIGENCE_PAGE);

const contactCta = {
  ...CINEMATIC_CTA_SHARED,
  ...MARKET_INTELLIGENCE_CTA,
  badge: "Ready to Start",
  headingLines: [MARKET_INTELLIGENCE_CTA.title] as [string],
  primaryCta: {
    href: MARKET_INTELLIGENCE_CTA.ctaHref,
    label: MARKET_INTELLIGENCE_CTA.ctaLabel,
  },
};

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={MARKET_INTELLIGENCE_CASE_STUDIES}
      closingSections={<ContactUs {...contactCta} />}
      deliverables={MARKET_INTELLIGENCE_DELIVERABLES}
      deliverablesSectionType="carousel"
      faq={MARKET_INTELLIGENCE_FAQ}
      hero={MARKET_INTELLIGENCE_HERO}
      page={MARKET_INTELLIGENCE_PAGE}
      secondaryServices={MARKET_INTELLIGENCE_CARDS}
      secondaryServicesSectionType="grid"
      spotlight={MARKET_INTELLIGENCE_SPOTLIGHT}
    />
  );
};

export default Page;
