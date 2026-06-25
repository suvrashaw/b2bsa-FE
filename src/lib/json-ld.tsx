export const siteUrl = "https://b2bsalesarrow.com";

export const normalizePath = (path: string) => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
};

const createJsonLdMarkup = (data: object) => ({
  __html: JSON.stringify(data).replaceAll("<", String.raw`\u003c`),
});

export const JsonLd = ({ data }: { data: object }) => (
  <script
    dangerouslySetInnerHTML={createJsonLdMarkup(data)}
    type="application/ld+json"
  />
);
