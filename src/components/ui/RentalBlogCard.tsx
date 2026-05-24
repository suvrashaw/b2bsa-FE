import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { SharedBlogPost } from "@/content/blogs";

export interface RentalBlogCardProps {
  post: SharedBlogPost;
}

export const RentalBlogCard = ({ post }: RentalBlogCardProps) => {
  return (
    <Link className="group flex h-full flex-col" href={post.href ?? "/blogs"}>
      <article className="flex h-full flex-col">
        <div className="relative overflow-hidden rounded-[2rem] transition-all duration-300 group-hover:rounded-[1.25rem]">
          <div className="relative aspect-[1.28/1] w-full bg-brand-charcoal/5">
            <Image
              alt={post.title}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              src={post.image}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col pt-5">
          {post.date ? (
            <p className="text-sm font-semibold tracking-wide text-brand-primary">{post.date}</p>
          ) : null}

          <h3 className="mt-3 font-heading text-[2rem] leading-[1.12] font-bold text-brand-charcoal transition-colors duration-300 group-hover:text-brand-blue">
            {post.title}
          </h3>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-brand-charcoal/65 uppercase transition-colors duration-300 group-hover:text-brand-blue">
            Read More
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </article>
    </Link>
  );
};
