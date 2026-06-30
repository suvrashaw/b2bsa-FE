import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { CaseStudyPage } from "@/components/templates/CaseStudyPage";
import {
  CASE_STUDIES_PAGE_STUDIES,
  CASE_STUDY_DETAILS,
  type CaseStudyDetail,
  type CaseStudyEntry,
} from "@/content/case-studies";
import { buildBreadcrumbJsonLd, buildPageGraph, buildWebPageJsonLd, JsonLd, siteUrl } from "@/lib";
import { getStructuredPageContent } from "@/lib/cms-api";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const CASE_STUDIES_FALLBACK_CONTENT = {
  caseStudies: CASE_STUDIES_PAGE_STUDIES,
};

const toCaseStudyDetail = (study: CaseStudyEntry): CaseStudyDetail => ({
  challenges: study.challenge,
  client: study.client,
  event: study.event,
  eventDescription: study.title,
  image: study.image,
  location: study.location,
  outcome: study.outcome,
  outcomeStats: study.metric ? [`${study.metric} ${study.metricLabel}`.trim()] : [],
  requirements: study.requirements,
  services: study.services,
  slug: study.id,
  solution: study.solution,
  title: study.title,
});

const getCaseStudyDetails = async () => {
  const content = await getStructuredPageContent("/case-studies", CASE_STUDIES_FALLBACK_CONTENT);
  const cmsDetails = content.caseStudies.map(toCaseStudyDetail);
  const detailMap = new Map<string, CaseStudyDetail>();

  for (const study of CASE_STUDY_DETAILS) {
    detailMap.set(study.slug, study);
  }

  for (const study of cmsDetails) {
    detailMap.set(study.slug, {
      ...detailMap.get(study.slug),
      ...study,
    });
  }

  return [...detailMap.values()];
};

const findStudyBySlug = (studies: CaseStudyDetail[], slug: string) =>
  studies.find((study) => study.slug === slug);

export const generateStaticParams = () => CASE_STUDY_DETAILS.map((study) => ({ slug: study.slug }));

export const generateMetadata = async ({ params }: CaseStudyPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const studies = await getCaseStudyDetails();
  const study = findStudyBySlug(studies, slug);

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
      images: [{ alt: study.title, height: 630, url: study.image, width: 1200 }],
      locale: "en_US",
      title: study.title,
      type: "article",
    },
    title: study.title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [{ alt: study.title, height: 630, url: study.image, width: 1200 }],
      title: study.title,
    },
  };
};

const Page = async ({ params }: CaseStudyPageProps) => {
  const { slug } = await params;
  const studies = await getCaseStudyDetails();
  const study = findStudyBySlug(studies, slug);

  if (!study) notFound();

  const studyUrl = `${siteUrl}/case-studies/${study.slug}`;
  const description = study.outcome.split(".", 1)[0] + ".";

  return (
    <>
      <JsonLd
        data={buildPageGraph([
          buildWebPageJsonLd({
            breadcrumbId: `${studyUrl}/#breadcrumb`,
            description,
            image: study.image,
            name: study.title,
            url: studyUrl,
          }),
          buildBreadcrumbJsonLd(
            [
              { name: "Home", url: siteUrl },
              { name: "Case Studies", url: `${siteUrl}/case-studies` },
              { name: study.title, url: studyUrl },
            ],
            studyUrl
          ),
        ])}
      />
      <CaseStudyPage study={study} />
    </>
  );
};

export default Page;
