import Link from "next/link";
import Image from "next/image";
import { dictionaries, href, type Locale } from "@/content";

export default function Footer({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image src="/brand/seal.jpg" alt="" width={40} height={40} className="rounded-md" />
              <span className="font-display text-lg text-gold-bright">{dict.brand.name}</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-dim">{dict.footer.tagline}</p>
            <p className="mt-2 text-sm text-dim">{dict.footer.location}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-3">
              <li>
                <Link className="text-dim transition-colors hover:text-gold-bright" href={href(locale, "/")}>
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  className="text-dim transition-colors hover:text-gold-bright"
                  href={href(locale, "/courses/")}
                >
                  {dict.nav.courses}
                </Link>
              </li>
              <li>
                <Link
                  className="text-dim transition-colors hover:text-gold-bright"
                  href={href(locale, "/about/")}
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  className="text-dim transition-colors hover:text-gold-bright"
                  href={href(locale, "/faq/")}
                >
                  {dict.nav.faq}
                </Link>
              </li>
              <li>
                <Link
                  className="text-dim transition-colors hover:text-gold-bright"
                  href={href(locale, "/contact/")}
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
            <a
              href={dict.phone.tel}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-base font-bold text-gold-bright"
              dir="ltr"
            >
              {dict.phone.display}
            </a>
          </nav>
        </div>

        <div className="divider-gold my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-dim sm:flex-row">
          <span>{dict.footer.rights}</span>
          <span className="tracking-wide">{dict.brand.sloganIntl}</span>
        </div>
      </div>
    </footer>
  );
}
