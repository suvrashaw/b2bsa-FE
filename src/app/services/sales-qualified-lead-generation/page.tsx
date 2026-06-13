import type { Metadata } from "next";

import { ContactUs } from "@/components/sections/ContactUs";
import { ServiceHub } from "@/components/templates/ServiceHub";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
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

const sqlContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Pipeline-Ready Leads",
  description:
    "A lead is only valuable when your team can act on it with confidence. Give them prospects that are ready.",
  headingLines: ["Give Your Team", "Leads That Are Ready."] as [string, string],
  primaryCta: { href: "/contact", label: "Build Your SQL Generation Program" },
};

const Page = () => {
  return (
    <ServiceHub
      caseStudies={SQL_CASE_STUDIES}
      closingSections={<ContactUs {...sqlContactCta} />}
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
