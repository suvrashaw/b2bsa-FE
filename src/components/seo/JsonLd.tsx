import { useMemo } from "react";

export const JsonLd = ({ data }: { data: object }) => {
  const markup = useMemo(() => ({
    __html: JSON.stringify(data).replaceAll("<", String.raw`\u003c`),
  }), [data]);
  return <script dangerouslySetInnerHTML={markup} type="application/ld+json" />;
};
