import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { PERF_PAGE } from "@/content/services/digital-marketing/content";
import {
  SEO_BLOGS_SECTION,
  SEO_CASE_STUDIES,
  SEO_CLIENT_LOGOS,
  SEO_CONTACT_CTA,
  SEO_FAQ,
  SEO_HERO,
  SEO_INTRO,
  SEO_MODAL_SERVICE_FIELD,
  SEO_PAGE,
  SEO_SERVICES,
  SEO_WHY_CHOOSE_US,
} from "@/content/services/digital-marketing/seo-services/content";

export const metadata: Metadata = getMarketingPageMetadata(SEO_PAGE);

const servicesContactModal = {
  serviceField: SEO_MODAL_SERVICE_FIELD,
};

const Page = () => {
  return (
    <ServicePage
      caseStudies={SEO_CASE_STUDIES}
      clientLogos={SEO_CLIENT_LOGOS}
      contactUs={SEO_CONTACT_CTA}
      customSections={
        <>
          <Carousel
            cols={3}
            heading={SEO_WHY_CHOOSE_US.heading}
            id="why-choose-us"
            layout="carousel"
          >
            {SEO_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>

          <Carousel
            cols={4}
            heading={SEO_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(["Seo Services"]).map((post) => (
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
        <ServicesStack {...SEO_SERVICES} cardCtaMode="none" commonCtaLabel="Contact Our Team" contactModal={servicesContactModal} showCommonCta />
      }
      spotlight={SEO_INTRO}
    />
  );
};

export default Page;
