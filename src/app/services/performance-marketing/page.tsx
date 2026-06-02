import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { ServiceHub } from "@/components/templates/ServiceHub";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
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

const performanceMarketingContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Audit Your Pipeline",
  description:
    "Stop guessing. Start knowing. A performance marketing audit reveals where spend is leaking and where pipeline can improve.",
  headingLines: ["Stop Guessing.", "Start Knowing."] as [string, string],
  primaryCta: { href: "/contact", label: "Request a Free Performance Marketing Audit" },
};

const Page = () => {
  return (
    <ServiceHub
      caseStudies={PERF_CASE_STUDIES}
      closingSections={<ContactCinematicCTA {...performanceMarketingContactCta} />}
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
