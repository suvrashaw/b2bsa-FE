"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HOME_WHY_CHOOSE_US_CONTENT, type StickyScrollContent } from "@/content/home/content";

const SCALE_ACTIVE = { scale: 1 };
const SCALE_INACTIVE = { scale: 1.06 };

const ReasonImage = ({
  activeIndex,
  index,
  reason,
}: {
  activeIndex: number;
  index: number;
  reason: { id: string; image: string; title: string };
}) => (
  <div className="flex h-dvh w-full shrink-0 items-center justify-center p-16" key={reason.id}>
    <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 shadow-2xl">
      <motion.div
        animate={index === activeIndex ? SCALE_ACTIVE : SCALE_INACTIVE}
        className="absolute inset-0"
        transition={IMAGE_SCALE_TRANSITION}
      >
        <Image alt={reason.title} className="object-cover" fill sizes="50vw" src={reason.image} />
      </motion.div>
      <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  </div>
);

export interface StickyScrollProps {
  content?: StickyScrollContent;
  eyebrow?: StickyScrollContent["eyebrow"];
  heading?: StickyScrollContent["heading"];
  reasons?: StickyScrollContent["reasons"];
  showCta?: boolean;
  showImagePanel?: boolean;
}

const TEXT_ANIMATE = { opacity: 1, scale: 1, y: 0 };
const TEXT_EXIT = { opacity: 0, scale: 1.02, y: -20 };
const TEXT_INITIAL = { opacity: 0, scale: 0.97, y: 20 };
const TEXT_TRANSITION = { duration: 0.25, ease: "easeOut" } as const;
const IMAGE_SLIDE_TRANSITION = { damping: 28, mass: 0.8, stiffness: 80, type: "spring" } as const;
const IMAGE_SCALE_TRANSITION = { damping: 25, mass: 1, stiffness: 60, type: "spring" } as const;

export const StickyScroll = ({
  content = HOME_WHY_CHOOSE_US_CONTENT,
  heading = content.heading,
  reasons = content.reasons,
  showCta = true,
  showImagePanel = true,
}: StickyScrollProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const resolvedActiveIndex = Math.min(activeIndex, Math.max(reasons.length - 1, 0));
  const activeReason = reasons[resolvedActiveIndex];

  const updateActiveIndex = useCallback(
    (latest: number) => {
      if (reasons.length === 0) return;
      const nextIndex = Math.min(
        reasons.length - 1,
        Math.max(0, Math.floor(latest * reasons.length))
      );
      setActiveIndex((current) => (nextIndex === current ? current : nextIndex));
    },
    [reasons.length]
  );

  const { scrollYProgress } = useScroll({
    offset: ["start center", "end center"],
    target: containerRef,
  });

  useMotionValueEvent(scrollYProgress, "change", updateActiveIndex);

  const sectionStyle = useMemo(
    () => ({ minHeight: `${(reasons.length + 1) * 100}vh` }),
    [reasons.length]
  );
  const slideAnimate = useMemo(
    () => ({ y: `${-resolvedActiveIndex * 100}vh` }),
    [resolvedActiveIndex]
  );

  return (
    <section className="relative bg-brand-gray" ref={containerRef} style={sectionStyle}>
      <div
        className={`sticky top-0 container mx-auto flex h-dvh max-w-screen-2xl px-4 md:px-6 lg:px-8 ${showImagePanel ? "flex-row" : "items-center justify-center"}`}
      >
        {/* Left text panel */}
        <div
          className={`flex h-dvh flex-col items-start justify-center ${showImagePanel ? "w-full md:w-1/2" : "max-w-4xl items-center text-center md:w-3/4"}`}
        >
          <SectionHeader as="h2" className="mb-14 w-full text-left">
            {heading}
          </SectionHeader>

          <div className="relative mt-4 flex min-h-[200px] w-full">
            {activeReason && (
              <AnimatePresence mode="wait">
                <motion.div
                  animate={TEXT_ANIMATE}
                  className="absolute inset-0 flex flex-col items-start justify-center text-left"
                  exit={TEXT_EXIT}
                  initial={TEXT_INITIAL}
                  key={resolvedActiveIndex}
                  transition={TEXT_TRANSITION}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-blue" />
                    <SectionHeader as="h3">{activeReason.title}</SectionHeader>
                  </div>
                  <p className="max-w-md text-base leading-relaxed text-gray-600 md:text-lg">
                    {activeReason.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Mobile: active reason image */}
          {showImagePanel && activeReason && (
            <div className="relative mt-6 aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 shadow-xl md:hidden">
              <Image
                alt={activeReason.title}
                className="object-cover"
                fill
                sizes="100vw"
                src={activeReason.image}
              />
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          {showCta && (
            <div className="mt-8">
              <Button onClick={openModal} size="lg" variant="secondary">
                Let&apos;s Discuss
              </Button>
            </div>
          )}
        </div>

        {/* Right image reel — slides vertically inside overflow-hidden container */}
        {showImagePanel && (
          <div className="relative hidden h-dvh w-1/2 overflow-hidden md:block">
            <motion.div
              animate={slideAnimate}
              className="absolute top-0 right-0 left-0 flex flex-col"
              transition={IMAGE_SLIDE_TRANSITION}
            >
              {reasons.map((reason, index) => (
                <ReasonImage
                  activeIndex={resolvedActiveIndex}
                  index={index}
                  key={reason.id}
                  reason={reason}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>

      {showCta && <ContactModal isOpen={isModalOpen} onClose={closeModal} />}
    </section>
  );
};
