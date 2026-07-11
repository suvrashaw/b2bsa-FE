"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { Children, useCallback, useState } from "react";

import { CaseStudyCard as CaseStudyItemCard } from "@/components/items/CaseStudyItem";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  type CaseStudiesContent,
  HOME_CASE_STUDIES_CONTENT,
  type CaseStudyItem as HomeCaseStudyItem,
} from "@/content/home/content";
import { cn } from "@/lib";

type ColsValue = 2 | 3 | 4;

const FLEX_WIDTHS: Record<ColsValue, string> = {
  2: "w-full sm:w-[calc(50%-12px)]",
  3: "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
  4: "w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]",
};

export interface CardsGridProps {
  cardClassName?: string;
  children: ReactNode;
  className?: string;
  cols?: ColsValue;
  cta?: ReactNode;
  description?: string;
  gap?: string;
  gridClassName?: string;
  heading?: ReactNode;
  headingAction?: ReactNode;
  headingAlign?: "center" | "left";
  id?: string;
  /**
   * "grid" wraps each child in a fixed-width flex-wrap cell (default).
   * "expand" renders children directly in a non-wrapping row, letting each
   * child control its own width (e.g. an active/inactive flex-grow card).
   */
  variant?: "expand" | "grid";
}

export const CardsGrid = ({
  cardClassName,
  children,
  className,
  cols = 3,
  cta,
  description,
  gap = "gap-6",
  gridClassName,
  heading,
  headingAction,
  headingAlign = "center",
  id,
  variant = "grid",
}: CardsGridProps) => {
  const flexWidthClass = FLEX_WIDTHS[cols];

  return (
    <section className={cn("bg-brand-gray py-12 md:py-16 lg:py-20", className)} id={id}>
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          description={description}
          heading={heading}
          headingAction={headingAction}
          headingAlign={headingAlign}
        />

        {variant === "expand" ? (
          <div
            className={cn(
              "flex h-auto w-full flex-col lg:h-[600px] lg:flex-row",
              gap,
              gridClassName
            )}
          >
            {children}
          </div>
        ) : (
          <div className={cn("flex flex-wrap justify-center", gap, gridClassName)}>
            {Children.map(children, (child, i) => (
              <div className={cn(flexWidthClass, cardClassName)} key={i}>
                {child}
              </div>
            ))}
          </div>
        )}

        {cta && <div className="mt-10 flex justify-center">{cta}</div>}
      </div>
    </section>
  );
};

// ─── CaseStudies: CardsGrid "expand" variant preset ───────────────────────────

export type CaseStudyEntry = {
  href?: string;
  icon?: string;
  id?: string;
} & Omit<HomeCaseStudyItem, "icon" | "id">;

const FALLBACK_CASE_STUDY_ICONS = ["Target", "Sparkles", "Building2"];
const DEFAULT_CASE_STUDIES_HEADING = "Real Events. Real Results.";
const DEFAULT_CASE_STUDIES_DESCRIPTION =
  "Explore how we have helped B2B brands improve audience engagement, event visibility, thought leadership, and lead generation through strategic social media marketing campaigns.";

const CaseStudyCard = ({
  active,
  item,
  setActiveId,
}: {
  active: boolean;
  item: {
    cta?: { href: string; label: string };
    icon: string;
    id: string;
    image: string;
    secondarySummary: { text: string };
    title: string;
  };
  setActiveId: (id: string) => void;
}) => {
  const handleActivate = useCallback(() => setActiveId(item.id), [item.id, setActiveId]);
  return (
    <CaseStudyItemCard
      active={active}
      className={active ? "lg:min-h-0" : "min-h-[80px] sm:min-h-[112px] lg:min-h-0"}
      item={item}
      onActivate={handleActivate}
    />
  );
};

export interface CaseStudiesProps {
  caseStudies?: CaseStudyEntry[];
  content?: CaseStudiesContent;
  ctaLabel?: CaseStudiesContent["ctaLabel"];
  description?: string;
  getStudyHref?: (study: CaseStudyEntry) => string;
  heading?: ReactNode;
  items?: CaseStudyEntry[];
  maxItems?: number;
  sectionDescription?: string;
  sectionHeading?: ReactNode;
  viewAllHref?: string;
  viewAllLabel?: CaseStudiesContent["viewAllLabel"];
}

export const CaseStudies = ({
  caseStudies,
  content = HOME_CASE_STUDIES_CONTENT,
  ctaLabel = content.ctaLabel,
  description = DEFAULT_CASE_STUDIES_DESCRIPTION,
  getStudyHref = (study) => study.href ?? viewAllHref,
  heading = DEFAULT_CASE_STUDIES_HEADING,
  items,
  maxItems = 5,
  sectionDescription,
  sectionHeading,
  viewAllHref = "/case-studies",
  viewAllLabel = content.viewAllLabel,
}: CaseStudiesProps = {}) => {
  const initialItems = items ?? caseStudies ?? content.items;
  const resolvedCaseStudies = (maxItems ? initialItems.slice(0, maxItems) : initialItems).map(
    (study, index) => ({
      ...study,
      icon: study.icon ?? FALLBACK_CASE_STUDY_ICONS[index % FALLBACK_CASE_STUDY_ICONS.length],
      id: study.id ?? createCaseStudyId(study, index),
    })
  );

  const cards = resolvedCaseStudies.map((study) => ({
    client: study.client ?? study.title,
    cta: { href: getStudyHref(study), label: ctaLabel },
    icon: study.icon,
    id: study.id,
    image: study.image,
    inactiveLabel: study.title,
    metric: study.metric ?? "",
    metricLabel: study.metricLabel ?? "",
    primarySummary: {
      label: "",
      text: study.challenge ?? "",
    },
    secondarySummary: {
      label: "",
      text: study.solution,
    },
    title: study.title,
  }));
  const middleIndex = Math.floor(resolvedCaseStudies.length / 2);
  const [activeId, setActiveId] = useState<string>(resolvedCaseStudies[middleIndex]?.id ?? "");
  const activeCaseStudyId = cards.some((study) => study.id === activeId)
    ? activeId
    : (cards[0]?.id ?? "");

  const viewAllCta = viewAllLabel && (
    <Button asChild variant="primary">
      <Link href={viewAllHref}>{viewAllLabel}</Link>
    </Button>
  );

  return (
    <>
      {sectionHeading && (
        <div className="bg-brand-gray pt-8 md:pt-10 lg:pt-12">
          <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
            <div className="mb-10 flex flex-col items-center text-center">
              <SectionHeader as="h2" className="text-center">
                {sectionHeading}
              </SectionHeader>
              {sectionDescription && (
                <p className="type-body-m mt-4 max-w-3xl leading-relaxed text-gray-600">
                  {sectionDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <CardsGrid
        className={cn(
          "relative",
          sectionHeading
            ? "pt-0 pb-12 md:pb-16 lg:pb-20"
            : "pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20"
        )}
        cta={viewAllCta}
        description={description}
        gap="gap-4"
        heading={heading}
        id="work"
        variant="expand"
      >
        {cards.map((study) => (
          <CaseStudyCard
            active={activeCaseStudyId === study.id}
            item={study}
            key={study.id}
            setActiveId={setActiveId}
          />
        ))}
      </CardsGrid>
    </>
  );
};

const createCaseStudyId = (study: CaseStudyEntry, index: number) => {
  return `${study.client ?? study.title}-${study.title}-${index}`
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, "");
};
