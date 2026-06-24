import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";
import Script from "next/script";

import { PartytownScripts } from "@/app/providers/PartytownScripts";
import { SmoothScrollProvider } from "@/app/providers/SmoothScrollProvider";
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib";

import "./globals.css";

const inter = Inter({
  display: "optional",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  description:
    "Global capability. Strategic growth. Enterprise event and digital solutions for modern businesses.",
  metadataBase: new URL("https://b2bsalesarrow.com"),
  openGraph: {
    locale: "en_US",
    siteName: "B2B Sales Arrow",
    type: "website",
  },
  title: {
    default: "B2B Sales Arrow | Premium Growth Partner",
    template: "%s | B2B Sales Arrow",
  },
  twitter: {
    creator: "@B2B_SalesArrow",
    site: "@B2B_SalesArrow",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: "cover",
  width: "device-width",
};

const organizationJsonLd = buildOrganizationJsonLd();
const websiteJsonLd = buildWebsiteJsonLd();
const ORG_JSON_LD_SCRIPT = { __html: JSON.stringify(organizationJsonLd) };
const WEBSITE_JSON_LD_SCRIPT = { __html: JSON.stringify(websiteJsonLd) };

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html className={`${inter.variable} h-full antialiased`} lang="en" suppressHydrationWarning>
      <head>
        <PartytownScripts />
        <link
          href="/feed.xml"
          rel="alternate"
          title="B2B Sales Arrow Blog"
          type="application/rss+xml"
        />
      </head>
      <body className="light flex min-h-full flex-col" suppressHydrationWarning>
        <Script
          dangerouslySetInnerHTML={ORG_JSON_LD_SCRIPT}
          id="organization-json-ld"
          type="application/ld+json"
        />
        <Script
          dangerouslySetInnerHTML={WEBSITE_JSON_LD_SCRIPT}
          id="website-json-ld"
          type="application/ld+json"
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
};

export default RootLayout;
