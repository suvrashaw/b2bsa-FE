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
  SMM_BLOGS_SECTION,
  SMM_CAMPAIGNS,
  SMM_CAPABILITIES,
  SMM_CAPABILITIES_FEATURES,
  SMM_CASE_STUDIES,
  SMM_CLIENT_LOGOS_HEADING,
  SMM_CONTACT_CTA,
  SMM_FAQ,
  SMM_HERO,
  SMM_INDUSTRIES,
  SMM_INDUSTRIES_FEATURES,
  SMM_INTRO,
  SMM_MODAL_SERVICE_FIELD,
  SMM_PAGE,
  SMM_RELATED_SERVICES,
  SMM_SERVICES,
  SMM_WHY_CHOOSE_US,
} from "@/content/services/performance-marketing/social-media-marketing-services/content";

export const metadata: Metadata = getMarketingPageMetadata(SMM_PAGE);

const servicesContactModal = {
  serviceField: SMM_MODAL_SERVICE_FIELD,
};

const Page = () => {
  return (
    <ServicePage
      caseStudies={SMM_CASE_STUDIES}
      clientLogosHeading={SMM_CLIENT_LOGOS_HEADING}
      contactUs={SMM_CONTACT_CTA}
      customSections={
        <>
          <StickyScroll heading={SMM_CAMPAIGNS.heading} reasons={SMM_CAMPAIGNS.reasons} showCta={false} />

          <CardsGrid cols={3} heading={SMM_WHY_CHOOSE_US.heading}>
            {SMM_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>

          <Carousel
            cols={4}
            heading={SMM_BLOGS_SECTION.heading}
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
      faq={SMM_FAQ}
      faqVariant="accordion"
      hero={SMM_HERO}
      page={SMM_PAGE}
      parentPage={PERF_PAGE}
      preProcessSections={
        <>
          <ServicesStack
            {...SMM_SERVICES}
            commonCtaLabel={SMM_SERVICES.ctaLabel}
            contactModal={servicesContactModal}
            showCardCtas={false}
            showCommonCta
          />

          <FeatureCarouselSection
            description={SMM_CAPABILITIES.description}
            features={SMM_CAPABILITIES_FEATURES}
            heading={SMM_CAPABILITIES.heading}
            showFeatureDescriptions={false}
          />

          <FeatureCarouselSection
            features={SMM_INDUSTRIES_FEATURES}
            heading={SMM_INDUSTRIES.heading}
            mediaPosition="left"
            showFeatureDescriptions={false}
          />
        </>
      }
      relatedServices={SMM_RELATED_SERVICES}
      relatedServicesHeading="Related Event & Media Production Services"
      spotlight={SMM_INTRO}
    />
  );
};

export default Page;
