import { type ReactNode, useMemo } from "react";

import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { FAQProps } from "@/components/sections/FAQ";
import type { FeatureCarouselItem } from "@/components/sections/FeatureCarouselSection";
import type { PricingProps } from "@/components/sections/Pricing";
import type { ServicesStackProps } from "@/components/sections/ServicesStack";
import type { SpotlightProps } from "@/components/sections/Spotlight";
import type { MarketingPageIdentity } from "@/content/page-definitions";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQ } from "@/components/sections/FAQ";
import { FeatureCarouselSection } from "@/components/sections/FeatureCarouselSection";
import { ImageHero, type ImageHeroProps } from "@/components/sections/ImageHero";
import { Pricing } from "@/components/sections/Pricing";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProofBar } from "@/components/sections/ProofBar";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from "@/lib";

export interface ServiceDetailProps {
  afterSpotlightSections?: ReactNode;
  caseStudies?: CaseStudiesProps;
  caseStudiesDescription?: string;
  caseStudiesHeading?: ReactNode;
  clientLogosHeading?: string;
  closingSections?: ReactNode;
  creativePricing?: PricingProps;
  ctaBanner?: {
    ctaHref?: string;
    ctaLabel: string;
    description?: string;
    title: string;
  };
  deliverables?: ServicesStackProps;
  deliverablesSectionType?: "carousel" | "grid";
  faq: FAQProps;
  hero?: {
    description: string;
    primaryCta?: {
      href: string;
      label: string;
    } | null;
    secondaryCta?: {
      href: string;
      label: string;
    } | null;
    title: ReactNode;
  };
  imageHero?: ImageHeroProps;
  middleSections?: ReactNode;
  page: MarketingPageIdentity;
  parentPage?: MarketingPageIdentity;
  preProcessSections?: ReactNode;
  process?: {
    phases: { description: string; title: string }[];
    title: string;
  };
  proofBar?: string[];
  proofBarClassName?: string;
  proofBarDescription?: React.ReactNode;
  proofBarHeading?: string;
  proofBarImageUrl?: string;
  relatedServices?: { href: string; title: string }[];
  secondaryServices?: ServicesStackProps;
  secondaryServicesSectionType?: "carousel" | "grid";
  showPhaseNumbers?: boolean;
  spotlight?: SpotlightProps;
  stats?: {
    description?: string;
    items: { label: string; value: string }[];
    title: string;
  };
  why?: SpotlightProps;
}

const createJsonLdMarkup = (data: object) => ({
  __html: JSON.stringify(data).replaceAll("<", String.raw`\u003c`),
});

// SEO Utility Component
export const JsonLd = ({ data }: { data: object }) => {
  return <script dangerouslySetInnerHTML={createJsonLdMarkup(data)} type="application/ld+json" />;
};

const siteUrl = "https://b2bsalesarrow.com";
const primaryServiceHeroCta = { href: "/contact", label: "Book a Strategy Session" };
const secondaryServiceHeroCta = { href: "/case-studies", label: "View Event Portfolio" };
const serviceHeroCtasByPath: Record<
  string,
  {
    primaryCta: { href: string; label: string };
    secondaryCta?: { href: string; label: string };
  }
> = {
  "/services/global-event-solutions/event-booth-rental": {
    primaryCta: { href: "/contact", label: "Check Rental Availability" },
    secondaryCta: { href: "/case-studies", label: "View Event Portfolio" },
  },
  "/services/global-event-solutions/modular-booth-solutions": {
    primaryCta: { href: "/contact", label: "Get a Modular Booth Quote" },
  },
  "/services/global-event-solutions/trade-show-booth-builder": {
    primaryCta: { href: "/contact", label: "Get a Build Quote" },
  },
  "/services/global-event-solutions/trade-show-booth-design": {
    primaryCta: { href: "/contact", label: "Request a Design Quote" },
    secondaryCta: { href: "/case-studies", label: "View Booth Portfolio" },
  },
  "/services/market-research/data-augmentation-services": {
    primaryCta: { href: "/contact", label: "Request a Data Augmentation Demo" },
    secondaryCta: { href: "/contact", label: "Upload a Sample List" },
  },
  "/services/media-production/corporate-video-production": {
    primaryCta: { href: "/contact", label: "Request a Corporate Video Quote" },
  },
  "/services/media-production/event-live-streaming-services": {
    primaryCta: { href: "/contact", label: "Get a Live Stream Quote" },
  },
  "/services/media-production/event-video-production": {
    primaryCta: { href: "/contact", label: "Get a Production Quote" },
  },
  "/services/performance-marketing/seo-services": {
    primaryCta: { href: "/contact", label: "Request a Free SEO Audit" },
    secondaryCta: { href: "/contact", label: "Download Our B2B SEO Playbook" },
  },
};

const CINEMATIC_BG = { alt: "Event", src: "/images/case-studies/waf.avif" } as const;
const CINEMATIC_SECONDARY = { href: "/case-studies", label: "View Case Studies" } as const;

