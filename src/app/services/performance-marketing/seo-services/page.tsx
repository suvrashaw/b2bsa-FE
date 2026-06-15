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
  SEO_BLOGS_SECTION,
  SEO_CAMPAIGNS,
  SEO_CASE_STUDIES,
  SEO_CLIENT_LOGOS_HEADING,
  SEO_CONTACT_CTA,
  SEO_FAQ,
  SEO_HERO,
  SEO_INTRO,
  SEO_MODAL_SERVICE_FIELD,
  SEO_PAGE,
  SEO_SERVICES,
} from "@/content/services/performance-marketing/seo-services/content";

export const metadata: Metadata = getMarketingPageMetadata(SEO_PAGE);

const servicesContactModal = {
  serviceField: SEO_MODAL_SERVICE_FIELD,
};

const Page = () => {
  return (
    <ServicePage
      caseStudies={SEO_CASE_STUDIES}
      clientLogosHeading={SEO_CLIENT_LOGOS_HEADING}
      contactUs={SEO_CONTACT_CTA}
      customSections={
        <>
          <StickyScroll heading={SEO_CAMPAIGNS.heading} reasons={SEO_CAMPAIGNS.reasons} showCta={false} />

          <Carousel
            cols={4}
            heading={SEO_BLOGS_SECTION.heading}
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
      faq={SEO_FAQ}
      faqVariant="accordion"
      hero={SEO_HERO}
      page={SEO_PAGE}
      parentPage={PERF_PAGE}
      preProcessSections={
        <ServicesStack
          {...SEO_SERVICES}
          cardCtaMode="linked"
          commonCtaLabel="Contact Our Team"
          contactModal={servicesContactModal}
          showCommonCta
        />
      }
      spotlight={SEO_INTRO}
    />
  );
};

export default Page;
