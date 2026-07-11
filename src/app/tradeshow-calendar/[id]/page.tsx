import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { EventPage } from "@/components/templates/EventPage";
import { TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";
import {
  buildBreadcrumbJsonLd,
  buildEventJsonLd,
  buildImageObjectJsonLd,
  buildPageGraph,
  buildServiceJsonLd,
  buildWebPageJsonLd,
  JsonLd,
  siteUrl,
} from "@/lib";

type EventDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const SUPERSEDED_BY: Record<string, string> = {
  "gitex-global": "gitex-global-2026",
  "money-20-20-amsterdam": "money2020-europe-2026",
};

const findEventById = (id: string) => TRADE_SHOW_CALENDAR_EVENTS.find((event) => event.id === id);

export const generateStaticParams = () =>
  TRADE_SHOW_CALENDAR_EVENTS.map((event) => ({ id: event.id }));

export const generateMetadata = async ({ params }: EventDetailPageProps): Promise<Metadata> => {
  const { id } = await params;
  const event = findEventById(id);

  if (!event) {
    return { title: "Event Not Found" };
  }

  const canonicalId = SUPERSEDED_BY[id] ?? id;
  const ogTitle = event.seoTitle ?? event.title;
  const description = event.seoDescription ?? event.summary;

  return {
    alternates: {
      canonical: `/tradeshow-calendar/${canonicalId}`,
    },
    ...(SUPERSEDED_BY[id] && { robots: { follow: true, index: false } }),
    description,
    ...(event.seoKeywords && { keywords: event.seoKeywords }),
    openGraph: {
      description,
      images: event.image
        ? [{ alt: event.title, height: 630, url: event.image, width: 1200 }]
        : undefined,
      locale: "en_US",
      title: ogTitle,
      type: "website",
    },
    title: event.seoTitle ? { absolute: event.seoTitle } : event.title,
    twitter: {
      card: "summary_large_image",
      description,
      images: event.image
        ? [{ alt: event.title, height: 630, url: event.image, width: 1200 }]
        : undefined,
      title: ogTitle,
    },
  };
};

const Page = async ({ params }: EventDetailPageProps) => {
  const { id } = await params;
  const event = findEventById(id);

  if (!event) notFound();

  const eventUrl = `${siteUrl}/tradeshow-calendar/${id}`;

  return (
    <>
      <JsonLd
        data={buildPageGraph([
          buildWebPageJsonLd({
            breadcrumbId: `${eventUrl}/#breadcrumb`,
            description: event.summary,
            ...(event.image && { image: event.image }),
            name: event.title,
            url: eventUrl,
          }),
          buildEventJsonLd({
            city: event.city,
            country: event.country,
            description: event.summary,
            endDate: event.endDate,
            ...(event.image && { image: event.image }),
            name: event.title,
            ...(event.organizer && { organizer: event.organizer }),
            startDate: event.startDate,
            url: eventUrl,
            venue: event.venue,
          }),
          buildBreadcrumbJsonLd(
            [
              { name: "Home", url: siteUrl },
              {
                name: "Tradeshow Calendar",
                url: `${siteUrl}/tradeshow-calendar`,
              },
              { name: event.title, url: eventUrl },
            ],
            eventUrl
          ),
          buildServiceJsonLd({
            description: `Trade show booth design, build, and on-site delivery for exhibitors attending ${event.title}.`,
            name: "Trade Show Booth Solutions",
            serviceType: "Trade Show Booth Solutions",
            url: "/tradeshow-booth-solutions",
          }),
          ...(event.image
            ? [buildImageObjectJsonLd({ caption: `${event.title} — B2B Sales Arrow`, url: event.image })]
            : []),
        ])}
      />
      <EventPage event={event} />
    </>
  );
};

export default Page;
