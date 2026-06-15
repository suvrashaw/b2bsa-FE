import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { FeatureCarouselSection } from "@/components/sections/FeatureCarouselSection";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { RENTAL_BLOG_POSTS } from "@/content/blogs/data";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { PERF_PAGE } from "@/content/services/performance-marketing/content";
import {
  PPC_BLOGS_SECTION,
  PPC_CAMPAIGNS,
  PPC_CAPABILITIES,
  PPC_CAPABILITIES_FEATURES,
  PPC_CASE_STUDIES,
  PPC_CLIENT_LOGOS_HEADING,
  PPC_CONTACT_CTA,
  PPC_FAQ,
  PPC_HERO,
  PPC_INDUSTRIES,
  PPC_INDUSTRIES_FEATURES,
  PPC_INTRO,
  PPC_MODAL_SERVICE_FIELD,
  PPC_PAGE,
  PPC_RELATED_SERVICES,
  PPC_SERVICES,
  PPC_WHY_CHOOSE_US,
} from "@/content/services/performance-marketing/ppc-services/content";

export const metadata: Metadata = getMarketingPageMetadata(PPC_PAGE);

const servicesContactModal = {
  serviceField: PPC_MODAL_SERVICE_FIELD,
};

const Page = () => {
  return (
    <ServicePage
      caseStudies={PPC_CASE_STUDIES}
      clientLogosHeading={PPC_CLIENT_LOGOS_HEADING}
      contactUs={PPC_CONTACT_CTA}
      customSections={
        <>
          <StickyScroll heading={PPC_CAMPAIGNS.heading} reasons={PPC_CAMPAIGNS.reasons} showCta={false} />

          <CardsGrid cols={3} heading={PPC_WHY_CHOOSE_US.heading}>
            {PPC_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>

          <Carousel
            cols={4}
            heading={PPC_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            headingAlign="left"
            id="blogs"
          >
            {RENTAL_BLOG_POSTS.map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={PPC_FAQ}
      faqVariant="accordion"
      hero={PPC_HERO}
      page={PPC_PAGE}
      parentPage={PERF_PAGE}
      preProcessSections={
        <>
          <ServicesStack
            {...PPC_SERVICES}
            commonCtaLabel={PPC_SERVICES.ctaLabel}
            contactModal={servicesContactModal}
            showCardCtas={false}
            showCommonCta
          />

          <FeatureCarouselSection
            description={PPC_CAPABILITIES.description}
            features={PPC_CAPABILITIES_FEATURES}
            heading={PPC_CAPABILITIES.heading}
            showFeatureDescriptions={false}
          />

          <FeatureCarouselSection
            features={PPC_INDUSTRIES_FEATURES}
            heading={PPC_INDUSTRIES.heading}
            mediaPosition="left"
            showFeatureDescriptions={false}
          />
        </>
      }
      relatedServices={PPC_RELATED_SERVICES}
      relatedServicesHeading="Related Performance Marketing Services"
      spotlight={PPC_INTRO}
    />
  );
};

export default Page;
