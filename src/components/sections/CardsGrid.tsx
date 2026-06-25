import type { ReactNode } from "react";

import { Children } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

type ColsValue = 2 | 3 | 4;

const FLEX_WIDTHS: Record<ColsValue, string> = {
  2: "w-full sm:w-[calc(50%-12px)]",
  3: "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]",
  4: "w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]",
};

export interface CardsGridProps {
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

export const CardsGrid = ({
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
}: CardsGridProps) => {
  const flexWidthClass = FLEX_WIDTHS[cols];

  return (
    <section
      className={cn("bg-brand-gray py-12 md:py-16 lg:py-20", className)}
      id={id}
    >
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          description={description}
          heading={heading}
          headingAction={headingAction}
          headingAlign={headingAlign}
        />

        <div
          className={cn("flex flex-wrap justify-center", gap, gridClassName)}
        >
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
