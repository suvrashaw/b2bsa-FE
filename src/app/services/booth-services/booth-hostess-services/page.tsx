import type { Metadata } from "next";

import { BlogsCarousel } from "@/components/sections/BlogsCarousel";
import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_HOSTESS_BLOGS_SECTION,
  BOOTH_HOSTESS_CAPABILITIES,
  BOOTH_HOSTESS_CASE_STUDIES,
  BOOTH_HOSTESS_CONTACT_CTA,
  BOOTH_HOSTESS_DELIVERABLES,
  BOOTH_HOSTESS_FAQ,
  BOOTH_HOSTESS_IMAGE_HERO,
  BOOTH_HOSTESS_INDUSTRIES_SECTION,
  BOOTH_HOSTESS_INTRO,
  BOOTH_HOSTESS_PAGE,
  BOOTH_HOSTESS_PROOF_BAR,
  BOOTH_HOSTESS_RELATED_SERVICES,
  BOOTH_HOSTESS_WHY_CHOOSE_US,
} from "@/content/services/detail/booth-hostess";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_HOSTESS_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_HOSTESS_CASE_STUDIES}
      closingSections={
        <>
          <BoothWhyChooseUs {...BOOTH_HOSTESS_WHY_CHOOSE_US} />
          <BlogsCarousel heading={BOOTH_HOSTESS_BLOGS_SECTION.heading} posts={RENTAL_BLOG_POSTS} />
          <FAQAccordion {...BOOTH_HOSTESS_FAQ} />
          <RelatedServices services={BOOTH_HOSTESS_RELATED_SERVICES} />
          <ContactCinematicCTA {...BOOTH_HOSTESS_CONTACT_CTA} />
        </>
      }
      deliverables={BOOTH_HOSTESS_DELIVERABLES}
      faq={BOOTH_HOSTESS_FAQ}
      imageHero={BOOTH_HOSTESS_IMAGE_HERO}
      page={BOOTH_HOSTESS_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Request A Quote" />
          <ProcessTimeline
            phases={BOOTH_HOSTESS_CAPABILITIES.phases}
            showPhaseNumbers={false}
            title={BOOTH_HOSTESS_CAPABILITIES.title}
          />
          <ContactModalTrigger label="Book Booth Staff" />
        </>
      }
      proofBar={BOOTH_HOSTESS_PROOF_BAR}
      secondaryServices={BOOTH_HOSTESS_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      spotlight={BOOTH_HOSTESS_INTRO}
    />
  );
};

export default Page;
