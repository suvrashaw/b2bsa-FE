import type { Metadata } from "next";

import { getMarketingPageMetadata } from "@/content/marketing-pages";
import { EVENT_EXPERIENCE_PAGE } from "@/content/services/global-event-solutions/event-experience-creation/content";

export const metadata: Metadata = getMarketingPageMetadata(EVENT_EXPERIENCE_PAGE);

const Page = () => {
  return (
    <main className="min-h-screen px-8 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading text-4xl font-black text-brand-charcoal">
          Event Experience Creation
        </h1>
      </div>
    </main>
  );
};

export default Page;
