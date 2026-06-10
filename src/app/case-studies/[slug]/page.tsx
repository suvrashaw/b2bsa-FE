import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { CaseStudyPage } from "@/components/templates/CaseStudyPage";
import { CASE_STUDY_DETAILS } from "@/content/IndividualCaseStudy";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const findStudyBySlug = (slug: string) => CASE_STUDY_DETAILS.find((study) => study.slug === slug);

export const generateStaticParams = () => CASE_STUDY_DETAILS.map((study) => ({ slug: study.slug }));

export const generateMetadata = async ({ params }: CaseStudyPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const study = findStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  const description = study.outcome.split(".", 1)[0] + ".";

  return {
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    description,
    openGraph: {
      description,
      images: [{ alt: study.title, url: study.image }],
      title: study.title,
      type: "article",
    },
    title: study.title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [study.image],
      title: study.title,
    },
  };
};

const Page = async ({ params }: CaseStudyPageProps) => {
  const { slug } = await params;
  const study = findStudyBySlug(slug);

  if (!study) notFound();

  return <CaseStudyPage study={study} />;
};

export default Page;
