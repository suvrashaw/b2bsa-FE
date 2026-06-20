"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode, useCallback, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

interface Step {
  description: string;
  title: string;
}

interface TimelineProps {
  className?: string;
  cta?: { href?: string; label: string; opensModal?: boolean };
  description?: ReactNode;
  heading?: ReactNode;
  phases?: Step[];
  showPhaseNumbers?: boolean;
  steps?: Step[];
  subtitle?: ReactNode;
  title?: ReactNode;
}

const TIMELINE_INITIAL = { opacity: 0, y: 30 };
const TIMELINE_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const TIMELINE_VIEWPORT = { once: true };

export const Timeline = ({
  className,
  cta,
  description,
  heading,
  phases,
  steps,
  subtitle,
  title,
}: TimelineProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const openContactModal = useCallback(() => setIsContactModalOpen(true), []);
  const closeContactModal = useCallback(() => setIsContactModalOpen(false), []);

  const resolvedSteps = steps ?? phases ?? [];
  const resolvedTitle = title ?? heading;
  const resolvedDescription = description ?? subtitle;
  const stepTransitions = useMemo(
    () => (steps ?? phases ?? []).map((_, index) => ({ delay: index * 0.1, duration: 0.6 })),
    [steps, phases]
  );

  return (
    <section className={cn("py-20 bg-brand-gray", className)}>
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        {(resolvedTitle || resolvedDescription) && (
          <div className="mb-20 text-center">
            {resolvedTitle && <SectionHeader as="h2">{resolvedTitle}</SectionHeader>}
            {resolvedDescription && (
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
                {resolvedDescription}
              </p>
            )}
          </div>
        )}

        <div className="relative mx-auto max-w-5xl md:px-6">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-cyan/50 to-transparent" />

          <div className="space-y-16">
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
                <div className="absolute top-1/2 left-0 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan shadow-[0_0_15px_rgba(75,192,217,0.8)]" />

                {/* Content */}
                <div className="w-full pl-8">
                  <div className="[#212529] rounded-xl border border-gray-100 bg-white p-8 text-left shadow-xl transition-all duration-300 hover:border-brand-blue/30">
                    <h3 className="mb-4 text-lg font-bold md:text-xl">{step.title}</h3>
                    <p className="text-sm  leading-relaxed text-gray-600 md:text-base">
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
