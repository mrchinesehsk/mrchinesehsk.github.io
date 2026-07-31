import { dictionaries, type Locale } from "@/content";
import { Section, SectionTitle } from "@/components/Section";
import CtaBand from "@/components/CtaBand";

export default function FaqPage({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <>
      <div className="bg-lattice border-b border-line">
        <Section className="!py-14 sm:!py-16">
          <SectionTitle kicker={dict.brand.nameLatin} title={dict.faq.title} sub={dict.faq.sub} />
        </Section>
      </div>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {dict.faq.items.map((item, i) => (
            <details key={item.q} className="faq" open={i === 0}>
              <summary>
                <span className="text-sm leading-7 sm:text-base">{item.q}</span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-8 text-dim">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} />
    </>
  );
}
