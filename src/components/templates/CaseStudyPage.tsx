"use client";

import Image from "next/image";
import { useMemo } from "react";

import type { CaseStudyDetail } from "@/content/case-studies";

import { EventMetadata } from "@/components/items/EventMetadata";
import { ServicesImageCard } from "@/components/items/ServicesImageCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Hero } from "@/components/sections/Hero";
import { Spotlight } from "@/components/sections/Spotlight";
import { Testimonials } from "@/components/sections/Testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";

const HERO_PRIMARY_CTA = {
  href: "/contact-us",
  label: "Get a Custom Proposal",
} as const;

const GALLERY_COL_SPANS = [
  "md:col-span-1 lg:col-span-7",
  "md:col-span-1 lg:col-span-5",
  "md:col-span-1 lg:col-span-4",
  "md:col-span-1 lg:col-span-8",
] as const;

interface CaseStudyPageProps {
  study: CaseStudyDetail;
}

export const CaseStudyPage = ({ study }: CaseStudyPageProps) => {
  const heroImages = useMemo(() => [study.image], [study.image]);

  const introMetadata = useMemo(
    () => [
      { label: "Client", value: study.client },
      { label: "Event", value: study.event },
      { label: "Location", value: study.location },
    ],
    [study.client, study.event, study.location]
  );

  const challengeSecondary = useMemo(
    () => ({
      align: "center" as const,
      description: study.solution,
      titleLine1: "Our",
      titleLine2: "Solution",
    }),
    [study.solution]
  );

  const galleryImages = useMemo(
    () => study.gallery ?? [study.image, study.image, study.image, study.image],
    [study.gallery, study.image]
  );

  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />

      <Hero
        imageOpacity={0.35}
        images={heroImages}
        primaryCta={HERO_PRIMARY_CTA}
        title={study.title}
      />

      {/* About the Event */}
      {study.eventDescription && (
        <section className="bg-brand-gray py-16 md:py-20">
          <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
            <SectionHeader as="h2" className="mb-8 text-center">
              About {study.event}
            </SectionHeader>
            <div className="mb-8 flex justify-center">
              <EventMetadata metadata={introMetadata} />
            </div>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
              {study.eventDescription}
            </p>
          </div>
        </section>
      )}

      {/* Services Delivered */}
      {study.services.length > 0 && (
        <section className="bg-brand-gray py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
            <SectionHeader as="h2" className="mb-10 text-center">
              Services Delivered
            </SectionHeader>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {study.services.map((service, index) => (
                <ServicesImageCard index={index} key={service} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Requirements — dark editorial section, centered */}
      <section className="relative overflow-hidden bg-[#111518] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,#4BC0D9_0%,rgba(75,192,217,0.82)_18%,rgba(30,96,145,0.55)_34%,transparent_50%),radial-gradient(circle_at_92%_78%,rgba(120,0,0,0.92)_0%,rgba(178,58,72,0.55)_26%,transparent_58%),linear-gradient(135deg,#111518_0%,#173D4C_34%,#28113A_68%,#4A001E_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,21,24,0.9)_0%,rgba(17,21,24,0.62)_46%,rgba(17,21,24,0.1)_100%)]" />
        <div className="relative z-10 container mx-auto px-8 text-center">
          <SectionHeader as="h2" className="text-white">
            Client Requirements
          </SectionHeader>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            {study.requirements}
          </p>
        </div>
      </section>

      {/* Challenges & Solution — side by side */}
      <Spotlight
        className="[&_p]:text-lg"
        description={study.challenges}
        secondarySpotlight={challengeSecondary}
        titleLine1="The"
        titleLine2="Challenges"
      />

      {/* Event Gallery */}
      <section className="bg-brand-gray py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          <SectionHeader as="h2" className="mb-10 text-center">
            Event Gallery
          </SectionHeader>
          <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2 lg:grid-cols-12">
            {galleryImages.slice(0, 4).map((src, i) => (
              <div
                className={`relative h-[280px] overflow-hidden rounded-2xl lg:h-[360px] ${GALLERY_COL_SPANS[i] ?? "lg:col-span-6"}`}
                key={i}
              >
                <Image
                  alt={`${study.event} gallery image ${i + 1}`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
                  src={src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <ContactUsForm />

      <Footer />
    </main>
  );
};
