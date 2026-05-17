import type { Metadata } from "next";

import { ServiceHub } from "@/components/templates/ServiceHub";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  PERF_CASE_STUDIES,
  PERF_FAQ,
  PERF_HERO,
  PERF_PAGE,
  PERF_PROCESS,
  PERF_PROOF_BAR,
  PERF_SERVICES,
  PERF_WHY,
} from "@/content/services/performance-marketing";

export const metadata: Metadata = getMarketingPageMetadata(PERF_PAGE);

const performanceMarketingCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Request a Free Performance Marketing Audit",
  description:
    "A performance marketing audit reveals where spend is leaking and where pipeline can improve.",
  title: "Stop guessing. Start knowing.",
};

const Page = () => {
  return (
    <ServiceHub
      caseStudies={PERF_CASE_STUDIES}
      ctaBanner={performanceMarketingCtaBanner}
      faq={PERF_FAQ}
      hero={PERF_HERO}
      page={PERF_PAGE}
      process={PERF_PROCESS}
      proofBar={PERF_PROOF_BAR}
      services={PERF_SERVICES}
      why={PERF_WHY}
    />
  );
};

export default Page;
