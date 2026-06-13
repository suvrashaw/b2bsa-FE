import DATA from "./data.json";
import HERO_DATA from "./hero.json";
import FAQ_DATA from "./faq.json";

export const TERMS_HERO = HERO_DATA;

export const TERMS_FAQ = FAQ_DATA;

export const TERMS_CONTACT = {
  ...DATA.contact,
  illustration: null,
};
