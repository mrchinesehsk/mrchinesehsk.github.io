import Image from "next/image";
import { dictionaries, type Locale } from "@/content";
import { Section, SectionTitle } from "@/components/Section";
import CtaBand from "@/components/CtaBand";

export default function AboutPage({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const a = dict.about;

  return (
    <>
      {/* ── Founder ──────────────────────────────────────────────── */}
      <div className="bg-lattice border-b border-line">
        <Section className="!py-14 sm:!py-16">
          <SectionTitle kicker={dict.brand.nameLatin} title={a.title} />
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="mx-auto w-64 sm:w-80">
              <Image
                src="/brand/founder.jpg"
                alt={a.founder.name}
                width={640}
                height={640}
                priority
                className="rounded-full border border-line-gold"
              />
            </div>
            <div>
              <span className="kicker">{a.founder.title}</span>
              <h2 className="font-display mt-3 text-3xl text-fg">{a.founder.name}</h2>
              <p className="mt-1 text-sm font-semibold text-gold-bright">{a.founder.role}</p>

              <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                {a.founder.names.map((n) => (
                  <div key={n.label} className="card p-4">
                    <dt className="text-xs text-dim">{n.label}</dt>
                    <dd className="mt-1.5 text-sm font-bold leading-6 text-fg">{n.value}</dd>
                  </div>
                ))}
              </dl>

              {a.founder.body.map((p) => (
                <p key={p.slice(0, 24)} className="mt-5 text-base leading-8 text-dim">
                  {p}
                </p>
              ))}

              <blockquote className="mt-7 border-s-2 border-gold ps-5">
                <p className="font-display text-lg leading-relaxed text-gold-bright">
                  «{a.founder.quote}»
                </p>
              </blockquote>
            </div>
          </div>
        </Section>
      </div>

      {/* ── Story ────────────────────────────────────────────────── */}
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionTitle title={a.story.title} />
            {a.story.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 max-w-2xl text-base leading-8 text-dim">
                {p}
              </p>
            ))}
          </div>
          <div className="card sticky top-24 overflow-hidden p-0">
            <Image
              src="/brand/teacher-art.jpg"
              alt=""
              width={1024}
              height={1280}
              className="w-full"
            />
            <p className="px-5 py-4 text-center text-xs text-dim" dir="ltr">
              {dict.brand.sloganZh}
            </p>
          </div>
        </div>
      </Section>

      {/* ── Certificates ─────────────────────────────────────────── */}
      <div className="border-y border-line bg-surface/50">
        <Section>
          <SectionTitle title={a.certificates.title} sub={a.certificates.intro} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {a.certificates.items.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-display text-xl text-gold-bright">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-dim">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl rounded-xl border border-line-gold bg-surface px-5 py-4 text-sm leading-7 text-fg">
            {a.certificates.disclaimer}
          </p>
        </Section>
      </div>

      <CtaBand locale={locale} />
    </>
  );
}
