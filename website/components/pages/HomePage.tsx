import Image from "next/image";
import Link from "next/link";
import { dictionaries, href, type Locale } from "@/content";
import { Section, SectionTitle } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import CertificateGallery from "@/components/CertificateGallery";
import ContactChoice from "@/components/ContactChoice";

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
              <ContactChoice locale={locale} className="btn btn-gold text-base">
                {dict.cta.consult}
              </ContactChoice>
              <Link href={href(locale, "/courses/")} className="btn btn-outline text-base">
                {dict.cta.seeCourses}
              </Link>
            </div>
            {locale === "fa" && (
              <ContactChoice
                locale={locale}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-line-gold bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-bright transition-colors hover:bg-gold/15"
              >
                <span aria-hidden="true">🎁</span>
                یک جلسه آزمایشی رایگان پس از پیش‌ثبت‌نام
              </ContactChoice>
            )}
            <p className="mt-8 text-sm tracking-wide text-dim" dir="ltr">
              {dict.brand.sloganIntl} · {dict.brand.sloganZh}
            </p>
          </div>

          <div className="relative mx-auto hidden max-w-md lg:block">
            <div className="rounded-[2rem] border border-line-gold bg-[#f0ead9] p-5 shadow-2xl shadow-black/40">
              <Image
                src="/brand/logo-primary.svg"
                alt="MR CHINESE — نشان گفت‌وگو، یین‌ویانگ و دو ماهی"
                width={980}
                height={940}
                priority
                className="h-auto w-full"
              />
            </div>
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
          <div className="overflow-hidden rounded-xl border border-line-gold bg-[#f0ead9] p-6 sm:p-8">
            <Image
              src="/brand/logo-primary.svg"
              alt="MR CHINESE"
              width={980}
              height={940}
              className="mx-auto h-auto w-full max-w-sm"
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

      {locale === "fa" && (
        <div className="border-y border-line bg-surface/50">
          <Section>
            <div className="bg-lattice relative overflow-hidden rounded-2xl border border-line-gold bg-surface px-6 py-9 shadow-[0_18px_55px_-30px_rgba(201,162,75,0.45)] sm:px-10 sm:py-11">
              <div
                aria-hidden="true"
                className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
              />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <span className="kicker">یک فرصت برای انتخاب مطمئن‌تر</span>
                  <h2 className="font-display mt-4 text-2xl leading-relaxed text-fg sm:text-3xl">
                    هنوز برای ثبت‌نام مطمئن نیستید؟
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-dim">
                    در یک جلسه آزمایشی رایگان شرکت کنید، با شیوه تدریس آشنا شوید و سپس با اطمینان تصمیم بگیرید.
                  </p>
                </div>
                <ContactChoice
                  locale={locale}
                  className="btn btn-gold w-full whitespace-nowrap text-base sm:w-auto"
                  ariaLabel="رزرو جلسه آزمایشی رایگان"
                >
                  رزرو جلسه آزمایشی رایگان
                </ContactChoice>
              </div>
            </div>
          </Section>
        </div>
      )}

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

      {locale === "fa" && (
        <Section>
          <SectionTitle
            kicker="MR CHINESE"
            title="نمونه گواهی‌نامه‌های آموزشی"
            sub="نمونه گواهی‌هایی که پس از ارزیابی آموزشی و تکمیل هر مرحله برای زبان‌آموزان صادر می‌شوند. برای مشاهده جزئیات، روی هر مدرک کلیک کنید."
          />
          <CertificateGallery />
          <p className="mt-8 max-w-4xl rounded-xl border border-line-gold bg-surface px-5 py-4 text-sm leading-7 text-fg">
            این گواهی‌ها توسط مجموعه آموزشی مستر چاینیز و پس از تکمیل دوره و ارزیابی آموزشی صادر می‌شوند و جایگزین مدرک رسمی آزمون بین‌المللی HSK نیستند.
          </p>
        </Section>
      )}

      {locale === "fa" && (
        <div className="border-y border-line bg-surface/50">
          <Section>
            <div className="mx-auto max-w-4xl text-center">
              <span className="kicker">پیش‌ثبت‌نام دوره جدید</span>
              <h2 className="font-display mt-4 text-2xl leading-relaxed text-fg sm:text-3xl">
                پیش‌ثبت‌نام و رزرو جلسه آزمایشی رایگان
              </h2>
              <p className="mt-4 text-base leading-8 text-dim">
                برای پیش‌ثبت‌نام و رزرو جلسه آزمایشی رایگان، لطفاً مشخصات زیر را در بله یا تلگرام برای ما ارسال کنید:
              </p>
              <ul className="mx-auto mt-8 grid max-w-3xl gap-3 text-start sm:grid-cols-2">
                {["نام و نام خانوادگی", "سن", "شماره تماس فعال", "هدف از یادگیری زبان چینی"].map((item) => (
                  <li key={item} className="card flex items-center gap-3 px-5 py-4 text-sm font-semibold text-fg">
                    <span aria-hidden="true" className="h-2 w-2 flex-none rotate-45 rounded-[2px] bg-red" />
                    {item}
                  </li>
                ))}
                <li className="card flex items-start gap-3 px-5 py-4 text-sm font-semibold leading-7 text-fg sm:col-span-2">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rotate-45 rounded-[2px] bg-red" />
                  از چه طریقی با مستر چاینیز آشنا شدید؟ (دیوار، رستم‌خانی، سایت، کانال‌های مستر چاینیز یا معرفی دوستان)
                </li>
              </ul>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="https://ble.ir/mrchinese963" target="_blank" rel="noopener noreferrer" className="btn btn-gold min-h-12">
                  ارسال مشخصات در بله — بدون نیاز به فیلترشکن
                </a>
                <a href="https://t.me/Mrchinese_Hsk" target="_blank" rel="noopener noreferrer" className="btn btn-outline min-h-12">
                  ارسال مشخصات در تلگرام
                </a>
              </div>
            </div>
          </Section>
        </div>
      )}

      {locale === "fa" && (
        <Section>
          <SectionTitle
            kicker="کانال‌های رسمی مستر چاینیز"
            title="هنوز برای شروع کلاس آماده نیستید؟"
            sub="تا زمان شروع دوره‌ها، از مطالب آموزشی و تجاری مستر چاینیز استفاده کنید و اطلاعیه‌های ثبت‌نام و کلاس‌ها را از کانال‌های رسمی ما دنبال کنید."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="card flex flex-col p-6">
              <h3 className="font-display text-xl text-gold-bright">کانال آموزش زبان چینی در بله</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-dim">واژگان، جمله‌های کاربردی، نکات HSK و اطلاعیه‌های کلاس‌ها</p>
              <a href="https://ble.ir/mrchinese" target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-6">
                عضویت در کانال آموزشی بله
              </a>
            </div>
            <div className="card flex flex-col p-6">
              <h3 className="font-display text-xl text-gold-bright">کانال تجاری مستر چاینیز در تلگرام</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-dim">محتوای زبان تجاری، ارتباط با چین و نکات کاربردی کسب‌وکار</p>
              <a href="https://t.me/mrchinese_business" target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-6">
                عضویت در کانال تجاری تلگرام
              </a>
            </div>
          </div>
        </Section>
      )}

      <CtaBand locale={locale} />
    </>
  );
}
