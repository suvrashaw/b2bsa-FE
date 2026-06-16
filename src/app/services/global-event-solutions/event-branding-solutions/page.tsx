import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { Capabilities } from "@/components/sections/Capabilities";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { ContactModalTrigger } from "@/components/ui/ContactModal";
import { RENTAL_BLOG_POSTS } from "@/content/blogs/data";
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
  EVENT_BRANDING_PROOF_BAR,
  EVENT_BRANDING_RELATED_SERVICES,
  EVENT_BRANDING_WHY_CHOOSE_US,
} from "@/content/services/global-event-solutions/event-branding-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_BRANDING_PAGE);

const capabilityAssets = [
  { icon: "Palette", image: "/images/events/event_other_1.avif" },
  { icon: "PenTool", image: "/images/events/event_other_2.avif" },
  { icon: "Monitor", image: "/images/events/event_other_3.avif" },
  { icon: "Printer", image: "/images/events/event_other_4.avif" },
  { icon: "Image", image: "/images/services/booth/booth-5.avif" },
  { icon: "Layers", image: "/images/home/testimonials/testimonial-1.avif" },
  { icon: "Layout", image: "/images/home/testimonials/testimonial-2.avif" },
  { icon: "Sparkles", image: "/images/home/why-choose-us/global_reach.avif" },
  { icon: "Type", image: "/images/home/why-choose-us/proven_execution.avif" },
  { icon: "Fingerprint", image: "/images/home/why-choose-us/strategic_creativity.avif" },
];

const capabilityFeatures = EVENT_BRANDING_CAPABILITIES.phases.map((phase, index) => ({
  description: phase.description,
  icon: capabilityAssets[index]?.icon ?? "Palette",
  id: phase.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/(^-|-$)/g, ""),
  image: capabilityAssets[index]?.image ?? "/images/events/event_other_1.avif",
  label: phase.title,
}));

const Page = () => {
  return (
    <ServicePage
      caseStudies={EVENT_BRANDING_CASE_STUDIES}
      clientLogosDescription="Leading enterprises trust our corporate event branding services to create visually engaging and memorable event experiences across conferences, exhibitions, and trade shows."
      clientLogosHeading="Trusted by Global Brands for Event Branding Solutions"
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
          />
          <ContactModalTrigger label="Talk to Branding Experts" />
        </>
      }
      proofBar={EVENT_BRANDING_PROOF_BAR}
      relatedServices={EVENT_BRANDING_RELATED_SERVICES}
      relatedServicesHeading="Related Event & Media Production Services"
      secondaryServices={EVENT_BRANDING_INDUSTRIES_SECTION}
      secondaryServicesSectionType="carousel"
      services={EVENT_BRANDING_DELIVERABLES}
      spotlight={EVENT_BRANDING_INTRO}
    />
  );
};

export default Page;
