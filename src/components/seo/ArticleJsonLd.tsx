import { JsonLd, siteUrl } from "@/lib/json-ld";

export interface ArticleJsonLdProps {
  articleSection?: string;
  authorName?: string;
  dateModified?: string;
  datePublished: string;
  description: string;
  headline: string;
  image: string;
  keywords?: string[];
  publisherLogo?: string;
  publisherName?: string;
  tableOfContents?: string;
  url: string;
  wordCount?: number;
}

const buildBlogPostingJsonLd = ({
  articleSection,
  authorName = "B2B Sales Arrow",
  dateModified,
  datePublished,
  description,
  headline,
  image,
  keywords,
  publisherLogo = `${siteUrl}/media/logo/logo-512.png`,
  publisherName = "B2B Sales Arrow",
  tableOfContents,
  url,
  wordCount,
}: ArticleJsonLdProps) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  ...(articleSection && {
    about: { "@type": "Thing", name: articleSection },
    articleSection,
  }),
  author: {
    "@id": `${siteUrl}/#organization`,
    "@type": "Organization",
    name: authorName,
    url: siteUrl,
  },
  dateModified: dateModified || datePublished,
  datePublished,
  description,
  headline,
  image,
  inLanguage: "en-US",
  isAccessibleForFree: true,
  isPartOf: {
    "@id": `${siteUrl}/blogs/#collection`,
    "@type": "CollectionPage",
  },
  ...(keywords?.length && { keywords: keywords.join(", ") }),
  mainEntityOfPage: {
    "@id": `${url}/#webpage`,
    "@type": "WebPage",
  },
  publisher: {
    "@id": `${siteUrl}/#organization`,
    "@type": "Organization",
    logo: {
      "@type": "ImageObject",
      url: publisherLogo,
    },
    name: publisherName,
  },
  ...(tableOfContents && { tableOfContents }),
  url,
  ...(wordCount && { wordCount }),
});

export const ArticleJsonLd = (props: ArticleJsonLdProps) => (
  <JsonLd data={buildBlogPostingJsonLd(props)} />
);
