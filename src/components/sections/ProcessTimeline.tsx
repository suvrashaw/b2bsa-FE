"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode, useCallback, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

interface ProcessTimelineProps {
  className?: string;
  cta?: { href?: string; label: string; opensModal?: boolean };
  description?: ReactNode;
  heading?: ReactNode;
  phases?: Step[];
  showPhaseNumbers?: boolean;
}

interface Step {
  description: string;
  title: string;
}

const TIMELINE_INITIAL = { opacity: 0, y: 30 };
const TIMELINE_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const TIMELINE_VIEWPORT = { once: true };

export const ProcessTimeline = ({
  className,
  cta,
  description,
  heading,
  phases,
}: ProcessTimelineProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const openContactModal = useCallback(() => setIsContactModalOpen(true), []);
  const closeContactModal = useCallback(() => setIsContactModalOpen(false), []);

  const resolvedSteps = phases ?? [];
  const stepTransitions = useMemo(
    () =>
      (phases ?? []).map((_, index) => ({
        delay: index * 0.1,
        duration: 0.6,
      })),
    [phases]
  );

  return (
    <section className={cn("bg-brand-gray py-12 md:py-16 lg:py-20", className)}>
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        {(heading || description) && (
          <div className="mb-8 text-center md:mb-14 lg:mb-20">
            {heading && <SectionHeader as="h2">{heading}</SectionHeader>}
            {description && (
              <p className="type-body-l mx-auto mt-6 max-w-2xl leading-relaxed text-brand-charcoal/70">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="relative mx-auto max-w-5xl md:px-6">
          {/* Vertical Line */}
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-cyan/50 to-transparent" />

          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {resolvedSteps.map((step, index) => (
              <motion.div
                className="relative flex flex-col items-start"
                initial={TIMELINE_INITIAL}
                key={index}
                transition={stepTransitions[index]}
                viewport={TIMELINE_VIEWPORT}
                whileInView={TIMELINE_WHILE_IN_VIEW}
              >
                {/* Dot */}
                <div className="absolute top-1/2 left-0 z-10 size-4 -translate-1/2 rounded-full bg-brand-cyan shadow-[0_0_15px_rgba(75,192,217,0.8)]" />

                {/* Content */}
                <div className="w-full pl-8">
                  <div className="[#212529] rounded-xl border border-gray-100 bg-white p-8 text-left shadow-xl transition-all duration-300 hover:border-brand-blue/30">
                    <h3 className="mb-4 text-base font-bold md:text-xl">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-gray-600 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {cta && (
          <div className="mt-14 flex justify-center">
            {cta.opensModal ? (
              <Button onClick={openContactModal} type="button" variant="primary">
                {cta.label}
              </Button>
            ) : (
              <Button asChild variant="primary">
                <Link href={cta.href ?? "/contact-us"}>{cta.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>

      {cta?.opensModal && <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />}
    </section>
  );
};
