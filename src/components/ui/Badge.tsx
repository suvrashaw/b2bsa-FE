import type { ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-bold tracking-wider uppercase transition-colors",
  {
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
    variants: {
      size: {
        default: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
        sm: "px-2.5 py-0.5 text-[10px]",
      },
      variant: {
        cyan: "border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan",
        neutral: "border border-brand-charcoal/10 bg-brand-charcoal/5 text-brand-charcoal",
        outline: "border border-gray-200 bg-transparent text-gray-600",
        primary: "border border-brand-blue/20 bg-brand-blue/10 text-brand-blue",
        solid: "bg-brand-blue text-white",
        "solid-cyan": "bg-brand-cyan text-white",
      },
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className, size, variant }: BadgeProps) => {
  return <span className={cn(badgeVariants({ size, variant }), className)}>{children}</span>;
};
