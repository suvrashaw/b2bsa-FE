import type { Metadata } from "next";

import { Coins, Move, Truck } from "lucide-react";
import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { WhyChooseUsCard } from "@/components/items/WhyChooseUsCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { BS_PAGE } from "@/content/services/tradeshow-booth-solutions/content";
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
  BOOTH_RENTAL_RANGE,
  BOOTH_RENTAL_RENT_VS_BUY,
  BOOTH_RENTAL_WHY_CHOOSE_US,
} from "@/content/services/tradeshow-booth-solutions/trade-show-booth-rental/content";

const EMPTY_CONTACT_MODAL = {};

const RENTAL_SERVICES = BOOTH_RENTAL_RANGE.items.map((item) => ({
  description: item.description,
  icon: item.icon,
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
          <Carousel cols={4} heading={BOOTH_RENTAL_WHY_CHOOSE_US.heading} id="why-choose-us">
            {BOOTH_RENTAL_WHY_CHOOSE_US.items.map((item, i) => (
              <WhyChooseUsCard index={i} item={item} key={item.title} />
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
          >
            {getBlogsByTags(BOOTH_RENTAL_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={BOOTH_RENTAL_FAQ}
      faqVariant="accordion"
      hero={BOOTH_RENTAL_HERO}
      page={BOOTH_RENTAL_PAGE}
      parentPage={BS_PAGE}
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
            commonCtaLabel={BOOTH_RENTAL_RANGE.ctaLabel}
            contactModal={EMPTY_CONTACT_MODAL}
            heading={BOOTH_RENTAL_RANGE.heading}
            serviceLabel=""
            services={RENTAL_SERVICES}
            showCommonCta
          />
        </>
      }
      process={BOOTH_RENTAL_PROCESS}
      spotlight={BOOTH_RENTAL_INTRO}
    />
  );
};

export default Page;
