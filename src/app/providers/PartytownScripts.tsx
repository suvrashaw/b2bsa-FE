import { Partytown } from "@qwik.dev/partytown/react";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const PARTYTOWN_FORWARD = ["dataLayer.push"];

const GA_INLINE_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', '${gaId}', { send_page_view: true });
`;

const GA_INLINE_SCRIPT_HTML = {
  __html: GA_INLINE_SCRIPT,
};

export const PartytownScripts = () => {
  return (
    <>
      <Partytown debug={false} forward={PARTYTOWN_FORWARD} />
      {gaId ? (
        <>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            id="google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            type="text/partytown"
          />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
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
