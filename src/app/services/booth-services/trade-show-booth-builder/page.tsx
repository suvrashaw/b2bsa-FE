import type { Metadata } from "next";

import Link from "next/link";

import { BasicCards } from "@/components/items/BasicCards";
import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardSection } from "@/components/sections/CardSection";
import { GridSection } from "@/components/sections/GridSection";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  BOOTH_BUILDER_BLOG_POSTS,
  BOOTH_BUILDER_BLOGS_SECTION,
  BOOTH_BUILDER_CASE_STUDIES,
  BOOTH_BUILDER_CONTACT_CTA,
  BOOTH_BUILDER_FAQ,
  BOOTH_BUILDER_FUTURE_READY,
  BOOTH_BUILDER_HERO,
  BOOTH_BUILDER_PAGE,
  BOOTH_BUILDER_PROCESS,
  BOOTH_BUILDER_PROOF_BAR,
  BOOTH_BUILDER_RELATED_SERVICES,
} from "@/content/services/booth-services/trade-show-booth-builder/content";
import {
  BOOTH_DESIGN_SHOWCASE_ITEMS,
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/booth-services/trade-show-booth-design/content";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";

const pageMetadata = getMarketingPageMetadata(BOOTH_BUILDER_PAGE);

export const metadata: Metadata = {
  ...pageMetadata,
  title: {
    absolute: BOOTH_BUILDER_PAGE.seo.title,
  },
};

const boothBuilderProofBar = { ...BOOTH_BUILDER_PROOF_BAR, className: "[&_p]:max-w-5xl" };

const Page = () => {
  return (
    <ServicePage
      caseStudies={BOOTH_BUILDER_CASE_STUDIES}
      contactUs={BOOTH_BUILDER_CONTACT_CTA}
      customSections={
        <>
          <GridSection
            cols={4}
            heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading}
            id="why-choose-us"
          >
            {BOOTH_DESIGN_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </GridSection>
          <CardSection
            cols={4}
            heading={BOOTH_BUILDER_BLOGS_SECTION.heading}
            headingAction={
              <Button asChild className="shrink-0 self-start md:self-auto" variant="secondary">
                <Link href="/blogs">View All Blogs</Link>
              </Button>
            }
            headingAlign="left"
            id="blogs"
            layout="carousel"
          >
            {BOOTH_BUILDER_BLOG_POSTS.map((post) => (
              <BlogsCarouselCard key={post.id} post={post} />
            ))}
          </CardSection>
        </>
      }
      faq={BOOTH_BUILDER_FAQ}
      faqVariant="accordion"
      hero={BOOTH_BUILDER_HERO}
      page={BOOTH_BUILDER_PAGE}
      parentPage={GES_PAGE}
      preProcessSections={
        <>
          <StickyScroll
            heading="What We Do in Exhibition Stand Builder"
            reasons={BOOTH_DESIGN_SHOWCASE_ITEMS.map((item) => ({
              description: item.descriptions.join(" "),
              id: item.id,
              image: item.image,
              title: item.heading,
            }))}
            showImagePanel
          />
          <GridSection heading={BOOTH_BUILDER_FUTURE_READY.heading}>
            {BOOTH_BUILDER_FUTURE_READY.items.map((item) => (
              <BasicCards item={item} key={item.title} />
            ))}
          </GridSection>
        </>
      }
      process={BOOTH_BUILDER_PROCESS}
      proofBar={boothBuilderProofBar}
      relatedServices={BOOTH_BUILDER_RELATED_SERVICES}
    />
  );
};

export default Page;
