import { Inter, Noto_Sans_SC, Noto_Serif_SC, Playfair_Display, Vazirmatn } from "next/font/google";
import { dictionaries, htmlLang, type Locale } from "@/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallFab from "@/components/CallFab";
import "@/app/globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function BaseLayout({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const dict = dictionaries[locale];
  const fontVars = [
    vazirmatn.variable,
    inter.variable,
    playfair.variable,
    notoSansSC.variable,
    notoSerifSC.variable,
  ].join(" ");

  return (
    <html lang={htmlLang[locale]} dir={dict.dir} className={`${fontVars} h-full antialiased`}>
      <body className="flex min-h-screen flex-col bg-bg text-fg">
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <CallFab locale={locale} />
      </body>
    </html>
  );
}
