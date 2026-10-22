import type { Metadata } from "next";
import {
  SITE_URL,
  dictionaries,
  localePrefix,
  ogLocale,
  pagePaths,
  type Locale,
  type PageId,
} from "@/content";

/** Build per-page metadata with canonical + hreflang alternates for all locales. */
export function pageMetadata(locale: Locale, page: PageId): Metadata {
  const dict = dictionaries[locale];
  const meta = dict.meta[page];
  const path = pagePaths[page];
  const canonical = `${localePrefix(locale)}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        fa: `${SITE_URL}${path === "/" ? "/" : path}`,
        en: `${SITE_URL}/en${path === "/" ? "/" : path}`,
        "zh-Hans": `${SITE_URL}/zh${path === "/" ? "/" : path}`,
        "x-default": `${SITE_URL}${path === "/" ? "/" : path}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: dict.meta.siteName,
      type: "website",
      locale: ogLocale[locale],
      images: ["/brand/social-preview.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/brand/social-preview.png"],
    },
    robots: { index: true, follow: true },
    icons: { icon: "/favicon.svg" },
  };
}
