import type { ReactNode } from "react";

import Image from "next/image";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

import { StatsMarquee } from "./StatsMarquee";

interface StatsProps {
  className?: string;
  description?: ReactNode;
  heading?: string;
  imageAlt?: string;
  imageUrl: string;
  stats: string[];
}

export const Stats = ({
  className,
  description,
  heading,
  imageAlt = "Statistics visual",
  imageUrl,
  stats,
}: StatsProps) => {
  if (!stats || stats.length === 0) return null;

  const flatItems = stats.flatMap((stat, index) =>
    stat.split("|").map((s, pIndex) => {
      const trimmed = s.trim();
      const spaceIdx = trimmed.indexOf(" ");
      return {
        key: `${index}-${pIndex}`,
        label: spaceIdx === -1 ? "" : trimmed.slice(spaceIdx + 1),
        value: spaceIdx === -1 ? trimmed : trimmed.slice(0, spaceIdx),
      };
    })
  );

  return (
    <div className={cn("bg-brand-gray py-16 md:py-20", className)}>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            {heading && (
              <Heading as="h2" className="mb-4">
                {heading}
              </Heading>
            )}
            {description && (
              <p className="mb-8 text-base leading-relaxed text-brand-charcoal/70 md:text-lg">
                {description}
              </p>
            )}
            <StatsMarquee items={flatItems} />
          </div>

          <div className="group relative aspect-[4/3] w-full">
            <div className="absolute inset-0 rounded-3xl border border-brand-blue/10 shadow-[6px_6px_0px_0px] shadow-brand-blue/10 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[12px_12px_0px_0px] group-hover:shadow-brand-blue/15" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                alt={imageAlt}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={imageUrl}
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
