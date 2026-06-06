import Image from "next/image";
import Link from "next/link";

import { SHARED_BLOG_POSTS } from "@/content/blogs";

export interface BlogSidebarTrendingProps {
  currentId: string;
}

export const BlogSidebarTrending = ({ currentId }: BlogSidebarTrendingProps) => {
  const trendingPosts = SHARED_BLOG_POSTS.filter((post) => String(post.id) !== currentId).slice(0, 4);

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="bg-brand-blue px-4 py-3">
        <h2 className="text-sm font-bold tracking-widest text-white uppercase">Trending Posts</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {trendingPosts.map((post) => (
          <Link
            className="group flex gap-3 p-4 transition-colors hover:bg-brand-gray"
            href={post.href}
            key={post.id}
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <Image
                alt={post.title}
                className="object-cover"
                fill
                sizes="64px"
                src={post.image}
              />
            </div>
            <div className="min-w-0">
              <h3 className="line-clamp-2 text-sm leading-snug font-bold text-brand-charcoal transition-colors group-hover:text-brand-blue">
                {post.title}
              </h3>
              {post.date && <p className="mt-2 text-xs font-medium text-gray-500">{post.date}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
