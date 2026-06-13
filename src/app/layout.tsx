import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";
import Script from "next/script";

import { PartytownScripts } from "@/app/providers/PartytownScripts";
import { SmoothScrollProvider } from "@/app/providers/SmoothScrollProvider";
import { SWRegistrar } from "@/app/providers/SWRegistrar";
import { buildOrganizationJsonLd } from "@/lib";

import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  description:
    "Global capability. Strategic growth. Enterprise event and digital solutions for modern businesses.",
  icons: {
    icon: [
      { sizes: "16x16", type: "image/png", url: "/images/favicon/16x16.png" },
      { sizes: "32x32", type: "image/png", url: "/images/favicon/32x32.png" },
      { sizes: "64x64", type: "image/png", url: "/images/favicon/64x64.png" },
      { sizes: "512x512", type: "image/png", url: "/images/favicon/512x512.png" },
    ],
  },
  metadataBase: new URL("https://b2bsalesarrow.com"),
  title: {
    default: "B2B Sales Arrow | Premium Growth Partner",
    template: "%s | B2B Sales Arrow",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: "cover",
  width: "device-width",
};

const jsonLd = buildOrganizationJsonLd();
const JSON_LD_SCRIPT = { __html: JSON.stringify(jsonLd) };

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html className={`${inter.variable} h-full antialiased`} lang="en" suppressHydrationWarning>
      <head>
        <link crossOrigin="anonymous" href="https://cdn.jsdelivr.net" rel="preconnect" />
        <PartytownScripts />
      </head>
      <body className="light flex min-h-full flex-col" suppressHydrationWarning>
        <Script
          dangerouslySetInnerHTML={JSON_LD_SCRIPT}
          id="organization-json-ld"
          type="application/ld+json"
        />
        <SWRegistrar />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
};

export default RootLayout;
