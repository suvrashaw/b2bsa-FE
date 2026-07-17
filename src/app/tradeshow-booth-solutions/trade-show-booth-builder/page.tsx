import type { Metadata } from "next";

import Link from "next/link";

import { BasicCard } from "@/components/items/BasicCard";
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
  BOOTH_BUILDER_BLOGS_SECTION,
  BOOTH_BUILDER_CASE_STUDIES,
  BOOTH_BUILDER_CLIENT_LOGOS,
  BOOTH_BUILDER_CONTACT_CTA,
  BOOTH_BUILDER_DELIVERABLES,
  BOOTH_BUILDER_FAQ,
  BOOTH_BUILDER_FUTURE_READY,
  BOOTH_BUILDER_HERO,
  BOOTH_BUILDER_INTRO,
  BOOTH_BUILDER_PAGE,
  BOOTH_BUILDER_PRICING,
  BOOTH_BUILDER_PROCESS,
  BOOTH_BUILDER_WHY_CHOOSE_US,
} from "@/content/services/tradeshow-booth-solutions/trade-show-booth-builder/content";

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

const SHOWCASE_SERVICES = BOOTH_BUILDER_DELIVERABLES.items.map((item) => ({
  description: item.descriptions.join(" "),
  icon: item.icon,
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
          <Carousel cols={4} heading={BOOTH_BUILDER_WHY_CHOOSE_US.heading} id="why-choose-us">
            {BOOTH_BUILDER_WHY_CHOOSE_US.items.map((item, i) => (
              <WhyChooseUsCard index={i} item={item} key={item.title} />
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
          >
            {getBlogsByTags(BOOTH_BUILDER_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={BOOTH_BUILDER_FAQ}
      hero={BOOTH_BUILDER_HERO}
      page={BOOTH_BUILDER_PAGE}
      parentPage={BS_PAGE}
      preProcessSections={
        <ServicesStack
          cardCtaMode="none"
          commonCtaLabel={BOOTH_BUILDER_DELIVERABLES.ctaLabel}
          contactModal={EMPTY_CONTACT_MODAL}
          heading={BOOTH_BUILDER_DELIVERABLES.heading}
          serviceLabel=""
          services={SHOWCASE_SERVICES}
          showCommonCta
        />
      }
      preStudiesSections={
        <CardsGrid heading={BOOTH_BUILDER_FUTURE_READY.heading}>
          {BOOTH_BUILDER_FUTURE_READY.items.map((item) => (
            <BasicCard item={item} key={item.title} />
          ))}
        </CardsGrid>
      }
      process={BOOTH_BUILDER_PROCESS}
      spotlight={boothBuilderSpotlight}
    />
  );
};

export default Page;
