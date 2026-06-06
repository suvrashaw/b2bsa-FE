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
          <WhyChooseUs
            heading="Our Rental Booth Range"
            reasons={[
              { description: "Branded back wall, counter, lighting, screen option, and lead capture setup. Fast to configure and deploy.", id: "rental-10x10", image: "/images/booth/10x10.jpg", title: "10x10 Standard" },
              { description: "Room for product-led demos, a defined visitor journey, and a meeting zone.", id: "rental-10x20", image: "/images/booth/10x20.jpg", title: "10x20 Inline" },
              { description: "Four-sided exhibition visibility with demo areas, meeting space, and AV support.", id: "rental-20x20", image: "/images/booth/20x20.jpg", title: "20x20 Island" },
              { description: "Upper-level executive meeting suite + lower-level engagement zone for major global events.", id: "rental-double-deck", image: "/images/booth/30x30.png", title: "Double-Deck" },
              { description: "Existing rental structures adapted with your full brand identity, messaging, and engagement zones.", id: "rental-custom", image: "/images/booth/40x40.jpg", title: "Custom-Branded Rentals" },
            ]}
            showImagePanel
          />
        </>
      }
      process={BOOTH_RENTAL_PROCESS}
      proofBar={BOOTH_RENTAL_PROOF_BAR}
      why={BOOTH_RENTAL_WHY}
    />
  );
};

export default Page;
