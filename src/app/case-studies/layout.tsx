import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CASE_STUDIES_PAGE } from "@/content/case-studies";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  CASE_STUDIES_PAGE.seo,
  CASE_STUDIES_PAGE.pageId
);

const CaseStudiesLayout = ({ children }: { children: ReactNode }) => {
  return children;
};

export default CaseStudiesLayout;
