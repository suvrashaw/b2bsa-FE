import type { Metadata } from "next";

import { ServiceHub } from "@/components/templates/ServiceHub";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  MEDIA_CASE_STUDIES,
  MEDIA_FAQ,
  MEDIA_HERO,
  MEDIA_PAGE,
  MEDIA_PROCESS,
  MEDIA_PROOF_BAR,
  MEDIA_SERVICES,
  MEDIA_WHY,
} from "@/content/services/media-production";

export const metadata: Metadata = getMarketingPageMetadata(MEDIA_PAGE);

const mediaCtaBanner = {
  ctaHref: "/contact",
  ctaLabel: "Start Your Media Project",
  description: "",
  title: "Content should keep working long after the campaign ends. Build video assets your team can use for months.",
};

const Page = () => {
  return (
    <ServiceHub
      caseStudies={MEDIA_CASE_STUDIES}
      ctaBanner={mediaCtaBanner}
      faq={MEDIA_FAQ}
      hero={MEDIA_HERO}
      page={MEDIA_PAGE}
      process={MEDIA_PROCESS}
      proofBar={MEDIA_PROOF_BAR}
      services={MEDIA_SERVICES}
      why={MEDIA_WHY}
    />
  );
};

export default Page;
