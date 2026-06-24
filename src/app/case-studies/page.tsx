import type { Metadata } from "next";

import { Suspense } from "react";

import { CASE_STUDIES_PAGE } from "@/content/case-studies";
import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { buildCollectionPageJsonLd, JsonLd } from "@/lib";

import { CaseStudiesClientPage } from "./CaseStudiesClientPage";

export const metadata: Metadata = getMarketingPageMetadata(CASE_STUDIES_PAGE);

const Page = () => (
  <>
    <JsonLd
      data={buildCollectionPageJsonLd({
        description: CASE_STUDIES_PAGE.seo.description,
        name: CASE_STUDIES_PAGE.seo.title.split(" | ", 1)[0],
        url: "/case-studies",
      })}
    />
    <Suspense>
      <CaseStudiesClientPage />
    </Suspense>
  </>
);

export default Page;
