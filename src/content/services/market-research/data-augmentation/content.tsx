import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import HERO_DATA from "./hero.json";
import FAQ_DATA from "./faq.json";
import PAGE_DATA from "./page.json";
import DATA from "./data.json";

export const DATA_AUGMENTATION_HERO = HERO_DATA;

export const DATA_AUGMENTATION_DEFINITION = {
  body: (
    <p>
      <strong>B2B data augmentation</strong> is the process of enriching existing contact or account
      records with additional verified information — job titles, emails, company revenue,{" "}
      <strong>technology stack</strong>, and buying intent signals — to make records more complete,
      accurate, and useful for sales and marketing activities.
    </p>
  ),
};

export const DATA_AUGMENTATION_DELIVERABLES = DATA.augmentationDeliverables;

export const DATA_AUGMENTATION_PROCESS = DATA.augmentationProcess;

export const DATA_AUGMENTATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_AUGMENTATION_FAQ = FAQ_DATA;

export const DATA_AUGMENTATION_CTA = DATA.augmentationCta;

export const DATA_AUGMENTATION_PAGE = PAGE_DATA;
