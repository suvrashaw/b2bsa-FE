"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { CaseStudyShowcaseCard } from "@/components/ui/CaseStudyShowcaseCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { CASE_STUDIES_PAGE_CONTENT, CASE_STUDIES_PAGE_STUDIES } from "@/content/case-studies";
import { cn } from "@/lib";

import { CTABanner } from "./CTABanner";
import { ProofBar } from "./ProofBar";

type FilterId = (typeof CASE_STUDIES_PAGE_CONTENT.filters)[number]["id"];

const ALL_FILTER = "All";

const filterOptions = {
  companySize: [...new Set(CASE_STUDIES_PAGE_STUDIES.map((study) => study.companySize))],
  geography: [...new Set(CASE_STUDIES_PAGE_STUDIES.map((study) => study.geography))],
  industry: [...new Set(CASE_STUDIES_PAGE_STUDIES.map((study) => study.industry))],
  serviceCategory: [
    ...new Set(CASE_STUDIES_PAGE_STUDIES.flatMap((study) => study.serviceCategories)),
  ],
} satisfies Record<FilterId, string[]>;

export function CaseStudiesIndex() {
  const [filters, setFilters] = useState<Record<FilterId, string>>({
    companySize: ALL_FILTER,
    geography: ALL_FILTER,
    industry: ALL_FILTER,
    serviceCategory: ALL_FILTER,
  });
  const [activeId, setActiveId] = useState<string>(CASE_STUDIES_PAGE_STUDIES[0]?.id ?? "");

  const filteredStudies = CASE_STUDIES_PAGE_STUDIES.filter((study) => {
    const serviceMatch =
      filters.serviceCategory === ALL_FILTER ||
      study.serviceCategories.includes(filters.serviceCategory);
    const industryMatch = filters.industry === ALL_FILTER || study.industry === filters.industry;
    const geographyMatch =
      filters.geography === ALL_FILTER || study.geography === filters.geography;
    const companySizeMatch =
      filters.companySize === ALL_FILTER || study.companySize === filters.companySize;

    return serviceMatch && industryMatch && geographyMatch && companySizeMatch;
  });

  const activeStudyId = filteredStudies.some((study) => study.id === activeId)
    ? activeId
    : (filteredStudies[0]?.id ?? "");

  const updateFilter = (filterId: FilterId, option: string) => {
    setFilters({
      ...filters,
      [filterId]: option,
    });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-28">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-brand-gray/30" />
        <div className="relative z-10 container mx-auto grid items-center gap-12 px-8 pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-heading text-5xl leading-[1.05] font-bold lg:text-7xl">
              {CASE_STUDIES_PAGE_CONTENT.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-700">
              {CASE_STUDIES_PAGE_CONTENT.hero.description}
            </p>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="relative hidden h-[520px] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl lg:block"
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              alt={CASE_STUDIES_PAGE_CONTENT.hero.image.alt}
              className="object-cover"
              fill
              priority
              sizes="40vw"
              src={CASE_STUDIES_PAGE_CONTENT.hero.image.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent" />
          </motion.div>
        </div>

        <ProofBar
          className="border-t border-gray-100 bg-brand-gray/40"
          stats={CASE_STUDIES_PAGE_CONTENT.hero.proofBarStats}
        />
      </section>

      <SectionShell className="bg-brand-gray/70 py-20">
        <div className="space-y-10">
          <h2 className="font-heading text-3xl leading-tight font-bold lg:text-5xl">
            {CASE_STUDIES_PAGE_CONTENT.filtersTitle}
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {CASE_STUDIES_PAGE_CONTENT.filters.map((filter) => (
              <div
                className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm"
                key={filter.id}
              >
                <h3 className="text-sm font-bold tracking-[0.2em] text-brand-blue uppercase">
                  {filter.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {[ALL_FILTER, ...filterOptions[filter.id]].map((option) => {
                    const isActive = filters[filter.id] === option;

                    return (
                      <Button
                        className={cn(
                          "rounded-full px-4 py-2 text-sm",
                          !isActive && "border-white bg-white text-gray-700"
                        )}
                        key={`${filter.id}-${option}`}
                        onClick={() => updateFilter(filter.id, option)}
                        size="sm"
                        type="button"
                        variant={isActive ? "primary" : "secondary"}
                      >
                        {option}
                      </Button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <section className="relative bg-brand-gray py-20">
        <div className="container mx-auto px-8">
          <div className="mb-16 flex flex-col items-start text-left">
            <h2 className="font-heading text-4xl leading-tight font-bold lg:text-5xl">
              {CASE_STUDIES_PAGE_CONTENT.resultsHeading}
            </h2>
          </div>

          {filteredStudies.length > 0 ? (
            <div className="flex h-[600px] w-full flex-col gap-4 lg:flex-row">
              {filteredStudies.map((study) => (
                <CaseStudyShowcaseCard
                  active={activeStudyId === study.id}
                  ctaLabel={CASE_STUDIES_PAGE_CONTENT.cardCtaLabel}
                  item={study.card}
                  key={study.id}
                  onActivate={() => setActiveId(study.id)}
                />
              ))}
            </div>
          ) : null}

          <div className="mt-16 space-y-8">
            {filteredStudies.map((study) => (
              <article
                className="scroll-mt-32 rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl lg:p-10"
                id={study.anchorId}
                key={study.id}
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)]">
                  <div>
                    <h3 className="font-heading text-3xl leading-tight font-bold lg:text-4xl">
                      {study.title}
                    </h3>

                    <div className="mt-8 space-y-6 text-base leading-8 text-gray-700">
                      <p>
                        <span className="font-semibold text-black">Industry:</span> {study.industry}
                        . <span className="font-semibold text-black">Event:</span> {study.event}.{" "}
                        <span className="font-semibold text-black">Services:</span>{" "}
                        {study.servicesText}
                      </p>
                      <p>
                        <span className="font-semibold text-black">The Challenge:</span>{" "}
                        {study.challenge}
                      </p>
                      <p>
                        <span className="font-semibold text-black">What We Did:</span>{" "}
                        {study.whatWeDid}
                      </p>
                      <p>
                        <span className="font-semibold text-black">Results:</span> {study.results}
                      </p>
                    </div>
                  </div>

                  <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
                    <Image
                      alt={study.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 32vw"
                      src={study.card.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
                    <div className="absolute top-6 right-6 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-center shadow-lg backdrop-blur-md">
                      <div className="font-heading text-2xl font-bold text-brand-blue">
                        {study.card.metric}
                      </div>
                      <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                        {study.card.metricLabel}
                      </div>
                    </div>
                    <div className="absolute right-6 bottom-6 left-6 flex flex-wrap gap-2">
                      {study.serviceCategories.map((service) => (
                        <span
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-md"
                          key={`${study.id}-${service}`}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionShell className="bg-white py-20">
        <div className="space-y-12">
          <h2 className="font-heading text-4xl leading-tight font-bold lg:text-5xl">
            {CASE_STUDIES_PAGE_CONTENT.template.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CASE_STUDIES_PAGE_CONTENT.template.items.map((item) => (
              <div
                className="rounded-3xl border border-gray-100 bg-brand-gray/40 p-6 shadow-sm"
                key={item}
              >
                <CheckCircle2 className="h-6 w-6 text-brand-blue" />
                <p className="mt-4 text-base leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <CTABanner
        className="bg-white"
        ctaHref={CASE_STUDIES_PAGE_CONTENT.cta.ctaHref}
        ctaText={CASE_STUDIES_PAGE_CONTENT.cta.ctaLabel}
        title={CASE_STUDIES_PAGE_CONTENT.cta.title}
      />
    </>
  );
}
