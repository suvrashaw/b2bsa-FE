import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Data-driven SEO services that grow your organic visibility and drive qualified traffic.",
  title: "SEO Services | B2B Sales Arrow",
};

const Page = () => {
  return (
    <main className="min-h-screen px-8 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading text-4xl font-black text-brand-charcoal">
          SEO Services
        </h1>
      </div>
    </main>
  );
};

export default Page;
