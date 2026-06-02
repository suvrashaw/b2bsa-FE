import type { Metadata } from "next";

import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { ServiceHub } from "@/components/templates/ServiceHub";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  GES_CASE_STUDIES,
  GES_FAQ,
  GES_HERO,
  GES_PAGE,
  GES_PROCESS,
  GES_PROOF_BAR,
  GES_SERVICES,
  GES_WHY,
} from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(GES_PAGE);

const gesContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Ready to Build",
  description:
    "250+ events. $1.2B+ influenced. One team, one brief, one outcome. Let's build your event solutions strategy.",
  headingLines: ["250+ Events.", "$1.2B+ Influenced."] as [string, string],
  primaryCta: { href: "/contact", label: "Book a Free Strategy Session" },
};

const Page = () => {
  return (
    <ServiceHub
      caseStudies={GES_CASE_STUDIES}
      closingSections={<ContactCinematicCTA {...gesContactCta} />}
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
