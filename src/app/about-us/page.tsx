import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { EventsCard } from "@/components/items/EventsCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Culture } from "@/components/sections/Culture";
import { Hero } from "@/components/sections/Hero";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ABOUT_CORE_VALUES,
  ABOUT_FOUNDER_STORY,
  ABOUT_HERO,
  ABOUT_ORIGIN_TIMELINE,
  ABOUT_PAGE,
  ABOUT_RECENT_EVENTS,
  ABOUT_SIGNATURE_SERVICES,
  ABOUT_SIGNATURE_SERVICES_STACK,
  ABOUT_VALUES,
  ABOUT_VISION_MISSION,
} from "@/content/about-us/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { normalizeEvent } from "@/content/tradeshow-calendar";
import { buildAboutPageJsonLd, buildLocalBusinessJsonLd } from "@/lib";
import { getStructuredPageContent } from "@/lib/cms-api";
import { JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = getMarketingPageMetadata(ABOUT_PAGE);

const ABOUT_FALLBACK_CONTENT = {
  coreValues: ABOUT_CORE_VALUES,
  events: ABOUT_RECENT_EVENTS,
  founderStory: ABOUT_FOUNDER_STORY,
  hero: ABOUT_HERO,
  originTimeline: ABOUT_ORIGIN_TIMELINE,
  page: ABOUT_PAGE,
  services: ABOUT_SIGNATURE_SERVICES,
  signatureServicesStack: ABOUT_SIGNATURE_SERVICES_STACK,
  values: ABOUT_VALUES,
  visionMission: ABOUT_VISION_MISSION,
};

const Page = async () => {
  const content = await getStructuredPageContent("/about-us", ABOUT_FALLBACK_CONTENT);
  const aboutImages = [content.hero.image.src];
  const aboutPrimaryCta = {
    href: content.hero.primaryCtaHref,
    label: content.hero.primaryCtaLabel,
  };

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <JsonLd data={buildAboutPageJsonLd(content.page.seo.description)} />
      <Header darkBackground />

      {/* Hero — centered, no description, "About Us" eyebrow, slide-from-left animation */}
      <Hero
        animateFromLeft
        centered
        eyebrow="About Us"
        imageOpacity={0.7}
        images={aboutImages}
        primaryCta={aboutPrimaryCta}
        title={content.hero.title}
      />

      {/* Who We Are */}
      <section className="bg-brand-gray pt-16 pb-6 md:pt-20 md:pb-8">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader as="h2" className="mb-6">
              Who We Are
            </SectionHeader>
            <p className="text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
              B2B Sales Arrow is not a vendor. We are a strategic growth partner, bringing event
              solutions, video production, performance marketing, and market research under one team
              with one commercial brief and clear accountability to outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission — left: Mission + Vision stacked, right: team images */}
      <section className="bg-brand-gray pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            {/* Left: Mission + Vision */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-12 w-full">
                <SectionHeader as="h2" className="mb-6 text-center lg:text-left">
                  <span className="block text-brand-charcoal">
                    {content.visionMission.missionTitleLine1}
                  </span>
                  <span className="block text-[var(--heading-h2)]">
                    {content.visionMission.missionTitleLine2}
                  </span>
                </SectionHeader>
                <ul className="inline-block space-y-3 text-left">
                  {content.visionMission.missionItems.map((item) => (
                    <li
                      className="flex gap-3 text-sm leading-relaxed text-brand-charcoal/70 md:text-base"
                      key={item}
                    >
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-brand-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <SectionHeader as="h2" className="mb-4 text-center lg:text-left">
                  <span className="block text-brand-charcoal">
                    {content.visionMission.visionTitleLine1}
                  </span>
                  <span className="block text-[var(--heading-h2)]">
                    {content.visionMission.visionTitleLine2}
                  </span>
                </SectionHeader>
                <p className="text-sm leading-relaxed text-brand-charcoal/70 md:text-base">
                  {content.visionMission.vision}
                </p>
              </div>
            </div>

            {/* Right: Team images */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  alt="B2B Sales Arrow team"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  src="/media/about-us/culture/culture-1.avif"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    alt="B2B Sales Arrow team"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    src="/media/about-us/culture/culture-4.avif"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    alt="B2B Sales Arrow team"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    src="/media/about-us/culture/culture-5.avif"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values — simple bullet list */}
      <section className="bg-brand-gray py-12 md:py-16" id="core-values">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <SectionHeader as="h2" className="mb-2 text-center">
            {content.coreValues.heading}
          </SectionHeader>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-brand-charcoal/60 md:text-base">
            {content.coreValues.description}
          </p>
          <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
            {content.coreValues.values.map((value) => (
              <li
                className="flex gap-3 text-sm leading-relaxed text-brand-charcoal/80 md:text-base"
                key={value}
              >
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-cyan" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How B2B Sales Arrow Was Built */}
      <ProcessTimeline
        description={content.originTimeline.description}
        heading={content.originTimeline.heading}
        phases={content.originTimeline.phases}
      />

      {/* Signature Services */}
      <ServicesStack
        heading={content.services.heading}
        services={content.signatureServicesStack}
      />

      {/* Events We Have Delivered */}
      <CardsGrid
        cols={3}
        cta={
          <Button asChild variant="primary">
            <Link href="/case-studies">View All Case Studies</Link>
          </Button>
        }
        description={content.events.description}
        heading={content.events.heading}
        id="events"
      >
        {content.events.events.map((event, i) => (
          <EventsCard
            ctaLabel={content.events.ctaLabel ?? "View Event"}
            event={normalizeEvent(event, i)}
            flipStyle="diagonalWipe"
            index={i}
            key={event.id}
          />
        ))}
      </CardsGrid>

      {/* Founder Story — smaller image */}
      <Spotlight
        align="left"
        description={content.founderStory.story}
        id="founder"
        imageAlt={content.founderStory.image.alt}
        imageContainerClassName="lg:max-w-[440px]"
        imagePosition="left"
        imageUrl={content.founderStory.imageUrl}
        label={content.founderStory.sectionLabel}
        sectionClassName="scroll-mt-28"
        titleLine1={content.founderStory.nameLine1}
        titleLine2={content.founderStory.nameLine2}
      />

      {/* What We Believe In */}
      <Culture data={content.values} />

      <Footer />
    </main>
  );
};

export default Page;
