"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudiesDirectory } from "@/components/sections/CaseStudiesDirectory";
import { Heading } from "@/components/ui/Heading";
import { CASE_STUDIES_PAGE_CONTENT, CASE_STUDIES_PAGE_STUDIES } from "@/content/case-studies";
import {
  clampPaginationPage,
  DEFAULT_PAGE_SIZE,
  getPaginationPageCount,
  parsePaginationPage,
} from "@/lib/pagination";

const ALL_FILTER = CASE_STUDIES_PAGE_CONTENT.gridFilters[0];

const HERO_LEFT_ANIMATE = { opacity: 1, x: 0 };
const HERO_LEFT_INITIAL = { opacity: 0, x: -30 };
const HERO_LEFT_TRANSITION = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
const HERO_RIGHT_ANIMATE = { opacity: 1, x: 0 };
const HERO_RIGHT_INITIAL = { opacity: 0, x: 30 };
const HERO_RIGHT_TRANSITION = { duration: 1, ease: [0.16, 1, 0.3, 1] as const };

export const CaseStudiesClientPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<string>(ALL_FILTER);
  const requestedPage = parsePaginationPage(searchParams.get("page"));

  const filteredStudies =
    activeFilter === ALL_FILTER
      ? CASE_STUDIES_PAGE_STUDIES
      : CASE_STUDIES_PAGE_STUDIES.filter((study) => study.serviceCategories.includes(activeFilter));
  const totalPages = getPaginationPageCount(filteredStudies.length, DEFAULT_PAGE_SIZE);
  const currentPage = clampPaginationPage(requestedPage, totalPages);

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
            <Heading as="h1" className="leading-[1.05]">
              {CASE_STUDIES_PAGE_CONTENT.hero.title}
            </Heading>
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

      <CaseStudiesDirectory
        activeFilter={activeFilter}
        emptyStateDescription={CASE_STUDIES_PAGE_CONTENT.emptyState.description}
        emptyStateTitle={CASE_STUDIES_PAGE_CONTENT.emptyState.title}
        filters={CASE_STUDIES_PAGE_CONTENT.gridFilters}
        onFilterChange={handleFilterChange}
        onPageChange={updatePage}
        page={currentPage}
        studies={filteredStudies}
      />

      <Footer />
    </main>
  );
};
