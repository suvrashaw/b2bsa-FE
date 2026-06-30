"use client";

import { Play, Radio } from "lucide-react";
import Image from "next/image";
import { type MouseEvent, useCallback, useState } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib";

export interface LiveStreamProjectsProps {
  description?: string;
  heading: string;
  id?: string;
  items: LiveStreamProjectItem[];
  playlistLabel?: string;
}

interface LiveStreamProjectItem {
  client: string;
  description: string;
  duration?: string;
  externalUrl?: string;
  id: string;
  metric?: string;
  metricLabel?: string;
  platform: string;
  thumbnail: string;
  title: string;
  videoUrl?: string;
}

export const LiveStreamProjects = ({
  description,
  heading,
  id = "work",
  items,
}: LiveStreamProjectsProps) => {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const activeProject = items.find((item) => item.id === activeId) ?? items[0];
  const handleProjectSelect = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const nextId = event.currentTarget.dataset.projectId;

    if (nextId) {
      setActiveId(nextId);
    }
  }, []);

  if (!activeProject) return null;

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const ytId = activeProject.videoUrl ? getYoutubeId(activeProject.videoUrl) : null;

  return (
    <section className="bg-brand-gray py-12 md:py-16 lg:py-20" id={id}>
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <SectionHeader description={description} heading={heading} />

        <div className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="flex flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-heading text-base font-bold text-brand-charcoal md:text-xl">
                Live Streaming Projects
              </h3>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-sm bg-brand-blue/10 px-3 py-2 text-xs font-semibold text-brand-blue">
              {items.length} featured formats
            </span>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="min-w-0 p-4 sm:p-6">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-brand-charcoal">
                {ytId ? (
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 size-full border-0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={`https://www.youtube-nocookie.com/embed/${ytId}?rel=0`}
                    title={activeProject.title}
                  />
                ) : activeProject.videoUrl ? (
                  <video
                    className="size-full object-cover"
                    controls
                    key={activeProject.id}
                    muted
                    playsInline
                    poster={activeProject.thumbnail}
                    preload="metadata"
                    src={activeProject.videoUrl}
                  />
                ) : (
                  <Image
                    alt={activeProject.title}
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    src={activeProject.thumbnail}
                  />
                )}
                {!ytId && (
                  <div className="pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 rounded-sm bg-brand-charcoal/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                    <Radio className="size-4 text-brand-cyan" />
                    Broadcast preview
                  </div>
                )}
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                <div>
                  <h3 className="mt-4 font-heading text-base font-bold text-brand-charcoal md:text-xl lg:text-2xl">
                    {activeProject.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-xs leading-relaxed text-brand-charcoal/70 md:text-base">
                    {activeProject.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-gray/80">
              <div className="max-h-[620px] overflow-y-auto p-3 sm:p-4">
                <div className="space-y-3">
                  {items.map((item, index) => {
                    const isActive = item.id === activeProject.id;

                    return (
                      <button
                        aria-pressed={isActive}
                        className={cn(
                          "group grid w-full grid-cols-[96px_minmax(0,1fr)] gap-3 rounded-lg border p-2 text-left transition-colors duration-300 sm:grid-cols-[120px_minmax(0,1fr)]",
                          isActive
                            ? "border-brand-blue bg-white shadow-sm"
                            : "border-transparent bg-white/70 hover:border-brand-blue/30 hover:bg-white"
                        )}
                        data-project-id={item.id}
                        key={item.id}
                        onClick={handleProjectSelect}
                        type="button"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-md bg-brand-charcoal">
                          <Image
                            alt={item.title}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            fill
                            sizes="120px"
                            src={item.thumbnail}
                          />
                          <span className="absolute top-2 left-2 inline-flex size-6 items-center justify-center rounded-sm bg-brand-charcoal/80 text-xs font-bold text-white">
                            {index + 1}
                          </span>
                          {isActive && (
                            <span className="absolute right-2 bottom-2 inline-flex size-7 items-center justify-center rounded-full bg-brand-blue text-white">
                              <Play className="size-3.5 fill-current" />
                            </span>
                          )}
                        </div>

                        <div className="min-w-0 py-1">
                          <h4 className="line-clamp-2 text-sm font-bold text-brand-charcoal">
                            {item.title}
                          </h4>
                          <p className="mt-1 truncate text-xs text-brand-charcoal/60">
                            {item.client}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
