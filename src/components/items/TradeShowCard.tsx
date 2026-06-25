import { Building2, CalendarDays, MapPin, Users } from "lucide-react";
import Link from "next/link";

import type { CalendarTradeShow } from "@/content/tradeshow-calendar";

import { Button } from "@/components/ui/Button";

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
  year: "numeric",
});

const NUMBER_FORMAT = new Intl.NumberFormat("en-US");

const toDate = (value: string) => new Date(`${value}T00:00:00.000Z`);

const formatDateRange = (startDate: string, endDate: string) => {
  const start = toDate(startDate);
  const end = toDate(endDate);

  if (startDate === endDate) {
    return DATE_FORMAT.format(start);
  }

  return `${DATE_FORMAT.format(start)} - ${DATE_FORMAT.format(end)}`;
};

export const formatLocation = ({ city, country, region }: CalendarTradeShow) =>
  [city, region, country].filter(Boolean).join(", ");

const formatCompactLocation = ({ city, country, region }: CalendarTradeShow) =>
  [city, region].filter(Boolean).join(", ") || country;

const EventMeta = ({ icon: Icon, label }: { icon: typeof CalendarDays; label: string }) => (
  <div className="flex items-start gap-2 text-sm font-medium text-brand-charcoal/75">
    <Icon className="mt-0.5 size-4 shrink-0 text-brand-blue" />
    <span>{label}</span>
  </div>
);

export const TradeShowCard = ({ show }: { show: CalendarTradeShow }) => (
  <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm shadow-gray-200/50 transition hover:border-brand-blue/30 hover:shadow-md md:rounded-lg">
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-bold tracking-widest text-brand-blue uppercase">
          {show.industry}
        </p>
        <h3 className="type-h3 mt-2 text-brand-charcoal">{show.name}</h3>
      </div>
    </div>

    <p className="mb-5 flex-1 text-sm leading-relaxed text-brand-charcoal/70">{show.summary}</p>

    <div className="space-y-3 border-y border-gray-100 py-4">
      <EventMeta icon={CalendarDays} label={formatDateRange(show.startDate, show.endDate)} />
      <EventMeta icon={MapPin} label={`${show.venue}, ${formatLocation(show)}`} />
      <EventMeta icon={Users} label={`${NUMBER_FORMAT.format(show.attendeeCount)} attendees`} />
      <EventMeta
        icon={Building2}
        label={`${NUMBER_FORMAT.format(show.exhibitorCount)} exhibitors`}
      />
    </div>

    <div className="mt-5 flex w-full">
      <Button asChild className="w-full" size="sm" variant="primary">
        <Link href="/contact-us">Let&apos;s Talk</Link>
      </Button>
    </div>
  </article>
);

export const TradeShowListItem = ({ show }: { show: CalendarTradeShow }) => (
  <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm shadow-gray-200/50 transition hover:border-brand-blue/30 hover:shadow-md">
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr_0.8fr_auto] lg:items-center">
      <div>
        <p className="text-xs font-bold tracking-widest text-brand-blue uppercase">
          {show.industry}
        </p>
        <h3 className="type-h3 mt-2 text-brand-charcoal">{show.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/70">{show.summary}</p>
      </div>
      <div className="space-y-2">
        <EventMeta icon={CalendarDays} label={formatDateRange(show.startDate, show.endDate)} />
        <EventMeta icon={MapPin} label={`${show.venue}, ${formatCompactLocation(show)}`} />
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
        <div>
          <p className="text-xs font-bold tracking-widest text-brand-charcoal/50 uppercase">
            Attendees
          </p>
          <p className="font-bold text-brand-charcoal">
            {NUMBER_FORMAT.format(show.attendeeCount)}
          </p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest text-brand-charcoal/50 uppercase">
            Exhibitors
          </p>
          <p className="font-bold text-brand-charcoal">
            {NUMBER_FORMAT.format(show.exhibitorCount)}
          </p>
        </div>
      </div>
      <div className="mt-2 flex w-full lg:mt-0 lg:justify-end">
        <Button asChild className="w-full lg:w-auto" size="sm" variant="primary">
          <Link href="/contact-us">Let&apos;s Talk</Link>
        </Button>
      </div>
    </div>
  </article>
);
