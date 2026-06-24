import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Capabilities } from "@/components/sections/Capabilities";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { PERF_PAGE } from "@/content/services/digital-marketing/content";
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
} from "@/content/services/digital-marketing/social-media-marketing/content";

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
          <StickyScroll
            heading={SMM_CAMPAIGNS.heading}
            reasons={SMM_CAMPAIGNS.reasons}
            showCta={false}
          />

          <CardsGrid cols={3} heading={SMM_WHY_CHOOSE_US.heading}>
            {SMM_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>

          <Carousel
            cols={4}
            heading={SMM_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(["Social Media Marketing"]).map((post) => (
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
            cardCtaMode="none"
            commonCtaLabel="Contact Our Team"
            contactModal={servicesContactModal}
            showCommonCta
          />

          <Capabilities
            capabilities={SMM_CAPABILITIES_FEATURES}
            description={SMM_CAPABILITIES.description}
            heading={SMM_CAPABILITIES.heading}
          />

          <Capabilities
            capabilities={SMM_INDUSTRIES_FEATURES}
            heading={SMM_INDUSTRIES.heading}
            mediaPosition="left"
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
