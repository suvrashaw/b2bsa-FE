import type { Metadata } from "next";

import { Suspense } from "react";

import { CASE_STUDIES_PAGE } from "@/content/case-studies";
import { CASE_STUDY_DETAILS } from "@/content/case-studies/details";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  buildBreadcrumbJsonLd,
  buildLinkedItemListJsonLd,
  buildPageGraph,
  buildWebPageJsonLd,
  JsonLd,
  siteUrl,
} from "@/lib";

import { CaseStudiesClientPage } from "./CaseStudiesClientPage";

export const metadata: Metadata = getMarketingPageMetadata(CASE_STUDIES_PAGE);

const CASE_STUDIES_URL = `${siteUrl}/case-studies`;

const Page = () => (
  <>
    <JsonLd
      data={buildPageGraph([
        buildWebPageJsonLd({
          breadcrumbId: `${CASE_STUDIES_URL}/#breadcrumb`,
          description: CASE_STUDIES_PAGE.seo.description,
          name: CASE_STUDIES_PAGE.seo.title.split(" | ", 1)[0],
          url: CASE_STUDIES_URL,
        }),
        buildBreadcrumbJsonLd(
          [
            { name: "Home", url: siteUrl },
            { name: "Case Studies", url: CASE_STUDIES_URL },
          ],
          CASE_STUDIES_URL
        ),
        buildLinkedItemListJsonLd(
          CASE_STUDY_DETAILS.slice(0, 10).map((s) => ({
            name: s.title,
            url: `${siteUrl}/case-studies/${s.id}`,
          }))
        ),
      ])}
    />
    <Suspense fallback={<div className="min-h-[1200px]" />}>
      <CaseStudiesClientPage />
    </Suspense>
  </>
);

export default Page;
