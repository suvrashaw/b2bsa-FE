export interface NavLink {
  href: string;
  name: string;
}

export interface ServiceNavGroup {
  groups?: ServiceSubGroup[];
  href: string;
  links?: NavLink[];
  name: string;
}

export interface ServiceSubGroup {
  links: NavLink[];
  name: string;
}

import NAVIGATION_DATA from "./navigation.json";

export const topNavigation: NavLink[] = NAVIGATION_DATA.topNavigation;
export const serviceNavigationGroups: ServiceNavGroup[] = NAVIGATION_DATA.serviceNavigationGroups;
export const footerNavigation: NavLink[] = NAVIGATION_DATA.footerNavigation;
