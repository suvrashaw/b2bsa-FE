"use client";

import type { ReactNode } from "react";

import Image from "next/image";
import { useCallback, useState } from "react";

const PLACEHOLDER_IMAGE = "/media/home/hero/home_hero_bg.avif";

export interface FAQCardProps {
  answer: React.ReactNode | string;
  icon?: ReactNode;
  image?: string;
  layoutMode?: "carousel" | "fit";
  question: string;
}

export const FAQCard = ({
  answer,
  icon: _icon,
  image,
  layoutMode: _layoutMode = "carousel",
  question,
}: FAQCardProps) => {
  const resolvedImage = image ?? PLACEHOLDER_IMAGE;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = useCallback(() => setIsFlipped((prev) => !prev), []);
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => (e.key === "Enter" || e.key === " ") && handleClick(),
    [handleClick],
  );

  return (
    <div
      className="group h-[280px] w-full cursor-pointer [perspective:1000px]"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div
        className={`relative size-full rounded-2xl shadow-md transition-transform duration-500 ease-in-out [transform-style:preserve-3d] hover:shadow-xl md:group-hover:[transform:rotateY(180deg)] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Front: Image + overlay + question */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
          <Image
            alt={question}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            fill
            sizes="320px"
            src={resolvedImage}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/25" />

          {/* Content on top of overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-end p-5 md:p-8">
            <h3 className="type-h3 leading-snug text-white">{question}</h3>
          </div>
        </div>

        {/* Back: Answer */}
        <div className="absolute inset-0 flex size-full [transform:rotateY(180deg)] flex-col items-start justify-center rounded-2xl border border-white/20 bg-brand-blue p-5 text-left shadow-inner [backface-visibility:hidden] md:p-8">
          <p className="text-xs leading-relaxed text-white md:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
};
