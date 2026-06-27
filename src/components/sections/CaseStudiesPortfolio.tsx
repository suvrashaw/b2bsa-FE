import Link from "next/link";
import { CaseStudyCard } from "@/components/items/CaseStudyCard";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { CaseStudyEntry } from "@/content/case-studies";

export interface CaseStudiesPortfolioProps {
  heading: string;
  items: CaseStudyEntry[];
}

export const CaseStudiesPortfolio = ({
  heading,
  items,
}: CaseStudiesPortfolioProps) => {
  return (
    <CardsGrid
      className="bg-[#111111] text-white !pt-[100px]"
      heading={
        <div className="flex flex-col items-start text-left">
          <SectionHeader as="h2" className="max-w-4xl text-[30px] md:text-[50px] lg:text-[70px] font-black leading-none text-white">
            {heading}
          </SectionHeader>
          <Link
            className="mt-6 font-heading text-xl font-bold text-[#4BC0D9] underline decoration-2 underline-offset-4 transition-colors md:text-2xl"
            href="/case-studies"
          >
            Browse Our Full Portfolio
          </Link>
          <h3 className="mt-16 font-heading text-2xl font-bold text-white">Featured Work</h3>
        </div>
      }
      headingAlign="left"
    >
      {items.map((item) => (
        <CaseStudyCard item={item} key={item.title} />
      ))}
    </CardsGrid>
  );
};
