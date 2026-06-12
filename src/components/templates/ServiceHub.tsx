import { type ReactNode, useMemo } from "react";

import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { FAQProps } from "@/components/sections/FAQ";
import type { ServicesStackProps } from "@/components/sections/ServicesStack";
import type { SpotlightProps } from "@/components/sections/Spotlight";
import type { MarketingPageIdentity } from "@/content/page-definitions";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ContactCinematicCTA } from "@/components/sections/ContactCinematicCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProofBar } from "@/components/sections/ProofBar";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServicesStack } from "@/components/sections/ServicesStack";
import { Spotlight } from "@/components/sections/Spotlight";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { JsonLd } from "@/components/templates/ServiceDetail";
import { buildFaqJsonLd, buildServiceJsonLd } from "@/lib";

export interface ServiceHubProps {
  caseStudies?: CaseStudiesProps;
  closingSections?: ReactNode;
  ctaBanner?: {
    ctaHref?: string;
    ctaLabel: string;
    description?: string;
    title: string;
  };
  faq: FAQProps;
  hero: {
    description: string;
    primaryCta?: {
      href: string;
      label: string;
    };
    secondaryCta?: {
      href: string;
      label: string;
    };
    title: ReactNode;
  };
  page: MarketingPageIdentity;
  process?: {
    heading?: string;
    phases: { description: string; title: string }[];
    steps?: { description: string; title: string }[];
    title?: string;
  };
  proofBar?: string[];
  proofBarImageUrl?: string;
  relatedServices?: { href: string; title: string }[];
  services: ServicesStackProps;
  stats?: {
    items: { label: string; value: string }[];
    title: string;
  };
  why: SpotlightProps;
}

const primaryServiceHeroCta = { href: "/contact", label: "Book a Strategy Session" };
const secondaryServiceHeroCta = { href: "/case-studies", label: "View Event Portfolio" };
const serviceHeroCtasByPath: Record<
  string,
  {
    primaryCta: { href: string; label: string };
    secondaryCta?: { href: string; label: string };
  }
> = {
  "/services/global-event-solutions": {
    primaryCta: { href: "/contact", label: "Book a Strategy Session" },
    secondaryCta: { href: "/case-studies", label: "View Event Portfolio" },
  },
  "/services/market-research": {
    primaryCta: { href: "/contact", label: "Request a Research Consultation" },
    secondaryCta: { href: "/contact", label: "Download a Sample Report" },
  },
  "/services/media-production": {
    primaryCta: { href: "/contact", label: "Start Your Media Project" },
  },
  "/services/performance-marketing": {
    primaryCta: { href: "/contact", label: "Request a Performance Marketing Audit" },
    secondaryCta: { href: "/contact", label: "Book a Free Consultation" },
  },
  "/services/sales-qualified-lead-generation": {
    primaryCta: { href: "/contact", label: "Request a SQL Strategy Session" },
    secondaryCta: { href: "/contact", label: "Build Your SQL Program" },
  },
};

const CINEMATIC_BG = { alt: "Event", src: "/images/case-studies/waf.avif" } as const;
const CINEMATIC_SECONDARY = { href: "/case-studies", label: "View Case Studies" } as const;

export const ServiceHub = ({
  caseStudies,
  closingSections,
  ctaBanner,
  faq,
  hero,
  page,
  process,
  proofBar,
  proofBarImageUrl = "/images/Frames/ezgif-frame-017.jpg",
  relatedServices,
  services,
  stats,
  why,
}: ServiceHubProps) => {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;
  const serviceJsonLd = buildServiceJsonLd({
    description: page.seo.description,
    name: page.pageName,
    url: page.seo.canonicalPath,
  });
  const heroCtas = serviceHeroCtasByPath[normalizePath(page.seo.canonicalPath)];

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

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={serviceJsonLd} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <Header darkBackground />

      <Hero
        description={hero.description}
        primaryCta={hero.primaryCta ?? heroCtas?.primaryCta ?? primaryServiceHeroCta}
        secondaryCta={
          hero.secondaryCta ?? (heroCtas ? heroCtas.secondaryCta : secondaryServiceHeroCta)
        }
        title={hero.title}
      />

      {proofBar && (
        <ProofBar heading={`About ${page.pageName}`} imageUrl={proofBarImageUrl} stats={proofBar} />
      )}

      <ServicesStack {...services} />

      <section className="bg-brand-gray py-24">
        <div className="container mx-auto px-8">
          <Spotlight {...why} />
        </div>
      </section>

      {process && (
        <ProcessTimeline
          steps={process.steps ?? process.phases}
          title={process.title ?? process.heading}
        />
      )}

      {caseStudies && (
        <CaseStudies
          description="B2B Sales Arrow has delivered measurable commercial outcomes at some of the world's most competitive enterprise B2B events. Here are five recent programs from 2025 & 2026."
          heading="Real Events. Real Results."
          {...caseStudies}
        />
      )}

      {stats && <WhoWeAre items={stats.items} title={stats.title} />}

      <FAQ {...faq} />

      {relatedServices && <RelatedServices services={relatedServices} />}

      {closingSections ?? (
        <ContactCinematicCTA
          backgroundImage={CINEMATIC_BG}
          description={
            ctaBanner?.description ?? "250+ events. $1.2B+ influenced. One conversation to start."
          }
          headingLines={cinematicHeadingLines}
          primaryCta={cinematicPrimaryCta}
          secondaryCta={CINEMATIC_SECONDARY}
        />
      )}

      <Footer />
    </main>
  );
};

const normalizePath = (path: string) => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
};
