"use client";

import { HelpCircle } from "lucide-react";

export interface FAQCardProps {
  answer: string;
  question: string;
}

export const FAQCard = ({ answer, question }: FAQCardProps) => {
  return (
    <div className="group h-[280px] w-[300px] flex-shrink-0 cursor-pointer snap-center [perspective:1000px] md:w-[320px]">
      <div className="relative h-full w-full rounded-2xl shadow-md transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] hover:shadow-xl">
        {/* Front: Question */}
        <div className="absolute inset-0 flex h-full w-full flex-col items-start justify-center rounded-2xl border border-gray-100 bg-[#F8F9FA] p-8 text-left [backface-visibility:hidden]">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 transition-transform group-hover:scale-110">
            <HelpCircle className="h-6 w-6 text-brand-blue" />
          </div>
          <h3 className="font-heading text-xl leading-tight font-bold text-brand-charcoal">
            {question}
          </h3>
        </div>

        {/* Back: Answer */}
        <div className="absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] flex-col items-start justify-center rounded-2xl border border-brand-cyan/20 bg-white p-8 text-left shadow-inner [backface-visibility:hidden]">
          <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand-cyan/10">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          </div>
          <p className="text-sm leading-relaxed text-brand-charcoal">{answer}</p>
        </div>
      </div>
    </div>
  );
};
