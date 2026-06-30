import type { Metadata } from "next";

import { Suspense } from "react";

import {
  CASE_STUDIES_PAGE,
  CASE_STUDIES_PAGE_CONTENT,
  CASE_STUDIES_PAGE_STUDIES,
  CASE_STUDY_DETAILS,
} from "@/content/case-studies";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { getStructuredPageContent } from "@/lib/cms-api";
import {
  buildCollectionPageJsonLd,
  buildLinkedItemListJsonLd,
  buildPageGraph,
  JsonLd,
  siteUrl,
} from "@/lib";

import { CaseStudiesClientPage } from "./CaseStudiesClientPage";

export const metadata: Metadata = getMarketingPageMetadata(CASE_STUDIES_PAGE);

const CASE_STUDIES_FALLBACK_CONTENT = {
  ...CASE_STUDIES_PAGE_CONTENT,
  caseStudies: CASE_STUDIES_PAGE_STUDIES,
  page: CASE_STUDIES_PAGE,
};

const Page = async () => {
  const content = await getStructuredPageContent("/case-studies", CASE_STUDIES_FALLBACK_CONTENT);
  const pageContent = {
    cardCtaLabel: content.cardCtaLabel,
    cta: content.cta,
    emptyState: content.emptyState,
    filters: content.filters,
    filtersTitle: content.filtersTitle,
    gridFilters: content.gridFilters,
    hero: content.hero,
    intro: content.intro,
    resultsHeading: content.resultsHeading,
    template: content.template,
  };

  return (
    <>
      <JsonLd
        data={buildPageGraph([
          buildCollectionPageJsonLd({
            description: content.page.seo.description,
            name: content.page.seo.title.split(" | ", 1)[0],
            url: "/case-studies",
          }),
          buildLinkedItemListJsonLd(
            CASE_STUDY_DETAILS.slice(0, 10).map((s) => ({
              name: s.title,
              url: `${siteUrl}/case-studies/${s.slug}`,
            }))
          ),
        ])}
      />
      <Suspense>
        <CaseStudiesClientPage content={pageContent} studies={content.caseStudies} />
      </Suspense>
    </>
  );
};

export default Page;
