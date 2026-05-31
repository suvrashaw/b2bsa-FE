"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Search } from "lucide-react";
import React, { useCallback, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib";

export interface TradeShow {
  id: string;
  industry: string;
  location: string;
  name: string;
}

export interface TradeShowsDirectoryProps {
  className?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  shows: TradeShow[];
}

const ROW_ANIMATE = { opacity: 1 };
const ROW_INITIAL = { opacity: 0 };

export const TradeShowsDirectory = ({
  className,
  eyebrow,
  heading,
  shows,
}: TradeShowsDirectoryProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = useMemo(() => {
    const inds = new Set(shows.map((s) => s.industry));
    return ["All", ...inds];
  }, [shows]);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }, []);

  const handleIndustryChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndustry(event.target.value);
  }, []);

  const filteredShows = useMemo(() => {
    return shows.filter((show) => {
      const matchesSearch =
        show.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        show.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIndustry = selectedIndustry === "All" || show.industry === selectedIndustry;
      return matchesSearch && matchesIndustry;
    });
  }, [shows, searchQuery, selectedIndustry]);

  return (
    <section className={cn("bg-brand-gray py-24 lg:py-32", className)}>
      <div className="container mx-auto px-8">
        <div className="mb-12 flex flex-col items-start">
          {eyebrow && <Eyebrow variant="blue">{eyebrow}</Eyebrow>}
          {heading && <Heading as="h2" className="text-center">{heading}</Heading>}
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-brand-charcoal/40" />
            <input
              className="w-full rounded-2xl border border-gray-100 bg-white py-4 pr-4 pl-12 text-brand-charcoal shadow-sm transition-shadow outline-none focus:border-brand-blue/30 focus:shadow-md focus:ring-4 focus:ring-brand-blue/10"
              onChange={handleSearchChange}
              placeholder="Search trade shows or locations..."
              type="text"
              value={searchQuery}
            />
          </div>
          <div className="relative w-full md:w-72">
            <select
              className="w-full appearance-none rounded-2xl border border-gray-100 bg-white px-4 py-4 pr-10 text-brand-charcoal shadow-sm transition-shadow outline-none focus:border-brand-blue/30 focus:shadow-md focus:ring-4 focus:ring-brand-blue/10"
              onChange={handleIndustryChange}
              value={selectedIndustry}
            >
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind === "All" ? "All Industries" : ind}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-brand-charcoal/40">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>
          </div>
        </div>

        {/* Table/List */}
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-100/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-brand-gray/10">
                  <th className="px-8 py-6 text-xs font-bold tracking-widest text-brand-charcoal/60 uppercase">
                    Event Name
                  </th>
                  <th className="px-8 py-6 text-xs font-bold tracking-widest text-brand-charcoal/60 uppercase">
                    Industry
                  </th>
                  <th className="px-8 py-6 text-xs font-bold tracking-widest text-brand-charcoal/60 uppercase">
                    Location
                  </th>
                  <th className="px-8 py-6 text-right text-xs font-bold tracking-widest text-brand-charcoal/60 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredShows.length > 0 ? (
                  filteredShows.map((show) => (
                    <motion.tr
                      animate={ROW_ANIMATE}
                      className="group transition-colors hover:bg-brand-gray/20"
                      initial={ROW_INITIAL}
                      key={show.id}
                      layout
                    >
                      <td className="px-8 py-6">
                        <span className="font-bold text-brand-charcoal">{show.name}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-sm font-medium text-brand-charcoal/80">
                          <Briefcase className="h-4 w-4 text-brand-blue" />
                          {show.industry}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-sm font-medium text-brand-charcoal/80">
                          <MapPin className="h-4 w-4 text-brand-cyan" />
                          {show.location}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <Button
                          className="opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100"
                          size="sm"
                          variant="secondary"
                        >
                          Plan Strategy
                        </Button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td className="px-8 py-12 text-center text-brand-charcoal/60" colSpan={4}>
                      No trade shows found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
