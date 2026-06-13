export const JsonLd = ({ data }: { data: object }) => {
  const markup = {
    __html: JSON.stringify(data).replaceAll("<", String.raw`\u003c`),
  };
  return <script dangerouslySetInnerHTML={markup} type="application/ld+json" />;
};
