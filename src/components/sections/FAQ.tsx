"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { FAQCard } from "@/components/cards/FAQCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { type FAQContent, HOME_FAQ_CONTENT } from "@/content/home";
import { cn } from "@/lib";

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
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = useCallback(() => {
    if (scrollRef.current) {
      const { clientWidth, scrollWidth } = scrollRef.current;
      setIsOverflowing(scrollWidth > clientWidth);
    }
  }, []);

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    
    // Check multiple times with small delays to ensure layout settles
    const timers = [
      setTimeout(checkOverflow, 50),
      setTimeout(checkOverflow, 150),
      setTimeout(checkOverflow, 400),
    ];

    return () => {
      window.removeEventListener("resize", checkOverflow);
      for (const timer of timers) {
        clearTimeout(timer);
      }
    };
  }, [checkOverflow, faqs]);

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
        {/* Centered Heading */}
        <div className="container mx-auto mb-16 px-8 text-center">
          <div className="flex flex-col items-center justify-center text-center">
            {eyebrow && (
              <Eyebrow className="mb-4 rotate-[-1deg]" variant="neutral">
                {eyebrow}
              </Eyebrow>
            )}
            <Heading as="h2" className="mb-4">
              {heading}
            </Heading>
            {description && (
              <p className="max-w-xl text-lg text-gray-600">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Dynamic carousel / centered row grid */}
        <div
          className={cn(
            "scrollbar-hide flex gap-6 pb-8",
            isOverflowing
              ? "faq-carousel-container snap-x snap-mandatory overflow-x-auto"
              : "container mx-auto justify-center px-8"
          )}
          ref={scrollRef}
          style={isOverflowing ? FAQ_SCROLLBAR_STYLE : undefined}
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

        {/* Dynamic Navigation Arrows */}
        {isOverflowing && (
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
        )}
      </div>

      {/* Global styles to hide scrollbar for webkit */}
      <style dangerouslySetInnerHTML={FAQ_SCROLLBAR_INNER} />
    </section>
  );
};