export const ServiceDetail = ({
  afterSpotlightSections,
  caseStudies,
  caseStudiesDescription = "B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026.",
  caseStudiesHeading = "Real Events. Real Results.",
  clientLogosHeading,
  closingSections,
  creativePricing,
  ctaBanner,
  deliverables,
  deliverablesSectionType = "grid",
  faq,
  hero,
  imageHero,
  middleSections,
  page,
  parentPage,
  preProcessSections,
  process,
  proofBar,
  proofBarClassName,
  proofBarDescription,
  proofBarHeading,
  proofBarImageUrl = "/Frames/ezgif-frame-017.jpg",
  relatedServices,
  secondaryServices,
  secondaryServicesSectionType = "grid",
  showPhaseNumbers = true,
  spotlight,
  stats,
  why,
}: ServiceDetailProps) => {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(getBreadcrumbs(page, parentPage));
  const serviceJsonLd = buildServiceJsonLd({
    description: page.seo.description,
    name: page.pageName,
    url: page.seo.canonicalPath,
  });
  const heroCtas = serviceHeroCtasByPath[normalizePath(page.seo.canonicalPath)];

  const finalPrimaryCta = useMemo(() => {
    if (!hero) return;
    if (hero.primaryCta === null) return;
    return hero.primaryCta ?? heroCtas?.primaryCta ?? primaryServiceHeroCta;
  }, [hero, heroCtas]);

  const cinematicHeadingLines = useMemo(
    () => [ctaBanner?.title ?? "Ready to Build Your Enterprise Growth Engine?"] as [string],
    [ctaBanner?.title]
  );
  const cinematicPrimaryCta = useMemo(
    () => ({
      href: ctaBanner?.ctaHref ?? "/contact",
      label: ctaBanner?.ctaLabel ?? "Book a Strategy Session",
    }),
    [ctaBanner?.ctaHref, ctaBanner?.ctaLabel]
  );

  const finalSecondaryCta = useMemo(() => {
    if (!hero) return;
    if (hero.secondaryCta === null) return;
    return hero.secondaryCta ?? heroCtas?.secondaryCta ?? secondaryServiceHeroCta;
  }, [hero, heroCtas]);
  const renderServiceSection = (
    section: ServicesStackProps | undefined,
    sectionType: "carousel" | "grid"
  ) => {
    if (!section) {
      return null;
    }

    const sectionServices = section.services ?? section.content?.services ?? [];
    const carouselFeatures: FeatureCarouselItem[] = sectionServices.map((service) => ({
      description: service.description,
      icon: service.icon,
      id: service.id,
      image: service.image,
      label: service.title,
    }));

    if (sectionType === "carousel" && carouselFeatures.length > 0) {
      return (
        <FeatureCarouselSection
          eyebrow={section.eyebrow ?? section.content?.eyebrow}
          features={carouselFeatures}
          heading={section.heading ?? section.content?.heading ?? "Our Services"}
        />
      );
    }

    return <ServicesStack {...section} />;
  };

  const deliverablesSection = renderServiceSection(deliverables, deliverablesSectionType);
  const secondaryServicesSection = renderServiceSection(
    secondaryServices,
    secondaryServicesSectionType
  );

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={serviceJsonLd} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <JsonLd data={breadcrumbJsonLd} />
      <Header darkBackground />

      {imageHero && <ImageHero {...imageHero} />}
      {!imageHero && hero && (
        <ServiceHero
          description={hero.description}
          primaryCta={finalPrimaryCta}
          secondaryCta={finalSecondaryCta}
          title={hero.title}
        />
      )}

      <ClientLogos heading={clientLogosHeading} overlap={false} />

      {proofBar && (
        <ProofBar
          className={proofBarClassName}
          description={proofBarDescription}
          heading={proofBarHeading ?? `About ${page.pageName}`}
          imageUrl={proofBarImageUrl}
          stats={proofBar}
        />
      )}

      {spotlight && (
        <section className="bg-brand-gray py-20">
          <div className="container mx-auto px-8">
            <Spotlight {...spotlight} />
          </div>
        </section>
      )}

      {afterSpotlightSections}

      {deliverablesSection}

      {why && (
        <section className="bg-brand-gray py-20">
          <div className="container mx-auto px-8">
            <Spotlight {...why} />
          </div>
        </section>
      )}

      {preProcessSections}

      {process && (
        <ProcessTimeline
          phases={process.phases}
          showPhaseNumbers={showPhaseNumbers}
          title={process.title}
        />
      )}

      {middleSections}

      {secondaryServicesSection}

      {creativePricing && <Pricing {...creativePricing} />}

      {caseStudies && (
        <CaseStudies
          description={caseStudiesDescription}
          heading={caseStudiesHeading}
          {...caseStudies}
        />
      )}

      {stats && (
        <WhoWeAre description={stats.description} items={stats.items} title={stats.title} />
      )}

      {closingSections ?? (
        <>
          <FAQ {...faq} />

          {relatedServices && <RelatedServices services={relatedServices} />}

          <ContactCinematicCTA
            backgroundImage={CINEMATIC_BG}
            description={
              ctaBanner?.description ?? "250+ events. $1.2B+ influenced. One conversation to start."
            }
            headingLines={cinematicHeadingLines}
            primaryCta={cinematicPrimaryCta}
            secondaryCta={CINEMATIC_SECONDARY}
          />
        </>
      )}

      <Footer />
    </main>
  );
};

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

const normalizePath = (path: string) => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
};
