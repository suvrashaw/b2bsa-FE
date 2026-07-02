import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  SQL_CASE_STUDIES,
  SQL_CLIENT_LOGOS,
  SQL_CONTACT_CTA,
  SQL_FAQ,
  SQL_HERO,
  SQL_INTRO,
  SQL_PAGE,
  SQL_PROCESS,
  SQL_SERVICES,
  SQL_WHY,
} from "@/content/services/sales-qualified-lead-generation/content";

export const metadata: Metadata = getMarketingPageMetadata(SQL_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={SQL_CASE_STUDIES}
      clientLogos={SQL_CLIENT_LOGOS}
      contactUs={SQL_CONTACT_CTA}
      faq={SQL_FAQ}
      hero={SQL_HERO}
      page={SQL_PAGE}
      process={SQL_PROCESS}
      services={SQL_SERVICES}
      spotlight={SQL_INTRO}
      why={SQL_WHY}
    />
  );
};

export default Page;
