"use client";

import { motion } from "framer-motion";
import { Hash } from "lucide-react";
import { type ElementType, useMemo } from "react";

import { Heading } from "@/components/ui/Heading";
import { BLOG_CATEGORIES } from "@/content/blogs/content";

export interface BlogCategoriesProps {
  heading?: string;
}

interface BlogCategoryItem {
  icon?: ElementType;
  id: string;
  name: string;
}

const ANIMATE = { opacity: 1, y: 0 };
const INITIAL = { opacity: 0, y: 10 };

const CategoryButton = ({ category, index }: { category: BlogCategoryItem; index: number }) => {
  const Icon = category.icon || Hash;
  const transition = useMemo(() => ({ delay: index * 0.05, duration: 0.4 }), [index]);

  return (
    <motion.div animate={ANIMATE} initial={INITIAL} transition={transition}>
      <button
        className="group flex cursor-pointer items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-2 text-brand-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:bg-brand-blue/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        type="button"
      >
        <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
        <span className="text-sm font-semibold tracking-wide">{category.name}</span>
      </button>
    </motion.div>
  );
};

export const BlogCategories = ({ heading = "Content Categories" }: BlogCategoriesProps) => {
  return (
    <div className="relative z-30 w-full bg-brand-gray pt-10 pb-12">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        {heading && (
          <Heading as="h2" className="mb-10 text-center text-3xl font-bold">
            {heading}
          </Heading>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {BLOG_CATEGORIES.map((category, index) => (
            <CategoryButton category={category} index={index} key={category.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
