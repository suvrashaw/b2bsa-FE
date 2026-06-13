"use client";

import Link from "next/link";
import { type MouseEvent, type ReactNode, useCallback, useState } from "react";

import type { CaseStudyIndexEntry } from "@/content/case-studies/content";

import { CaseStudyCard } from "@/components/items/CaseStudyCard";
import { Heading } from "@/components/ui/Heading";
import { Pagination } from "@/components/ui/Pagination";
import { applyPagination } from "@/lib/pagination";

const DEFAULT_GRID_SPANS = [
  "md:col-span-1 lg:col-span-3",
  "md:col-span-1 lg:col-span-3",
  "md:col-span-2 lg:col-span-6",
  "md:col-span-1 lg:col-span-5",
  "md:col-span-1 lg:col-span-4",
  "md:col-span-1 lg:col-span-3",
] as const;

interface CaseStudiesDirectoryProps {
  activeFilter: string;
  emptyStateDescription: string;
  emptyStateTitle: string;
  filters: readonly string[];
  onFilterChange: (filter: string) => void;
  onPageChange: (page: number) => void;
  page: number;
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
  study: CaseStudyIndexEntry;
}

const isPageHref = (href?: string): href is string => href?.startsWith("/") ?? false;
const isTouchInteraction = () =>
  globalThis.window !== undefined &&
  globalThis.window.matchMedia("(hover: none), (pointer: coarse)").matches;

const GridStudyCard = ({ colSpan, study }: GridStudyCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const href = study.card.href;
  const description = study.card.primarySummary.text || study.challenge;

  const handleLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!isTouchInteraction() || isRevealed) {
        return;
      }

      event.preventDefault();
      setIsRevealed(true);
    },
    [isRevealed]
  );

  const card = (
    <CaseStudyCard
      colSpan={colSpan}
      ctaLabel="View Case Study"
      description={description}
      format={study.format}
      image={study.card.image}
      metric={study.card.metric}
      metricLabel={study.card.metricLabel}
      revealed={isRevealed}
      title={study.card.client}
    />
  );

  if (isPageHref(href)) {
    return (
      <Link className="contents" href={href} onClick={handleLinkClick}>
        {card}
      </Link>
    );
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

export const CaseStudiesDirectory = ({
  activeFilter,
  emptyStateDescription,
  emptyStateTitle,
  filters,
  onFilterChange,
  onPageChange,
  page,
  studies,
}: CaseStudiesDirectoryProps) => {
  const { totalPages, currentPage, paginatedItems: paginatedStudies } = applyPagination(studies, page);
  const hasEmptyPage = studies.length > 0 && paginatedStudies.length === 0;
  let gridContent: ReactNode;

  if (paginatedStudies.length > 0) {
    gridContent = (
      <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2 lg:grid-cols-12">
        {paginatedStudies.map((study, index) => (
          <GridStudyCard
            colSpan={getGridSpan(index, paginatedStudies.length)}
            key={study.id}
            study={study}
          />
        ))}
      </div>
    );
  } else if (hasEmptyPage) {
    gridContent = (
      <div className="flex min-h-[480px] flex-col items-center justify-center px-8 py-14 text-center">
        <Heading as="h2" className="text-center">
          No more case studies on this page.
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
          Use the pagination controls to return to the available case study results.
        </p>
      </div>
    );
  } else {
    gridContent = (
      <div className="flex min-h-[480px] flex-col items-center justify-center rounded-[2rem] border border-gray-100 bg-brand-gray/40 px-8 py-14 text-center shadow-sm">
        <Heading as="h2" className="text-center">
          {emptyStateTitle}
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
          {emptyStateDescription}
        </p>
      </div>
    );
  }

  return (
    <section className="w-full bg-brand-gray pb-20 md:pb-24">
      <div className="bg-brand-gray/30 py-8">
        <div className="container mx-auto flex max-w-screen-2xl flex-wrap justify-center gap-3 px-4 sm:px-6 md:px-8">
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
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
          {gridContent}

          <Pagination
            className="mt-12"
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPages={totalPages}
          />
        </div>
      </div>
    </section>
  );
};
