import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { ServiceHub } from "@/components/templates/ServiceHub";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  RESEARCH_CASE_STUDIES,
  RESEARCH_FAQ,
  RESEARCH_HERO,
  RESEARCH_PAGE,
  RESEARCH_PROCESS,
  RESEARCH_PROOF_BAR,
  RESEARCH_SERVICES,
  RESEARCH_WHY,
} from "@/content/services/market-research";

export const metadata: Metadata = getMarketingPageMetadata(RESEARCH_PAGE);

const marketResearchContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Intelligence First",
  description: "Own your competitive intelligence advantage.",
  headingLines: ["Own Your Competitive", "Intelligence Advantage."] as [string, string],
  primaryCta: { href: "/contact", label: "Start a Research Project" },
};

const Page = () => {
  return (
    <ServiceHub
      caseStudies={RESEARCH_CASE_STUDIES}
      closingSections={<ContactCinematicCTA {...marketResearchContactCta} />}
      faq={RESEARCH_FAQ}
      hero={RESEARCH_HERO}
      page={RESEARCH_PAGE}
      process={RESEARCH_PROCESS}
      proofBar={RESEARCH_PROOF_BAR}
      services={RESEARCH_SERVICES}
      why={RESEARCH_WHY}
    />
  );
};

export default Page;
