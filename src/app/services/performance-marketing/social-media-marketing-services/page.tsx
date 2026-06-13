import type { Metadata } from "next";

import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { SMM_PAGE } from "@/content/services/detail/social-media-marketing-services";

export const metadata: Metadata = getMarketingPageMetadata(SMM_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen px-8 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading text-4xl font-black text-brand-charcoal">
          Social Media Marketing Services
        </h1>
      </div>
    </main>
  );
};

export default Page;
