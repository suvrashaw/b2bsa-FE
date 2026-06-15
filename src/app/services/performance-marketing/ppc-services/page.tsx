import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { Carousel } from "@/components/sections/Carousel";
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
  PPC_CASE_STUDIES,
  PPC_CLIENT_LOGOS_HEADING,
  PPC_CONTACT_CTA,
  PPC_FAQ,
  PPC_HERO,
  PPC_INTRO,
  PPC_MODAL_SERVICE_FIELD,
  PPC_PAGE,
  PPC_SERVICES,
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
        <ServicesStack
          {...PPC_SERVICES}
          commonCtaLabel={PPC_SERVICES.ctaLabel}
          contactModal={servicesContactModal}
          showCardCtas={false}
          showCommonCta
        />
      }
      spotlight={PPC_INTRO}
    />
  );
};

export default Page;
