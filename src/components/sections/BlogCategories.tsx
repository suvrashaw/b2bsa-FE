"use client";

import type { ElementType } from "react";

import { motion } from "framer-motion";

import { Heading } from "@/components/ui/Heading";

export interface BlogCategoryItem {
  icon: ElementType;
  id: string;
  name: string;
}

export interface BlogCategoriesProps {
  categories: BlogCategoryItem[];
  heading?: string;
}

export const BlogCategories = ({ categories, heading = "Content Categories" }: BlogCategoriesProps) => {
  return (
    <div className="relative z-30 w-full bg-brand-gray pb-12 pt-10">
      <div className="container mx-auto px-8">
        {heading && (
          <Heading as="h2" className="mb-10 text-center text-3xl font-bold">
            {heading}
          </Heading>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                key={category.id}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <button
                  className="group flex cursor-pointer items-center gap-2.5 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  type="button"
                >
                  <Icon className="h-4 w-4 text-brand-blue transition-transform group-hover:scale-110" />
                  <span className="text-sm font-semibold text-brand-charcoal transition-colors group-hover:text-brand-blue">
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
