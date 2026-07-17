import type { ReactNode } from "react";

import type { PricingProps } from "@/components/items/PricingCard";
import type { CaseStudiesProps } from "@/components/sections/CardsGrid";
import type { ContactUsProps } from "@/components/sections/ContactUs";
import type { FAQProps } from "@/components/sections/FAQ";
import type { HeroProps } from "@/components/sections/Hero";
import type { ServicesStackProps } from "@/components/sections/ServicesStack";
import type { SpotlightProps } from "@/components/sections/Spotlight";
import type { MarketingPageIdentity } from "@/content/page-definitions";

import { CapabilityCard } from "@/components/items/CapabilityCard";
import { IndustryCard } from "@/components/items/IndustryCard";
import { PricingCard } from "@/components/items/PricingCard";
import { RelatedServicesCard } from "@/components/items/RelatedServicesCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CardsGrid, CaseStudies } from "@/components/sections/CardsGrid";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import { SectionHeader } from "@/components/ui/SectionHeader";
import navigation from "@/content/navigation.json";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildImageObjectJsonLd,
  buildItemListJsonLd,
  buildPageGraph,
  buildServiceJsonLd,
  buildWebPageJsonLd,
  cn,
  JsonLd,
  normalizePath,
  siteUrl,
} from "@/lib";

export interface ServicePageProps {
  // ─── Lower funnel ───────────────────────────────
  caseStudies?: CaseStudiesProps;
  // ─── Trust band ─────────────────────────────────
  clientLogos?: { description?: string; heading?: string };
  contactUs?: ContactUsProps;

  creativePricing?: PricingProps;

  // ─── Custom content before FAQ ──────────────────
  customSections?: ReactNode;

  faq: FAQProps;

  // ─── Hero ───────────────────────────────────────
  hero?: HeroProps;
  // ─── Industries We Support ───────────────────────
  industries?: {
    description?: string;
    heading: string;
    items: {
      description?: string;
      icon: string;
      id: string;
      image?: string;
      title: string;
    }[];
  };
  page: MarketingPageIdentity;

  // ─── SEO ────────────────────────────────────────
  parentPage?: MarketingPageIdentity;
  // ─── Slot between related services and contact ───────
  preContactSections?: ReactNode;
  // ─── Escape hatch before Timeline ───────────────
  preProcessSections?: ReactNode;
  // ─── Extra sections between industries and case studies ─
  preStudiesSections?: ReactNode;
  // ─── Process ────────────────────────────────────
  process?: {
    cta?: { href?: string; label: string; opensModal?: boolean };
    description?: string;
    heading?: string;
    phases?: { description: string; title: string }[];
  };
  relatedServicesHeading?: ReactNode;

  secondaryServices?: ServicesStackProps;
  secondaryServicesSectionType?: "carousel" | "grid";

  // ─── Services ───────────────────────────────────
  services?: ServicesStackProps;
  servicesSectionType?: "carousel" | "grid";
  showPhaseNumbers?: boolean;
  showServicesCommonCta?: boolean;

  // ─── Spotlight slots ────────────────────────────
  spotlight?: SpotlightProps;
  why?: SpotlightProps;
}

const getBreadcrumbs = (page: MarketingPageIdentity, parentPage?: MarketingPageIdentity) => {
  const crumbs = [{ name: "Home", url: siteUrl }];
  if (parentPage) {
    crumbs.push({
      name: parentPage.pageName,
      url: `${siteUrl}${normalizePath(parentPage.seo.canonicalPath)}`,
    });
  }
  crumbs.push({
    name: page.pageName,
    url: `${siteUrl}${normalizePath(page.seo.canonicalPath)}`,
  });
  return crumbs;
};

const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.codePointAt(i)!;
    hash = Math.trunc(hash);
  }
  return hash;
};

