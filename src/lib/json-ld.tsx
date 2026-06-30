export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://b2bsalesarrow.com"
).replace(/\/$/, "");

export const normalizePath = (path: string) => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
};

const createJsonLdMarkup = (data: object) => ({
  __html: JSON.stringify(data).replaceAll("<", String.raw`\u003c`),
});

export const JsonLd = ({ data }: { data: object }) => (
  <script dangerouslySetInnerHTML={createJsonLdMarkup(data)} type="application/ld+json" />
);
