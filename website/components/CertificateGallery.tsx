"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Certificate = {
  id: string;
  title: string;
  thumb: string;
  full: string;
  width: number;
  height: number;
  featured?: boolean;
};

const certificates: Certificate[] = [
  { id: "progress-hsk1", title: "گواهی پیشرفت آموزشی — ترم اول HSK1", thumb: "/certificates/progress-hsk1-thumb.webp", full: "/certificates/progress-hsk1.webp", width: 1086, height: 1536, featured: true },
  ...[1, 2, 3, 4, 5, 6].map((level) => ({
    id: `hsk${level}`,
    title: `گواهی پایان دوره HSK${level}`,
    thumb: `/certificates/hsk${level}-thumb.webp`,
    full: `/certificates/hsk${level}.webp`,
    width: 1402,
    height: 1122,
  })),
];

export default function CertificateGallery() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const progress = certificates.find((item) => item.featured)!;
  const completion = certificates.filter((item) => !item.featured);

  const card = (item: Certificate) => (
    <button
      key={item.id}
      type="button"
      onClick={() => setSelected(item)}
      className="card group overflow-hidden p-0 text-start"
      aria-label={`نمایش بزرگ ${item.title}`}
    >
      <div className={`relative overflow-hidden bg-[#f7f1e4] ${item.featured ? "aspect-[3/4]" : "aspect-[5/4]"}`}>
        <Image
          src={item.thumb}
          alt={item.title}
          fill
          loading="lazy"
          sizes={item.featured ? "(min-width: 640px) 360px, 92vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"}
          className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <span className="flex items-center justify-between gap-3 border-t border-line px-4 py-3 text-sm font-bold text-fg">
        {item.title}
        <span className="text-xs font-medium text-gold-bright">مشاهده بزرگ‌تر</span>
      </span>
    </button>
  );

  return (
    <>
      <div className="mt-10">
        <h3 className="font-display text-xl text-gold-bright">گواهی پیشرفت آموزشی</h3>
        <div className="mt-4 max-w-sm">{card(progress)}</div>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-xl text-gold-bright">گواهی‌های پایان دوره</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {completion.map(card)}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute end-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/60 text-2xl text-white"
            aria-label="بستن تصویر"
          >
            ×
          </button>
          <div className="relative h-full w-full" onClick={(event) => event.stopPropagation()}>
            <Image
              src={selected.full}
              alt={selected.title}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
