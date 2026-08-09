import { dictionaries, type Locale } from "@/content";
import ContactChoice from "@/components/ContactChoice";

/** Full-width consultation call-to-action band used at the bottom of pages. */
export default function CtaBand({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <section className="bg-lattice border-y border-line bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl leading-snug text-fg sm:text-3xl">
          {dict.cta.invitation}
        </h2>
        <p className="mt-4 text-dim">{dict.cta.consultLine}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ContactChoice locale={locale} className="btn btn-gold text-base">
            {dict.cta.consult}
          </ContactChoice>
        </div>
      </div>
    </section>
  );
}
