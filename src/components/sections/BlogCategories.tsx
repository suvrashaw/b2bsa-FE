"use client";

import type { ElementType } from "react";

import { motion } from "framer-motion";

import { Heading } from "@/components/ui/Heading";
import { BLOG_CATEGORIES } from "@/content/blog";

export interface BlogCategoryItem {
  icon: ElementType;
  id: string;
  name: string;
}

export interface BlogCategoriesProps {
  heading?: string;
}

export const BlogCategories = ({ heading = "Content Categories" }: BlogCategoriesProps) => {
  return (
    <div className="relative z-30 w-full bg-brand-gray pb-12 pt-10">
      <div className="container mx-auto px-8">
        {heading && (
          <Heading as="h2" className="mb-10 text-center text-3xl font-bold">
            {heading}
          </Heading>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {BLOG_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                key={category.id}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <button
                  className="group flex cursor-pointer items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-2 text-brand-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:bg-brand-blue/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  type="button"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-semibold tracking-wide">
                    {category.name}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
