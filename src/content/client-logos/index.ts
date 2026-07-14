import CLIENT_LOGOS_DATA from "./client-logos-data.json";

export interface ClientLogoItem {
  alt: string;
  id: string;
  src: string;
}

export const DEFAULT_CLIENT_LOGOS: ClientLogoItem[] = CLIENT_LOGOS_DATA.logos;
export const DEFAULT_CLIENT_LOGOS_HEADING: string = CLIENT_LOGOS_DATA.defaultHeading;
