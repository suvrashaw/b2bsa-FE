"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  type ChangeEvent,
  type ElementType,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
} from "react";

import type { SharedBlogPostSummary } from "@/content/blogs";

import { BlogCardGrid } from "@/components/items/BlogCard";
import { Pagination } from "@/components/ui/Pagination";
import { cn } from "@/lib";
import { applyPagination, parsePaginationPage } from "@/lib/pagination";

interface CategoryButtonProps {
  category: CategoryOption;
  isActive: boolean;
  onChange: (category: string) => void;
}

interface CategoryOption {
  count: number;
  icon?: ElementType;
  id: string;
  name: string;
}

const ALL_CATEGORY_ID = "all";
const ALL_CATEGORY_NAME = "All";

const CategoryButton = ({ category, isActive, onChange }: CategoryButtonProps) => {
  const Icon = category.icon;
  const handleClick = useCallback(() => {
    onChange(category.id);
  }, [category.id, onChange]);

  return (
    <button
      className={cn(
        "flex w-full items-center justify-between gap-3 rounded-lg p-3 text-left text-sm font-bold transition",
        isActive
          ? "bg-brand-blue text-white"
          : "text-brand-charcoal hover:bg-brand-gray hover:text-brand-blue"
      )}
      onClick={handleClick}
      type="button"
    >
      <span className="flex min-w-0 items-center gap-2">
        {Icon ? <Icon className="size-4 shrink-0" /> : null}
        <span className="truncate">{category.name}</span>
      </span>
      <span className={isActive ? "text-white/80" : "text-brand-charcoal/75"}>
        {category.count}
      </span>
    </button>
  );
};

interface BlogCategoryOption {
  id: string;
  name: string;
}

const getCategoryOptions = (blogs: SharedBlogPostSummary[], blogCategories: BlogCategoryOption[]) => {
  const counts = new Map<string, number>();

  for (const blog of blogs) {
    if (blog.category) {
      counts.set(blog.category, (counts.get(blog.category) ?? 0) + 1);
    }
  }

  const options = blogCategories.map((category) => ({
    count: counts.get(category.name) ?? 0,
    id: category.id,
    name: category.name,
  }));

  return [{ count: blogs.length, id: ALL_CATEGORY_ID, name: ALL_CATEGORY_NAME }, ...options];
};

export interface BlogsSectionProps {
  blogCategories: BlogCategoryOption[];
  blogs: SharedBlogPostSummary[];
}

export const BlogsSection = ({ blogCategories, blogs }: BlogsSectionProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const categories = useMemo(
    () => getCategoryOptions(blogs, blogCategories),
    [blogs, blogCategories]
  );
  const requestedPage = parsePaginationPage(searchParams.get("page"));
  const requestedCategory = searchParams.get("category") ?? ALL_CATEGORY_ID;
  const activeCategory = categories.some((category) => category.id === requestedCategory)
    ? requestedCategory
    : ALL_CATEGORY_ID;
  const activeCategoryName =
    categories.find((category) => category.id === activeCategory)?.name ?? ALL_CATEGORY_NAME;

  const filteredBlogs = useMemo(() => {
    if (activeCategory === ALL_CATEGORY_ID) {
      return blogs;
    }

    return blogs.filter((blog) => blog.category === activeCategoryName);
  }, [activeCategory, activeCategoryName, blogs]);

  const {
    currentPage,
    paginatedItems: paginatedBlogs,
    totalPages,
  } = applyPagination(filteredBlogs, requestedPage);
  const hasEmptyPage = filteredBlogs.length > 0 && paginatedBlogs.length === 0;
  let blogsContent: ReactNode;

  const updateDirectoryParams = useCallback(
    (nextCategory: string, nextPage: number) => {
      const params = new URLSearchParams(searchParams.toString());

      if (nextCategory === ALL_CATEGORY_ID) {
        params.delete("category");
      } else {
        params.set("category", nextCategory);
      }

      if (nextPage <= 1) {
        params.delete("page");
      } else {
        params.set("page", String(nextPage));
      }

      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const handleCategoryChange = useCallback(
    (category: string) => {
      updateDirectoryParams(category, 1);
    },
    [updateDirectoryParams]
  );

  const handleSelectCategory = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      handleCategoryChange(event.currentTarget.value);
    },
    [handleCategoryChange]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      updateDirectoryParams(activeCategory, page);
    },
    [activeCategory, updateDirectoryParams]
  );

  useEffect(() => {
    if (requestedCategory !== activeCategory || requestedPage !== currentPage) {
      updateDirectoryParams(activeCategory, currentPage);
    }
  }, [activeCategory, currentPage, requestedCategory, requestedPage, updateDirectoryParams]);

  if (paginatedBlogs.length > 0) {
    blogsContent = (
      <>
        <h2 className="sr-only">Blog Posts</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {paginatedBlogs.map((blog) => (
            <Link className="block h-full" href={blog.href} key={blog.id}>
              <BlogCardGrid blog={blog} />
            </Link>
          ))}
        </div>
      </>
    );
  } else if (hasEmptyPage) {
    blogsContent = (
      <div className="rounded-2xl border border-gray-100 bg-white px-8 py-14 text-center shadow-sm">
        <h2 className="font-heading text-2xl font-bold text-brand-charcoal">
          No more articles on this page.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-charcoal/65">
          Use the pagination controls to return to the available article results.
        </p>
      </div>
    );
  } else {
    blogsContent = (
      <div className="rounded-2xl border border-gray-100 bg-white px-8 py-14 text-center shadow-sm">
        <h2 className="font-heading text-2xl font-bold text-brand-charcoal">No articles found.</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-charcoal/65">
          Choose a different category to browse the blog library.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-brand-gray py-16" id="posts">
      <div className="container mx-auto grid gap-10 px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <div className="min-w-0">
          <div className="mb-8 lg:hidden">
            <label className="sr-only" htmlFor="blog-category">
              Blog category
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-sm font-bold text-brand-charcoal shadow-sm transition outline-none focus:border-brand-blue/40 focus:ring-4 focus:ring-brand-blue/10"
                id="blog-category"
                onChange={handleSelectCategory}
                value={activeCategory}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-brand-charcoal/50" />
            </div>
          </div>

          {blogsContent}

          <Pagination
            className="mt-12"
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="bg-brand-blue px-4 py-3">
              <h2 className="text-sm font-bold tracking-widest text-white uppercase">Categories</h2>
            </div>
            <div className="max-h-72 space-y-2 overflow-y-auto p-4">
              {categories.map((category) => (
                <CategoryButton
                  category={category}
                  isActive={category.id === activeCategory}
                  key={category.id}
                  onChange={handleCategoryChange}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
