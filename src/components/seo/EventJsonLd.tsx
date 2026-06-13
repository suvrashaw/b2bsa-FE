import { JsonLd } from "@/lib/json-ld";

export interface EventJsonLdProps {
  description: string;
  endDate: string;
  image?: string;
  locationCity: string;
  locationCountry: string;
  locationName: string;
  name: string;
  startDate: string;
  url: string;
}

const buildEventData = ({
  description,
  endDate,
  image,
  locationCity,
  locationCountry,
  locationName,
  name,
  startDate,
  url,
}: EventJsonLdProps) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  description,
  endDate,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  image,
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: locationCountry,
      addressLocality: locationCity,
    },
    name: locationName,
  },
  name,
  startDate,
  url,
});

export const EventJsonLd = (props: EventJsonLdProps) => <JsonLd data={buildEventData(props)} />;
