import { dictionaries, type Locale } from "@/content";
import { Section, SectionTitle } from "@/components/Section";

export default function ContactPage({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const c = dict.contact;

  return (
    <>
      <div className="bg-lattice border-b border-line">
        <Section className="!py-14 sm:!py-16">
          <SectionTitle kicker={dict.brand.nameLatin} title={c.title} sub={c.sub} />
        </Section>
      </div>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Direct messaging — primary action */}
          <div className="card border-line-gold p-8 text-center">
            <h2 className="font-display text-2xl text-fg">{c.phoneTitle}</h2>
            <p className="mt-5 whitespace-pre-line text-sm leading-7 text-dim">{c.phoneNote}</p>
            <a
              href={dict.phone.tel}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display mt-6 block text-2xl tracking-wider text-gold-bright"
              dir="ltr"
            >
              {dict.phone.display}
            </a>
            <a
              href={dict.phone.tel}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-7 text-base"
            >
              {dict.cta.consult}
            </a>
          </div>

          <div className="flex flex-col gap-6">
            {/* Location */}
            <div className="card p-7">
              <h2 className="font-display text-xl text-gold-bright">{c.locationTitle}</h2>
              <p className="mt-3 text-base leading-8 text-fg">{c.location}</p>
              <p className="mt-2 text-sm leading-7 text-dim">{c.locationNote}</p>
            </div>

            {/* Socials */}
            <div className="card p-7">
              <h2 className="font-display text-xl text-gold-bright">{c.socialTitle}</h2>
              <ul className="mt-4 space-y-3">
                {c.socials.map((s) =>
                  s.href ? (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-surface-2 px-4 py-3 transition-colors hover:border-line-gold"
                      >
                        <span className="text-sm font-semibold text-fg">{s.name}</span>
                        <span className="text-xs text-gold-bright" dir="ltr">
                          {s.handle}
                        </span>
                      </a>
                    </li>
                  ) : (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-3 rounded-lg border border-dashed border-line px-4 py-3"
                    >
                      <span className="text-sm text-dim">{s.name}</span>
                      <span className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-dim">
                        {dict.cta.comingSoon}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Invitation */}
        <p className="font-display mx-auto mt-14 max-w-2xl text-center text-xl leading-relaxed text-gold-bright">
          «{dict.cta.invitation}»
        </p>
      </Section>
    </>
  );
}
