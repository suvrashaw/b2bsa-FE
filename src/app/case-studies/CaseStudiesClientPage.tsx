"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type MouseEvent, type ReactNode, useCallback, useEffect, useState } from "react";

import { CaseStudyGridCard } from "@/components/items/CaseStudyGridCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactUsForm } from "@/components/sections/ContactUsForm";
import { Pagination } from "@/components/ui/Pagination";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  CASE_STUDIES_PAGE_CONTENT,
  CASE_STUDIES_PAGE_STUDIES,
  type CaseStudyEntry,
} from "@/content/case-studies";
import { applyPagination, parsePaginationPage } from "@/lib/pagination";

const ALL_FILTER = CASE_STUDIES_PAGE_CONTENT.gridFilters[0];

const HERO_LEFT_ANIMATE = { opacity: 1, x: 0 };
const HERO_LEFT_INITIAL = { opacity: 0, x: -30 };
const HERO_LEFT_TRANSITION = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
};
const HERO_RIGHT_ANIMATE = { opacity: 1, x: 0 };
const HERO_RIGHT_INITIAL = { opacity: 0, x: 30 };
const HERO_RIGHT_TRANSITION = { duration: 1, ease: [0.16, 1, 0.3, 1] as const };

const DEFAULT_GRID_SPANS = [
  "md:col-span-1 lg:col-span-3",
  "md:col-span-1 lg:col-span-3",
  "md:col-span-2 lg:col-span-6",
  "md:col-span-1 lg:col-span-5",
  "md:col-span-1 lg:col-span-4",
  "md:col-span-1 lg:col-span-3",
] as const;

const isPageHref = (href?: string): href is string => href?.startsWith("/") ?? false;
const isTouchInteraction = () =>
  globalThis.window !== undefined &&
  globalThis.window.matchMedia("(hover: none), (pointer: coarse)").matches;

const getGridSpan = (index: number, total: number) => {
  if (total === 1) return "md:col-span-2 lg:col-span-12";
  if (total === 2) return "md:col-span-1 lg:col-span-6";
  return DEFAULT_GRID_SPANS[index % DEFAULT_GRID_SPANS.length];
};

const FilterPill = ({
  filter,
  isActive,
  onFilterChange,
}: {
  filter: string;
  isActive: boolean;
  onFilterChange: (filter: string) => void;
}) => {
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

const GridStudyCard = ({ colSpan, study }: { colSpan: string; study: CaseStudyEntry }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const href = study.href;

  const handleLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!isTouchInteraction() || isRevealed) return;
      event.preventDefault();
      setIsRevealed(true);
    },
    [isRevealed]
  );

  const card = (
    <CaseStudyGridCard
      colSpan={colSpan}
      description={study.title}
      image={study.image}
      metric={study.metric}
      metricLabel={study.metricLabel}
      revealed={isRevealed}
      title={study.event}
    />
  );

  if (isPageHref(href)) {
    return (
      <Link className="contents" href={`/case-studies/${study.id}`} onClick={handleLinkClick}>
        {card}
      </Link>
    );
  }

  return card;
};

export const CaseStudiesClientPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<string>(ALL_FILTER);
  const requestedPage = parsePaginationPage(searchParams.get("page"));

  const filteredStudies =
    activeFilter === ALL_FILTER
      ? CASE_STUDIES_PAGE_STUDIES
      : CASE_STUDIES_PAGE_STUDIES.filter((study) => study.services.includes(activeFilter));

  const {
    currentPage,
    paginatedItems: paginatedStudies,
    totalPages,
  } = applyPagination(filteredStudies, requestedPage);
  const hasEmptyPage = filteredStudies.length > 0 && paginatedStudies.length === 0;
  let gridContent: ReactNode;

  const updatePage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());

      if (page <= 1) {
        params.delete("page");
      } else {
        params.set("page", String(page));
      }

      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const handleFilterChange = useCallback(
    (filter: string) => {
      setActiveFilter(filter);
      updatePage(1);
    },
    [updatePage]
  );

  useEffect(() => {
    if (requestedPage !== currentPage) {
      updatePage(currentPage);
    }
  }, [currentPage, requestedPage, updatePage]);

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
        <SectionHeader as="h2" className="text-center">
          No more case studies on this page.
        </SectionHeader>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
          Use the pagination controls to return to the available case study results.
        </p>
      </div>
    );
  } else {
    gridContent = (
      <div className="flex min-h-[480px] flex-col items-center justify-center rounded-[2rem] border border-gray-100 bg-brand-gray/40 px-8 py-14 text-center shadow-sm">
        <SectionHeader as="h2" className="text-center">
          {CASE_STUDIES_PAGE_CONTENT.emptyState.title}
        </SectionHeader>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
          {CASE_STUDIES_PAGE_CONTENT.emptyState.description}
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />

      <section className="relative overflow-hidden bg-brand-gray pt-28">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-brand-gray/30" />
        <div className="relative z-10 container mx-auto grid items-center gap-12 px-8 pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <motion.div
            animate={HERO_LEFT_ANIMATE}
            className="max-w-3xl"
            initial={HERO_LEFT_INITIAL}
            transition={HERO_LEFT_TRANSITION}
          >
            <SectionHeader as="h1" className="leading-[1.05]">
              {CASE_STUDIES_PAGE_CONTENT.hero.title}
            </SectionHeader>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-700">
              {CASE_STUDIES_PAGE_CONTENT.hero.description}
            </p>
          </motion.div>

          <motion.div
            animate={HERO_RIGHT_ANIMATE}
            className="relative hidden h-[520px] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl lg:block"
            initial={HERO_RIGHT_INITIAL}
            transition={HERO_RIGHT_TRANSITION}
          >
            <Image
              alt={CASE_STUDIES_PAGE_CONTENT.hero.image.alt}
              className="object-cover"
              fill
              priority
              sizes="40vw"
              src={CASE_STUDIES_PAGE_CONTENT.hero.image.src}
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-brand-gray pb-20 md:pb-24">
        <div className="bg-brand-gray/30 py-8">
          <div className="container mx-auto flex max-w-screen-2xl flex-wrap justify-center gap-3 px-4 sm:px-6 md:px-8">
            {CASE_STUDIES_PAGE_CONTENT.gridFilters.map((filter) => (
              <FilterPill
                filter={filter}
                isActive={activeFilter === filter}
                key={filter}
                onFilterChange={handleFilterChange}
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
              onPageChange={updatePage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </section>

      <ContactUsForm />

      <Footer />
    </main>
  );
};
