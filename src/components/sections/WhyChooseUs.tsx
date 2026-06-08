"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { HOME_WHY_CHOOSE_US_CONTENT, type WhyChooseUsContent } from "@/content/home";

export interface WhyChooseUsProps {
  content?: WhyChooseUsContent;
  eyebrow?: WhyChooseUsContent["eyebrow"];
  heading?: WhyChooseUsContent["heading"];
  reasons?: WhyChooseUsContent["reasons"];
  showImagePanel?: boolean;
}

const WHYCHOOSEUS_ANIMATE = { opacity: 1, y: 0 };
const WHYCHOOSEUS_EXIT = { opacity: 0, y: -20 };
const WHYCHOOSEUS_INITIAL = { opacity: 0, y: 20 };
const WHYCHOOSEUS_TRANSITION = { duration: 0.5, ease: "easeOut" } as const;

export const WhyChooseUs = ({
  content = HOME_WHY_CHOOSE_US_CONTENT,
  eyebrow = content.eyebrow,
  heading = content.heading,
  reasons = content.reasons,
  showImagePanel = true,
}: WhyChooseUsProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const resolvedActiveIndex = Math.min(activeIndex, Math.max(reasons.length - 1, 0));
  const activeReason = reasons[resolvedActiveIndex];
  const updateActiveIndex = useCallback(
    (latest: number) => {
      if (reasons.length === 0) return;

      let nextIndex = Math.min(reasons.length - 1, Math.max(0, Math.floor(latest * reasons.length)));

      if (showImagePanel) {
        const imageBlocks = containerRef.current?.querySelectorAll<HTMLElement>(
          "[data-why-choose-us-image]"
        );

        if (imageBlocks?.length) {
          const viewportCenter = globalThis.innerHeight / 2;
          let closestDistance = Number.POSITIVE_INFINITY;

          for (const [index, block] of imageBlocks.entries()) {
            const rect = block.getBoundingClientRect();
            const blockCenter = rect.top + rect.height / 2;
            const distance = Math.abs(blockCenter - viewportCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              nextIndex = index;
            }
          }
        }
      }

      setActiveIndex((currentIndex) => (nextIndex === currentIndex ? currentIndex : nextIndex));
    },
    [reasons.length, showImagePanel]
  );

  const { scrollYProgress } = useScroll({
    offset: ["start center", "end center"],
    target: containerRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    updateActiveIndex(latest);
  });

  return (
    <section className="relative bg-brand-gray" ref={containerRef}>
      <div className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 z-0 h-screen w-full bg-brand-gray" />
      </div>

      <div
        className={`container mx-auto flex flex-col px-8 ${showImagePanel ? "md:flex-row" : "items-center"} relative z-10`}
      >
        <div
          className={`w-full ${showImagePanel ? "md:w-1/2 md:pr-20" : "max-w-4xl items-center text-center md:w-3/4"} flex h-auto flex-col items-start justify-center py-20 md:sticky md:top-0 md:h-screen md:py-0`}
        >
          {eyebrow && <Eyebrow variant="neutral">{eyebrow}</Eyebrow>}
          <Heading as="h2" className="mb-14 w-full text-left">
            {heading}
          </Heading>

          <div className="relative mt-4 flex min-h-[200px] w-full justify-center">
            {activeReason && (
              <AnimatePresence mode="wait">
                <motion.div
                  animate={WHYCHOOSEUS_ANIMATE}
                  className="absolute inset-0 flex flex-col items-start justify-center text-left"
                  exit={WHYCHOOSEUS_EXIT}
                  initial={WHYCHOOSEUS_INITIAL}
                  key={resolvedActiveIndex}
                  transition={WHYCHOOSEUS_TRANSITION}
                >
                  <div className="mb-4 flex items-center gap-3 text-left">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-blue" />
                    <Heading as="h3">{activeReason.title}</Heading>
                  </div>
                  <p className="max-w-md text-xl leading-relaxed text-gray-600">
                    {activeReason.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>

        {showImagePanel && (
          <div className="flex w-full flex-col pb-[20vh] md:w-1/2">
            {reasons.map((reason, index) => (
              <div
                aria-hidden={index !== resolvedActiveIndex}
                className="flex h-[80vh] w-full items-center justify-center p-10 md:h-screen md:p-16"
                data-why-choose-us-image
                key={reason.id}
              >
                <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 shadow-2xl md:aspect-square">
                  <Image
                    alt={reason.title}
                    className="object-cover"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src={reason.image}
                  />
                  <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute right-8 bottom-8 left-8 md:hidden">
                    <Heading as="h3" className="mb-2 text-white">
                      {reason.title}
                    </Heading>
                    <p className="text-sm text-gray-200">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
