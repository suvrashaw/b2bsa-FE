import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  MARKET_INTELLIGENCE_CARDS,
  MARKET_INTELLIGENCE_CASE_STUDIES,
  MARKET_INTELLIGENCE_CONTACT_CTA,
  MARKET_INTELLIGENCE_DELIVERABLES,
  MARKET_INTELLIGENCE_FAQ,
  MARKET_INTELLIGENCE_HERO,
  MARKET_INTELLIGENCE_PAGE,
  MARKET_INTELLIGENCE_SPOTLIGHT,
} from "@/content/services/hpmi/human-powered-market-intelligence/content";

export const metadata: Metadata = getMarketingPageMetadata(
  MARKET_INTELLIGENCE_PAGE,
);

const Page = () => {
  return (
    <ServicePage
      caseStudies={MARKET_INTELLIGENCE_CASE_STUDIES}
      contactUs={MARKET_INTELLIGENCE_CONTACT_CTA}
      faq={MARKET_INTELLIGENCE_FAQ}
      hero={MARKET_INTELLIGENCE_HERO}
      page={MARKET_INTELLIGENCE_PAGE}
      secondaryServices={MARKET_INTELLIGENCE_CARDS}
      secondaryServicesSectionType="grid"
      services={MARKET_INTELLIGENCE_DELIVERABLES}
      servicesSectionType="carousel"
      spotlight={MARKET_INTELLIGENCE_SPOTLIGHT}
    />
  );
};

export default Page;
