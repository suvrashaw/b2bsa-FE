import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Flexible modular booth solutions for trade shows and exhibitions.",
  title: "Modular Booth Solutions | B2B Sales Arrow",
};

const Page = () => {
  return (
    <main className="min-h-screen px-8 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading text-4xl font-black text-brand-charcoal">
          Modular Booth Solutions
        </h1>
      </div>
    </main>
  );
};

export default Page;
