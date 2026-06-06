import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Professional booth hostess services for trade shows and events.",
  title: "Booth Hostess Services | B2B Sales Arrow",
};

const Page = () => {
  return (
    <main className="min-h-screen px-8 pt-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-heading text-4xl font-black text-brand-charcoal">
          Booth Hostess Services
        </h1>
      </div>
    </main>
  );
};

export default Page;
