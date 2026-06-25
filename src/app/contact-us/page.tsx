import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CinematicSequence } from "@/components/sections/CinematicSequence";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Timeline } from "@/components/sections/Timeline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  CONTACT_FORM,
  CONTACT_NEXT_STEPS,
  CONTACT_PAGE,
  CONTACT_US,
} from "@/content/contact-us/content";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { buildContactPageJsonLd, buildLocalBusinessJsonLd } from "@/lib";
import { JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = getMarketingPageMetadata(CONTACT_PAGE);

const CONTACT_US_BG = { alt: "Contact Us", src: "/media/contact/hero.avif" };

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
const SECONDARY_CTA_STYLE = {
  backdropFilter: "blur(12px)",
  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.3) 100%)`,
  border: "1px solid rgba(255, 255, 255, 0.25)",
  borderRadius: "4px",
  boxShadow:
    "0 18px 38px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
  WebkitBackdropFilter: "blur(12px)",
};

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <JsonLd data={buildContactPageJsonLd(CONTACT_PAGE.seo.description)} />
      <Header darkBackground />
      <CinematicSequence
        frameCount={60}
        frameUrlTemplate="/media/contact/hero/ezgif-frame-%d.jpg"
      >
        <div className="relative z-20 container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <SectionHeader as="h1" className="mb-8" style={H1_STYLE}>
              <span className="block">Let&apos;s Build Your</span>
              <span className="block">Enterprise Growth Strategy</span>
            </SectionHeader>
            <p
              className="mb-12 max-w-2xl text-base leading-relaxed font-semibold lg:text-xl"
              style={DESCRIPTION_STYLE}
            >
              Whether you need a booth for next quarter, a sharper{" "}
              <span className="font-bold text-white">lead generation</span>{" "}
              system, enterprise video, a full digital marketing program, or
              market intelligence — one conversation is enough to define the
              right path.
            </p>
            <div className="flex flex-col flex-wrap gap-4 md:flex-row md:items-center md:gap-6">
              <Link
                className="group relative flex min-h-[58px] w-full items-center justify-center rounded-[4px] px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105 md:w-auto md:px-10"
                href="#contact"
                style={PRIMARY_CTA_STYLE}
              >
                Submit Inquiry
                <ArrowRight className="ml-3 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                className="flex min-h-[58px] w-full items-center justify-center rounded-[4px] px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105 md:w-auto md:px-10"
                href="#contact"
                style={SECONDARY_CTA_STYLE}
              >
                Book a Meeting
              </Link>
            </div>
          </div>
        </div>
      </CinematicSequence>
      <ClientLogos />
      <ContactUsForm {...CONTACT_FORM} />
      <Timeline
        heading={CONTACT_NEXT_STEPS.heading}
        phases={CONTACT_NEXT_STEPS.phases}
      />
      <ContactUs {...CONTACT_US} backgroundImage={CONTACT_US_BG} />
      <Footer />
    </main>
  );
};

export default Page;
