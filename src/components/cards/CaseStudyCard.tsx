import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Icon from "@/components/ui/Icon";
import { cn } from "@/lib";

export interface CaseStudyCardProps {
  challenge?: string;
  className?: string;
  client: string;
  ctaLabel?: string;
  href?: string;
  icon?: string;
  image: string;
  metric: string;
  metricLabel: string;
  solution?: string;
  title: string;
}

export const CaseStudyCard = ({
  challenge,
  className,
  client,
  ctaLabel = "Read Full Study",
  href = "/case-studies",
  icon = "Target",
  image,
  metric,
  metricLabel,
  title,
}: CaseStudyCardProps) => {
  return (
    <Link
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl",
        className
      )}
      href={href}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-xl bg-white/10 p-3 backdrop-blur-md">
          <span className="font-heading text-2xl font-bold text-white">{metric}</span>
          <span className="text-xs font-medium text-white/80">{metricLabel}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10">
              <Icon className="h-4 w-4 text-brand-blue" name={icon} />
            </div>
            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
              {client}
            </span>
          </div>
          <h3 className="mb-3 font-heading text-lg leading-tight font-bold">{title}</h3>
          {challenge && (
            <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">{challenge}</p>
          )}
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm font-semibold tracking-widest text-brand-blue uppercase">
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
};
