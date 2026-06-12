import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/components/ui/Heading";

export interface CorporateVideoPortfolioSectionProps {
  heading: string;
  items: CorporateVideoPortfolioItem[];
}

interface CorporateVideoPortfolioItem {
  client?: string;
  href?: string;
  image: string;
  title: string;
}

export const CorporateVideoPortfolioSection = ({
  heading,
  items,
}: CorporateVideoPortfolioSectionProps) => {
  return (
    <section className="bg-[#111111] py-12 text-white md:py-16 lg:py-24">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <Heading as="h2" className="mb-12 max-w-4xl text-white md:mb-14 lg:text-5xl">
          {heading}
        </Heading>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              className="group overflow-hidden rounded-lg bg-white text-[#222222] shadow-[0_26px_70px_rgba(0,0,0,0.24)]"
              key={item.title}
            >
              <div className="relative aspect-[1.45] overflow-hidden">
                <Image
                  alt={item.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  src={item.image}
                />
              </div>

              <div className="flex min-h-[300px] flex-col p-8 md:p-10">
                <p className="mb-5 text-sm leading-relaxed font-bold tracking-[0.18em] text-[#1E6091] uppercase">
                  {item.client ?? item.title}
                </p>
                <h3 className="font-heading text-3xl leading-tight font-bold md:text-[2rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-[#333333]">Case Study</p>

                <Link
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-12 font-heading text-2xl font-bold text-[#0C6573] transition-colors hover:text-[#1E6091] md:text-3xl"
                  href={item.href ?? "/case-studies"}
                >
                  View Project
                  <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
