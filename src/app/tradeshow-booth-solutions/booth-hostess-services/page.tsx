import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { CapabilityCard } from "@/components/items/CapabilityCard";
import { WhyChooseUsCard } from "@/components/items/WhyChooseUsCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_HOSTESS_BLOGS_SECTION,
  BOOTH_HOSTESS_CASE_STUDIES,
  BOOTH_HOSTESS_CLIENT_LOGOS,
  BOOTH_HOSTESS_CONTACT_CTA,
  BOOTH_HOSTESS_DELIVERABLES,
  BOOTH_HOSTESS_FAQ,
  BOOTH_HOSTESS_IMAGE_HERO,
  BOOTH_HOSTESS_INDUSTRIES,
  BOOTH_HOSTESS_INTRO,
  BOOTH_HOSTESS_PAGE,
  BOOTH_HOSTESS_PROCESS,
  BOOTH_HOSTESS_WHY_CHOOSE_US,
} from "@/content/services/tradeshow-booth-solutions/booth-hostess-services/content";
import { BS_PAGE } from "@/content/services/tradeshow-booth-solutions/content";
import { buildCapabilityFeatures } from "@/lib";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_HOSTESS_PAGE);

const servicesContactModal = {};
const deliverableProps = {
  ...BOOTH_HOSTESS_DELIVERABLES,
  contactModal: servicesContactModal,
  showCardCtas: false,
};
const capabilityFeatures = buildCapabilityFeatures(BOOTH_HOSTESS_PROCESS.phases);

const Page = () => {
  return (
    <ServicePage
      caseStudies={BOOTH_HOSTESS_CASE_STUDIES}
      clientLogos={BOOTH_HOSTESS_CLIENT_LOGOS}
      contactUs={BOOTH_HOSTESS_CONTACT_CTA}
      customSections={
        <>
          <Carousel cols={4} heading={BOOTH_HOSTESS_WHY_CHOOSE_US.heading} id="why-choose-us">
            {BOOTH_HOSTESS_WHY_CHOOSE_US.items.map((item, i) => (
              <WhyChooseUsCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={BOOTH_HOSTESS_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(BOOTH_HOSTESS_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={BOOTH_HOSTESS_FAQ}
      hero={BOOTH_HOSTESS_IMAGE_HERO}
      industries={BOOTH_HOSTESS_INDUSTRIES}
      page={BOOTH_HOSTESS_PAGE}
      parentPage={BS_PAGE}
      preProcessSections={
        <CardsGrid
          cols={3}
          description={BOOTH_HOSTESS_PROCESS.description}
          heading={BOOTH_HOSTESS_PROCESS.heading}
        >
          {capabilityFeatures.map((item) => (
            <CapabilityCard
              description={item.description}
              icon={item.icon}
              key={item.id}
              title={item.label}
            />
          ))}
        </CardsGrid>
      }
      services={deliverableProps}
      showServicesCommonCta
      spotlight={BOOTH_HOSTESS_INTRO}
    />
  );
};

export default Page;
