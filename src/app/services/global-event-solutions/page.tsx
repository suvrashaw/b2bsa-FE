import type { Metadata } from "next";

import { ServiceHub } from "@/components/templates/ServiceHub";
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

const gesCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Book a Free Strategy Session",
  description: "Let's build your event solutions strategy.",
  title: "250+ events. $1.2B+ influenced. One team, one brief, one outcome.",
};

const Page = () => {
  return (
    <ServiceHub
      caseStudies={GES_CASE_STUDIES}
      ctaBanner={gesCtaBanner}
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
