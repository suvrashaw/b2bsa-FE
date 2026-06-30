import type { ReactNode } from "react";

import type { PricingProps } from "@/components/items/PricingCard";
import type { CapabilitiesItem } from "@/components/sections/Capabilities";
import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { ContactUsProps } from "@/components/sections/ContactUs";
import type { FAQProps } from "@/components/sections/FAQAccordion";
import type { HeroProps } from "@/components/sections/Hero";
import type { ServicesStackProps } from "@/components/sections/ServicesStack";
import type { SpotlightProps } from "@/components/sections/Spotlight";
import type { MarketingPageIdentity } from "@/content/page-definitions";

import { FAQCard } from "@/components/items/FAQCard";
import { PricingCard } from "@/components/items/PricingCard";
import { RelatedServicesCard } from "@/components/items/RelatedServicesCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Capabilities } from "@/components/sections/Capabilities";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { Carousel } from "@/components/sections/Carousel";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildPageGraph,
  buildServiceJsonLd,
  buildWebPageJsonLd,
  JsonLd,
  normalizePath,
  siteUrl,
} from "@/lib";
import { getStructuredPageContent } from "@/lib/cms-api";

export interface ServicePageProps {
  // ─── Lower funnel ───────────────────────────────
  caseStudies?: CaseStudiesProps;
  // ─── Trust band ─────────────────────────────────
  clientLogos?: { description?: string; heading?: string };
  // ─── Always required ────────────────────────────
  contactUs: ContactUsProps;

  creativePricing?: PricingProps;

  // ─── Custom content before FAQ ──────────────────
  customSections?: ReactNode;

  faq: FAQProps;
  // ─── Closing ────────────────────────────────────
  faqVariant?: "accordion" | "cards";

  // ─── Hero ───────────────────────────────────────
  hero?: HeroProps;
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
    steps?: { description: string; title: string }[];
    title?: string;
  };
  proofBar?: {
    className?: string;
    description?: ReactNode;
    heading?: string;
    imageUrl: string;
    stats: string[];
  };

  relatedServices?: { href: string; title: string }[];
  relatedServicesHeading?: ReactNode;

  secondaryServices?: ServicesStackProps;
  secondaryServicesSectionType?: "carousel" | "grid";

  // ─── Services ───────────────────────────────────
  services?: ServicesStackProps;
  servicesSectionType?: "carousel" | "grid";

  showPhaseNumbers?: boolean;

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

const renderServicesSection = (
  section: ServicesStackProps,
  sectionType: "carousel" | "grid" = "grid"
) => {
  const items = section.services ?? section.content?.services ?? [];
  if (sectionType === "carousel" && items.length > 0) {
    const features: CapabilitiesItem[] = items.map((s) => ({
      description: s.description,
      icon: s.icon,
      id: s.id,
      image: s.image,
      label: s.title,
    }));
    return (
      <Capabilities
        capabilities={features}
        heading={section.heading ?? section.content?.heading ?? "Our Services"}
        mediaPosition={section.mediaPosition}
        showCapabilityDescriptions={section.showCapabilityDescriptions}
      />
    );
  }
  return (
    <ServicesStack
      {...section}
      cardCtaMode={section.cardCtaMode ?? "linked"}
      commonCtaLabel="Contact Our Team"
      contactModal={section.contactModal ?? SERVICE_PAGE_CONTACT_MODAL}
      showCommonCta
    />
  );
};

const SERVICE_PAGE_CONTACT_MODAL = {};

