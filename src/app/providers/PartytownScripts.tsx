import { partytownSnippet } from "@builder.io/partytown/integration";
import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const PARTYTOWN_FORWARD = ["dataLayer.push"];

const GA_INLINE_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', '${gaId}', { send_page_view: true });
`;

const PARTYTOWN_SNIPPET_HTML = {
  __html: partytownSnippet({ debug: false, forward: PARTYTOWN_FORWARD }),
};

const GA_INLINE_SCRIPT_HTML = {
  __html: GA_INLINE_SCRIPT,
};

export const PartytownScripts = () => {
  return (
    <>
      <script dangerouslySetInnerHTML={PARTYTOWN_SNIPPET_HTML} id="partytown-snippet" />
      {gaId ? (
        <>
          <Script
            id="google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
            type="text/partytown"
          />
          <script
            dangerouslySetInnerHTML={GA_INLINE_SCRIPT_HTML}
            id="google-analytics-inline"
            type="text/partytown"
          />
        </>
      ) : null}
    </>
  );
};
