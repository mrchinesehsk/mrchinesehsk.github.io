"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { dictionaries, href, locales, type Locale } from "@/content";

/** Strip the locale prefix from a pathname to get the page path. */
function pagePath(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|zh)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export default function Header({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const current = pagePath(pathname);

  const nav = [
    { label: dict.nav.home, path: "/" },
    { label: dict.nav.courses, path: "/courses/" },
    { label: dict.nav.about, path: "/about/" },
    { label: dict.nav.faq, path: "/faq/" },
    { label: dict.nav.contact, path: "/contact/" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Brand */}
        <Link href={href(locale, "/")} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo-symbol.svg"
            alt="MR CHINESE"
            width={40}
            height={40}
            className="rounded-full border border-line-gold bg-[#f0ead9] p-1"
            priority
          />
          <span
            className="font-display hidden whitespace-nowrap text-lg tracking-wide text-gold-bright min-[480px]:inline"
            dir="ltr"
          >
            MR CHINESE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = current === item.path;
            return (
              <Link
                key={item.path}
                href={href(locale, item.path)}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-surface-2 text-gold-bright" : "text-dim hover:text-fg"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center rounded-full border border-line p-0.5" aria-label="Language">
            {locales.map((l) => (
              <Link
                key={l}
                href={href(l, current)}
                hrefLang={l}
                className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                  l === locale ? "bg-gold text-[#131109]" : "text-dim hover:text-fg"
                }`}
              >
                {dictionaries[l].langLabel}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-line bg-bg px-4 py-3 md:hidden" aria-label="Main mobile">
          <ul className="flex flex-col">
            {nav.map((item) => {
              const active = current === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={href(locale, item.path)}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${
                      active ? "bg-surface-2 text-gold-bright" : "text-fg"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
