import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { FAQProps } from "@/components/sections/FAQ";
import type { OurServicesProps } from "@/components/sections/OurServices";
import type { FeaturedSpotlightProps } from "@/components/ui/FeaturedSpotlight";
import type { MarketingPageIdentity } from "@/content/page-definitions";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { OurServices } from "@/components/sections/OurServices";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProofBar } from "@/components/sections/ProofBar";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { JsonLd } from "@/components/templates/ServiceDetail";
import { FeaturedSpotlight } from "@/components/ui/FeaturedSpotlight";
import { buildFaqJsonLd, buildServiceJsonLd } from "@/lib";

export interface ServiceHubProps {
  caseStudies?: CaseStudiesProps;
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
    title: string;
  };
  page: MarketingPageIdentity;
  process?: {
    heading?: string;
    phases: { description: string; title: string }[];
    steps?: { description: string; title: string }[];
    title?: string;
  };
  proofBar?: string[];
  relatedServices?: { href: string; title: string }[];
  services: OurServicesProps;
  stats?: {
    items: { label: string; value: string }[];
    title: string;
  };
  why: FeaturedSpotlightProps;
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

export const ServiceHub = ({
  caseStudies,
  ctaBanner,
  faq,
  hero,
  page,
  process,
  proofBar,
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

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={serviceJsonLd} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <Header darkBackground />

      <ServiceHero
        description={hero.description}
        primaryCta={hero.primaryCta ?? heroCtas?.primaryCta ?? primaryServiceHeroCta}
        secondaryCta={
          hero.secondaryCta ?? (heroCtas ? heroCtas.secondaryCta : secondaryServiceHeroCta)
        }
        title={hero.title}
      />

      {proofBar && <ProofBar stats={proofBar} />}

      <OurServices {...services} />

      <section className="bg-brand-gray py-24">
        <div className="container mx-auto px-8">
          <FeaturedSpotlight {...why} />
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

      <CTABanner
        ctaHref={ctaBanner?.ctaHref ?? "/contact"}
        ctaLabel={ctaBanner?.ctaLabel ?? "Book a Strategy Session"}
        description={
          ctaBanner?.description ?? "250+ events. $1.2B+ influenced. One conversation to start."
        }
        title={ctaBanner?.title ?? "Ready to Build Your Enterprise Growth Engine?"}
      />

      <Footer />
    </main>
  );
};

const normalizePath = (path: string) => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
};
