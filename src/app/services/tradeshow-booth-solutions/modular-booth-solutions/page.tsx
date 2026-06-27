import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  MODULAR_BOOTHS_CASE_STUDIES,
  MODULAR_BOOTHS_CONTACT_CTA,
  MODULAR_BOOTHS_DELIVERABLES,
  MODULAR_BOOTHS_FAQ,
  MODULAR_BOOTHS_HERO,
  MODULAR_BOOTHS_PAGE,
  MODULAR_BOOTHS_PROOF_BAR,
  MODULAR_BOOTHS_RANGE_SECTION,
  MODULAR_BOOTHS_RELATED_SERVICES,
  MODULAR_BOOTHS_CLIENT_LOGOS,
  MODULAR_BOOTHS_WHY,
} from "@/content/services/tradeshow-booth-solutions/modular-booth-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(MODULAR_BOOTHS_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={MODULAR_BOOTHS_CASE_STUDIES}
      clientLogos={MODULAR_BOOTHS_CLIENT_LOGOS}
      contactUs={MODULAR_BOOTHS_CONTACT_CTA}
      faq={MODULAR_BOOTHS_FAQ}
      hero={MODULAR_BOOTHS_HERO}
      page={MODULAR_BOOTHS_PAGE}
      parentPage={GES_PAGE}
      proofBar={MODULAR_BOOTHS_PROOF_BAR}
      relatedServices={MODULAR_BOOTHS_RELATED_SERVICES}
      secondaryServices={MODULAR_BOOTHS_RANGE_SECTION}
      secondaryServicesSectionType="carousel"
      services={MODULAR_BOOTHS_DELIVERABLES}
      why={MODULAR_BOOTHS_WHY}
    />
  );
};

export default Page;
