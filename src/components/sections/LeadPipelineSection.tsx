"use client";

import { useCallback, useState } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

interface LeadPipelineSectionProps {
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

const FUNNEL_WIDTHS = ["w-full", "w-[85%]", "w-[65%]", "w-[48%]"];
const FUNNEL_COLORS = [
  "bg-brand-cyan/90 text-brand-charcoal",
  "bg-brand-blue/80 text-white",
  "bg-brand-blue/60 text-white",
  "bg-brand-charcoal/60 text-white ring-1 ring-white/20",
];
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
          ? "border-brand-cyan/30 bg-white/10 shadow-lg"
          : "border-white/10 bg-white/5 hover:bg-white/[0.08]"
      )}
      onClick={handleClick}
      type="button"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "text-sm font-semibold transition-colors duration-200 md:text-base",
            isActive ? "text-brand-cyan" : "text-white/80 group-hover:text-white"
          )}
        >
          {step.title}
        </span>
        <span
          className={cn(
            "shrink-0 text-lg leading-none transition-transform duration-300",
            isActive ? "rotate-45 text-brand-cyan" : "text-white/30"
          )}
        >
          +
        </span>
      </div>
      {isActive ? (
        <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
      ) : null}
    </button>
  );
};

export const LeadPipelineSection = ({
  description,
  heading,
  stages,
  steps,
}: LeadPipelineSectionProps) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-brand-charcoal py-16 md:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionHeader as="h2" className="mb-4 text-white">
            {heading}
          </SectionHeader>
          {description ? (
            <p className="text-sm leading-relaxed text-white/60 md:text-base">{description}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: Process accordion */}
          <div className="flex flex-col gap-3">
            <p className="mb-2 text-xs font-semibold tracking-widest text-white/40 uppercase">
              What we handle
            </p>
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
          <div className="flex flex-col items-center justify-center gap-0 pt-8 lg:pt-10">
            <p className="mb-6 text-xs font-semibold tracking-widest text-white/40 uppercase">
              Average event outcomes
            </p>
            {stages.map((stage, i) => (
              <div className="flex w-full flex-col items-center" key={stage.label}>
                <div className="z-10 -mb-1 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-white/60 uppercase ring-1 ring-white/15">
                  {stage.label}
                </div>
                <div
                  className={cn(
                    "flex flex-col items-center justify-center rounded-lg p-4 text-center transition-all duration-300",
                    FUNNEL_WIDTHS[i] ?? "w-1/3",
                    FUNNEL_COLORS[i] ?? "bg-white/10 text-white",
                    FUNNEL_MIN_HEIGHTS[i] ?? "min-h-[60px]"
                  )}
                >
                  <span className="text-base leading-snug font-bold md:text-lg">{stage.count}</span>
                  <span className="mt-0.5 text-[11px] leading-snug opacity-80">{stage.sublabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
