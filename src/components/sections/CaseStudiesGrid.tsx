"use client";

import Link from "next/link";
import { useCallback } from "react";

import type { CaseStudyIndexEntry } from "@/types/case-studies";

import { CaseStudyGridCard } from "@/components/cards/CaseStudyGridCard";
import { Heading } from "@/components/ui/Heading";

const DEFAULT_GRID_SPANS = [
  "md:col-span-1 lg:col-span-3",
  "md:col-span-1 lg:col-span-3",
  "md:col-span-2 lg:col-span-6",
  "md:col-span-1 lg:col-span-5",
  "md:col-span-1 lg:col-span-4",
  "md:col-span-1 lg:col-span-3",
] as const;

interface CaseStudiesGridProps {
  activeFilter: string;
  emptyStateDescription: string;
  emptyStateTitle: string;
  filters: readonly string[];
  onFilterChange: (filter: string) => void;
  onSelectStudy: (study: CaseStudyIndexEntry) => void;
  studies: CaseStudyIndexEntry[];
}

interface FilterPillProps {
  filter: string;
  isActive: boolean;
  onFilterChange: (filter: string) => void;
}

const FilterPill = ({ filter, isActive, onFilterChange }: FilterPillProps) => {
  const handleClick = useCallback(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  return (
    <button
      className={`rounded-full border px-6 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
        isActive
          ? "border-transparent bg-brand-blue text-white shadow-md shadow-brand-blue/20"
          : "border-transparent bg-white text-gray-600 shadow-sm hover:text-brand-blue"
      }`}
      onClick={handleClick}
      type="button"
    >
      {filter}
    </button>
  );
};

interface GridStudyCardProps {
  colSpan: string;
  onSelectStudy: (study: CaseStudyIndexEntry) => void;
  study: CaseStudyIndexEntry;
}

const isPageHref = (href: string) => href.startsWith("/");

const GridStudyCard = ({ colSpan, onSelectStudy, study }: GridStudyCardProps) => {
  const handleSelect = useCallback(() => {
    onSelectStudy(study);
  }, [onSelectStudy, study]);

  const card = (
    <CaseStudyGridCard
      colSpan={colSpan}
      format={study.format}
      iconName={study.formatIcon}
      image={study.card.image}
      metric={study.card.metric}
      metricLabel={study.card.metricLabel}
      onClick={isPageHref(study.card.href) ? undefined : handleSelect}
      title={study.card.client}
    />
  );

  if (isPageHref(study.card.href)) {
    return <Link className="contents" href={study.card.href}>{card}</Link>;
  }

  return card;
};

const getGridSpan = (index: number, total: number) => {
  if (total === 1) {
    return "md:col-span-2 lg:col-span-12";
  }

  if (total === 2) {
    return "md:col-span-1 lg:col-span-6";
  }

  return DEFAULT_GRID_SPANS[index % DEFAULT_GRID_SPANS.length];
};

export const CaseStudiesGrid = ({
  activeFilter,
  emptyStateDescription,
  emptyStateTitle,
  filters,
  onFilterChange,
  onSelectStudy,
  studies,
}: CaseStudiesGridProps) => {
  return (
    <section className="w-full bg-brand-gray pb-20 md:pb-24">
      <div className="bg-brand-gray/30 py-8">
        <div className="container mx-auto flex flex-wrap justify-center gap-3 px-8">
          {filters.map((filter) => (
            <FilterPill
              filter={filter}
              isActive={activeFilter === filter}
              key={filter}
              onFilterChange={onFilterChange}
            />
          ))}
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-8">
          {studies.length > 0 ? (
            <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2 lg:grid-cols-12">
              {studies.map((study, index) => (
                <GridStudyCard
                  colSpan={getGridSpan(index, studies.length)}
                  key={study.id}
                  onSelectStudy={onSelectStudy}
                  study={study}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-gray-100 bg-brand-gray/40 px-8 py-14 text-center shadow-sm">
              <Heading as="h2" className="text-center text-brand-charcoal">
                {emptyStateTitle}
              </Heading>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
                {emptyStateDescription}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
