import type { CSSProperties } from "react";

import Image from "next/image";
import Link from "next/link";

export interface ServiceCarouselItem {
  description: string;
  href: string;
  id: string;
  image: string;
  title: string;
}

interface ServiceCarouselCardProps {
  item: ServiceCarouselItem;
  style?: CSSProperties;
}

export const ServiceCarouselCard = ({ item, style }: ServiceCarouselCardProps) => {
  return (
    <div className="relative h-72 shrink-0 overflow-hidden rounded-2xl md:h-80" style={style}>
      <Image
        alt={item.title}
        className="object-cover"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        src={item.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 p-6">
        <p className="font-heading text-xl font-bold text-white">{item.title}</p>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-gray-300">
          {item.description}
        </p>
        <Link
          className="mt-3 inline-block text-sm font-semibold text-brand-cyan transition hover:opacity-75"
          href={item.href}
        >
          View Service →
        </Link>
      </div>
    </div>
  );
};
