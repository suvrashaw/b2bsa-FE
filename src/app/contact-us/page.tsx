import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  CONTACT_HERO,
  CONTACT_NEXT_STEPS,
  CONTACT_PAGE,
  CONTACT_US,
  CONTACT_US_CONTACT_FORM,
} from "@/content/contact-us/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  buildBreadcrumbJsonLd,
  buildContactPageJsonLd,
  buildImageObjectJsonLd,
  buildLocalBusinessJsonLd,
  buildLocalBusinessListJsonLd,
  buildPageGraph,
  siteUrl,
} from "@/lib";
import { JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = getMarketingPageMetadata(CONTACT_PAGE);

const CONTACT_US_BG = CONTACT_HERO.backgroundImage;

const H1_STYLE = {
  color: "rgba(255, 255, 255, 0.98)",
  textShadow: "0 20px 50px rgba(4, 9, 15, 0.24)",
};
const DESCRIPTION_STYLE = { color: "rgba(255, 255, 255, 0.86)" };
const PRIMARY_CTA_STYLE = {
  background: `linear-gradient(135deg, rgba(116, 219, 243, 0.96) 0%, rgba(52, 144, 181, 0.98) 38%, rgba(30, 96, 145, 1) 100%)`,
  border: "1px solid rgba(201, 244, 255, 0.68)",
  borderRadius: "4px",
  boxShadow:
    "0 22px 44px rgba(8, 26, 41, 0.28), 0 8px 18px rgba(52, 144, 181, 0.26), inset 0 1px 0 rgba(255, 255, 255, 0.34)",
};
const HERO_OVERLAY_STYLE = {
  background: "linear-gradient(180deg, rgba(33, 52, 67, 0.5) 0%, rgba(30, 96, 145, 0.9) 90%)",
};
const CONTACT_URL = `${siteUrl}/contact-us`;

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildLocalBusinessJsonLd()} />
      {buildLocalBusinessListJsonLd().map((entry) => (
        <JsonLd data={entry} key={entry["@id"]} />
      ))}
      <JsonLd
        data={buildPageGraph([
          buildContactPageJsonLd(CONTACT_PAGE.seo.description),
          buildBreadcrumbJsonLd(
            [
              { name: "Home", url: siteUrl },
              { name: "Contact", url: CONTACT_URL },
            ],
            CONTACT_URL
          ),
          buildImageObjectJsonLd({ caption: CONTACT_US_BG.alt, url: CONTACT_US_BG.src }),
        ])}
      />
      <Header />
      <section className="relative flex min-h-[80vh] items-end pt-32 pb-20">
        <Image
          alt={CONTACT_HERO.backgroundImage.alt}
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={CONTACT_HERO.backgroundImage.src}
        />
        <div className="absolute inset-0" style={HERO_OVERLAY_STYLE} />
        <div className="relative z-10 container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <SectionHeader as="h1" className="mb-8" style={H1_STYLE}>
              <span className="block">{CONTACT_HERO.headingLine1}</span>
              <span className="block">{CONTACT_HERO.headingLine2}</span>
            </SectionHeader>
            <p
              className="mb-12 max-w-2xl text-base leading-relaxed font-semibold lg:text-xl"
              style={DESCRIPTION_STYLE}
            >
              {CONTACT_HERO.descriptionParts[0]}
              <span className="font-bold text-white">{CONTACT_HERO.descriptionHighlight}</span>
              {CONTACT_HERO.descriptionParts[1]}
            </p>
            <div className="flex flex-col flex-wrap gap-4 md:flex-row md:items-center md:gap-6">
              <Link
                className="group relative flex min-h-[58px] w-full items-center justify-center rounded-[4px] px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105 md:w-auto md:px-10"
                href={CONTACT_HERO.primaryCta.href}
                style={PRIMARY_CTA_STYLE}
              >
                {CONTACT_HERO.primaryCta.label}
                <ArrowRight className="ml-3 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                className="flex min-h-[58px] w-full items-center justify-center rounded-[4px] border border-white/30 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 md:w-auto md:px-10"
                href={CONTACT_HERO.secondaryCta.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {CONTACT_HERO.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ClientLogos />
      <ContactUsForm {...CONTACT_US_CONTACT_FORM} sectionClassName="!pt-6 md:!pt-10" />
      <ProcessTimeline heading={CONTACT_NEXT_STEPS.heading} phases={CONTACT_NEXT_STEPS.phases} />
      <ContactUs {...CONTACT_US} backgroundImage={CONTACT_US_BG} />
      <Footer />
    </main>
  );
};

export default Page;
