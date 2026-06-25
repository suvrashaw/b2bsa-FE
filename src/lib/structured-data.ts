import { isValidElement, type ReactNode } from "react";

import { siteUrl as BASE } from "@/lib/json-ld";

const ORGANIZATION = {
  "@id": `${BASE}/#organization`,
  "@type": "Organization" as const,
  description:
    "Global capability. Strategic growth partner for B2B enterprises specializing in event solutions and digital marketing.",
  logo: `${BASE}/media/logo/logo-primary.avif`,
  name: "B2B Sales Arrow",
  sameAs: [
    "https://www.linkedin.com/company/b2b-sales-arrow-llc/",
    "https://www.facebook.com/b2bsalesarrow",
    "https://www.instagram.com/b2b_sales_arrow/",
    "https://www.youtube.com/@b2bsalesarrow167",
    "https://x.com/B2B_SalesArrow",
  ],
  url: BASE,
};

const ADDRESSES = [
  {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Kota",
    addressRegion: "Rajasthan",
    postalCode: "324005",
    streetAddress: "10 A 5 Parijat Colony, Mahaveer Nagar 3",
  },
  {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressLocality: "Lewes",
    addressRegion: "DE",
    postalCode: "19958",
    streetAddress: "16192 Coastal Highway",
  },
  {
    "@type": "PostalAddress",
    addressCountry: "GB",
    addressLocality: "London",
    postalCode: "WC2H 9JQ",
    streetAddress: "71-75 Shelton Street, Covent Garden",
  },
  {
    "@type": "PostalAddress",
    addressCountry: "DE",
    addressLocality: "Munich",
    postalCode: "80335",
    streetAddress: "Karlsplatz 3",
  },
];

export interface ServiceSchemaInput {
  description: string;
  name: string;
  serviceType?: string;
  url: string;
}

export const buildBreadcrumbJsonLd = (
  crumbs: Array<{ name: string; url: string }>,
  pageUrl?: string,
) => ({
  "@context": "https://schema.org",
  ...(pageUrl && { "@id": `${pageUrl}/#breadcrumb` }),
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map(({ name, url }, index) => ({
    "@type": "ListItem",
    item: url,
    name,
    position: index + 1,
  })),
});

const toJsonLdText = (node: ReactNode): string => {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (
    typeof node === "string" ||
    typeof node === "number" ||
    typeof node === "bigint"
  ) {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map((child) => toJsonLdText(child)).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return toJsonLdText(node.props.children);
  }

  return "";
};

export const buildFaqJsonLd = (
  faqs: Array<{ answer: ReactNode; question: string }>,
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ answer, question }) => ({
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: toJsonLdText(answer),
      },
      name: question,
    })),
  };
};

export const buildOrganizationJsonLd = (
  serviceOffers?: Array<{ name: string; url: string }>,
  knowsAbout?: string[],
) => {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION,
    address: ADDRESSES,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@b2bsalesarrow.com",
      },
    ],
    ...(knowsAbout?.length && { knowsAbout }),
    ...(serviceOffers?.length && {
      makesOffer: serviceOffers.map(({ name, url }) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          url,
        },
      })),
    }),
  };
};

export const buildHowToJsonLd = (
  title: string,
  steps: Array<{ description: string; title: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    name: step.title,
    position: index + 1,
    text: step.description,
  })),
});

export const buildItemListJsonLd = (items: Array<{ title: string }>) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    name: item.title,
    position: index + 1,
  })),
});

export const buildLinkedItemListJsonLd = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map(({ name, url }, index) => ({
    "@type": "ListItem",
    item: {
      "@id": `${url}/#webpage`,
      "@type": "WebPage",
      name,
      url,
    },
    position: index + 1,
  })),
});

export const buildServiceJsonLd = ({
  description,
  name,
  serviceType,
  url,
}: ServiceSchemaInput) => {
  return {
    "@context": "https://schema.org",
    "@id": `${BASE}${url}/#service`,
    "@type": "Service",
    areaServed: "Worldwide",
    description,
    name,
    provider: { "@id": ORGANIZATION["@id"] },
    ...(serviceType && { serviceType }),
    url: `${BASE}${url}`,
  };
};

