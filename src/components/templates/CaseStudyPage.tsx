"use client";

import { useMemo } from "react";

import type { CaseStudyDetail } from "@/content/case-studies/individual";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactUs } from "@/components/sections/ContactUs";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Hero } from "@/components/sections/Hero";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Spotlight } from "@/components/sections/Spotlight";
import { Stats } from "@/components/sections/Stats";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

const HERO_PRIMARY_CTA = { href: "/contact", label: "Get a Custom Proposal" } as const;
const METADATA_LABELS = ["Client", "Event", "Location"] as const;
const CINEMATIC_HEADING: [string, string] = ["Ready to build", "your next event program?"];
const CINEMATIC_PRIMARY = { href: "/contact", label: "Start a Conversation" } as const;
const CINEMATIC_SECONDARY = { href: "/case-studies", label: "View Case Studies" } as const;

interface CaseStudyPageProps {
  study: CaseStudyDetail;
}

export const CaseStudyPage = ({ study }: CaseStudyPageProps) => {
  const heroImages = useMemo(() => [study.image], [study.image]);

  const metadata = useMemo(
    () => [
      { label: METADATA_LABELS[0], value: study.client },
      { label: METADATA_LABELS[1], value: study.event },
      { label: METADATA_LABELS[2], value: study.location },
    ],
    [study.client, study.event, study.location]
  );

  const serviceLinks = useMemo(
    () => study.services.map((s) => ({ href: "/services", title: s })),
    [study.services]
  );

  const cinematicBg = useMemo(
    () => ({ alt: study.title, src: study.image }),
    [study.title, study.image]
  );

  return (
    <main className="min-h-screen bg-brand-gray">
      <Header forceLightMode />

      <Hero images={heroImages} primaryCta={HERO_PRIMARY_CTA} title={study.title} />

      {/* Event metadata */}
      <section className="bg-brand-gray py-10">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {metadata.map(({ label, value }) => (
              <Eyebrow className="m-0 !mb-0" key={label} variant="blue">
                <span className="font-bold">{label}:</span> {value}
              </Eyebrow>
            ))}
          </div>
        </div>
      </section>

      {/* Services Delivered */}
      <RelatedServices services={serviceLinks} title="Services Delivered" />

      {/* Client Requirements — dark editorial section, centered */}
      <section className="relative overflow-hidden bg-[#111518] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,#4BC0D9_0%,rgba(75,192,217,0.82)_18%,rgba(30,96,145,0.55)_34%,transparent_50%),radial-gradient(circle_at_92%_78%,rgba(120,0,0,0.92)_0%,rgba(178,58,72,0.55)_26%,transparent_58%),linear-gradient(135deg,#111518_0%,#173D4C_34%,#28113A_68%,#4A001E_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,21,24,0.9)_0%,rgba(17,21,24,0.62)_46%,rgba(17,21,24,0.1)_100%)]" />
        <div className="relative z-10 container mx-auto px-8 text-center">
          <Heading as="h2" className="text-white">
            Client Requirements
          </Heading>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            {study.requirements}
          </p>
        </div>
      </section>

      {/* Challenges — Spotlight, image left */}
      <Spotlight
        className="[&_p]:text-lg"
        description={study.challenges}
        imageAlt={study.title}
        imageUrl={study.image}
        titleLine1="The"
        titleLine2="Challenges"
      />

      {/* Our Solution — Spotlight, image right */}
      <Spotlight
        className="[&_p]:text-lg [&>div:first-child]:md:order-2 [&>div:last-child]:md:order-1"
        description={study.solution}
        imageAlt={study.title}
        imageUrl={study.image}
        titleLine1="Our"
        titleLine2="Solution"
      />

      {/* Outcome — Stats with heading and description */}
      <Stats
        className="[&_p]:text-lg"
        description={study.outcome}
        heading="Outcome"
        imageUrl={study.image}
        stats={study.outcomeStats}
      />

      <ContactUs
        backgroundImage={cinematicBg}
        description="Tell us about your next event program and we'll outline an approach."
        headingLines={CINEMATIC_HEADING}
        primaryCta={CINEMATIC_PRIMARY}
        secondaryCta={CINEMATIC_SECONDARY}
      />

      <ContactUsForm />

      <Footer />
    </main>
  );
};
