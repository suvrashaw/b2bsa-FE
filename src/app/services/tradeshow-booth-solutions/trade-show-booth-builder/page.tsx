import type { Metadata } from "next";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

import { BasicCards } from "@/components/items/BasicCards";
import { BlogsCarouselCard } from "@/components/items/BlogsCarouselCard";
import { BoothWhyCard } from "@/components/items/BoothWhyCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { StickyScroll } from "@/components/sections/StickyScroll";
import { ServicePage } from "@/components/templates/ServicePage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { GES_PAGE } from "@/content/services/global-event-solutions/content";
import {
  BOOTH_BUILDER_BLOG_POSTS,
  BOOTH_BUILDER_BLOGS_SECTION,
  BOOTH_BUILDER_CASE_STUDIES,
  BOOTH_BUILDER_CONTACT_CTA,
  BOOTH_BUILDER_FAQ,
  BOOTH_BUILDER_FUTURE_READY,
  BOOTH_BUILDER_HERO,
  BOOTH_BUILDER_PAGE,
  BOOTH_BUILDER_PRICING,
  BOOTH_BUILDER_PROCESS,
  BOOTH_BUILDER_PROOF_BAR,
  BOOTH_BUILDER_RELATED_SERVICES,
} from "@/content/services/tradeshow-booth-solutions/trade-show-booth-builder/content";
import {
  BOOTH_DESIGN_SHOWCASE_ITEMS,
  BOOTH_DESIGN_WHY_CHOOSE_US,
} from "@/content/services/tradeshow-booth-solutions/trade-show-booth-design/content";

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
          <CardsGrid cols={4} heading={BOOTH_DESIGN_WHY_CHOOSE_US.heading} id="why-choose-us">
            {BOOTH_DESIGN_WHY_CHOOSE_US.items.map((item, i) => (
              <BoothWhyCard index={i} item={item} key={item.title} />
            ))}
          </CardsGrid>
          <Carousel
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
          </Carousel>
        </>
      }
      faq={BOOTH_BUILDER_FAQ}
      faqVariant="accordion"
      hero={BOOTH_BUILDER_HERO}
      page={BOOTH_BUILDER_PAGE}
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
      preStudiesSections={
        <>
          <CardsGrid heading={BOOTH_BUILDER_FUTURE_READY.heading}>
            {BOOTH_BUILDER_FUTURE_READY.items.map((item) => (
              <BasicCards item={item} key={item.title} />
            ))}
          </CardsGrid>

          <section className="bg-brand-gray py-16 md:py-20" id="pricing">
            <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
              <SectionHeader as="h2" className="mb-12 text-center">
                {BOOTH_BUILDER_PRICING.heading}
              </SectionHeader>
              <div className="grid gap-8 lg:grid-cols-2">
                {BOOTH_BUILDER_PRICING.services.map((service) => (
                  <div
                    className="flex flex-col gap-6 rounded-2xl border border-brand-blue/10 bg-white p-8 shadow-sm"
                    key={service.title}
                  >
                    <div>
                      <h3 className="font-heading text-xl font-bold text-brand-charcoal">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm text-brand-charcoal/60">{service.description}</p>
                    </div>
                    <ul className="grow space-y-3">
                      {service.features.map((feature) => (
                        <li
                          className="flex gap-3 text-sm leading-relaxed text-brand-charcoal/70"
                          key={feature}
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-auto" variant="primary">
                      <Link href={service.cta.href}>{service.cta.label}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      }
      process={BOOTH_BUILDER_PROCESS}
      proofBar={boothBuilderProofBar}
      relatedServices={BOOTH_BUILDER_RELATED_SERVICES}
    />
  );
};

export default Page;
