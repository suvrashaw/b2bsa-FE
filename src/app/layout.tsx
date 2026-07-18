import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";
import Script from "next/script";

import { MotionProvider } from "@/app/providers/MotionProvider";
import { PartytownScripts } from "@/app/providers/PartytownScripts";
import { SmoothScrollProvider } from "@/app/providers/SmoothScrollProvider";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { buildOrganizationJsonLd, JsonLd, siteUrl } from "@/lib";

import "./globals.css";

const inter = Inter({
  display: "optional",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  alternates: {
    types: {
      "application/rss+xml": `${siteUrl}/feed.xml`,
    },
  },
  description:
    "Global capability. Strategic growth. Enterprise event and digital solutions for modern businesses.",
  metadataBase: new URL("https://b2bsalesarrow.com"),
  openGraph: {
    locale: "en_US",
    siteName: "B2B Sales Arrow",
    type: "website",
  },
  robots: {
    follow: true,
    index: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
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
  themeColor: "#1E6091",
  viewportFit: "cover",
  width: "device-width",
};

const GTM_INLINE_SCRIPT_HTML = {
  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MK48GW8');`,
};

const CLARITY_INLINE_SCRIPT_HTML = {
  __html: `(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "vmwco8p6v0");`,
};

const TAWK_TO_INLINE_SCRIPT_HTML = {
  __html: `var Tawk_API = Tawk_API || {},
Tawk_LoadStart = new Date();
(function() {
var s1 = document.createElement("script"),
s0 = document.getElementsByTagName("script")[0];
s1.async = true;
s1.src = 'https://embed.tawk.to/695f4841559e7e197844db5a/1jee34g85';
s1.charset = 'UTF-8';
s1.setAttribute('crossorigin', '*');
s0.parentNode.insertBefore(s1, s0);
})();`,
};

// Organization is the one entity referenced by @id from every page (per the
// schema spec's global rule), so it stays global here. WebSite is only
// defined on the homepage — see src/app/page.tsx — other pages just
// reference it via isPartOf: { "@id": `${siteUrl}/#website" }.
const organizationJsonLd = buildOrganizationJsonLd();

const UNREGISTER_SW_SCRIPT = {
  __html: `if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
}`,
};

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
        <link href="https://www.linkedin.com/company/b2b-sales-arrow-llc/" rel="me" />
        <link href="https://www.facebook.com/b2bsalesarrow" rel="me" />
        <link href="https://www.instagram.com/b2b_sales_arrow/" rel="me" />
        <link href="https://x.com/B2B_SalesArrow" rel="me" />
        <link href="https://www.youtube.com/@b2bsalesarrow167" rel="me" />
      </head>
      <body className="light flex min-h-full flex-col" suppressHydrationWarning>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/73b738e7ff9edd3212b60f491c3e25ee/script.js"
          strategy="afterInteractive"
        />
        <Script
          dangerouslySetInnerHTML={GTM_INLINE_SCRIPT_HTML}
          id="gtm-script"
          strategy="afterInteractive"
        />
        <Script
          dangerouslySetInnerHTML={CLARITY_INLINE_SCRIPT_HTML}
          id="clarity-script"
          strategy="lazyOnload"
        />
        <Script
          dangerouslySetInnerHTML={TAWK_TO_INLINE_SCRIPT_HTML}
          id="tawk-to-script"
          strategy="lazyOnload"
        />
        <JsonLd data={organizationJsonLd} />
        <Script dangerouslySetInnerHTML={UNREGISTER_SW_SCRIPT} id="unregister-sw" />
        <MotionProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </MotionProvider>
        <StickyContactBar />
      </body>
    </html>
  );
};

export default RootLayout;
