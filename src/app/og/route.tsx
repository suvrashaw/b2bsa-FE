import { ImageResponse } from "@vercel/og";

import {
  getMarketingPageById,
  getMarketingPageByPath,
  getMarketingPageGroup,
} from "@/content/marketing-pages";

export const runtime = "edge";

const siteUrl = "https://b2bsalesarrow.com";
const defaultOgContent = {
  description: "Premium growth partner for enterprise event and digital solutions.",
  group: "B2B Growth",
  title: "B2B Sales Arrow",
};
const ogShellStyle = {
  background: "#f7fbff",
  color: "#052238",
  display: "flex",
  fontFamily: "Inter, Arial, sans-serif",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  width: "100%",
} as const;
const ogBackgroundStyle = {
  background:
    "linear-gradient(135deg, rgba(2,62,138,0.96) 0%, rgba(30,96,145,0.9) 46%, rgba(42,157,143,0.88) 100%)",
  inset: 0,
  position: "absolute",
} as const;
const ogRingStyle = {
  border: "2px solid rgba(255,255,255,0.2)",
  borderRadius: 500,
  height: 500,
  position: "absolute",
  right: -80,
  top: -120,
  width: 500,
} as const;
const ogBubbleStyle = {
  background: "rgba(255,255,255,0.12)",
  borderRadius: 360,
  bottom: -120,
  height: 360,
  position: "absolute",
  right: 90,
  width: 360,
} as const;
const ogContentStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  padding: "58px 68px",
  position: "relative",
  width: "100%",
} as const;
const ogHeaderStyle = {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
} as const;
const ogBrandRowStyle = {
  alignItems: "center",
  display: "flex",
  gap: 18,
} as const;
const ogBrandMarkStyle = {
  alignItems: "center",
  background: "#ffffff",
  borderRadius: 14,
  color: "#023e8a",
  display: "flex",
  fontSize: 28,
  fontWeight: 800,
  height: 54,
  justifyContent: "center",
  width: 54,
} as const;
const ogBrandTextStyle = { display: "flex", flexDirection: "column" } as const;
const ogBrandTitleStyle = { color: "#ffffff", fontSize: 30, fontWeight: 800 } as const;
const ogBrandUrlStyle = { color: "rgba(255,255,255,0.76)", fontSize: 18 } as const;
const ogGroupPillStyle = {
  border: "1px solid rgba(255,255,255,0.42)",
  borderRadius: 999,
  color: "#ffffff",
  fontSize: 18,
  fontWeight: 700,
  padding: "12px 20px",
} as const;
const ogMainCopyStyle = { display: "flex", flexDirection: "column", maxWidth: 920 } as const;
const ogEyebrowStyle = {
  color: "#b9f2ff",
  fontSize: 24,
  fontWeight: 800,
  letterSpacing: 0,
  marginBottom: 22,
} as const;
const ogDescriptionStyle = {
  color: "rgba(255,255,255,0.86)",
  fontSize: 27,
  lineHeight: 1.35,
  marginTop: 28,
  maxWidth: 980,
} as const;
const ogFooterStyle = {
  color: "#ffffff",
  display: "flex",
  fontSize: 22,
  fontWeight: 700,
  gap: 18,
} as const;
const ogFooterSeparatorStyle = { color: "rgba(255,255,255,0.5)" } as const;

const getOgTitleStyle = (titleLength: number) =>
  ({
    color: "#ffffff",
    fontSize: titleLength > 58 ? 58 : 66,
    fontWeight: 900,
    letterSpacing: 0,
    lineHeight: 1.04,
  }) as const;

export const GET = (request: { url: string }) => {
  const { searchParams } = new URL(request.url);
  const content = getOgContent(searchParams);

  return new ImageResponse(
    <div style={ogShellStyle}>
      <div style={ogBackgroundStyle} />
      <div style={ogRingStyle} />
      <div style={ogBubbleStyle} />
      <div style={ogContentStyle}>
        <div style={ogHeaderStyle}>
          <div style={ogBrandRowStyle}>
            <div style={ogBrandMarkStyle}>B</div>
            <div style={ogBrandTextStyle}>
              <span style={ogBrandTitleStyle}>B2B Sales Arrow</span>
              <span style={ogBrandUrlStyle}>{siteUrl.replace("https://", "")}</span>
            </div>
          </div>
          <div style={ogGroupPillStyle}>{content.group}</div>
        </div>

        <div style={ogMainCopyStyle}>
          <div style={ogEyebrowStyle}>Enterprise growth systems, built to convert.</div>
          <div style={getOgTitleStyle(content.title.length)}>{content.title}</div>
          <div style={ogDescriptionStyle}>{content.description}</div>
        </div>

        <div style={ogFooterStyle}>
          <span>Strategy</span>
          <span style={ogFooterSeparatorStyle}>•</span>
          <span>Execution</span>
          <span style={ogFooterSeparatorStyle}>•</span>
          <span>Pipeline</span>
        </div>
      </div>
    </div>,
    {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
      height: 630,
      width: 1200,
    }
  );
};

const getOgContent = (searchParams: URLSearchParams) => {
  const pageId = searchParams.get("pageId");
  const title = searchParams.get("title");
  const path = searchParams.get("path");

  if (pageId) {
    const marketingPage = getMarketingPageById(pageId);

    if (marketingPage) {
      const resolvedTitle = title ?? marketingPage.seo.title;

      return {
        description: marketingPage.seo.description,
        group: getMarketingPageGroup(marketingPage),
        title: resolvedTitle.replace(" | B2B Sales Arrow", ""),
      };
    }

  }

  if (!path) {
    return defaultOgContent;
  }

  try {
    const marketingPage = getMarketingPageByPath(path);

    if (marketingPage) {
      return {
        description: marketingPage.seo.description,
        group: getMarketingPageGroup(marketingPage),
        title: marketingPage.seo.title.replace(" | B2B Sales Arrow", ""),
      };
    }

    return defaultOgContent;
  } catch {
    return defaultOgContent;
  }
};
