"use client";

import { WhisperText } from "@/components/ui/WhisperText";
import { ZoomParallax } from "@/components/ui/ZoomParallax";
import { cn } from "@/lib";

const CULTURE_WHISPER_HIGHLIGHTS = ["Believe"];

// Indices 0–3 fill slots taken by data.reasons (4 items); indices 4–6 are the actual parallax extras.
const PARALLAX_IMAGES = [
  { alt: "Global reach", src: "/images/home/why-choose-us/global_reach.avif" },
  { alt: "Proven execution", src: "/images/home/why-choose-us/proven_execution.avif" },
  { alt: "Strategic creativity", src: "/images/home/why-choose-us/strategic_creativity.avif" },
  { alt: "Technology-led delivery", src: "/images/home/why-choose-us/technology_led_delivery.avif" },
  { alt: "B2B Sales Arrow culture", src: "/images/about/culture/culture-1.avif" },
  { alt: "B2B Sales Arrow team", src: "/images/about/culture/culture-4.avif" },
  { alt: "B2B Sales Arrow office", src: "/images/about/culture/culture-5.avif" },
];

export interface CultureData {
  description: string;
  eyebrow: string;
  heading: React.ReactNode | string;
  reasons: { description: string; id: string; image: string; title: string }[];
}

export const Culture = ({ data }: { data: CultureData }) => {
  const parallaxImages = [
    ...data.reasons.map((r) => ({ alt: r.title, src: r.image })),
    ...PARALLAX_IMAGES.slice(data.reasons.length),
  ].slice(0, 7);

  return (
    <section className="relative w-full bg-brand-gray py-12 transition-colors duration-500">
      <div className="relative mb-12 flex min-h-[50vh] flex-col items-center justify-center px-8 text-center">
        {/* Radial spotlight */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_50%)]",
            "blur-[30px]"
          )}
        />
        <div className="mb-6 inline-block rounded-full border border-brand-charcoal/10 bg-brand-charcoal/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-charcoal uppercase transition-colors duration-500">
          {data.eyebrow}
        </div>
        <WhisperText
          className="mb-6 text-center font-heading text-2xl font-bold text-brand-charcoal transition-colors duration-500 md:text-3xl lg:text-2xl"
          highlightColor="blue"
          highlights={CULTURE_WHISPER_HIGHLIGHTS}
          text={typeof data.heading === "string" ? data.heading : "What We Believe In"}
        />
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed font-bold tracking-widest text-brand-charcoal/70 uppercase transition-colors duration-500">
          {data.description}
        </p>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 text-left md:grid-cols-2 lg:grid-cols-4">
          {data.reasons.map((reason) => (
            <div className="border-l border-brand-blue/30 pl-5" key={reason.id}>
              <h3 className="mb-3 font-heading text-xl font-bold text-brand-charcoal">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-charcoal/70">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ZoomParallax images={parallaxImages} />

      <div className="h-[20vh]" />
    </section>
  );
};
