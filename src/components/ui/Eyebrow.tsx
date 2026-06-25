"use client";

import type { ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib";

const eyebrowVariants = cva(
  "type-eyebrow mb-6 inline-block rounded-full px-4 py-1.5",
  {
    defaultVariants: {
      variant: "blue",
    },
    variants: {
      variant: {
        blue: "border border-brand-blue/20 bg-brand-blue/10 text-brand-blue",
        cyan: "border border-brand-blue/20 bg-brand-blue/10 text-brand-blue",
        neutral: "border border-brand-blue/20 bg-brand-blue/10 text-brand-blue",
        primary: "border border-brand-blue/20 bg-brand-blue/10 text-brand-blue",
      },
    },
  },
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
