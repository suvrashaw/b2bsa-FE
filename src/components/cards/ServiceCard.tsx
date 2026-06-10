import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Icon from "@/components/ui/Icon";
import { cn } from "@/lib";

export interface ServiceCardProps {
  badge?: string;
  className?: string;
  color?: string;
  ctaLabel?: string;
  description: string;
  href?: string;
  icon: string;
  id: string;
  image: string;
  title: string;
}

export const ServiceCard = ({
  badge,
  className,
  color = "bg-brand-blue",
  ctaLabel = "Learn More",
  description,
  href,
  icon,
  image,
  title,
}: ServiceCardProps) => {
  const inner = (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wider uppercase shadow-sm backdrop-blur-md">
              {badge}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div
            className={cn(
              "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full",
              color + "/10"
            )}
          >
            <Icon className={cn("h-5 w-5", color.replace("bg-", "text-"))} name={icon} />
          </div>
          <h3 className="mb-3 font-heading text-xl leading-tight font-bold">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-600 md:text-base">{description}</p>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold tracking-widest text-brand-blue uppercase">
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return inner;
};
