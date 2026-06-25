import type { Metadata } from "next";

import { Suspense } from "react";

import { CASE_STUDIES_PAGE, CASE_STUDY_DETAILS } from "@/content/case-studies";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import {
  buildCollectionPageJsonLd,
  buildLinkedItemListJsonLd,
  buildPageGraph,
  JsonLd,
  siteUrl,
} from "@/lib";

import { CaseStudiesClientPage } from "./CaseStudiesClientPage";

export const metadata: Metadata = getMarketingPageMetadata(CASE_STUDIES_PAGE);

const Page = () => (
  <>
    <JsonLd
      data={buildPageGraph([
        buildCollectionPageJsonLd({
          description: CASE_STUDIES_PAGE.seo.description,
          name: CASE_STUDIES_PAGE.seo.title.split(" | ", 1)[0],
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
      <CaseStudiesClientPage />
    </Suspense>
  </>
);

export default Page;
