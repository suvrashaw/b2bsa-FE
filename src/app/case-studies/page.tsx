import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudiesIndex } from "@/components/sections/CaseStudiesIndex";
import { CASE_STUDIES_PAGE } from "@/content/case-studies";
import { getMarketingPageMetadata } from "@/content/marketing-pages";

export const metadata: Metadata = getMarketingPageMetadata(CASE_STUDIES_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <CaseStudiesIndex />
      <Footer />
    </main>
  );
};

export default Page;
