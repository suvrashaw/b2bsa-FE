import { partytownSnippet } from "@qwik.dev/partytown/integration";
import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const PARTYTOWN_SNIPPET = partytownSnippet({ debug: false, forward: ["dataLayer.push"] });

const GA_INLINE_SCRIPT_HTML = {
  __html: `
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', '${gaId}', { send_page_view: true });
`,
};

export const PartytownScripts = () => {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{ __html: PARTYTOWN_SNIPPET }}
        id="partytown-init"
        strategy="beforeInteractive"
      />
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