// Deterministic per-seed shuffle so the same page always shows the same
// related-services order (Math.random() would differ on every request/build).
const seededShuffle = <T,>(items: T[], seed: number) => {
  let state = seed;
  const nextRandom = () => {
    state = (state * 1_103_515_245 + 12_345) & 0x7f_ff_ff_ff;
    return state / 0x7f_ff_ff_ff;
  };
  return items
    .map((item) => ({ item, sortKey: nextRandom() }))
    .toSorted((a, b) => a.sortKey - b.sortKey)
    .map(({ item }) => item);
};

const renderServicesSection = (
  section: ServicesStackProps,
  sectionType: "carousel" | "grid" = "grid",
  hasCommonCta = false
) => {
  const items = section.services ?? section.content?.services ?? [];
  if (sectionType === "carousel" && items.length > 0) {
    return (
      <CardsGrid cols={3} heading={section.heading ?? section.content?.heading ?? "Our Services"}>
        {items.map((s) => (
          <CapabilityCard
            description={s.description}
            icon={s.icon}
            key={s.id}
            title={s.title ?? ""}
          />
        ))}
      </CardsGrid>
    );
  }
  return (
    <ServicesStack
      {...section}
      cardCtaMode={section.cardCtaMode ?? "linked"}
      commonCtaLabel={section.commonCtaLabel ?? (hasCommonCta ? "Contact Our Team" : undefined)}
      contactModal={section.contactModal ?? SERVICE_PAGE_CONTACT_MODAL}
      showCommonCta={section.showCommonCta ?? hasCommonCta}
    />
  );
};

const SERVICE_PAGE_CONTACT_MODAL = {};

