import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { WhyChooseUsCard } from "@/components/items/WhyChooseUsCard";
import { CapabilityCard } from "@/components/items/CapabilityCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  EVENT_LOGISTICS_BENEFITS,
  EVENT_LOGISTICS_BLOGS_SECTION,
  EVENT_LOGISTICS_PROCESS,
  EVENT_LOGISTICS_CASE_STUDIES,
  EVENT_LOGISTICS_CLIENT_LOGOS,
  EVENT_LOGISTICS_CONTACT_CTA,
  EVENT_LOGISTICS_CTA,
  EVENT_LOGISTICS_DELIVERABLES,
  EVENT_LOGISTICS_FAQ,
  EVENT_LOGISTICS_IMAGE_HERO,
  EVENT_LOGISTICS_INDUSTRIES,
  EVENT_LOGISTICS_INTRO,
  EVENT_LOGISTICS_PAGE,
  EVENT_LOGISTICS_WHY_CHOOSE_US,
} from "@/content/services/tradeshow-booth-solutions/booth-logistics-services/content";
import { BS_PAGE } from "@/content/services/tradeshow-booth-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_LOGISTICS_PAGE);

const capabilityFeatures = EVENT_LOGISTICS_PROCESS.phases.map((phase) => ({
  description: phase.description,
  icon: phase.icon,
  id: phase.title
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, ""),
  image: phase.image,
  label: phase.title,
}));

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_LOGISTICS_CASE_STUDIES}
      clientLogos={EVENT_LOGISTICS_CLIENT_LOGOS}
      contactUs={EVENT_LOGISTICS_CONTACT_CTA}
      customSections={
        <>
          <Carousel cols={4} heading={EVENT_LOGISTICS_WHY_CHOOSE_US.heading} id="why-choose-us">
            {EVENT_LOGISTICS_WHY_CHOOSE_US.items.map((item, i) => (
              <WhyChooseUsCard index={i} item={item} key={item.title} />
            ))}
          </Carousel>
          <Carousel
            cols={4}
            heading={EVENT_LOGISTICS_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
          >
            {getBlogsByTags(EVENT_LOGISTICS_BLOGS_SECTION.tags).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={EVENT_LOGISTICS_FAQ}
      faqVariant="accordion"
      hero={EVENT_LOGISTICS_IMAGE_HERO}
      industries={EVENT_LOGISTICS_INDUSTRIES}
      page={EVENT_LOGISTICS_PAGE}
      parentPage={BS_PAGE}
      preProcessSections={
        <>
          <CardsGrid
            cols={3}
            description={EVENT_LOGISTICS_PROCESS.description}
            heading={EVENT_LOGISTICS_PROCESS.title}
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
          <ContactModalTrigger label={EVENT_LOGISTICS_CTA.label} />
        </>
      }
      preStudiesSections={
        <>
          <StickyScroll
            heading={EVENT_LOGISTICS_BENEFITS.heading}
            reasons={EVENT_LOGISTICS_BENEFITS.reasons}
            showCta={false}
          />
        </>
      }
      services={EVENT_LOGISTICS_DELIVERABLES}
      showServicesCommonCta
      spotlight={EVENT_LOGISTICS_INTRO}
    />
  );
};

export default Page;
