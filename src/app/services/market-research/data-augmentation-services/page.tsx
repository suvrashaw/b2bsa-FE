import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Comprehensive data augmentation services to enrich your business intelligence.",
  title: "Data Augmentation Services | B2B Sales Arrow",
};

const Page = () => {
  return (
    <main className="min-h-screen px-8 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading text-4xl font-black text-brand-charcoal">
          Data Augmentation Services
        </h1>
      </div>
    </main>
  );
};

export default Page;
