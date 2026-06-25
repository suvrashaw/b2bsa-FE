"use client";

import type { ReactNode } from "react";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

import { CaseStudyItem } from "@/components/items/CaseStudyItem";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  type CaseStudiesContent,
  HOME_CASE_STUDIES_CONTENT,
  type CaseStudyItem as HomeCaseStudyItem,
} from "@/content/home/content";

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
  ctaLabel,
  item,
  setActiveId,
}: {
  active: boolean;
  ctaLabel: string;
  item: {
    href?: string;
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
    <CaseStudyItem
      active={active}
      className={active ? "lg:min-h-0" : "min-h-[80px] sm:min-h-[112px] lg:min-h-0"}
      ctaLabel={ctaLabel}
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
  eyebrow?: CaseStudiesContent["eyebrow"];
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
    href: getStudyHref(study),
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

  return (
    <section
      className="relative bg-brand-gray pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20"
      id="work"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        {sectionHeading && (
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
        )}
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionHeader as="h2" className="text-center">
            {heading}
          </SectionHeader>
          {description && (
            <p className="type-body-m mt-4 max-w-3xl leading-relaxed text-gray-600">
              {description}
            </p>
          )}
        </div>

        <div className="flex h-auto w-full flex-col gap-4 lg:h-[600px] lg:flex-row">
          {cards.map((study) => (
            <CaseStudyCard
              active={activeCaseStudyId === study.id}
              ctaLabel={ctaLabel}
              item={study}
              key={study.id}
              setActiveId={setActiveId}
            />
          ))}
        </div>

        {viewAllLabel && (
          <div className="mt-12 text-center">
            <Link href={viewAllHref}>
              <Button variant="primary">
                {viewAllLabel} <ArrowUpRight className="size-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

const createCaseStudyId = (study: CaseStudyEntry, index: number) => {
  return `${study.client ?? study.title}-${study.title}-${index}`
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, "");
};
