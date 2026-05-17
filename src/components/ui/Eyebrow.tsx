"use client";

import type { ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib";

const eyebrowVariants = cva(
  "mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide",
  {
    defaultVariants: {
      variant: "neutral",
    },
    variants: {
      variant: {
        blue: "border border-brand-blue/20 bg-brand-blue/10 text-brand-blue",
        cyan: "border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan",
        neutral: "border border-brand-charcoal/10 bg-brand-charcoal/5 text-brand-charcoal",
        primary: "border border-brand-primary/20 bg-brand-primary/10 text-brand-primary",
      },
    },
  }
);

interface EyebrowProps extends VariantProps<typeof eyebrowVariants> {
  children: ReactNode;
  className?: string;
}

const eyebrowInitial = { opacity: 0, y: 20 };
const eyebrowViewport = { once: true };
const eyebrowWhileInView = { opacity: 1, y: 0 };

export const Eyebrow = ({ children, className, variant }: EyebrowProps) => {
  return (
    <motion.div
      className={cn(eyebrowVariants({ variant }), className)}
      initial={eyebrowInitial}
      viewport={eyebrowViewport}
      whileInView={eyebrowWhileInView}
    >
      {children}
    </motion.div>
  );
};
