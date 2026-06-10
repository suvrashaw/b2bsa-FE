import { CheckCircle } from "lucide-react";
import Image from "next/image";

export interface BasicCardItem {
  bullets: string[];
  image: {
    alt: string;
    src: string;
  };
  title: string;
}

interface BasicCardsProps {
  item: BasicCardItem;
}

export const BasicCards = ({ item }: BasicCardsProps) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-brand-blue/10 bg-brand-gray shadow-[0_24px_60px_rgba(18,38,54,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-[0_28px_75px_rgba(18,38,54,0.13)]">
      <div className="relative h-64 overflow-hidden">
        <Image
          alt={item.image.alt}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          src={item.image.src}
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/55 via-brand-charcoal/8 to-transparent" />
      </div>

      <div className="p-8">
        <h3 className="font-heading text-2xl leading-tight font-bold text-brand-charcoal">
          {item.title}
        </h3>

        <ul className="mt-7 space-y-4">
          {item.bullets.map((bullet) => (
            <li
              className="flex gap-3 text-sm leading-relaxed text-brand-charcoal/72 md:text-base"
              key={bullet}
            >
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
