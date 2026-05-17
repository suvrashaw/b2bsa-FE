"use client";

import type { ReactNode } from "react";

import { HelpCircle } from "lucide-react";

export interface FAQCardProps {
  answer: string;
  icon?: ReactNode;
  question: string;
}

export const FAQCard = ({ answer, icon, question }: FAQCardProps) => {
  return (
    <div className="group h-[280px] w-[300px] shrink-0 cursor-pointer snap-center perspective-[1000px] md:w-[320px]">
      <div className="relative h-full w-full rounded-2xl shadow-md transition-transform duration-500 ease-in-out transform-3d group-hover:transform-[rotateY(180deg)] hover:shadow-xl">
        {/* Front: Question */}
        <div className="absolute inset-0 flex h-full w-full flex-col items-start justify-center rounded-2xl border border-gray-100 bg-[#F8F9FA] p-8 text-left backface-hidden">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-transform group-hover:scale-110">
            {icon ?? <HelpCircle className="h-6 w-6" />}
          </div>
          <h3 className="font-heading text-xl leading-tight font-bold text-brand-charcoal">
            {question}
          </h3>
        </div>

        {/* Back: Answer */}
        <div className="absolute inset-0 flex h-full w-full transform-[rotateY(180deg)] flex-col items-start justify-center rounded-2xl border border-white/20 bg-brand-blue p-8 text-left shadow-inner backface-hidden">
          <p className="text-sm leading-relaxed text-white">{answer}</p>
        </div>
      </div>
    </div>
  );
};