export const buildLocalBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@id": `${BASE}/#local-business`,
  "@type": "ProfessionalService",
  address: ADDRESSES,
  areaServed: ["Kota", "Lewes", "London", "Munich"],
  description: ORGANIZATION.description,
  email: "info@b2bsalesarrow.com",
  logo: ORGANIZATION.logo,
  name: ORGANIZATION.name,
  sameAs: ORGANIZATION.sameAs,
  url: BASE,
});

export const buildAboutPageJsonLd = (description: string) => ({
  "@context": "https://schema.org",
  "@id": `${BASE}/about-us/#page`,
  "@type": "AboutPage",
  description,
  inLanguage: "en-US",
  isPartOf: { "@id": `${BASE}/#website` },
  name: `About ${ORGANIZATION.name}`,
  publisher: { "@id": ORGANIZATION["@id"] },
  url: `${BASE}/about-us`,
});

export const buildContactPageJsonLd = (description: string) => ({
  "@context": "https://schema.org",
  "@id": `${BASE}/contact-us/#page`,
  "@type": "ContactPage",
  description,
  inLanguage: "en-US",
  isPartOf: { "@id": `${BASE}/#website` },
  name: `Contact ${ORGANIZATION.name}`,
  publisher: { "@id": ORGANIZATION["@id"] },
  url: `${BASE}/contact-us`,
});

export const buildCollectionPageJsonLd = ({
  description,
  name,
  url,
}: {
  description: string;
  name: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@id": `${BASE}${url}/#collection`,
  "@type": "CollectionPage",
  description,
  inLanguage: "en-US",
  isPartOf: { "@id": `${BASE}/#website` },
  name,
  publisher: { "@id": ORGANIZATION["@id"] },
  url: `${BASE}${url}`,
});

export const buildWebPageJsonLd = ({
  breadcrumbId,
  dateModified,
  datePublished,
  description,
  image,
  mainEntityId,
  name,
  url,
}: {
  breadcrumbId?: string;
  dateModified?: string;
  datePublished?: string;
  description: string;
  image?: string;
  mainEntityId?: string;
  name: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@id": `${url}/#webpage`,
  "@type": "WebPage",
  author: { "@id": `${BASE}/#organization` },
  ...(breadcrumbId && { breadcrumb: { "@id": breadcrumbId } }),
  ...(dateModified && { dateModified }),
  ...(datePublished && { datePublished }),
  description,
  inLanguage: "en-US",
  isPartOf: { "@id": `${BASE}/#website` },
  ...(mainEntityId && { mainEntity: { "@id": mainEntityId } }),
  name,
  ...(image && { primaryImageOfPage: { "@type": "ImageObject", url: image } }),
  url,
});

export const buildEventJsonLd = ({
  city,
  country,
  description,
  endDate,
  image,
  name,
  startDate,
  url,
  venue,
}: {
  city: string;
  country: string;
  description: string;
  endDate: string;
  image?: string;
  name: string;
  startDate: string;
  url: string;
  venue: string;
}) => ({
  "@context": "https://schema.org",
  "@id": `${url}/#event`,
  "@type": "Event",
  description,
  endDate,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  ...(image && { image }),
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: country,
      addressLocality: city,
    },
    name: venue,
  },
  name,
  startDate,
  url,
});

export const buildPageGraph = (
  schemas: Array<{ "@context"?: string } & Record<string, unknown>>,
) => ({
  "@context": "https://schema.org",
  "@graph": schemas.map(({ "@context": _ctx, ...rest }) => rest),
});

export const buildWebsiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@id": `${BASE}/#website`,
  "@type": "WebSite",
  name: ORGANIZATION.name,
  potentialAction: {
    "@type": "SearchAction",
    "query-input": "required name=search_term_string",
    target: {
      "@type": "EntryPoint",
      urlTemplate: BASE + "/tradeshow-calendar?q={search_term_string}",
    },
  },
  url: BASE,
});
