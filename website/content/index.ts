import type { Dictionary, Locale, PageMeta } from "./types";
import { fa } from "./fa";
import { en } from "./en";
import { zh } from "./zh";

export type { Dictionary, Locale, PageMeta };

export const dictionaries: Record<Locale, Dictionary> = { fa, en, zh };

export const locales: Locale[] = ["fa", "en", "zh"];

export const SITE_URL = "https://mrchinesehsk.github.io";

/** URL prefix for a locale ("" for fa, "/en", "/zh"). */
export function localePrefix(locale: Locale): string {
  return locale === "fa" ? "" : `/${locale}`;
}

/** Locale-aware href for an internal page path like "/courses/". */
export function href(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${localePrefix(locale)}${p}` || "/";
}

export type PageId = "home" | "courses" | "about" | "faq" | "contact";

export const pagePaths: Record<PageId, string> = {
  home: "/",
  courses: "/courses/",
  about: "/about/",
  faq: "/faq/",
  contact: "/contact/",
};

export const htmlLang: Record<Locale, string> = {
  fa: "fa",
  en: "en",
  zh: "zh-Hans",
};

export const ogLocale: Record<Locale, string> = {
  fa: "fa_IR",
  en: "en_US",
  zh: "zh_CN",
};
