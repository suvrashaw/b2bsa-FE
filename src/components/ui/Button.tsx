import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib";

const buttonVariants = cva(
  "group inline-flex items-center justify-center rounded-[4px] font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
    variants: {
      size: {
        default: "px-8 py-3.5 text-base",
        icon: "h-10 w-10",
        lg: "px-10 py-4 text-lg",
        sm: "px-6 py-2.5 text-sm",
      },
      variant: {
        default:
          "bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(30,96,145,0.4)]", // Fallback
        ghost: "hover:bg-brand-blue/5 hover:text-brand-blue",
        link: "text-brand-blue underline-offset-4 hover:underline",
        outline:
          "border border-gray-200 bg-transparent hover:border-brand-blue hover:text-brand-blue",
        primary:
          "bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(30,96,145,0.4)]",
        secondary:
          "border-2 border-brand-blue/20 bg-transparent text-brand-blue hover:border-brand-blue hover:bg-brand-blue/5",
        tertiary:
          "gap-2 bg-transparent font-semibold text-brand-blue hover:gap-4 hover:text-brand-blue/80",
        white:
          "relative overflow-hidden bg-white text-brand-blue hover:bg-white/95 before:pointer-events-none before:absolute before:inset-y-0 before:-translate-x-full before:w-full before:skew-x-[-20deg] before:bg-linear-to-r before:from-transparent before:via-brand-blue/10 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-700",
        "white-outline":
          "border-2 border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button };
