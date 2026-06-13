import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import HERO_DATA from "./hero.json";
import FAQ_DATA from "./faq.json";
import PAGE_DATA from "./page.json";
import DATA from "./data.json";

export const DATA_AUGMENTATION_HERO = HERO_DATA;

export const DATA_AUGMENTATION_DEFINITION = DATA.augmentationDefinition;

export const DATA_AUGMENTATION_DELIVERABLES = DATA.augmentationDeliverables;

export const DATA_AUGMENTATION_PROCESS = DATA.augmentationProcess;

export const DATA_AUGMENTATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};

export const DATA_AUGMENTATION_FAQ = FAQ_DATA;

export const DATA_AUGMENTATION_CTA = DATA.augmentationCta;

export const DATA_AUGMENTATION_PAGE = PAGE_DATA;
