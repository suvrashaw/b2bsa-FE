import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib";

const buttonVariants = cva(
  "btn-shimmer group inline-flex min-h-[40px] items-center justify-center rounded-[4px] font-medium whitespace-nowrap transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:min-h-[44px]",
  {
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
    variants: {
      size: {
        default: "px-6 py-2 text-xs md:px-8 md:py-3.5 md:text-base",
        icon: "size-10 md:size-11",
        lg: "px-6 py-2 text-xs md:px-8 md:py-3.5 md:text-base",
        sm: "px-6 py-2 text-xs md:px-8 md:py-3.5 md:text-base",
      },
      variant: {
        default: "bg-brand-blue text-white", // Fallback
        ghost: "hover:bg-brand-blue/5 hover:text-brand-blue",
        link: "text-brand-blue underline-offset-4 hover:underline",
        outline:
          "border border-gray-200 bg-transparent hover:border-brand-blue hover:text-brand-blue",
        primary: "gap-2 bg-brand-blue text-white",
        secondary:
          "border-2 border-brand-blue/20 bg-transparent text-brand-blue hover:border-brand-blue hover:bg-brand-blue/5",
        tertiary:
          "gap-2 bg-transparent font-semibold text-brand-blue hover:gap-4 hover:text-brand-blue/80",
        white: "bg-white text-brand-blue hover:bg-white/95",
        "white-outline":
          "border-2 border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10",
      },
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, children, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isShowArrow = variant === "primary" && !asChild && size !== "icon";
    return (
      <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props}>
        {isShowArrow ? (
          <>
            {children}
            <span className="relative inline-flex size-4 shrink-0">
              <ArrowRight
                className="absolute inset-0 opacity-100 transition-opacity duration-200 group-hover:opacity-0"
                size={16}
              />
              <ArrowUpRight
                className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                size={16}
              />
            </span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
