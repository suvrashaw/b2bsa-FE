import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { EventPage } from "@/components/templates/EventPage";
import { TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";
import { buildBreadcrumbJsonLd, JsonLd, siteUrl } from "@/lib";

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

  return {
    alternates: {
      canonical: `/tradeshow-calendar/${canonicalId}`,
    },
    ...(SUPERSEDED_BY[id] && { robots: { follow: true, index: false } }),
    description: event.summary,
    openGraph: {
      description: event.summary,
      images: event.image
        ? [{ alt: event.name, height: 630, url: event.image, width: 1200 }]
        : undefined,
      title: event.name,
      type: "website",
    },
    title: event.name,
    twitter: {
      card: "summary_large_image",
      description: event.summary,
      images: event.image
        ? [{ alt: event.name, height: 630, url: event.image, width: 1200 }]
        : undefined,
      title: event.name,
    },
  };
};

const Page = async ({ params }: EventDetailPageProps) => {
  const { id } = await params;
  const event = findEventById(id);

  if (!event) notFound();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", url: siteUrl },
          { name: "Tradeshow Calendar", url: `${siteUrl}/tradeshow-calendar` },
          { name: event.name, url: `${siteUrl}/tradeshow-calendar/${id}` },
        ])}
      />
      <EventPage event={event} />
    </>
  );
};

export default Page;
