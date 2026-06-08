"use client";

import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

interface ProofBarProps {
  className?: string;
  description?: ReactNode;
  heading?: string;
  stats: string[];
}

const VALUE_RE = /^([^0-9]*)([0-9][0-9,.]*)(.*)$/;

const parseValue = (raw: string) => {
  const m = raw.match(VALUE_RE);
  if (!m) return null;
  const [, prefix, numStr, suffix] = m;
  const isDecimal = numStr.includes(".");
  const hasComma = numStr.includes(",");
  const target = parseFloat(numStr.replace(/,/g, ""));
  return { hasComma, isDecimal, prefix, suffix, target };
};

const formatNum = (v: number, isDecimal: boolean, hasComma: boolean) => {
  if (isDecimal) return v.toFixed(1);
  if (hasComma) return Math.round(v).toLocaleString();
  return String(Math.round(v));
};

const CountUpValue = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);

  useEffect(() => {
    if (!isInView || !parsed) return;
    const controls = animate(motionVal, parsed.target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) =>
        setDisplay(`${parsed.prefix}${formatNum(v, parsed.isDecimal, parsed.hasComma)}${parsed.suffix}`),
    });
    return controls.stop;
  }, [isInView, motionVal, parsed]);

  return <span ref={ref}>{display}</span>;
};

const PROOFBAR_INITIAL = { opacity: 0, y: 10 };
const PROOFBAR_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const PROOFBAR_VIEWPORT = { once: true };

export const ProofBar = ({ className, description, heading, stats }: ProofBarProps) => {
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
    <div className={cn("bg-brand-gray py-6", className)}>
      <div className="container mx-auto px-8">
        {heading && (
          <Heading as="h2" className="mb-4 text-center">{heading}</Heading>
        )}
        {description && (
          <p className="mx-auto mb-8 max-w-4xl text-center text-base leading-relaxed text-brand-charcoal/70">{description}</p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {statGroups.map((group, index) => (
            <div
              className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4"
              key={index}
            >
              {group.map((item) => (
                <motion.div
                  className="flex items-center gap-8 md:gap-12"
                  initial={PROOFBAR_INITIAL}
                  key={item.key}
                  transition={item.transition}
                  viewport={PROOFBAR_VIEWPORT}
                  whileInView={PROOFBAR_WHILE_IN_VIEW}
                >
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <span className="font-heading text-3xl font-bold text-brand-blue md:text-4xl">
                      <CountUpValue value={item.value} />
                    </span>
                    <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                      {item.label}
                    </span>
                  </div>
                  {!item.lastInGroup && (
                    <div className="hidden h-12 w-px bg-brand-blue/20 md:block" />
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
