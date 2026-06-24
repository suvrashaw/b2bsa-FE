import { JsonLd, siteUrl } from "@/lib/json-ld";

export interface ArticleJsonLdProps {
  authorName?: string;
  dateModified?: string;
  datePublished: string;
  description: string;
  headline: string;
  image: string;
  publisherLogo?: string;
  publisherName?: string;
  url: string;
}

const buildArticleData = ({
  authorName = "B2B Sales Arrow",
  dateModified,
  datePublished,
  description,
  headline,
  image,
  publisherLogo = `${siteUrl}/media/logo/logo-600.png`,
  publisherName = "B2B Sales Arrow",
  url,
}: ArticleJsonLdProps) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  author: {
    "@type": "Organization",
    name: authorName,
    url: siteUrl,
  },
  dateModified: dateModified || datePublished,
  datePublished,
  description,
  headline,
  image,
  mainEntityOfPage: {
    "@id": url,
    "@type": "WebPage",
  },
  publisher: {
    "@type": "Organization",
    logo: {
      "@type": "ImageObject",
      url: publisherLogo,
    },
    name: publisherName,
  },
  url,
});

export const ArticleJsonLd = (props: ArticleJsonLdProps) => (
  <JsonLd data={buildArticleData(props)} />
);
