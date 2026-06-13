import type { Metadata } from "next";

import { ContactUs } from "@/components/sections/ContactUs";
import { ServiceHub } from "@/components/templates/ServiceHub";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BS_CASE_STUDIES,
  BS_FAQ,
  BS_HERO,
  BS_PAGE,
  BS_PROCESS,
  BS_PROOF_BAR,
  BS_SERVICES,
  BS_WHY,
} from "@/content/services/booth-services";

export const metadata: Metadata = getMarketingPageMetadata(BS_PAGE);

const bsContactCta = {
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
      caseStudies={BS_CASE_STUDIES}
      closingSections={<ContactUs {...bsContactCta} />}
      faq={BS_FAQ}
      hero={BS_HERO}
      page={BS_PAGE}
      process={BS_PROCESS}
      proofBar={BS_PROOF_BAR}
      services={BS_SERVICES}
      why={BS_WHY}
    />
  );
};

export default Page;
