import { dictionaries, type Locale } from "@/content";
import { Section, SectionTitle } from "@/components/Section";
import CtaBand from "@/components/CtaBand";

export default function CoursesPage({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const c = dict.courses;

  return (
    <>
      {/* ── Intro + format facts ─────────────────────────────────── */}
      <div className="bg-lattice border-b border-line">
        <Section className="!py-14 sm:!py-16">
          <SectionTitle kicker={dict.brand.nameLatin} title={c.title} />
          {c.intro.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 max-w-3xl text-base leading-8 text-dim">
              {p}
            </p>
          ))}
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.format.map((f) => (
              <div key={f.label} className="card p-5">
                <dt className="text-xs font-semibold tracking-wide text-dim">{f.label}</dt>
                <dd className="font-display mt-2 text-xl text-gold-bright">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-dim">{c.formatNote}</p>
        </Section>
      </div>

      {/* ── Terms ────────────────────────────────────────────────── */}
      <Section>
        <SectionTitle title={c.termsTitle} />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {c.terms.map((t) => (
            <article key={t.id} className="card p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-2xl text-gold-bright" dir="ltr">
                  {t.level}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-line-gold px-3 py-1 text-xs font-semibold text-gold-bright">
                    {t.term}
                  </span>
                  <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-dim">
                    {t.sessions}
                  </span>
                </div>
              </div>
              {t.audience && <p className="mt-3 text-sm font-semibold text-fg">{t.audience}</p>}
              {t.bullets.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm leading-7 text-dim">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 inline-block h-1.5 w-1.5 flex-none rotate-45 rounded-[1px] bg-gold"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {t.note && (
                <p className="mt-4 rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm leading-7 text-dim">
                  {t.note}
                </p>
              )}
            </article>
          ))}

          {/* Private course card */}
          <article className="card border-line-gold p-6">
            <h3 className="font-display text-2xl text-gold-bright">{c.privateCourse.title}</h3>
            <p className="mt-4 text-sm leading-7 text-dim">{c.privateCourse.body}</p>
            <a href={dict.phone.tel} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-6">
              {dict.cta.consult}
            </a>
          </article>
        </div>
        <p className="mt-6 text-sm text-dim">{c.higherLevelsNote}</p>
      </Section>

      {/* ── Method ───────────────────────────────────────────────── */}
      <div className="border-y border-line bg-surface/50">
        <Section>
          <SectionTitle title={c.method.title} sub={c.method.intro} />

          <h3 className="mt-10 text-sm font-bold tracking-wide text-gold-bright">
            {c.method.skillsTitle}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.method.skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-fg"
              >
                {s}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-sm font-bold tracking-wide text-gold-bright">
            {c.method.toolsTitle}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.method.tools.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm leading-7 text-dim">
                <span
                  aria-hidden="true"
                  className="mt-2.5 inline-block h-1.5 w-1.5 flex-none rotate-45 rounded-[1px] bg-red"
                />
                {t}
              </li>
            ))}
          </ul>

          <div className="card mt-10 border-line-gold p-6">
            <h3 className="font-display text-xl text-gold-bright">{c.method.atmosphereTitle}</h3>
            <p className="mt-3 text-base leading-8 text-dim">{c.method.atmosphere}</p>
          </div>
        </Section>
      </div>

      <CtaBand locale={locale} />
    </>
  );
}
