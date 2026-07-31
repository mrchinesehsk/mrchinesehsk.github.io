export function Section({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({
  kicker,
  title,
  sub,
}: {
  kicker?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="font-display mt-3 text-3xl leading-snug text-fg sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-8 text-dim">{sub}</p>}
    </div>
  );
}
