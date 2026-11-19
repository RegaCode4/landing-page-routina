import en from "@/locales/en.json";
import id from "@/locales/id.json";

export const locales = ["en", "id"] as const;
export type AppLocale = (typeof locales)[number];
export type Dictionary = typeof en;
export const dictionaries: Record<AppLocale, Dictionary> = { en, id };
export const navIds = ["home", "features", "how-it-works", "screenshots", "faq"] as const;
