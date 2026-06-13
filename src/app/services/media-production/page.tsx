import type { Metadata } from "next";

import { ContactUs } from "@/components/sections/ContactUs";
import { ServiceHub } from "@/components/templates/ServiceHub";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
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

const mediaContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Build Your Asset Library",
  description:
    "Content should keep working long after the campaign ends. Build video assets your team can use for months.",
  headingLines: ["Content Should", "Keep Working."] as [string, string],
  primaryCta: { href: "/contact", label: "Start Your Media Project" },
};

const Page = () => {
  return (
    <ServiceHub
      caseStudies={MEDIA_CASE_STUDIES}
      closingSections={<ContactUs {...mediaContactCta} />}
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
