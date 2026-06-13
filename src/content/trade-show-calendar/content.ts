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

import HERO_DATA from "./hero.json";
import DATA from "./data.json";
import PAGE_DATA from "./page.json";

export const TRADE_SHOW_CALENDAR_HERO = HERO_DATA;

export const TRADE_SHOW_CALENDAR_EVENTS: CalendarTradeShow[] = DATA.events;

export const TRADE_SHOW_CALENDAR_PAGE = PAGE_DATA;
