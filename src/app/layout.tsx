import type { Metadata } from "next";

import { Inter, Playfair_Display } from "next/font/google";

import { PartytownScripts } from "@/app/providers/PartytownScripts";
import { SmoothScrollProvider } from "@/app/providers/SmoothScrollProvider";
import { SWRegistrar } from "@/app/providers/SWRegistrar";
import { buildOrganizationJsonLd } from "@/lib";

import "./globals.css";

const playfair = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  description:
    "Global capability. Strategic growth. Enterprise event and digital solutions for modern businesses.",
  metadataBase: new URL("https://b2bsalesarrow.com"),
  title: {
    default: "B2B Sales Arrow | Premium Growth Partner",
    template: "%s | B2B Sales Arrow",
  },
};

const jsonLd = buildOrganizationJsonLd();
const JSON_LD_SCRIPT = { __html: JSON.stringify(jsonLd) };

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="light flex min-h-full flex-col" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={JSON_LD_SCRIPT} type="application/ld+json" />
        <PartytownScripts />
        <SWRegistrar />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
};

export default RootLayout;
