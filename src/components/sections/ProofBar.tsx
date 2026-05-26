"use client";

import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib";

interface ProofBarProps {
  className?: string;
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

export const ProofBar = ({ className, stats }: ProofBarProps) => {
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
                    <CountUpValue value={item.value} />
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
