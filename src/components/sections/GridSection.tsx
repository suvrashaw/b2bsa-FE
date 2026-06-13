import type { ReactNode } from "react";

import { Children } from "react";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

type ColsValue = 2 | 3 | 4;

const FLEX_WIDTHS: Record<ColsValue, string> = {
  2: "w-full sm:w-[calc(50%-12px)]",
  3: "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
  4: "w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]",
};

export interface GridSectionProps {
  children: ReactNode;
  className?: string;
  cols?: ColsValue;
  cta?: ReactNode;
  description?: string;
  gap?: string;
  gridClassName?: string;
  heading?: ReactNode;
  headingAction?: ReactNode;
  headingAlign?: "center" | "left";
  id?: string;
}

export const GridSection = ({
  children,
  className,
  cols = 3,
  cta,
  description,
  gap = "gap-6",
  gridClassName,
  heading,
  headingAction,
  headingAlign = "center",
  id,
}: GridSectionProps) => {
  const flexWidthClass = FLEX_WIDTHS[cols];

  return (
    <section className={cn("bg-brand-gray py-12 md:py-16 lg:py-20", className)} id={id}>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        {heading && (
          <div
            className={cn(
              "mb-12 md:mb-14",
              headingAlign === "left"
                ? "flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                : "text-center"
            )}
          >
            {typeof heading === "string" ? (
              <Heading as="h2" className={headingAlign === "center" ? "text-center" : ""}>
                {heading}
              </Heading>
            ) : (
              heading
            )}
            {headingAction && (
              <div className={headingAlign === "center" ? "mt-6" : ""}>{headingAction}</div>
            )}
          </div>
        )}

        {description && (
          <p
            className={cn(
              "-mt-6 mb-12 max-w-2xl text-sm text-brand-charcoal/70 md:text-base",
              headingAlign === "center" ? "mx-auto text-center" : ""
            )}
          >
            {description}
          </p>
        )}

        <div className={cn("flex flex-wrap justify-center", gap, gridClassName)}>
          {Children.map(children, (child, i) => (
            <div className={flexWidthClass} key={i}>
              {child}
            </div>
          ))}
        </div>

        {cta && <div className="mt-10 flex justify-center">{cta}</div>}
      </div>
    </section>
  );
};
