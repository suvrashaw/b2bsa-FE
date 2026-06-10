"use client";

import type { ReactNode } from "react";

import Image from "next/image";

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
  return (
    <div className="group h-[280px] w-full cursor-pointer [perspective:1000px]">
      <div className="relative h-full w-full rounded-2xl shadow-md transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] hover:shadow-xl">

        {/* Front: Image + overlay + question */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
          {image ? (
            <>
              <Image
                alt={question}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                sizes="320px"
                src={image}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/25" />
            </>
          ) : (
            <div className="absolute inset-0 bg-[#F8F9FA]" />
          )}

          {/* Content on top of overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
            <h3 className={`font-heading text-lg leading-snug font-semibold md:text-2xl ${image ? "text-white" : "text-brand-charcoal"}`}>
              {question}
            </h3>
          </div>
        </div>

        {/* Back: Answer */}
        <div className="absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] flex-col items-start justify-center rounded-2xl border border-white/20 bg-brand-blue p-8 text-left shadow-inner [backface-visibility:hidden]">
          <p className="text-sm md:text-base leading-relaxed text-white">{answer}</p>
        </div>
      </div>
    </div>
  );
};
