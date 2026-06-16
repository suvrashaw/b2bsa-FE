import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { Capabilities } from "@/components/sections/Capabilities";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { RENTAL_BLOG_POSTS } from "@/content/blogs/data";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  CORP_NETWORKING_BLOGS_SECTION,
  CORP_NETWORKING_CAPABILITIES,
  CORP_NETWORKING_CASE_STUDIES,
  CORP_NETWORKING_CONTACT_CTA,
  CORP_NETWORKING_DELIVERABLES,
  CORP_NETWORKING_EVENT_TYPES,
  CORP_NETWORKING_FAQ,
  CORP_NETWORKING_IMAGE_HERO,
  CORP_NETWORKING_INDUSTRIES_SECTION,
  CORP_NETWORKING_INTRO,
  CORP_NETWORKING_PAGE,
  CORP_NETWORKING_RELATED_SERVICES,
  CORP_NETWORKING_WHY_CHOOSE_US,
} from "@/content/services/global-event-solutions/corporate-networking-events/content";

export const metadata: Metadata = getMarketingPageMetadata(CORP_NETWORKING_PAGE);

const servicesContactModal = {};

const capabilityAssets = [
  { icon: "Users", image: "/images/events/event_other_1.avif" },
  { icon: "MessageSquare", image: "/images/events/event_other_2.avif" },
  { icon: "CalendarCheck", image: "/images/events/event_other_3.avif" },
  { icon: "Globe2", image: "/images/events/event_other_4.avif" },
  { icon: "Star", image: "/images/services/booth/booth-5.avif" },
  { icon: "Zap", image: "/images/home/testimonials/testimonial-1.avif" },
  { icon: "Award", image: "/images/home/testimonials/testimonial-2.avif" },
  { icon: "ClipboardList", image: "/images/home/why-choose-us/global_reach.avif" },
  { icon: "Compass", image: "/images/home/why-choose-us/proven_execution.avif" },
  { icon: "Map", image: "/images/home/why-choose-us/strategic_creativity.avif" },
];

const capabilityFeatures = CORP_NETWORKING_CAPABILITIES.phases.map((phase, index) => ({
  description: phase.description,
  icon: capabilityAssets[index]?.icon ?? "Users",
  id: phase.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/(^-|-$)/g, ""),
  image: capabilityAssets[index]?.image ?? "/images/events/event_other_1.avif",
  label: phase.title,
}));

const Page = () => {
  return (
    <ServicePage
      caseStudies={CORP_NETWORKING_CASE_STUDIES}
      clientLogosDescription="Leading enterprises trust our corporate networking event services to deliver impactful networking experiences for executives, clients, partners, and business communities."
      clientLogosHeading="Trusted by Global Brands for Networking Event Solutions"
      contactUs={CORP_NETWORKING_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid cols={4} heading={CORP_NETWORKING_WHY_CHOOSE_US.heading} id="why-choose-us">
            {CORP_NETWORKING_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
          <Carousel
            cols={4}
            heading={CORP_NETWORKING_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            headingAlign="left"
            id="blogs"
            layout="carousel"
          >
            {RENTAL_BLOG_POSTS.map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={CORP_NETWORKING_FAQ}
      faqVariant="accordion"
      hero={CORP_NETWORKING_IMAGE_HERO}
      page={CORP_NETWORKING_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <Capabilities
          capabilities={capabilityFeatures}
          description={CORP_NETWORKING_CAPABILITIES.description}
          heading={CORP_NETWORKING_CAPABILITIES.title}
          mediaPosition="right"
        />
      }
      preStudiesSections={
        <ServicesStack
          {...CORP_NETWORKING_EVENT_TYPES}
          cardCtaMode="linked"
          commonCtaLabel="Contact Our Team"
          contactModal={servicesContactModal}
          showCommonCta
        />
      }
      relatedServices={CORP_NETWORKING_RELATED_SERVICES}
      relatedServicesHeading="Related Event Services"
      secondaryServices={CORP_NETWORKING_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      services={CORP_NETWORKING_DELIVERABLES}
      spotlight={CORP_NETWORKING_INTRO}
    />
  );
};

export default Page;
