import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

type CmsRecord = Record<string, unknown>;

interface CmsPageRendererProps {
  content: CmsRecord;
}

const HIDDEN_SECTION_KEYS = new Set(["page", "seo", "metadata"]);
const TEXT_KEYS = ["title", "heading", "subtitle", "subheading", "description", "body", "text"];
const ARRAY_KEYS = ["items", "cards", "services", "events", "faqs", "testimonials", "logos"];

const isRecord = (value: unknown): value is CmsRecord =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);

const humanize = (value: string) =>
  value
    .replaceAll("-", " ")
    .replaceAll(/([a-z])([A-Z])/g, "$1 $2")
    .replaceAll(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const getString = (source: CmsRecord, keys: string[]) => {
  for (const key of keys) {
    if (typeof source[key] === "string" && source[key]) {
      return source[key];
    }
  }

  return undefined;
};

const getImage = (source: CmsRecord) => {
  const image = source.image ?? source.backgroundImage ?? source.heroImage;

  if (typeof image === "string") {
    return { alt: getString(source, ["alt", "title", "heading"]) ?? "", src: image };
  }

  if (isRecord(image) && typeof image.src === "string") {
    return {
      alt: typeof image.alt === "string" ? image.alt : getString(source, ["title", "heading"]) ?? "",
      src: image.src,
    };
  }

  return null;
};

const getButtons = (source: CmsRecord) => {
  const buttons = source.buttons ?? source.ctas;
  if (Array.isArray(buttons)) {
    return buttons.filter(isRecord);
  }

  const primaryLabel = getString(source, ["primaryCtaLabel", "ctaLabel", "buttonText"]);
  const primaryHref = getString(source, ["primaryCtaHref", "ctaHref", "buttonHref"]);

  return primaryLabel && primaryHref ? [{ href: primaryHref, label: primaryLabel }] : [];
};

const isVisible = (source: CmsRecord) =>
  source.visible !== false && source.isVisible !== false && source.active !== false && source.status !== "inactive";

const getSectionArray = (content: CmsRecord) => {
  if (Array.isArray(content.sections)) {
    return content.sections.filter(isRecord);
  }

  return Object.entries(content)
    .filter(([key, value]) => !HIDDEN_SECTION_KEYS.has(key) && isRecord(value))
    .map(([key, value]) => ({ key, label: humanize(key), ...(value as CmsRecord) }));
};

const sortSections = (sections: CmsRecord[]) =>
  sections
    .filter(isVisible)
    .toSorted((left, right) => {
      const leftOrder = Number(left.order ?? left.displayOrder ?? 0);
      const rightOrder = Number(right.order ?? right.displayOrder ?? 0);
      return leftOrder - rightOrder;
    });

const renderScalar = (value: unknown, key: string) => {
  if (value === undefined || value === null || value === "" || typeof value === "boolean") {
    return null;
  }

  if (typeof value === "string" || typeof value === "number") {
    return (
      <p className="text-base leading-relaxed text-brand-charcoal/70" key={key}>
        {value}
      </p>
    );
  }

  return null;
};

const renderItem = (item: unknown, index: number) => {
  if (!isRecord(item)) {
    return renderScalar(item, String(index));
  }

  const image = getImage(item);
  const title = getString(item, ["title", "name", "question", "author"]);
  const description = getString(item, ["description", "answer", "summary", "quote", "body", "text"]);
  const href = getString(item, ["href", "url", "link"]);

  const content = (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      {image && (
        <div className="relative aspect-video w-full bg-brand-gray">
          <Image alt={image.alt} className="object-cover" fill sizes="(max-width: 768px) 100vw, 33vw" src={image.src} />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {title && <h3 className="font-heading text-xl font-bold text-brand-charcoal">{title}</h3>}
        {description && <p className="text-sm leading-relaxed text-brand-charcoal/70">{description}</p>}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link className="block h-full" href={href} key={String(item.id ?? title ?? index)}>
        {content}
      </Link>
    );
  }

  return <div key={String(item.id ?? title ?? index)}>{content}</div>;
};

const renderSection = (section: CmsRecord, index: number) => {
  const image = getImage(section);
  const title = getString(section, ["title", "heading", "label"]) ?? (typeof section.key === "string" ? humanize(section.key) : undefined);
  const eyebrow = getString(section, ["eyebrow", "kicker"]);
  const description = getString(section, ["description", "subtitle", "subheading", "body", "text"]);
  const buttons = getButtons(section);
  const arrayKey = ARRAY_KEYS.find((key) => Array.isArray(section[key]));
  const items = arrayKey ? (section[arrayKey] as unknown[]).filter((item) => item !== null) : [];

  const scalarFields = Object.entries(section).filter(
    ([key, value]) =>
      ![
        "active",
        "backgroundImage",
        "body",
        "buttonHref",
        "buttonText",
        "buttons",
        "ctas",
        "description",
        "displayOrder",
        "heading",
        "heroImage",
        "image",
        "isVisible",
        "key",
        "label",
        "order",
        "status",
        "subheading",
        "subtitle",
        "title",
        "visible",
        ...ARRAY_KEYS,
        ...TEXT_KEYS,
      ].includes(key) && (typeof value === "string" || typeof value === "number")
  );

  return (
    <section className={index === 0 ? "bg-white pt-32 pb-16" : "bg-brand-gray py-16 md:py-20"} key={String(section.key ?? title ?? index)}>
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <div className={image ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]" : "mx-auto max-w-4xl text-center"}>
          <div>
            {eyebrow && <p className="mb-3 text-sm font-bold tracking-widest text-brand-blue uppercase">{eyebrow}</p>}
            {title && <SectionHeader as={index === 0 ? "h1" : "h2"}>{title}</SectionHeader>}
            {description && <p className="mt-5 text-lg leading-relaxed text-brand-charcoal/70">{description}</p>}
            {scalarFields.length > 0 && (
              <div className="mt-6 space-y-3">{scalarFields.map(([key, value]) => renderScalar(value, key))}</div>
            )}
            {buttons.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {buttons.map((button, buttonIndex) => {
                  const label = getString(button, ["label", "text", "title"]);
                  const href = getString(button, ["href", "url", "link"]);
                  if (!label || !href) return null;
                  return (
                    <Button asChild key={`${label}-${buttonIndex}`} variant={buttonIndex === 0 ? "primary" : "outline"}>
                      <Link href={href}>{label}</Link>
                    </Button>
                  );
                })}
              </div>
            )}
          </div>

          {image && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-brand-gray">
              <Image alt={image.alt} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 45vw" src={image.src} />
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(renderItem)}</div>
        )}
      </div>
    </section>
  );
};

export const CmsPageRenderer = ({ content }: CmsPageRendererProps) => {
  const sections = sortSections(getSectionArray(content));

  return (
    <main className="min-h-screen bg-brand-gray">
      <Header forceLightMode />
      {sections.map(renderSection)}
      <Footer />
    </main>
  );
};
