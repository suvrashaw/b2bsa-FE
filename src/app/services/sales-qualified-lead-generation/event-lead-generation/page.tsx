import type { Metadata } from "next";

import { ServicePage } from "@/components/templates/ServicePage";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { SQL_PAGE } from "@/content/services/sales-qualified-lead-generation/content";
import {
  EVENT_LEAD_CASE_STUDIES,
  EVENT_LEAD_CONTACT_CTA,
  EVENT_LEAD_FAQ,
  EVENT_LEAD_HERO,
  EVENT_LEAD_PAGE,
  EVENT_LEAD_PROCESS,
  EVENT_LEAD_PROOF_BAR,
  EVENT_LEAD_SERVICES,
  EVENT_LEAD_CLIENT_LOGOS,
  EVENT_LEAD_WHY,
} from "@/content/services/sales-qualified-lead-generation/event-lead-generation/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_LEAD_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_LEAD_CASE_STUDIES}
      clientLogos={EVENT_LEAD_CLIENT_LOGOS}
      contactUs={EVENT_LEAD_CONTACT_CTA}
      faq={EVENT_LEAD_FAQ}
      hero={EVENT_LEAD_HERO}
      page={EVENT_LEAD_PAGE}
      parentPage={SQL_PAGE}
      process={EVENT_LEAD_PROCESS}
      proofBar={EVENT_LEAD_PROOF_BAR}
      services={EVENT_LEAD_SERVICES}
      why={EVENT_LEAD_WHY}
    />
  );
};

export default Page;
