import type { ReactNode } from "react";

import type { FeatureCarouselItem } from "@/components/ui/FeatureCarousel";

import { Eyebrow } from "@/components/ui/Eyebrow";
import FeatureCarousel from "@/components/ui/FeatureCarousel";
import { Heading } from "@/components/ui/Heading";

interface FeatureCarouselSectionProps {
  description?: ReactNode;
  eyebrow?: string;
  features: FeatureCarouselItem[];
  heading: ReactNode;
  headingHighlight?: string;
}

export const FeatureCarouselSection = ({
  description,
  eyebrow = "Capabilities",
  features,
  heading,
  headingHighlight,
}: FeatureCarouselSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-brand-gray py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-8 right-[8%] h-48 w-48 rounded-full bg-brand-cyan/12 blur-3xl" />
        <div className="absolute bottom-0 left-[6%] h-56 w-56 rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center" variant="blue">
            {eyebrow}
          </Eyebrow>
          <Heading as="h2" className="mb-6" highlight={headingHighlight}>
            {heading}
          </Heading>
          {description ? (
            <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-brand-charcoal/70">
              {description}
            </p>
          ) : null}
        </div>

        <FeatureCarousel features={features} />
      </div>
    </section>
  );
};
