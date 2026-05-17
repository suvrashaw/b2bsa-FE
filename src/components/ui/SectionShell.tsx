import type { ReactNode } from "react";

import { cn } from "@/lib";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export const SectionShell = ({
  children,
  className,
  containerClassName,
  id,
}: SectionShellProps) => {
  return (
    <section className={cn("py-20", className)} id={id}>
      <div className={cn("container mx-auto px-8", containerClassName)}>{children}</div>
    </section>
  );
};
