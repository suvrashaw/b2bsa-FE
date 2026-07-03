import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { IndustryShaderCard } from "@/components/items/IndustryShaderCard";
import { Capabilities } from "@/components/sections/Capabilities";
import { Carousel } from "@/components/sections/Carousel";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { PERF_PAGE } from "@/content/services/digital-marketing/content";
import {
  SMM_BLOGS_SECTION,
  SMM_CAMPAIGNS,
  SMM_CAPABILITIES,
  SMM_CAPABILITIES_FEATURES,
  SMM_CASE_STUDIES,
  SMM_CLIENT_LOGOS,
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
      clientLogos={SMM_CLIENT_LOGOS}
      contactUs={SMM_CONTACT_CTA}
      customSections={
        <>
          <StickyScroll
            heading={SMM_CAMPAIGNS.heading}
            reasons={SMM_CAMPAIGNS.reasons}
            showCta={false}
          />

          <Carousel
            cols={3}
            heading={SMM_WHY_CHOOSE_US.heading}
            id="why-choose-us"
            layout="carousel"
          >
            {SMM_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>

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
          <ServicesStack {...SMM_SERVICES} cardCtaMode="none" commonCtaLabel="Contact Our Team" contactModal={servicesContactModal} showCommonCta />

          <Capabilities
            capabilities={SMM_CAPABILITIES_FEATURES}
            description={SMM_CAPABILITIES.description}
            heading={SMM_CAPABILITIES.heading}
          />

          <section className="bg-brand-gray py-14 md:py-20" id="industries">
            <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
              <SectionHeader as="h2" className="mb-10 text-center">
                {SMM_INDUSTRIES.heading}
              </SectionHeader>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {SMM_INDUSTRIES_FEATURES.map((industry, i) => (
                  <IndustryShaderCard
                    icon={industry.icon}
                    index={i}
                    key={industry.id}
                    title={industry.label}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      }
      relatedServices={SMM_RELATED_SERVICES}
      spotlight={SMM_INTRO}
    />
  );
};

export default Page;
