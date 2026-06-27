import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  GES_CASE_STUDIES,
  GES_CONTACT_CTA,
  GES_FAQ,
  GES_HERO,
  GES_PAGE,
  GES_PROCESS,
  GES_PROOF_BAR,
  GES_SERVICES,
  GES_CLIENT_LOGOS,
  GES_WHY,
} from "@/content/services/global-event-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(GES_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={GES_CASE_STUDIES}
      clientLogos={GES_CLIENT_LOGOS}
      contactUs={GES_CONTACT_CTA}
      faq={GES_FAQ}
      hero={GES_HERO}
      page={GES_PAGE}
      process={GES_PROCESS}
      proofBar={GES_PROOF_BAR}
      services={GES_SERVICES}
      why={GES_WHY}
    />
  );
};

export default Page;
