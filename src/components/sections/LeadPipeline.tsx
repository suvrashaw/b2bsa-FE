"use client";

import { useCallback, useState } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

interface LeadPipelineProps {
  description?: string;
  heading: string;
  stages: PipelineStage[];
  steps: ProcessStep[];
}

interface PipelineStage {
  count: string;
  label: string;
  sublabel: string;
}

interface ProcessStep {
  description: string;
  title: string;
}

const FUNNEL_WIDTHS = ["w-full", "w-[88%]", "w-[72%]", "w-[58%]"];

const FUNNEL_MIN_HEIGHTS = ["min-h-[72px]", "min-h-[68px]", "min-h-[64px]", "min-h-[60px]"];

interface StepButtonProps {
  index: number;
  isActive: boolean;
  onActivate: (index: number) => void;
  step: ProcessStep;
}

const StepButton = ({ index, isActive, onActivate, step }: StepButtonProps) => {
  const handleClick = useCallback(() => onActivate(index), [index, onActivate]);
  return (
    <button
      className={cn(
        "group w-full rounded-xl border p-5 text-left transition-all duration-300",
        isActive
          ? "border-brand-blue/30 bg-white shadow-lg"
          : "border-gray-100 bg-white hover:border-brand-blue/30"
      )}
      onClick={handleClick}
      type="button"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "text-sm font-semibold transition-colors duration-200 md:text-base",
            isActive ? "text-brand-blue" : "text-brand-charcoal/80 group-hover:text-brand-charcoal"
          )}
        >
          {step.title}
        </span>
        <svg
          className={cn(
            "size-5 shrink-0 transition-colors duration-300",
            isActive ? "text-brand-blue" : "text-brand-charcoal/30"
          )}
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
      {isActive ? (
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.description}</p>
      ) : null}
    </button>
  );
};

export const LeadPipeline = ({
  description,
  heading,
  stages,
  steps,
}: LeadPipelineProps) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-brand-gray py-16 md:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <SectionHeader as="h2" className="mb-4">
            {heading}
          </SectionHeader>
          {description ? (
            <p className="text-sm leading-relaxed text-gray-600 md:text-base">{description}</p>
          ) : null}
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: Process accordion */}
          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <StepButton
                index={i}
                isActive={i === activeStep}
                key={step.title}
                onActivate={setActiveStep}
                step={step}
              />
            ))}
          </div>

          {/* Right: Funnel diagram */}
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
            {stages.map((stage, i) => (
              <div className="flex w-full flex-col items-center" key={stage.label}>
                <div className="relative z-20 -mb-3 rounded-full bg-white px-3 py-1 text-[10px] font-semibold tracking-widest text-gray-500 uppercase ring-1 ring-gray-200">
                  {stage.label}
                </div>
                <button
                  className={cn(
                    "flex flex-col items-center justify-center rounded-lg p-4 text-center transition-all duration-500",
                    FUNNEL_WIDTHS[i] ?? "w-1/3",
                    activeStep === i || (activeStep >= stages.length && i === stages.length - 1)
                      ? "z-10 scale-[1.05] cursor-default bg-brand-blue font-bold text-white shadow-xl ring-1 ring-brand-blue"
                      : "cursor-pointer bg-white text-brand-charcoal opacity-60 ring-1 ring-gray-200 hover:opacity-100 hover:ring-brand-blue/30",
                    FUNNEL_MIN_HEIGHTS[i] ?? "min-h-[60px]"
                  )}
                  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
                  onClick={() => setActiveStep(i)}
                  type="button"
                >
                  <span className="text-base leading-snug font-bold md:text-lg">{stage.count}</span>
                  <span className="mt-0.5 text-[11px] leading-snug text-current/90">
                    {stage.sublabel}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
