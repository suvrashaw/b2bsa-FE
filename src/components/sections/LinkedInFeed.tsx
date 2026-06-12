"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

import { Heading } from "@/components/ui/Heading";
import { LINKEDIN_POSTS, type LinkedInPost } from "@/content/linkedinPosts";

const cardViewport = { once: true } as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.45 },
    y: 0,
  }),
};

const LinkedInCard = ({ index, post }: { index: number; post: LinkedInPost }) => (
  <motion.a
    className="group flex w-[80vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md sm:w-[44vw] lg:w-auto"
    custom={index}
    href={post.url}
    initial="hidden"
    rel="noreferrer"
    target="_blank"
    variants={cardVariants}
    viewport={cardViewport}
    whileInView="visible"
  >
    <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
      <Image
        alt={post.hashtag}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        fill
        sizes="(max-width: 1024px) 80vw, 33vw"
        src={post.image}
      />
    </div>

    <div className="flex flex-1 flex-col gap-3 p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2]">
          <FaLinkedinIn className="h-3 w-3 text-white" />
        </span>
        <span className="text-xs font-semibold text-[#0A66C2]">{post.hashtag}</span>
      </div>

      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">{post.caption}</p>

      <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors group-hover:text-brand-cyan">
        View Post
        <svg
          aria-hidden="true"
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  </motion.a>
);

export const LinkedInFeed = () => (
  <section className="bg-brand-gray py-20">
    <div className="container mx-auto px-8">
      <div className="mb-12 flex flex-col items-center text-center">
        <Heading as="h2" className="text-center">
          Follow Our Latest Event Executions on LinkedIn
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
          Get real-time updates on booth builds, exhibition projects, event staffing, Event lead
          generation campaigns, and global trade show experiences from our team worldwide.
        </p>
      </div>

      {/* Mobile/tablet: horizontal scroll slider */}
      <div className="flex [scroll-snap-type:x_mandatory] [scrollbar-width:none] gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] lg:hidden [&::-webkit-scrollbar]:hidden">
        {LINKEDIN_POSTS.map((post, i) => (
          <LinkedInCard index={i} key={post.id} post={post} />
        ))}
      </div>

      {/* Desktop: 3-column grid */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
        {LINKEDIN_POSTS.map((post, i) => (
          <LinkedInCard index={i} key={post.id} post={post} />
        ))}
      </div>
    </div>
  </section>
);
