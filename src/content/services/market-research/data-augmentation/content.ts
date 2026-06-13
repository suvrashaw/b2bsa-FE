import { GLOBAL_CASE_STUDIES } from "@/content/shared";

import DATA from "./data.json";





export const DATA_AUGMENTATION_DEFINITION = DATA.augmentationDefinition;

export const DATA_AUGMENTATION_DELIVERABLES = DATA.augmentationDeliverables;

export const DATA_AUGMENTATION_PROCESS = DATA.augmentationProcess;

export const DATA_AUGMENTATION_CASE_STUDIES = {
  items: GLOBAL_CASE_STUDIES,
};



export const DATA_AUGMENTATION_CTA = DATA.augmentationCta;



export {default as DATA_AUGMENTATION_FAQ} from "./faq.json";
export {default as DATA_AUGMENTATION_HERO} from "./hero.json";
export {default as DATA_AUGMENTATION_PAGE} from "./page.json";