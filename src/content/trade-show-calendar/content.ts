export interface CalendarTradeShow {
  attendeeCount: number;
  city: string;
  country: string;
  endDate: string;
  exhibitorCount: number;
  id: string;
  industry: string;
  name: string;
  region?: string;
  sourceUrl: string;
  startDate: string;
  summary: string;
  venue: string;
}

import type { MarketingPageDefinition } from "@/content/page-definitions";

import EVENTS_DATA from "./events.json";
import PAGE_DATA from "./page.json";



export const TRADE_SHOW_CALENDAR_EVENTS: CalendarTradeShow[] = EVENTS_DATA.events;

export const TRADE_SHOW_CALENDAR_PAGE = PAGE_DATA as MarketingPageDefinition;

export {default as TRADE_SHOW_CALENDAR_HERO} from "./hero.json";