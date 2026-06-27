import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { Capabilities } from "@/components/sections/Capabilities";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
import { getBlogsByTags } from "@/content/blogs";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  EVENT_BRANDING_BLOGS_SECTION,
  EVENT_BRANDING_CAPABILITIES,
  EVENT_BRANDING_CASE_STUDIES,
  EVENT_BRANDING_CONTACT_CTA,
  EVENT_BRANDING_DELIVERABLES,
  EVENT_BRANDING_FAQ,
  EVENT_BRANDING_IMAGE_HERO,
  EVENT_BRANDING_INDUSTRIES_SECTION,
  EVENT_BRANDING_INTRO,
  EVENT_BRANDING_PAGE,
  EVENT_BRANDING_RELATED_SERVICES,
  EVENT_BRANDING_CLIENT_LOGOS,
  EVENT_BRANDING_WHY_CHOOSE_US,
} from "@/content/services/global-event-solutions/event-branding-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_BRANDING_PAGE);

const capabilityAssets = [
  { icon: "Palette", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "PenTool", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Monitor", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Printer", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Image", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Layers", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Layout", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Sparkles", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Type", image: "/media/home/hero/home_hero_bg.avif" },
  { icon: "Fingerprint", image: "/media/home/hero/home_hero_bg.avif" },
];

const capabilityFeatures = EVENT_BRANDING_CAPABILITIES.phases.map((phase, index) => ({
  description: phase.description,
  icon: capabilityAssets[index]?.icon ?? "Palette",
  id: phase.title
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, ""),
  image: capabilityAssets[index]?.image ?? "/media/home/hero/home_hero_bg.avif",
  label: phase.title,
}));

const SECONDARY_SERVICES = {
  ...EVENT_BRANDING_INDUSTRIES_SECTION,
  showCapabilityDescriptions: false,
};

const BRANDING_SPOTLIGHT = {
  ...EVENT_BRANDING_INTRO,
  sectionClassName: "pt-8 md:pt-12",
};

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_BRANDING_CASE_STUDIES}
      clientLogos={EVENT_BRANDING_CLIENT_LOGOS}
      contactUs={EVENT_BRANDING_CONTACT_CTA}
      customSections={
        <>
          <CardsGrid cols={4} heading={EVENT_BRANDING_WHY_CHOOSE_US.heading} id="why-choose-us">
            {EVENT_BRANDING_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
          <Carousel
            cols={4}
            heading={EVENT_BRANDING_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="primary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            id="blogs"
            layout="carousel"
          >
            {getBlogsByTags(["Event Branding Solutions"]).map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </Carousel>
        </>
      }
      faq={EVENT_BRANDING_FAQ}
      faqVariant="accordion"
      hero={EVENT_BRANDING_IMAGE_HERO}
      page={EVENT_BRANDING_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <ContactModalTrigger label="Plan Your Event Branding" />
          <Capabilities
            capabilities={capabilityFeatures}
            description={EVENT_BRANDING_CAPABILITIES.description}
            heading={EVENT_BRANDING_CAPABILITIES.title}
            mediaPosition="right"
            showCapabilityDescriptions={false}
          />
          <ContactModalTrigger label="Talk to Branding Experts" />
        </>
      }
      spotlight={BRANDING_SPOTLIGHT}
      relatedServices={EVENT_BRANDING_RELATED_SERVICES}
      relatedServicesHeading="Related Event & Media Production Services"
      secondaryServices={SECONDARY_SERVICES}
      secondaryServicesSectionType="carousel"
      services={EVENT_BRANDING_DELIVERABLES}
    />
  );
};

export default Page;
