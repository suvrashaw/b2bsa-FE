import type { Metadata } from "next";

import Link from "next/link";

import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { EventsCard } from "@/components/items/EventsCard";
import { CardSection } from "@/components/sections/CardSection";
import { GridSection } from "@/components/sections/GridSection";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { RENTAL_BLOG_POSTS } from "@/content/blogs/data";
import { getDefaultEvents } from "@/content/events-utils";
import { HOME_EVENTS_CONTENT } from "@/content/home/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_DESIGN_BLOGS_SECTION,
  BOOTH_DESIGN_CASE_STUDIES,
  BOOTH_DESIGN_CONTACT_CTA,
  BOOTH_DESIGN_DELIVERABLES,
  BOOTH_DESIGN_FAQ,
  BOOTH_DESIGN_HERO,
  BOOTH_DESIGN_PAGE,
  BOOTH_DESIGN_PROCESS,
  BOOTH_DESIGN_PROOF_BAR,
  BOOTH_DESIGN_RELATED_SERVICES,
  BOOTH_DESIGN_SHOWCASE_ITEMS,
  BOOTH_DESIGN_SPOTLIGHT,
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/booth-services/trade-show-booth-design/content";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";

export const metadata: Metadata = getMarketingPageMetadata(BOOTH_DESIGN_PAGE);

const Page = () => {
  return (
    <ServicePage
      caseStudies={BOOTH_DESIGN_CASE_STUDIES}
      contactUs={BOOTH_DESIGN_CONTACT_CTA}
      customSections={
        <>
          <GridSection cols={4} heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading} id="why-choose-us">
            {BOOTH_DESIGN_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </GridSection>
          <GridSection
            cols={3}
            description={HOME_EVENTS_CONTENT.description}
            heading={HOME_EVENTS_CONTENT.heading}
            id="events"
          >
            {getDefaultEvents().map((event, i) => (
              <EventsCard
                ctaLabel={HOME_EVENTS_CONTENT.ctaLabel ?? "View Event"}
                event={event}
                flipStyle="diagonalWipe"
                index={i}
                key={event.id}
              />
            ))}
          </GridSection>
          <CardSection
            cols={4}
            heading={BOOTH_DESIGN_BLOGS_SECTION.heading}
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
          </CardSection>
        </>
      }
      faq={BOOTH_DESIGN_FAQ}
      faqVariant="accordion"
      hero={BOOTH_DESIGN_HERO}
      page={BOOTH_DESIGN_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <StickyScroll
          heading="Booth Sizes and Formats We Design"
          reasons={BOOTH_DESIGN_SHOWCASE_ITEMS.map((item) => ({
            description: item.descriptions.join(" "),
            id: item.id,
            image: item.image,
            title: item.heading,
          }))}
          showImagePanel
        />
      }
      process={BOOTH_DESIGN_PROCESS}
      proofBar={BOOTH_DESIGN_PROOF_BAR}
      relatedServices={BOOTH_DESIGN_RELATED_SERVICES}
      services={BOOTH_DESIGN_DELIVERABLES}
      servicesSectionType="carousel"
      showPhaseNumbers={false}
      spotlight={BOOTH_DESIGN_SPOTLIGHT}
    />
  );
};

export default Page;
