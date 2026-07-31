import type { MetadataRoute } from "next";
import { SITE_URL, locales, localePrefix, pagePaths } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of Object.keys(pagePaths) as (keyof typeof pagePaths)[]) {
    const path = pagePaths[page];
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}${localePrefix(locale)}${path === "/" ? "/" : path}`,
        changeFrequency: "monthly",
        priority: page === "home" ? 1 : 0.8,
        alternates: {
          languages: {
            fa: `${SITE_URL}${path === "/" ? "/" : path}`,
            en: `${SITE_URL}/en${path === "/" ? "/" : path}`,
            "zh-Hans": `${SITE_URL}/zh${path === "/" ? "/" : path}`,
          },
        },
      });
    }
  }

  return entries;
}
