import { isValidElement, type ReactNode } from "react";

const BASE = "https://b2bsalesarrow.com";

const ORGANIZATION = {
  "@type": "Organization" as const,
  description:
    "Global capability. Strategic growth partner for B2B enterprises specializing in event solutions and digital marketing.",
  logo: `${BASE}/logo.png`,
  name: "B2B Sales Arrow",
  sameAs: ["https://www.linkedin.com/company/b2b-sales-arrow/"],
  url: BASE,
};

export interface ServiceSchemaInput {
  description: string;
  name: string;
  url: string;
}

export const buildBreadcrumbJsonLd = (crumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(({ name, url }, index) => ({
      "@type": "ListItem",
      item: url,
      name,
      position: index + 1,
    })),
  };
};

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

export const buildOrganizationJsonLd = () => {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION,
  };
};

export const buildServiceJsonLd = ({ description, name, url }: ServiceSchemaInput) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    description,
    name,
    provider: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
    },
    url: `${BASE}${url}`,
  };
};
