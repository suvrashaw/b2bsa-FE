import type { Metadata } from "next";

import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BoothWhyChooseUs } from "@/components/sections/BoothWhyChooseUs";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { RentalBlogsSection } from "@/components/sections/RentalBlogsSection";
import { RentVsBuySection } from "@/components/sections/RentVsBuySection";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { RENTAL_BLOG_POSTS } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_RENTAL_BLOGS_SECTION,
  BOOTH_RENTAL_CASE_STUDIES,
  BOOTH_RENTAL_CONTACT_CTA,
  BOOTH_RENTAL_FAQ,
  BOOTH_RENTAL_HERO,
  BOOTH_RENTAL_PAGE,
  BOOTH_RENTAL_PROCESS,
  BOOTH_RENTAL_PROOF_BAR,
  BOOTH_RENTAL_RELATED_SERVICES,
  BOOTH_RENTAL_RENT_VS_BUY,
  BOOTH_RENTAL_WHY,
} from "@/content/services/detail/event-booth-rental";
import {
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/detail/trade-show-booth-design";
import { GES_PAGE } from "@/content/services/global-event-solutions";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_RENTAL_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_RENTAL_CASE_STUDIES}
      closingSections={
        <>
          <RelatedServices services={BOOTH_RENTAL_RELATED_SERVICES} />
          <BoothWhyChooseUs
            heading="Why Choose B2B Sales Arrow for Booth Rental?"
            items={BOOTH_DESIGN_WHY_CHOOSE_US.items}
          />
          <RentalBlogsSection
            heading={BOOTH_RENTAL_BLOGS_SECTION.heading}
            posts={RENTAL_BLOG_POSTS}
          />
          <FAQAccordion {...BOOTH_RENTAL_FAQ} />
          <ContactCinematicCTA {...BOOTH_RENTAL_CONTACT_CTA} />
        </>
      }
      faq={BOOTH_RENTAL_FAQ}
      hero={BOOTH_RENTAL_HERO}
      page={BOOTH_RENTAL_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <RentVsBuySection
            description={BOOTH_RENTAL_RENT_VS_BUY.description}
            heading={BOOTH_RENTAL_RENT_VS_BUY.heading}
            reasons={BOOTH_RENTAL_RENT_VS_BUY.reasons}
          />
          <WhyChooseUs />
        </>
      }
      process={BOOTH_RENTAL_PROCESS}
      proofBar={BOOTH_RENTAL_PROOF_BAR}
      why={BOOTH_RENTAL_WHY}
    />
  );
};

export default Page;
