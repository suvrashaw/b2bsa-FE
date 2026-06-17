"use client";

import type { ReactNode } from "react";

import Image from "next/image";

/** Static pool of images drawn from services / events / booth / home / about. */
const FAQ_IMAGES: string[] = [
  "/media/about-us/culture/culture-1.avif",
  "/media/about-us/culture/culture-4.avif",
  "/media/about-us/culture/culture-5.avif",
  "/media/about-us/hero.avif",
  "/media/about-us/leadership/paras-sir.avif",
  "/media/about-us/values/accountability.avif",
  "/media/about-us/values/global-reach.avif",
  "/media/about-us/values/partnership.avif",
  "/media/about-us/values/precision.avif",
  "/media/booth/10x10.avif",
  "/media/booth/10x20.avif",
  "/media/booth/10x30.avif",
  "/media/booth/20x20.avif",
  "/media/booth/20x30.avif",
  "/media/booth/20x40.avif",
  "/media/booth/30x30.avif",
  "/media/booth/30x40.avif",
  "/media/booth/40x40.avif",
  "/media/events/adobe_summit_2026.avif",
  "/media/events/event_other_1.avif",
  "/media/events/event_other_2.avif",
  "/media/events/event_other_3.avif",
  "/media/events/event_other_4.avif",
  "/media/events/inma_2026.avif",
  "/media/events/servicenow_2026.avif",
  "/media/home/hero/home_hero_bg.avif",
  "/media/home/hero/home_hero_bg_2.avif",

  "/media/home/why-choose-us/global_reach.avif",
  "/media/home/why-choose-us/proven_execution.avif",
  "/media/home/why-choose-us/strategic_creativity.avif",
  "/media/home/why-choose-us/technology_led_delivery.avif",
  "/media/services/booth/booth-10.avif",
  "/media/services/booth/booth-5.avif",
  "/media/services/booth/booth-6.avif",
  "/media/services/booth/booth-7.avif",
  "/media/services/booth/booth-8.avif",
  "/media/services/booth/booth-9.avif",
  "/media/home/services/branding.avif",
  "/media/home/services/database-and-market-research.avif",
  "/media/home/services/unused-market-intelligence.avif",
  "/media/home/services/experience-creation.avif",
  "/media/home/services/corporate-media-production.avif",
  "/media/home/services/digital-marketing.avif",
  "/media/home/services/unused-performance-marketing.avif",
  "/media/home/services/booth-design-and-production.avif",
  "/media/home/services/networking.avif",
  "/media/home/services/active-prospecting.avif",
];

export interface FAQCardProps {
  answer: React.ReactNode | string;
  icon?: ReactNode;
  image?: string;
  layoutMode?: "carousel" | "fit";
  question: string;
}

/**
 * Returns a stable index into FAQ_IMAGES derived from the question text,
 * so the same card always gets the same image regardless of render order.
 */
const seedIndexFromQuestion = (question: string): number => {
  let sum = 0;
  for (let i = 0; i < question.length; i++) {
    sum += question.codePointAt(i) ?? 0;
  }
  return sum % FAQ_IMAGES.length;
};

export const FAQCard = ({
  answer,
  icon: _icon,
  image,
  layoutMode: _layoutMode = "carousel",
  question,
}: FAQCardProps) => {
  const resolvedImage = image ?? FAQ_IMAGES[seedIndexFromQuestion(question)];

  return (
    <div className="group h-[280px] w-full cursor-pointer [perspective:1000px]">
      <div className="relative h-full w-full rounded-2xl shadow-md transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] hover:shadow-xl">
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
          <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
            <h3 className="font-heading text-base leading-snug font-semibold text-white md:text-xl">
              {question}
            </h3>
          </div>
        </div>

        {/* Back: Answer */}
        <div className="absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] flex-col items-start justify-center rounded-2xl border border-white/20 bg-brand-blue p-8 text-left shadow-inner [backface-visibility:hidden]">
          <p className="text-sm leading-relaxed text-white md:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
};
