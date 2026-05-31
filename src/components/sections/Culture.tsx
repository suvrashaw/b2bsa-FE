"use client";

import { WhisperText } from "@/components/ui/WhisperText";
import { ZoomParallax } from "@/components/ui/ZoomParallax";
import { cn } from "@/lib";

const CULTURE_WHISPER_HIGHLIGHTS = ["Believe"];

const PARALLAX_IMAGES = [
  {
    alt: "Team collaboration",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1280&h=720&fit=crop&q=80",
  },
  {
    alt: "Office culture",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop&q=80",
  },
  {
    alt: "Strategy meeting",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop&q=80",
  },
  {
    alt: "Team discussion",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop&q=80",
  },
  {
    alt: "Working together",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=800&fit=crop&q=80",
  },
  {
    alt: "Diverse team",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1280&h=720&fit=crop&q=80",
  },
  {
    alt: "Success celebration",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&h=720&fit=crop&q=80",
  },
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
