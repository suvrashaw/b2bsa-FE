import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { EventPage } from "@/components/templates/EventPage";
import { TRADE_SHOW_CALENDAR_EVENTS } from "@/content/tradeshow-calendar";

type EventDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const findEventById = (id: string) =>
  TRADE_SHOW_CALENDAR_EVENTS.find((event) => event.id === id);

export const generateStaticParams = () =>
  TRADE_SHOW_CALENDAR_EVENTS.map((event) => ({ id: event.id }));

export const generateMetadata = async ({
  params,
}: EventDetailPageProps): Promise<Metadata> => {
  const { id } = await params;
  const event = findEventById(id);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    alternates: {
      canonical: `/tradeshow-calendar/${event.id}`,
    },
    description: event.summary,
    openGraph: {
      description: event.summary,
      images: event.image
        ? [{ alt: event.name, height: 630, url: event.image, width: 1200 }]
        : undefined,
      title: event.name,
      type: "article",
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

  return <EventPage event={event} />;
};

export default Page;
