import Image from "next/image";
import Link from "next/link";
import { dictionaries, href, type Locale } from "@/content";
import { Section, SectionTitle } from "@/components/Section";
import CtaBand from "@/components/CtaBand";

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const home = dict.home;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="bg-lattice relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="kicker">{home.heroKicker}</span>
            <h1 className="font-display mt-4 text-4xl leading-[1.2] text-fg sm:text-5xl sm:leading-[1.15]">
              {home.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-dim sm:text-lg sm:leading-9">
              {home.heroSub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={dict.phone.tel} target="_blank" rel="noopener noreferrer" className="btn btn-gold text-base">
                {dict.cta.consult}
              </a>
              <Link href={href(locale, "/courses/")} className="btn btn-outline text-base">
                {dict.cta.seeCourses}
              </Link>
            </div>
            <p className="mt-8 text-sm tracking-wide text-dim" dir="ltr">
              {dict.brand.sloganIntl} · {dict.brand.sloganZh}
            </p>
          </div>

          <div className="relative mx-auto hidden max-w-sm lg:block">
            <Image
              src="/brand/logo-dragon.jpg"
              alt="MR CHINESE"
              width={520}
              height={520}
              priority
              className="[mask-image:radial-gradient(circle,black_55%,transparent_72%)]"
            />
          </div>
        </div>
      </div>

      {/* ── What is MR CHINESE ───────────────────────────────────── */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle title={home.intro.title} />
            {home.intro.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 text-base leading-8 text-dim">
                {p}
              </p>
            ))}
          </div>
          <div className="card overflow-hidden p-0">
            <Image
              src="/brand/lockup-wide.jpg"
              alt="MR CHINESE — Learn Chinese, Connect Cultures"
              width={1280}
              height={427}
              className="w-full"
            />
          </div>
        </div>
      </Section>

      {/* ── Audience ─────────────────────────────────────────────── */}
      <div className="border-y border-line bg-surface/50">
        <Section>
          <SectionTitle title={home.audience.title} sub={home.audience.sub} />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {home.audience.reasons.map((r) => (
              <li key={r} className="card flex items-center gap-3 px-4 py-4 text-sm font-medium">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 flex-none rotate-45 rounded-[2px] bg-red"
                />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl rounded-xl border border-line-gold bg-surface px-5 py-4 text-sm leading-7 text-fg">
            {home.audience.beginnerNote}
          </p>
        </Section>
      </div>

      {/* ── Founder teaser ───────────────────────────────────────── */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto w-64 sm:w-72">
            <Image
              src="/brand/founder.jpg"
              alt={home.founderTeaser.name}
              width={640}
              height={640}
              className="rounded-full border border-line-gold"
            />
          </div>
          <div>
            <SectionTitle title={home.founderTeaser.title} />
            <p className="font-display mt-5 text-2xl text-gold-bright">{home.founderTeaser.name}</p>
            <p className="mt-2 text-sm leading-7 text-dim">{home.founderTeaser.roles}</p>
            <p className="mt-5 max-w-xl text-base leading-8 text-dim">{home.founderTeaser.body}</p>
            <Link href={href(locale, "/about/")} className="btn btn-outline mt-7">
              {dict.cta.aboutFounder}
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Advantages ───────────────────────────────────────────── */}
      <div className="border-y border-line bg-surface/50">
        <Section>
          <SectionTitle title={home.advantages.title} sub={home.advantages.sub} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {home.advantages.items.map((item, i) => (
              <div key={item.title} className="card p-5">
                <span className="text-xs font-bold tracking-widest text-gold" dir="ltr">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-dim">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="font-display mx-auto mt-12 max-w-2xl text-center text-xl leading-relaxed text-gold-bright sm:text-2xl">
            «{home.advantages.keyMessage}»
          </p>
        </Section>
      </div>

      {/* ── Courses teaser ───────────────────────────────────────── */}
      <Section>
        <SectionTitle title={home.coursesTeaser.title} sub={home.coursesTeaser.sub} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.coursesTeaser.cards.map((card) => (
            <Link
              key={card.title}
              href={href(locale, "/courses/")}
              className="card block p-6"
            >
              <h3 className="font-display text-xl text-gold-bright" dir="ltr">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-dim">{card.body}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href={href(locale, "/courses/")} className="btn btn-outline">
            {dict.cta.seeCourses}
          </Link>
        </div>
      </Section>

      {/* ── Learner path ─────────────────────────────────────────── */}
      <div className="border-y border-line bg-surface/50">
        <Section>
          <SectionTitle title={home.path.title} sub={home.path.sub} />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {home.path.steps.map((step, i) => (
              <li key={step} className="card flex items-start gap-4 p-5">
                <span className="step-num">{i + 1}</span>
                <span className="pt-1.5 text-sm leading-7 text-fg">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl rounded-xl border border-line-gold bg-surface px-5 py-4 text-sm leading-7 text-fg">
            {home.path.beginnerNote}
          </p>
        </Section>
      </div>

      <CtaBand locale={locale} />
    </>
  );
}
