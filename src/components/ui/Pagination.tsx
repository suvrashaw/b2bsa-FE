"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

import { cn } from "@/lib";

interface PaginationPageButtonProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  page: number;
}

interface PaginationProps {
  className?: string;
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

const PaginationPageButton = ({
  currentPage,
  onPageChange,
  page,
}: PaginationPageButtonProps) => {
  const isActive = page === currentPage;
  const handleClick = useCallback(() => {
    onPageChange(page);
  }, [onPageChange, page]);

  return (
    <button
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex h-12 min-w-[48px] items-center justify-center rounded-full border px-3 text-sm font-bold shadow-sm transition-colors",
        isActive
          ? "border-transparent bg-brand-blue text-white"
          : "border-gray-200 bg-white text-brand-charcoal hover:border-transparent hover:bg-brand-blue hover:text-white",
      )}
      onClick={handleClick}
      type="button"
    >
      {page}
    </button>
  );
};

export const Pagination = ({
  className,
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) => {
  const handlePrevious = useCallback(() => {
    onPageChange(Math.max(1, currentPage - 1));
  }, [currentPage, onPageChange]);

  const handleNext = useCallback(() => {
    onPageChange(Math.min(totalPages, currentPage + 1));
  }, [currentPage, onPageChange, totalPages]);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Pagination"
      className={cn(
        "flex flex-wrap items-center justify-center gap-2",
        className,
      )}
    >
      <button
        aria-label="Previous page"
        className="flex size-12 min-h-[44px] items-center justify-center rounded-full border border-gray-200 bg-white text-brand-charcoal shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white disabled:pointer-events-none disabled:opacity-40"
        disabled={currentPage <= 1}
        onClick={handlePrevious}
        type="button"
      >
        <ChevronLeft className="size-6" />
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <PaginationPageButton
            currentPage={currentPage}
            key={page}
            onPageChange={onPageChange}
            page={page}
          />
        );
      })}

      <button
        aria-label="Next page"
        className="flex size-12 min-h-[44px] items-center justify-center rounded-full border border-gray-200 bg-white text-brand-charcoal shadow-sm transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white disabled:pointer-events-none disabled:opacity-40"
        disabled={currentPage >= totalPages}
        onClick={handleNext}
        type="button"
      >
        <ChevronRight className="size-6" />
      </button>
    </nav>
  );
};
