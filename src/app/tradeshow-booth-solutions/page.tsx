import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BS_CASE_STUDIES,
  BS_CLIENT_LOGOS,
  BS_CONTACT_CTA,
  BS_FAQ,
  BS_HERO,
  BS_INTRO,
  BS_PAGE,
  BS_PROCESS,
  BS_SERVICES,
  BS_WHY,
} from "@/content/services/tradeshow-booth-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(BS_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={BS_CASE_STUDIES}
      clientLogos={BS_CLIENT_LOGOS}
      contactUs={BS_CONTACT_CTA}
      faq={BS_FAQ}
      hero={BS_HERO}
      page={BS_PAGE}
      process={BS_PROCESS}
      services={BS_SERVICES}
      spotlight={BS_INTRO}
      why={BS_WHY}
    />
  );
};

export default Page;
