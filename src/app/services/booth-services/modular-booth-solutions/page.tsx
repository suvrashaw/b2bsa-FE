import type { Metadata } from "next";

import { FAQCard } from "@/components/items/FAQCard";
import { CardSection } from "@/components/sections/CardSection";
import { ContactUs } from "@/components/sections/ContactUs";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { CINEMATIC_CTA_SHARED } from "@/content/cinematic-cta-shared";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  MODULAR_BOOTHS_CASE_STUDIES,
  MODULAR_BOOTHS_DELIVERABLES,
  MODULAR_BOOTHS_FAQ,
  MODULAR_BOOTHS_HERO,
  MODULAR_BOOTHS_PAGE,
  MODULAR_BOOTHS_PROOF_BAR,
  MODULAR_BOOTHS_RANGE_SECTION,
  MODULAR_BOOTHS_WHY,
} from "@/content/services/detail/modular-portable-booths";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(MODULAR_BOOTHS_PAGE);

const modularBoothsContactCta = {
  ...CINEMATIC_CTA_SHARED,
  badge: "Flexible Presence",
  description: "One booth system. Every event. Any market.",
  headingLines: ["One Booth System.", "Every Event. Any Market."] as [string, string],
  primaryCta: { href: "/contact", label: "Get a Modular Booth Quote" },
};

const modularPortableBoothsRelatedServices = [
  {
    href: "/services/booth-services/event-booth-rental",
    title: "Event Booth Rental",
  },
  {
    href: "/services/booth-services/trade-show-booth-design",
    title: "Trade Show Booth Design",
  },
  {
    href: "/services/booth-services/trade-show-booth-builder",
    title: "Trade Show Booth Builder",
  },
];

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={MODULAR_BOOTHS_CASE_STUDIES}
      closingSections={
        <>
          <CardSection description={MODULAR_BOOTHS_FAQ.description} heading={MODULAR_BOOTHS_FAQ.heading} id="faq" layout="carousel">
            {MODULAR_BOOTHS_FAQ.faqs.map((f) => (
              <FAQCard answer={f.answer} image={f.image} key={f.id} question={f.question} />
            ))}
          </CardSection>
          <RelatedServices services={modularPortableBoothsRelatedServices} />
          <ContactUs {...modularBoothsContactCta} />
        </>
      }
      deliverables={MODULAR_BOOTHS_DELIVERABLES}
      faq={MODULAR_BOOTHS_FAQ}
      hero={MODULAR_BOOTHS_HERO}
      page={MODULAR_BOOTHS_PAGE}
      parentPage={GES_PAGE}
      proofBar={MODULAR_BOOTHS_PROOF_BAR}
      secondaryServices={MODULAR_BOOTHS_RANGE_SECTION}
      secondaryServicesSectionType="carousel"
      why={MODULAR_BOOTHS_WHY}
    />
  );
};

export default Page;
