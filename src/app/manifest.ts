import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  background_color: "#ffffff",
  description: "Global capability. Strategic growth partner for B2B enterprises.",
  display: "standalone",
  icons: [
    {
      sizes: "512x512",
      src: "/favicon/512x512.png",
      type: "image/png",
    },
  ],
  name: "B2B Sales Arrow",
  short_name: "B2BSA",
  start_url: "/",
  theme_color: "#1E6091",
});

export default manifest;
