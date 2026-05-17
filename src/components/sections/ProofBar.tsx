"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

import { cn } from "@/lib";

interface ProofBarProps {
  className?: string;
  stats: string[];
}

const PROOFBAR_INITIAL = { opacity: 0, y: 10 };
const PROOFBAR_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const PROOFBAR_VIEWPORT = { once: true };

export const ProofBar = ({ className, stats }: ProofBarProps) => {
  // Pre-compute all parsed stat groups and their transitions (must be before early return)
  const statGroups = useMemo(
    () =>
      stats.map((stat, index) => {
        const parts = stat.split("|").map((s) => s.trim());
        return parts.map((part, pIndex) => {
          const [value, ...labelParts] = part.split(" ");
          return {
            key: `${index}-${pIndex}`,
            label: labelParts.join(" "),
            lastInGroup: pIndex === parts.length - 1,
            transition: { delay: (index * parts.length + pIndex) * 0.1, duration: 0.5 },
            value,
          };
        });
      }),
    [stats]
  );

  if (!stats || stats.length === 0) return null;

  return (
    <div className={cn("bg-brand-gray/5 border-y border-gray-100 py-6", className)}>
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {statGroups.map((group, index) => (
            <div
              className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
              key={index}
            >
              {group.map((item) => (
                <motion.div
                  className="flex items-center gap-3"
                  initial={PROOFBAR_INITIAL}
                  key={item.key}
                  transition={item.transition}
                  viewport={PROOFBAR_VIEWPORT}
                  whileInView={PROOFBAR_WHILE_IN_VIEW}
                >
                  <span className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
                    {item.value}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase md:text-xs">
                    {item.label}
                  </span>
                  {!item.lastInGroup && (
                    <div className="ml-8 hidden h-8 w-px bg-brand-blue/20 md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
