"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useMemo, useRef } from "react";

import { FAQCard } from "@/components/cards/FAQCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { type FAQContent, HOME_FAQ_CONTENT } from "@/content/home";

export interface FAQProps {
  content?: FAQContent;
  description?: FAQContent["description"];
  eyebrow?: FAQContent["eyebrow"];
  faqs?: FAQContent["faqs"];
  heading?: FAQContent["heading"];
  scrollAmount?: FAQContent["scrollAmount"];
}

const FAQ_SCROLLBAR_STYLE = { msOverflowStyle: "none", scrollbarWidth: "none" } as const;
const FAQ_CSS = `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `;
const FAQ_SCROLLBAR_INNER = { __html: FAQ_CSS };
const FAQ_ITEM_INITIAL = { opacity: 0, x: 20 };
const FAQ_ITEM_WHILEINVIEW = { opacity: 1, x: 0 };
const FAQ_VIEWPORT = { once: true };

const FAQMotionCard = ({
  answer,
  icon,
  index,
  question,
}: {
  answer: string;
  icon?: ReactNode;
  index: number;
  question: string;
}) => {
  const faqTransition = useMemo(() => ({ delay: index * 0.1 }), [index]);
  return (
    <motion.div
      initial={FAQ_ITEM_INITIAL}
      transition={faqTransition}
      viewport={FAQ_VIEWPORT}
      whileInView={FAQ_ITEM_WHILEINVIEW}
    >
      <FAQCard answer={answer} icon={icon} question={question} />
    </motion.div>
  );
};

export const FAQ = ({
  content = HOME_FAQ_CONTENT,
  description = content.description,
  eyebrow = content.eyebrow,
  faqs = content.faqs,
  heading = content.heading,
  scrollAmount = content.scrollAmount,
}: FAQProps = {}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ behavior: "smooth", left: -scrollAmount });
    }
  }, [scrollAmount]);

  const scrollRight = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ behavior: "smooth", left: scrollAmount });
    }
  }, [scrollAmount]);

  return (
    <section className="relative bg-brand-gray py-24" id="faq">
      {/* Decorative Gradients — isolated so they don't create a clip context for cards */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-cyan/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="container mx-auto mb-12 px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="text-left">
              {eyebrow && <Eyebrow variant="neutral">{eyebrow}</Eyebrow>}
              <Heading as="h2" className="mb-4">
                {heading}
              </Heading>
              {description && <p className="max-w-xl text-lg text-gray-600">{description}</p>}
            </div>
          </div>
        </div>

        {/* Full-bleed carousel — cut only by viewport, not by container padding */}
        <div
          className="scrollbar-hide flex snap-x snap-mandatory scroll-px-8 gap-6 overflow-x-auto px-8 pb-8"
          ref={scrollRef}
          style={FAQ_SCROLLBAR_STYLE}
        >
          {faqs.map((faq, index) => (
            <FAQMotionCard
              answer={faq.answer}
              icon={faq.icon}
              index={index}
              key={faq.id}
              question={faq.question}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="container mx-auto mt-12 flex items-center justify-center gap-8 px-8">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
            onClick={scrollRight}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Global styles to hide scrollbar for webkit */}
      <style dangerouslySetInnerHTML={FAQ_SCROLLBAR_INNER} />
    </section>
  );
};
