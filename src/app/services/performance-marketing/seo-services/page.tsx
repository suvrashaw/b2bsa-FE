import type { Metadata } from "next";

import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { SEO_PAGE } from "@/content/services/detail/seo-services";

export const metadata: Metadata = getMarketingPageMetadata(SEO_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen px-8 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading text-4xl font-black text-brand-charcoal">SEO Services</h1>
      </div>
    </main>
  );
};

export default Page;
