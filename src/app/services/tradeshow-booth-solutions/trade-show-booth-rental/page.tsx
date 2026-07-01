import type { Metadata } from "next";

import { Coins, Move, Truck } from "lucide-react";
import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { RelatedServicesCard } from "@/components/items/RelatedServicesCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import { BOOTH_DESIGN_WHY_CHOOSE_US } from "@/content/services/tradeshow-booth-solutions/trade-show-booth-design/content";
import {
  BOOTH_RENTAL_BLOGS_SECTION,
  BOOTH_RENTAL_CASE_STUDIES,
  BOOTH_RENTAL_CLIENT_LOGOS,
  BOOTH_RENTAL_CONTACT_CTA,
  BOOTH_RENTAL_FAQ,
  BOOTH_RENTAL_HERO,
  BOOTH_RENTAL_INTRO,
  BOOTH_RENTAL_PAGE,
  BOOTH_RENTAL_PROCESS,
  BOOTH_RENTAL_RELATED_SERVICES,
  BOOTH_RENTAL_RENT_VS_BUY,
} from "@/content/services/tradeshow-booth-solutions/trade-show-booth-rental/content";

const BOOTH_RENTAL_RANGE_REASONS = [
  {
    description:
      "Branded back wall, counter, lighting, screen option, and lead capture setup. Fast to configure and deploy.",
    id: "rental-10x10",
    image: "/media/booth/10x10.avif",
    title: "10x10 Standard",
  },
  {
    description: "Room for product-led demos, a defined visitor journey, and a meeting zone.",
    id: "rental-10x20",
    image: "/media/booth/10x20.avif",
    title: "10x20 Inline",
  },
  {
    description: "Four-sided exhibition visibility with demo areas, meeting space, and AV support.",
    id: "rental-20x20",
    image: "/media/booth/20x20.avif",
    title: "20x20 Island",
  },
  {
    description:
      "Upper-level executive meeting suite + lower-level engagement zone for major global events.",
    id: "rental-double-deck",
    image: "/media/booth/30x30.avif",
    title: "Double-Deck",
  },
  {
    description:
      "Existing rental structures adapted with your full brand identity, messaging, and engagement zones.",
    id: "rental-custom",
    image: "/media/booth/40x40.avif",
    title: "Custom-Branded Rentals",
  },
];

const EMPTY_CONTACT_MODAL = {};

const RENTAL_SERVICES = BOOTH_RENTAL_RANGE_REASONS.map((item) => ({
  color: "brand-blue",
  description: item.description,
  icon: "Star",
  id: item.id,
  image: item.image,
  title: item.title,
}));

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_RENTAL_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={BOOTH_RENTAL_CASE_STUDIES}
      clientLogos={BOOTH_RENTAL_CLIENT_LOGOS}
      contactUs={BOOTH_RENTAL_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid className="pt-0" cols={3} heading="Explore Related Solutions">
            {BOOTH_RENTAL_RELATED_SERVICES.map((service, index) => (
              <RelatedServicesCard index={index} key={service.href} service={service} />
            ))}
          </CardsGrid>
          <Carousel
            cols={4}
            heading="Why Choose B2B Sales Arrow for Trade Show Booth Rental Services"
            id="why-choose-us" layout="carousel">
            {BOOTH_DESIGN_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={BOOTH_RENTAL_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(["Trade Show Booth Rental"]).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={BOOTH_RENTAL_FAQ}
      faqVariant="accordion"
      hero={BOOTH_RENTAL_HERO}
      page={BOOTH_RENTAL_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <CardsGrid
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
                  {reason.icon === "Coins" && <Coins className="size-20" strokeWidth={1.5} />}
                  {reason.icon === "Move" && <Move className="size-20" strokeWidth={1.5} />}
                  {reason.icon === "Truck" && <Truck className="size-20" strokeWidth={1.5} />}
                </div>
                <h3 className="mb-4 font-heading text-xl font-bold text-brand-charcoal">
                  {reason.title}
                </h3>
                <p className="text-base leading-relaxed text-brand-charcoal/65">
                  {reason.description}
                </p>
              </div>
            ))}
          </CardsGrid>
          <ServicesStack
            cardCtaMode="none"
            commonCtaLabel="Talk to an Expert"
            contactModal={EMPTY_CONTACT_MODAL}
            heading="Our Rental Booth Range"
            serviceLabel=""
            services={RENTAL_SERVICES}
          />
        </>
      }
      process={BOOTH_RENTAL_PROCESS}
      spotlight={BOOTH_RENTAL_INTRO}
    />
  );
};

export default Page;
