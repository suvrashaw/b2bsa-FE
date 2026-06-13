import type { ReactNode } from "react";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface SectionHeaderProps {
  description?: string;
  heading?: ReactNode;
  headingAction?: ReactNode;
  headingAlign?: "center" | "left";
}

export const SectionHeader = ({
  description,
  heading,
  headingAction,
  headingAlign = "center",
}: SectionHeaderProps) => {
  if (!heading && !description) return null;

  return (
    <>
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
    </>
  );
};
