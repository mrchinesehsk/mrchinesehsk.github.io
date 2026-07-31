import Link from "next/link";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ subsets: ["arabic", "latin"] });

export const metadata = {
  title: "404 | MR CHINESE",
};

export default function GlobalNotFound() {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body className="grid min-h-screen place-items-center bg-bg px-6 text-fg">
        <div className="text-center">
          <p className="font-display text-6xl text-gold-bright">۴۰۴</p>
          <h1 className="mt-4 text-xl font-bold">این صفحه پیدا نشد</h1>
          <p className="mt-2 text-sm text-dim" dir="ltr">
            Page not found · 页面未找到
          </p>
          <Link href="/" className="btn btn-gold mt-8">
            بازگشت به خانه
          </Link>
        </div>
      </body>
    </html>
  );
}
