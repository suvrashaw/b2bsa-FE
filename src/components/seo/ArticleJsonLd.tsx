import { JsonLd } from "./JsonLd";

export interface ArticleJsonLdProps {
  authorName?: string;
  dateModified?: string;
  datePublished: string;
  description: string;
  headline: string;
  images: string[];
  publisherLogo?: string;
  publisherName?: string;
  url: string;
}

export const ArticleJsonLd = ({
  authorName = "B2B Sales Arrow",
  dateModified,
  datePublished,
  description,
  headline,
  images,
  publisherLogo = "https://b2bsalesarrow.com/icon.png",
  publisherName = "B2B Sales Arrow",
  url,
}: ArticleJsonLdProps) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://b2bsalesarrow.com",
    },
    dateModified: dateModified || datePublished,
    datePublished,
    description,
    headline,
    image: images,
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
  };

  return <JsonLd data={data} />;
};
