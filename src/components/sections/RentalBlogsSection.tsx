"use client";

import { motion } from "framer-motion";

import type { SharedBlogPost } from "@/content/blogs";

import { Heading } from "@/components/ui/Heading";
import { RentalBlogCard } from "@/components/ui/RentalBlogCard";

export interface RentalBlogsSectionProps {
  heading: string;
  posts: SharedBlogPost[];
}

const rentalBlogViewport = { once: true } as const;
const rentalBlogRevealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
    y: 0,
  },
};
const rentalBlogCardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    transition: { delay: index * 0.06, duration: 0.45 },
    y: 0,
  }),
};

export const RentalBlogsSection = ({ heading, posts }: RentalBlogsSectionProps) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-24" id="blogs">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          variants={rentalBlogRevealVariants}
          viewport={rentalBlogViewport}
          whileInView="visible"
        >
          <Heading as="h2" className="text-brand-charcoal">
            {heading}
          </Heading>
        </motion.div>

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <motion.div
              custom={index}
              initial="hidden"
              key={post.id}
              variants={rentalBlogCardVariants}
              viewport={rentalBlogViewport}
              whileInView="visible"
            >
              <RentalBlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
