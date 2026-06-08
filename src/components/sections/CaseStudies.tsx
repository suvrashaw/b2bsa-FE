"use client";

import type { ReactNode } from "react";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

import type { CaseStudyCardData } from "@/types/case-studies";

import { Button } from "@/components/ui/Button";
import { CaseStudyShowcaseCard } from "@/components/ui/CaseStudyShowcaseCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import {
  type CaseStudiesContent,
  HOME_CASE_STUDIES_CONTENT,
  type CaseStudyItem as HomeCaseStudyItem,
} from "@/content/home";

export type CaseStudyItem = {
  href?: string;
  icon?: string;
  id?: string;
} & Omit<HomeCaseStudyItem, "icon" | "id">;

const FALLBACK_CASE_STUDY_ICONS = ["Target", "Sparkles", "Building2"];

const CaseStudyCard = ({
  active,
  ctaLabel,
  item,
  setActiveId,
}: {
  active: boolean;
  ctaLabel: string;
  item: CaseStudyCardData;
  setActiveId: (id: string) => void;
}) => {
  const handleActivate = useCallback(() => setActiveId(item.id), [item.id, setActiveId]);
  return (
    <CaseStudyShowcaseCard
      active={active}
      ctaLabel={ctaLabel}
      item={item}
      onActivate={handleActivate}
    />
  );
};

export interface CaseStudiesProps {
  caseStudies?: CaseStudyItem[];
  content?: CaseStudiesContent;
  ctaLabel?: CaseStudiesContent["ctaLabel"];
  description?: string;
  eyebrow?: CaseStudiesContent["eyebrow"];
  getStudyHref?: (study: CaseStudyItem) => string;
  heading?: ReactNode;
  items?: CaseStudyItem[];
  viewAllHref?: string;
  viewAllLabel?: CaseStudiesContent["viewAllLabel"];
}

export const CaseStudies = ({
  caseStudies,
  content = HOME_CASE_STUDIES_CONTENT,
  ctaLabel = content.ctaLabel,
  description,
  eyebrow = content.eyebrow,
  getStudyHref = (study) => study.href ?? viewAllHref,
  heading = content.heading,
  items,
  viewAllHref = "/case-studies",
  viewAllLabel = content.viewAllLabel,
}: CaseStudiesProps = {}) => {
  const resolvedCaseStudies = (items ?? caseStudies ?? content.items).map((study, index) => ({
    ...study,
    icon: study.icon ?? FALLBACK_CASE_STUDY_ICONS[index % FALLBACK_CASE_STUDY_ICONS.length],
    id: study.id ?? createCaseStudyId(study, index),
  }));

  const cards: CaseStudyCardData[] = resolvedCaseStudies.map((study) => ({
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
    <section className="relative bg-brand-gray py-20" id="work">
      <div className="container mx-auto max-w-6xl px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          {eyebrow && <Eyebrow variant="blue">{eyebrow}</Eyebrow>}
          <Heading as="h2" className="text-center">{heading}</Heading>
          {description && (
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
              {description}
            </p>
          )}
        </div>

        <div className="flex h-[600px] w-full flex-col gap-4 lg:flex-row">
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
              <Button variant="secondary">
                {viewAllLabel} <ArrowUpRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

const createCaseStudyId = (study: CaseStudyItem, index: number) => {
  return `${study.client ?? study.title}-${study.title}-${index}`
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, "");
};