export const ServicePage = ({
  caseStudies,
  clientLogos,
  contactUs,
  creativePricing,
  customSections,
  faq,
  hero,
  industries,
  page,
  parentPage,
  preContactSections,
  preProcessSections,
  preStudiesSections,
  process,
  relatedServicesHeading,
  secondaryServices,
  secondaryServicesSectionType = "grid",
  services,
  servicesSectionType = "grid",
  showPhaseNumbers = true,
  showServicesCommonCta = false,
  spotlight,
  why,
}: ServicePageProps) => {
  const steps = process?.phases ?? [];
  const processTitle = process?.heading ?? "";

  let computedRelatedServices: { href: string; title: string }[] = [];
  for (const group of navigation.serviceNavigationGroups) {
    const isInCategory = group.links.some((link) => link.href === page.seo.canonicalPath);
    if (isInCategory) {
      const otherServices = group.links.filter((link) => link.href !== page.seo.canonicalPath);
      const shuffled = seededShuffle(otherServices, hashString(page.seo.canonicalPath));
      computedRelatedServices = shuffled
        .slice(0, 3)
        .map((link) => ({ href: link.href, title: link.name }));
      break;
    }
  }

  const fallbackBgImage =
    hero?.images?.[0] ||
    spotlight?.image ||
    why?.image ||
    services?.services?.[0]?.image ||
    services?.content?.services?.[0]?.image ||
    secondaryServices?.services?.[0]?.image ||
    secondaryServices?.content?.services?.[0]?.image;
  const fallbackBgAltText = typeof hero?.title === "string" ? hero.title : page.pageName;
  const fallbackBg = fallbackBgImage ? { alt: fallbackBgAltText, src: fallbackBgImage } : undefined;

  const pageUrl = `${siteUrl}${normalizePath(page.seo.canonicalPath)}`;
  const primaryImageUrl = fallbackBg?.src ? `${siteUrl}${fallbackBg.src}` : undefined;
  const pageGraph = buildPageGraph([
    buildWebPageJsonLd({
      breadcrumbId: `${pageUrl}/#breadcrumb`,
      description: page.seo.description,
      ...(primaryImageUrl && { image: primaryImageUrl }),
      mainEntityId: `${pageUrl}/#service`,
      name: page.seo.title,
      url: pageUrl,
    }),
    buildServiceJsonLd({
      description: page.seo.description,
      name: page.pageName,
      serviceType: parentPage?.pageName,
      url: page.seo.canonicalPath,
    }),
    buildBreadcrumbJsonLd(getBreadcrumbs(page, parentPage), pageUrl),
    ...(faq.faqs?.length ? [buildFaqJsonLd(faq.faqs)] : []),
    ...(steps.length > 0 ? [buildHowToJsonLd(processTitle, steps)] : []),
    ...(services
      ? [buildItemListJsonLd(services.services ?? services.content?.services ?? [])]
      : []),
    ...(fallbackBg?.src
      ? [buildImageObjectJsonLd({ caption: page.pageName, url: fallbackBg.src })]
      : []),
  ]);

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={pageGraph} />
      <Header />

      {hero && <Hero {...hero} />}

      <ClientLogos
        description={clientLogos?.description}
        heading={clientLogos?.heading}
        overlap={false}
      />

      {spotlight && (
        <Spotlight
          align={spotlight.align ?? "left"}
          ctaLabel={spotlight.ctaLabel}
          description={spotlight.description ?? ""}
          descriptionItems={spotlight.descriptionItems}
          image={spotlight.image}
          imageAlt={spotlight.imageAlt ?? "Feature image"}
          imageContainerClassName={spotlight.imageContainerClassName}
          imagePosition={spotlight.imagePosition ?? "right"}
          label={spotlight.label}
          locationBadges={spotlight.locationBadges}
          sectionClassName={spotlight.sectionClassName}
          stats={spotlight.stats}
          titleLine1={spotlight.titleLine1}
          titleLine2={spotlight.titleLine2 ?? ""}
          triggerContactModal={spotlight.triggerContactModal}
          videoUrl={spotlight.videoUrl}
        />
      )}

      {services &&
        renderServicesSection(services, servicesSectionType, showServicesCommonCta ?? false)}

      {why && <Spotlight {...why} />}

      {preProcessSections}

      {process && (
        <ProcessTimeline
          cta={process.cta}
          description={process.description}
          heading={process.heading}
          phases={process.phases}
          showPhaseNumbers={showPhaseNumbers}
        />
      )}

      {secondaryServices && renderServicesSection(secondaryServices, secondaryServicesSectionType)}

      {industries && (
        <CardsGrid
          cardClassName="w-[calc(50%-12px)] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          cols={4}
          description={industries.description}
          heading={industries.heading}
          id="industries"
        >
          {industries.items.map((item, i) => (
            <IndustryCard
              description={item.description}
              icon={item.icon}
              image={item.image}
              index={i}
              key={item.id}
              title={item.title}
            />
          ))}
        </CardsGrid>
      )}

      {preStudiesSections}

      {creativePricing && (
        <section className="bg-brand-gray py-12 md:py-16 lg:py-20" id="pricing">
          <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
            <SectionHeader
              description={creativePricing.description}
              heading={creativePricing.title}
            />
            <div
              className={cn(
                "grid gap-8",
                (creativePricing.tiers?.length ?? 0) === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
              )}
            >
              {(creativePricing.tiers ?? []).map((tier) => (
                <PricingCard key={tier.title} tier={tier} />
              ))}
            </div>
          </div>
        </section>
      )}

      {caseStudies && <CaseStudies {...caseStudies} />}

      {customSections}

      <FAQ {...faq} />

      {computedRelatedServices.length > 0 && (
        <CardsGrid
          className="py-10 md:py-12 lg:py-14"
          cols={3}
          heading={relatedServicesHeading ?? "Explore Related Solutions"}
        >
          {computedRelatedServices.map((service, index) => (
            <RelatedServicesCard index={index} key={service.href} service={service} />
          ))}
        </CardsGrid>
      )}

      {preContactSections}

      {contactUs && (
        <ContactUs {...contactUs} backgroundImage={contactUs.backgroundImage || fallbackBg} />
      )}

      <Footer />
    </main>
  );
};
