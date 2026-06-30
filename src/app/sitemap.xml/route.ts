type ApiResponse<T> = {
  data?: T;
  error?: string;
  message?: string;
};

type SitemapEntry = {
  changeFrequency: string;
  lastModified?: string;
  loc: string;
  priority: number;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

const backendBaseUrl = (
  process.env.NEXT_PUBLIC_BACKEND_API_URL ||
  process.env.BACKEND_API_URL ||
  "http://localhost:4000"
).replace(/\/$/, "");

const xmlEscape = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const fetchSitemapEntries = async () => {
  const response = await fetch(`${backendBaseUrl}/api/v1/seo/sitemap/urls`, {
    cache: "no-store",
  });
  const payload = (await response.json()) as ApiResponse<SitemapEntry[]>;

  if (!response.ok || payload.error || !payload.data) {
    throw new Error(payload.error || payload.message || "Failed to load sitemap URLs");
  }

  return payload.data;
};

const renderSitemap = (entries: SitemapEntry[]) => {
  const urls = entries
    .map((entry) => {
      const lastModified = entry.lastModified
        ? `<lastmod>${xmlEscape(entry.lastModified)}</lastmod>`
        : "";

      return [
        "<url>",
        `<loc>${xmlEscape(entry.loc)}</loc>`,
        lastModified,
        `<changefreq>${xmlEscape(entry.changeFrequency)}</changefreq>`,
        `<priority>${entry.priority.toFixed(1)}</priority>`,
        "</url>",
      ].join("");
    })
    .join("");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
  ].join("");
};

export const GET = async () => {
  const entries = await fetchSitemapEntries();

  return new Response(renderSitemap(entries), {
    headers: {
      "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
