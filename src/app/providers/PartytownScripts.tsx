import { Partytown } from "@qwik.dev/partytown/react";
import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const GA_INLINE_SCRIPT_HTML = {
  __html: `
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', '${gaId}', { send_page_view: true });
`,
};

const PARTYTOWN_FORWARD = ["dataLayer.push"];

export const PartytownScripts = () => {
  return (
    <>
      <Partytown debug={false} forward={PARTYTOWN_FORWARD} />
      {gaId ? (
        <>
          <Script
            id="google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
            type="text/partytown"
          />
          <Script
            dangerouslySetInnerHTML={GA_INLINE_SCRIPT_HTML}
            id="google-analytics-inline"
            strategy="afterInteractive"
            type="text/partytown"
          />
        </>
      ) : null}
    </>
  );
};
