import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { CmsPageRenderer } from "@/components/templates/CmsPageRenderer";
import { getPublishedStructuredPage } from "@/lib/cms-api";
import { siteUrl } from "@/lib/json-ld";

type CmsCatchAllPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

type CmsSeo = {
  canonicalPath?: string;
  description?: string;
  focusKeyphrase?: string;
  keywords?: string[];
  metaDescription?: string;
  metaTitle?: string;
  noIndex?: boolean;
  ogDescription?: string;
  ogImage?: string;
  ogTitle?: string;
  secondaryKeywords?: string[];
  title?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterTitle?: string;
};

type CmsPageContent = Record<string, unknown> & {
  page?: {
    pageName?: string;
    seo?: CmsSeo;
  };
  seo?: CmsSeo;
};

const slugToPath = (segments: string[]) => `/${segments.join("/")}`;

const getSeo = (content: CmsPageContent, slug: string): Required<Pick<CmsSeo, "description" | "title">> &
  CmsSeo => {
  const seo = content.page?.seo ?? content.seo ?? {};
  const title = seo.metaTitle ?? seo.title ?? content.page?.pageName ?? "B2B Sales Arrow";
  const description =
    seo.metaDescription ??
    seo.description ??
    "B2B Sales Arrow content, services, insights, and company information.";

  return {
    ...seo,
    canonicalPath: seo.canonicalPath ?? slug,
    description,
    title,
  };
};

export const generateMetadata = async ({ params }: CmsCatchAllPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const path = slugToPath(slug);
  const page = await getPublishedStructuredPage<CmsPageContent>(path);

  if (!page) {
    return { title: "Page Not Found" };
  }

  const seo = getSeo(page.content, page.slug);
  const canonicalUrl = seo.canonicalPath?.startsWith("http")
    ? seo.canonicalPath
    : `${siteUrl}${seo.canonicalPath}`;
  const ogImage = seo.ogImage ?? seo.twitterImage ?? `${siteUrl}/og-default.png`;

  return {
    alternates: { canonical: canonicalUrl },
    description: seo.description,
    keywords: seo.keywords ?? seo.secondaryKeywords ?? (seo.focusKeyphrase ? [seo.focusKeyphrase] : undefined),
    openGraph: {
      description: seo.ogDescription ?? seo.description,
      images: [{ alt: seo.ogTitle ?? seo.title, height: 630, url: ogImage, width: 1200 }],
      locale: "en_US",
      siteName: "B2B Sales Arrow",
      title: seo.ogTitle ?? seo.title,
      type: "website",
      url: canonicalUrl,
    },
    robots: seo.noIndex ? { follow: false, index: false } : { follow: true, index: true },
    title: seo.title,
    twitter: {
      card: "summary_large_image",
      description: seo.twitterDescription ?? seo.description,
      images: [seo.twitterImage ?? ogImage],
      title: seo.twitterTitle ?? seo.title,
    },
  };
};

const Page = async ({ params }: CmsCatchAllPageProps) => {
  const { slug } = await params;
  const page = await getPublishedStructuredPage<CmsPageContent>(slugToPath(slug));

  if (!page) {
    notFound();
  }

  return <CmsPageRenderer content={page.content} />;
};

export default Page;
