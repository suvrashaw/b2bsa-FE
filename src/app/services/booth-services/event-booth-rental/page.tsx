import type { Metadata } from "next";

import { Coins, Move, Truck } from "lucide-react";
import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardSection } from "@/components/sections/CardSection";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { Button } from "@/components/ui/Button";
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
import { BOOTH_DESIGN_WHY_CHOOSE_US } from "@/content/services/detail/trade-show-booth-design";
import { GES_PAGE } from "@/content/services/global-event-solutions";

const BOOTH_RENTAL_RANGE_REASONS = [
  {
    description:
      "Branded back wall, counter, lighting, screen option, and lead capture setup. Fast to configure and deploy.",
    id: "rental-10x10",
    image: "/images/booth/10x10.jpg",
    title: "10x10 Standard",
  },
  {
    description: "Room for product-led demos, a defined visitor journey, and a meeting zone.",
    id: "rental-10x20",
    image: "/images/booth/10x20.jpg",
    title: "10x20 Inline",
  },
  {
    description: "Four-sided exhibition visibility with demo areas, meeting space, and AV support.",
    id: "rental-20x20",
    image: "/images/booth/20x20.jpg",
    title: "20x20 Island",
  },
  {
    description:
      "Upper-level executive meeting suite + lower-level engagement zone for major global events.",
    id: "rental-double-deck",
    image: "/images/booth/30x30.avif",
    title: "Double-Deck",
  },
  {
    description:
      "Existing rental structures adapted with your full brand identity, messaging, and engagement zones.",
    id: "rental-custom",
    image: "/images/booth/40x40.jpg",
    title: "Custom-Branded Rentals",
  },
];

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_RENTAL_PAGE);

const Page = () => {
  return (
    <ServiceDetail
      caseStudies={BOOTH_RENTAL_CASE_STUDIES}
      closingSections={
        <>
          <RelatedServices services={BOOTH_RENTAL_RELATED_SERVICES} />
          <CardSection cols={4} heading="Why Choose B2B Sales Arrow for Booth Rental?" id="why-choose-us" layout="grid">
            {BOOTH_DESIGN_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardSection>
          <CardSection
            cols={4}
            heading={BOOTH_RENTAL_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            headingAlign="left"
            id="blogs"
            layout="carousel"
          >
            {RENTAL_BLOG_POSTS.map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </CardSection>
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
          <CardSection
            cols={3}
            description={BOOTH_RENTAL_RENT_VS_BUY.description}
            heading={BOOTH_RENTAL_RENT_VS_BUY.heading}
          >
            {BOOTH_RENTAL_RENT_VS_BUY.reasons.map((reason) => (
              <div
                className="flex w-full flex-col items-center border-b border-brand-charcoal/15 px-10 py-12 text-center last:border-b-0 sm:border-r md:border-b-0 md:py-8 sm:[&:last-child]:border-r-0 sm:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0"
                key={reason.title}
              >
                <div className="mb-6 flex items-center justify-center text-brand-blue">
                  {reason.icon === "Coins" && <Coins className="h-20 w-20" strokeWidth={1.5} />}
                  {reason.icon === "Move" && <Move className="h-20 w-20" strokeWidth={1.5} />}
                  {reason.icon === "Truck" && <Truck className="h-20 w-20" strokeWidth={1.5} />}
                </div>
                <h3 className="mb-4 font-heading text-xl font-bold text-brand-charcoal">
                  {reason.title}
                </h3>
                <p className="text-base leading-relaxed text-brand-charcoal/65">
                  {reason.description}
                </p>
              </div>
            ))}
          </CardSection>
          <StickyScroll
            heading="Our Rental Booth Range"
            reasons={BOOTH_RENTAL_RANGE_REASONS}
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
