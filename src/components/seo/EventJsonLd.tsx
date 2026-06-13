import { useMemo } from "react";

import { JsonLd } from "./JsonLd";

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

export const EventJsonLd = ({
  description,
  endDate,
  image,
  locationCity,
  locationCountry,
  locationName,
  name,
  startDate,
  url,
}: EventJsonLdProps) => {
  const data = useMemo(() => ({
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
  }), [description, endDate, image, locationCity, locationCountry, locationName, name, startDate, url]);

  return <JsonLd data={data} />;
};
