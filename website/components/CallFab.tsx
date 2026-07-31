import { dictionaries, type Locale } from "@/content";

/** Floating call button — primary action, always reachable on mobile. */
export default function CallFab({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <a
      href={dict.phone.tel}
      className="btn btn-gold fixed bottom-5 end-5 z-50 shadow-[0_10px_30px_-8px_rgba(201,162,75,0.55)] md:hidden"
      aria-label={dict.cta.call}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      {dict.cta.call}
    </a>
  );
}