export const ServicePage = async ({
  caseStudies,
  clientLogos,
  contactUs,
  creativePricing,
  customSections,
  faq,
  faqVariant = "cards",
  hero,
  page,
  parentPage,
  preContactSections,
  preProcessSections,
  preStudiesSections,
  process,
  proofBar,
  relatedServices,
  relatedServicesHeading,
  secondaryServices,
  secondaryServicesSectionType = "grid",
  services,
  servicesSectionType = "grid",
  showPhaseNumbers = true,
  spotlight,
  why,
}: ServicePageProps) => {
  const cmsContent = await getStructuredPageContent<Record<string, unknown>>(
    page.seo.canonicalPath,
    {}
  );

  const resolvedCaseStudies = (cmsContent.caseStudies as CaseStudiesProps | undefined) ?? caseStudies;
  const resolvedClientLogos =
    (cmsContent.clientLogos as ServicePageProps["clientLogos"] | undefined) ?? clientLogos;
  const resolvedContactUs =
    (cmsContent.contact as ContactUsProps | undefined) ??
    (cmsContent.contactUs as ContactUsProps | undefined) ??
    contactUs;
  const resolvedFaq = (cmsContent.faq as FAQProps | undefined) ?? faq;
  const resolvedHero = (cmsContent.hero as HeroProps | undefined) ?? hero;
  const resolvedPage = (cmsContent.page as MarketingPageIdentity | undefined) ?? page;
  const resolvedProcess =
    (cmsContent.process as ServicePageProps["process"] | undefined) ?? process;
  const resolvedSecondaryServices =
    (cmsContent.secondaryServices as ServicesStackProps | undefined) ?? secondaryServices;
  const resolvedServices = (cmsContent.services as ServicesStackProps | undefined) ?? services;
  const resolvedSpotlight =
    (cmsContent.intro as SpotlightProps | undefined) ??
    (cmsContent.spotlight as SpotlightProps | undefined) ??
    spotlight;
  const resolvedWhy =
    (cmsContent.why as SpotlightProps | undefined) ??
    (cmsContent.whyChooseUs as SpotlightProps | undefined) ??
    why;

  const steps = resolvedProcess?.phases ?? resolvedProcess?.steps ?? [];
  const processTitle = resolvedProcess?.title ?? resolvedProcess?.heading ?? "";

  const fallbackBg = (() => {
    const image =
      resolvedHero?.images?.[0] ||
      resolvedSpotlight?.imageUrl ||
      resolvedWhy?.imageUrl ||
      resolvedServices?.services?.[0]?.image ||
      resolvedServices?.content?.services?.[0]?.image ||
      resolvedSecondaryServices?.services?.[0]?.image ||
      resolvedSecondaryServices?.content?.services?.[0]?.image;
    const altText = typeof resolvedHero?.title === "string" ? resolvedHero.title : resolvedPage.pageName;
    return image ? { alt: altText, src: image } : undefined;
  })();

  const pageUrl = `${siteUrl}${normalizePath(resolvedPage.seo.canonicalPath)}`;
  const primaryImageUrl = fallbackBg?.src ? `${siteUrl}${fallbackBg.src}` : undefined;
  const pageGraph = buildPageGraph([
    buildWebPageJsonLd({
      breadcrumbId: `${pageUrl}/#breadcrumb`,
      description: resolvedPage.seo.description,
      ...(primaryImageUrl && { image: primaryImageUrl }),
      mainEntityId: `${pageUrl}/#service`,
      name: resolvedPage.seo.title,
      url: pageUrl,
    }),
    buildServiceJsonLd({
      description: resolvedPage.seo.description,
      name: resolvedPage.pageName,
      serviceType: parentPage?.pageName,
      url: resolvedPage.seo.canonicalPath,
    }),
    buildBreadcrumbJsonLd(getBreadcrumbs(resolvedPage, parentPage), pageUrl),
    ...(resolvedFaq.faqs?.length ? [buildFaqJsonLd(resolvedFaq.faqs)] : []),
    ...(steps.length > 0 ? [buildHowToJsonLd(processTitle, steps)] : []),
    ...(resolvedServices
      ? [buildItemListJsonLd(resolvedServices.services ?? resolvedServices.content?.services ?? [])]
      : []),
  ]);

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={pageGraph} />
      <Header darkBackground />

      {resolvedHero && <Hero {...resolvedHero} />}

      <ClientLogos
        description={resolvedClientLogos?.description}
        heading={resolvedClientLogos?.heading}
        overlap={false}
      />

      {(resolvedSpotlight || proofBar) && (
        <Spotlight
          align={resolvedSpotlight?.align ?? "left"}
          ctaLabel={resolvedSpotlight?.ctaLabel}
          description={resolvedSpotlight?.description ?? proofBar?.description ?? ""}
          descriptionItems={resolvedSpotlight?.descriptionItems}
          imageAlt={resolvedSpotlight?.imageAlt ?? "Feature image"}
          imageContainerClassName={resolvedSpotlight?.imageContainerClassName}
          imagePosition={resolvedSpotlight?.imagePosition ?? "right"}
          imageUrl={resolvedSpotlight?.imageUrl ?? proofBar?.imageUrl}
          label="INTRODUCTION"
          locationBadges={resolvedSpotlight?.locationBadges}
          secondarySpotlight={resolvedSpotlight?.secondarySpotlight}
          sectionClassName={resolvedSpotlight?.sectionClassName}
          stats={resolvedSpotlight?.stats ?? proofBar?.stats}
          titleLine1={resolvedSpotlight?.titleLine1 ?? proofBar?.heading ?? ""}
          titleLine2={resolvedSpotlight?.titleLine2 ?? ""}
          triggerContactModal={resolvedSpotlight?.triggerContactModal}
          videoUrl={resolvedSpotlight?.videoUrl}
        />
      )}

      {resolvedServices && renderServicesSection(resolvedServices, servicesSectionType)}

      {resolvedWhy && <Spotlight {...resolvedWhy} />}

      {preProcessSections}

      {resolvedProcess && (
        <ProcessTimeline
          cta={resolvedProcess.cta}
          description={resolvedProcess.description}
          phases={resolvedProcess.phases}
          showPhaseNumbers={showPhaseNumbers}
          steps={resolvedProcess.steps}
          title={resolvedProcess.title ?? resolvedProcess.heading}
        />
      )}

      {resolvedSecondaryServices &&
        renderServicesSection(resolvedSecondaryServices, secondaryServicesSectionType)}

      {preStudiesSections}

      {creativePricing && (
        <Carousel
          cols={3}
          description={creativePricing.description}
          heading={creativePricing.title}
          layout="carousel"
        >
          {(creativePricing.tiers ?? []).map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </Carousel>
      )}

      {resolvedCaseStudies && <CaseStudies {...resolvedCaseStudies} />}

      {customSections}

      {faqVariant === "accordion" ? (
        <FAQAccordion {...resolvedFaq} />
      ) : (
        <Carousel
          description={resolvedFaq.description ?? resolvedFaq.content?.description}
          heading={resolvedFaq.heading ?? resolvedFaq.content?.heading}
          id="faq"
          layout="carousel"
        >
          {(resolvedFaq.faqs ?? resolvedFaq.content?.faqs ?? []).map((f) => (
            <FAQCard answer={f.answer} image={f.image} key={f.id} question={f.question} />
          ))}
        </Carousel>
      )}

      {relatedServices && relatedServices.length > 0 && (
        <CardsGrid
          className="py-10 md:py-12 lg:py-14"
          cols={3}
          heading={relatedServicesHeading ?? "Explore Related Solutions"}
        >
          {relatedServices.map((service, index) => (
            <RelatedServicesCard index={index} key={service.href} service={service} />
          ))}
        </CardsGrid>
      )}

      {preContactSections}

      <ContactUs
        {...resolvedContactUs}
        backgroundImage={resolvedContactUs.backgroundImage || fallbackBg}
      />

      <Footer />
    </main>
  );
};
