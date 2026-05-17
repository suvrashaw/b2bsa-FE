import type { Metadata } from "next";

import { ServiceHub } from "@/components/templates/ServiceHub";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  SQL_CASE_STUDIES,
  SQL_FAQ,
  SQL_HERO,
  SQL_PAGE,
  SQL_PROCESS,
  SQL_PROOF_BAR,
  SQL_SERVICES,
  SQL_WHY,
} from "@/content/services/sales-qualified-lead-generation";

export const metadata: Metadata = getMarketingPageMetadata(SQL_PAGE);

const Page = () => {
  return (
    <ServiceHub
      caseStudies={SQL_CASE_STUDIES}
      faq={SQL_FAQ}
      hero={SQL_HERO}
      page={SQL_PAGE}
      process={SQL_PROCESS}
      proofBar={SQL_PROOF_BAR}
      services={SQL_SERVICES}
      why={SQL_WHY}
    />
  );
};

export default Page;
