"use client";

import { motion } from "framer-motion";
import { type ReactNode, useMemo } from "react";

import { cn } from "@/lib";

interface ProcessTimelineProps {
  className?: string;
  heading?: ReactNode;
  phases?: Step[];
  steps?: Step[];
  subtitle?: ReactNode;
  title?: ReactNode;
}

interface Step {
  description: string;
  title: string;
}

const PROCESSTIMELINE_INITIAL = { opacity: 0, y: 30 };
const PROCESSTIMELINE_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const PROCESSTIMELINE_VIEWPORT = { once: true };

export const ProcessTimeline = ({
  className,
  heading,
  phases,
  steps,
  subtitle,
  title,
}: ProcessTimelineProps) => {
  const resolvedSteps = steps ?? phases ?? [];
  const resolvedTitle = title ?? heading;
  const stepTransitions = useMemo(
    () => (steps ?? phases ?? []).map((_, index) => ({ delay: index * 0.1, duration: 0.6 })),
    [steps, phases]
  );

  return (
    <section className={cn("py-24 bg-brand-gray/10 ", className)}>
      <div className="container mx-auto px-8">
        {(resolvedTitle || subtitle) && (
          <div className="mb-20 text-left">
            {subtitle && (
              <div className="mb-4  text-sm font-bold tracking-widest text-brand-blue uppercase">
                {subtitle}
              </div>
            )}
            {resolvedTitle && (
              <h2 className="font-heading text-3xl leading-tight   font-bold md:text-5xl">
                {resolvedTitle}
              </h2>
            )}
          </div>
        )}

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-cyan/50 to-transparent" />

          <div className="space-y-16">
            {resolvedSteps.map((step, index) => (
              <motion.div
                className="relative flex flex-col items-start"
                initial={PROCESSTIMELINE_INITIAL}
                key={index}
                transition={stepTransitions[index]}
                viewport={PROCESSTIMELINE_VIEWPORT}
                whileInView={PROCESSTIMELINE_WHILE_IN_VIEW}
              >
                {/* Dot */}
                <div className="absolute top-1/2 left-0 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan shadow-[0_0_15px_rgba(75,192,217,0.8)]" />

                {/* Content */}
                <div className="w-full pl-8">
                  <div className="[#212529] rounded-2xl border border-gray-100 bg-white p-8 text-left shadow-xl transition-all duration-300 hover:border-brand-blue/30">
                    <div className="mb-2  text-lg font-bold text-brand-blue">
                      Phase 0{index + 1}
                    </div>
                    <h3 className="mb-4 text-xl font-bold   md:text-2xl">{step.title}</h3>
                    <p className="text-sm  leading-relaxed text-gray-600 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
