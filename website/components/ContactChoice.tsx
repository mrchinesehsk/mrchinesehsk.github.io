"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Locale } from "@/content";

const labels = {
  fa: {
    title: "راه ارتباطی خود را انتخاب کنید",
    body: "برای مشاوره، پیش‌ثبت‌نام یا رزرو جلسه آزمایشی، از بله یا تلگرام پیام بدهید.",
    bale: "ارتباط در بله — بدون نیاز به فیلترشکن",
    telegram: "ارتباط در تلگرام",
    close: "بستن",
  },
  en: {
    title: "Choose how to contact us",
    body: "Message us on Bale or Telegram for consultation, pre-enrollment, or a free trial session.",
    bale: "Contact us on Bale",
    telegram: "Contact us on Telegram",
    close: "Close",
  },
  zh: {
    title: "请选择联系方式",
    body: "如需咨询、预报名或预约免费试听课，请通过 Bale 或 Telegram 联系我们。",
    bale: "通过 Bale 联系",
    telegram: "通过 Telegram 联系",
    close: "关闭",
  },
} as const;

export default function ContactChoice({
  locale,
  children,
  className,
  ariaLabel,
}: {
  locale: Locale;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const text = labels[locale];

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" className={className} aria-label={ariaLabel} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/75 px-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-choice-title"
            className="card relative w-full max-w-md border-line-gold p-6 text-center shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute end-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-line text-dim transition-colors hover:text-fg"
              aria-label={text.close}
            >
              ✕
            </button>
            <h2 id="contact-choice-title" className="font-display pe-8 text-2xl text-fg">
              {text.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-dim">{text.body}</p>
            <div className="mt-7 flex flex-col gap-3">
              <a
                href="https://ble.ir/mrchinese963"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold min-h-12"
              >
                {text.bale}
              </a>
              <a
                href="https://t.me/Mrchinese_Hsk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline min-h-12"
              >
                {text.telegram}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
