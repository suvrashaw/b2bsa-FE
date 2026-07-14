import { isValidElement, type ReactNode } from "react";

import { siteUrl as BASE } from "@/lib/json-ld";

const ORGANIZATION = {
  "@id": `${BASE}/#organization`,
  "@type": "Organization" as const,
  description:
    "Trusted across 30+ countries for B2B event solutions, trade show booth design, and media production that builds real pipelines. Get in touch today.",
  email: "info@b2bsalesarrow.com",
  foundingDate: "2012",
  logo: `${BASE}/media/logo/logo.avif`,
  name: "B2B Sales Arrow",
  sameAs: [
    "https://www.facebook.com/b2bsalesarrow",
    "https://www.linkedin.com/company/b2b-sales-arrow-llc/",
    "https://www.instagram.com/b2b_sales_arrow/",
    "https://www.youtube.com/@b2bsalesarrow167",
    "https://x.com/B2B_SalesArrow",
  ],
  telephone: "+91-70205-58545",
  url: BASE,
};

// Verbatim knowsAbout list from the schema spec — kept as a fixed array
// rather than derived from marketingPages so the exact wording and order
// match the source document.
const KNOWS_ABOUT = [
  "Global Event Solutions",
  "Event Experience Creation",
  "Event Branding Solutions",
  "Corporate Event Solutions",
  "Corporate Networking Events",
  "Trade Show Booth Solutions",
  "Trade Show Booth Builder",
  "Trade Show Booth Design",
  "Trade Show Booth Rental",
  "Booth Hostess Services",
  "Booth Logistics Services",
  "Modular Booth Solutions",
  "Sales Qualified Lead Generation",
  "Event Lead Generation",
  "Market Research",
  "Data Augmentation Services",
  "Data Validation Services",
  "Media Production",
  "Event Video Production",
  "Corporate Video Production",
  "Event Experience Video Production",
  "Event Live Streaming Services",
  "Event Physical Video Shoot",
  "Virtual Video Production",
  "Digital Marketing",
  "SEO Services",
  "Performance Marketing",
  "Social Media Marketing",
  "Human Powered Market Intelligence",
];

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
  pageUrl?: string
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

  if (typeof node === "string" || typeof node === "number" || typeof node === "bigint") {
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

export const buildFaqJsonLd = (faqs: Array<{ answer: ReactNode; question: string }>) => {
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

// Note: does not use Offer/makesOffer — the schema spec explicitly excludes
// the Offer type site-wide, so services are linked via knowsAbout instead.
export const buildOrganizationJsonLd = (knowsAbout: string[] = KNOWS_ABOUT) => {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION,
    address: ADDRESSES,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@b2bsalesarrow.com",
        telephone: "+91-70205-58545",
      },
    ],
    ...(knowsAbout.length > 0 && { knowsAbout }),
  };
};

export const buildHowToJsonLd = (
  title: string,
  steps: Array<{ description: string; title: string }>
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

export const buildLinkedItemListJsonLd = (items: Array<{ name: string; url: string }>) => ({
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

export const buildServiceJsonLd = ({ description, name, serviceType, url }: ServiceSchemaInput) => {
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

const LOCAL_BUSINESSES = [
  { address: ADDRESSES[0], name: "India" },
  { address: ADDRESSES[1], name: "USA" },
  { address: ADDRESSES[2], name: "United Kingdom" },
  { address: ADDRESSES[3], name: "Germany" },
];

// One LocalBusiness entry per office, each linked to the shared Organization
// via parentOrganization. Data-driven off ADDRESSES so a new office only
// requires adding one entry to LOCAL_BUSINESSES, not a new page or component.
export const buildLocalBusinessListJsonLd = () =>
  LOCAL_BUSINESSES.map(({ address, name }) => ({
    "@context": "https://schema.org",
    "@id": `${BASE}/#local-business-${address.addressCountry.toLowerCase()}`,
    "@type": "LocalBusiness",
    address,
    email: "info@b2bsalesarrow.com",
    name: `${ORGANIZATION.name} – ${name}`,
    parentOrganization: { "@id": ORGANIZATION["@id"] },
    url: BASE,
  }));

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

export const buildImageObjectJsonLd = ({
  caption,
  height = 630,
  url,
  width = 1200,
}: {
  caption?: string;
  height?: number;
  url: string;
  width?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  height,
  ...(caption && { caption }),
  url: url.startsWith("http") ? url : `${BASE}${url}`,
  width,
});

export const buildWebPageJsonLd = ({
  breadcrumbId,
  dateModified,
  datePublished,
  description,
  image,
  mainEntityId,
  name,
  // Only the Trade Show Calendar hub page should set this — the schema spec
  // excludes SearchAction everywhere else.
  searchAction,
  url,
}: {
  breadcrumbId?: string;
  dateModified?: string;
  datePublished?: string;
  description: string;
  image?: string;
  mainEntityId?: string;
  name: string;
  searchAction?: { urlTemplate: string };
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
  ...(searchAction && {
    potentialAction: {
      "@type": "SearchAction",
      "query-input": "required name=search_term_string",
      target: {
        "@type": "EntryPoint",
        urlTemplate: searchAction.urlTemplate,
      },
    },
  }),
  url,
});

export const buildEventJsonLd = ({
  city,
  country,
  description,
  endDate,
  image,
  name,
  organizer,
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
  organizer?: string;
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
  ...(organizer && {
    organizer: {
      "@type": "Organization",
      name: organizer,
    },
  }),
  startDate,
  url,
});

export const buildPageGraph = (
  schemas: Array<{ "@context"?: string } & Record<string, unknown>>
) => ({
  "@context": "https://schema.org",
  "@graph": schemas.map(({ "@context": _ctx, ...rest }) => rest),
});

// No SearchAction here — the schema spec restricts SearchAction to the Trade
// Show Calendar page only (see buildWebPageJsonLd's `searchAction` param).
export const buildWebsiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@id": `${BASE}/#website`,
  "@type": "WebSite",
  name: ORGANIZATION.name,
  url: BASE,
});
