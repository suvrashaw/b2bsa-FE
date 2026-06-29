import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  PERF_CASE_STUDIES,
  PERF_CLIENT_LOGOS,
  PERF_CONTACT_CTA,
  PERF_FAQ,
  PERF_HERO,
  PERF_INTRO,
  PERF_PAGE,
  PERF_PROCESS,
  PERF_SERVICES,
  PERF_WHY,
} from "@/content/services/digital-marketing/content";

export const metadata: Metadata = getMarketingPageMetadata(PERF_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={PERF_CASE_STUDIES}
      clientLogos={PERF_CLIENT_LOGOS}
      contactUs={PERF_CONTACT_CTA}
      faq={PERF_FAQ}
      hero={PERF_HERO}
      page={PERF_PAGE}
      process={PERF_PROCESS}
      services={PERF_SERVICES}
      spotlight={PERF_INTRO}
      why={PERF_WHY}
    />
  );
};

export default Page;
