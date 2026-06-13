export const createJsonLdMarkup = (data: object) => ({
  __html: JSON.stringify(data).replaceAll("<", String.raw`\u003c`),
});

export const JsonLd = ({ data }: { data: object }) => {
  return <script dangerouslySetInnerHTML={createJsonLdMarkup(data)} type="application/ld+json" />;
};
