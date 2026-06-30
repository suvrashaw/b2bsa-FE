export const dynamic = "force-dynamic";
export const revalidate = 0;

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://b2bsalesarrow.com"
).replace(/\/$/, "");

export const GET = async () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Host: ${siteUrl}`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
