import type { Metadata } from "next";

import Link from "next/link";

import { BasicCards } from "@/components/items/BasicCards";
import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  BOOTH_BUILDER_BLOGS_SECTION,
  BOOTH_BUILDER_CASE_STUDIES,
  BOOTH_BUILDER_CLIENT_LOGOS,
  BOOTH_BUILDER_CONTACT_CTA,
  BOOTH_BUILDER_FAQ,
  BOOTH_BUILDER_FUTURE_READY,
  BOOTH_BUILDER_HERO,
  BOOTH_BUILDER_INTRO,
  BOOTH_BUILDER_PAGE,
  BOOTH_BUILDER_PRICING,
  BOOTH_BUILDER_PROCESS,
} from "@/content/services/tradeshow-booth-solutions/trade-show-booth-builder/content";
import {
  BOOTH_DESIGN_SHOWCASE_ITEMS,
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/tradeshow-booth-solutions/trade-show-booth-design/content";

const pageMetadata = getMarketingPageMetadata(BOOTH_BUILDER_PAGE);

export const metadata: Metadata = {
  ...pageMetadata,
  title: {
    absolute: BOOTH_BUILDER_PAGE.seo.title,
  },
};

const boothBuilderSpotlight = {
  ...BOOTH_BUILDER_INTRO,
  className: "[&_p]:max-w-5xl",
};

const EMPTY_CONTACT_MODAL = {};

const SHOWCASE_SERVICES = BOOTH_DESIGN_SHOWCASE_ITEMS.map((item) => ({
  color: "brand-blue",
  description: item.descriptions.join(" "),
  icon: "Star",
  id: item.id,
  image: item.image,
  title: item.heading,
}));

const Page = () => {
  return (
    <ServicePage
      caseStudies={BOOTH_BUILDER_CASE_STUDIES}
      clientLogos={BOOTH_BUILDER_CLIENT_LOGOS}
      contactUs={BOOTH_BUILDER_CONTACT_CTA}
      creativePricing={BOOTH_BUILDER_PRICING}
      customSections={
        <>
          <Carousel
            cols={4}
            heading="Why Choose B2B Sales Arrow for Trade Show Booth Builder Services"
            id="why-choose-us"
            layout="carousel"
          >
            {BOOTH_DESIGN_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={BOOTH_BUILDER_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(BOOTH_BUILDER_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={BOOTH_BUILDER_FAQ}
      faqVariant="accordion"
      hero={BOOTH_BUILDER_HERO}
      page={BOOTH_BUILDER_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <ServicesStack
          cardCtaMode="none"
          commonCtaLabel="Contact Our Team"
          contactModal={EMPTY_CONTACT_MODAL}
          heading="Booth Sizes and Formats We Design"
          serviceLabel=""
          services={SHOWCASE_SERVICES}
          showCommonCta
        />
      }
      preStudiesSections={
        <CardsGrid heading={BOOTH_BUILDER_FUTURE_READY.heading}>
          {BOOTH_BUILDER_FUTURE_READY.items.map((item) => (
            <BasicCards item={item} key={item.title} />
          ))}
        </CardsGrid>
      }
      process={BOOTH_BUILDER_PROCESS}
      spotlight={boothBuilderSpotlight}
    />
  );
};

export default Page;
