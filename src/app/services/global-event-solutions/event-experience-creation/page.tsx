import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Create immersive event experiences that drive engagement and results.",
  title: "Event Experience Creation | B2B Sales Arrow",
};

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
