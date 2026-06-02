import type { Metadata } from "next";

import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { RentalBlogsSection } from "@/components/sections/RentalBlogsSection";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { ContactModalTrigger } from "@/components/ui/ContactModalTrigger";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  CORP_NETWORKING_BLOGS_SECTION,
  CORP_NETWORKING_CAPABILITIES,
  CORP_NETWORKING_CASE_STUDIES,
  CORP_NETWORKING_CONTACT_CTA,
  CORP_NETWORKING_DELIVERABLES,
  CORP_NETWORKING_FAQ,
  CORP_NETWORKING_IMAGE_HERO,
  CORP_NETWORKING_INDUSTRIES_SECTION,
  CORP_NETWORKING_INTRO,
  CORP_NETWORKING_PAGE,
  CORP_NETWORKING_PROOF_BAR,
  CORP_NETWORKING_RELATED_SERVICES,
  CORP_NETWORKING_WHY_CHOOSE_US,
} from "@/content/services/detail/corporate-networking-events";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(CORP_NETWORKING_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={CORP_NETWORKING_CASE_STUDIES}
      closingSections={
        <>
          <BoothWhyChooseUs {...CORP_NETWORKING_WHY_CHOOSE_US} />
          <RentalBlogsSection
            heading={CORP_NETWORKING_BLOGS_SECTION.heading}
            posts={RENTAL_BLOG_POSTS}
          />
          <FAQAccordion {...CORP_NETWORKING_FAQ} />
          <RelatedServices services={CORP_NETWORKING_RELATED_SERVICES} />
          <ContactCinematicCTA {...CORP_NETWORKING_CONTACT_CTA} />
        </>
      }
      deliverables={CORP_NETWORKING_DELIVERABLES}
      faq={CORP_NETWORKING_FAQ}
      imageHero={CORP_NETWORKING_IMAGE_HERO}
      page={CORP_NETWORKING_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Get in Touch" />
          <ProcessTimeline
            phases={CORP_NETWORKING_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={CORP_NETWORKING_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Talk to Our Event Team" />
        </>
      }
      proofBar={CORP_NETWORKING_PROOF_BAR}
      secondaryServices={CORP_NETWORKING_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      spotlight={CORP_NETWORKING_INTRO}
    />
  );
};

export default Page;
