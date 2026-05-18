"use client";

import { motion } from "framer-motion";

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

interface DataTableProps {
  className?: string;
  description?: string;
  headers: string[];
  rows: DataTableRow[];
  title?: string;
}

interface DataTableRow {
  [key: string]: string;
}

const DATATABLE_INITIAL = { opacity: 0, y: 20 };
const DATATABLE_WHILE_IN_VIEW = { opacity: 1, y: 0 };
const DATATABLE_TRANSITION = { duration: 0.6 };
const DATATABLE_VIEWPORT = { once: true };

export const DataTable = ({ className, description, headers, rows, title }: DataTableProps) => {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-8">
        {(title || description) && (
          <div className="mb-12 max-w-3xl">
            {title && (
              <Heading as="h2" className="mb-4 text-brand-charcoal">
                {title}
              </Heading>
            )}
            {description && (
              <p className="text-lg leading-relaxed text-brand-charcoal/70">{description}</p>
            )}
          </div>
        )}

        <motion.div
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-100/50"
          initial={DATATABLE_INITIAL}
          transition={DATATABLE_TRANSITION}
          viewport={DATATABLE_VIEWPORT}
          whileInView={DATATABLE_WHILE_IN_VIEW}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-brand-gray/5">
                  {headers.map((header, index) => (
                    <th
                      className="px-8 py-6 text-xs font-bold tracking-widest text-gray-500 uppercase"
                      key={index}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((row, rowIndex) => (
                  <tr className="transition-colors hover:bg-brand-gray/2" key={rowIndex}>
                    {headers.map((header, colIndex) => (
                      <td
                        className={cn(
                          "px-8 py-6 text-brand-charcoal text-base",
                          colIndex === 0 ? "font-bold" : "font-medium"
                        )}
                        key={colIndex}
                      >
                        {row[header.toLowerCase()] || row[header] || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
