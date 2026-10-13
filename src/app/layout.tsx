import type { Metadata } from "next";
import { Urbanist, Open_Sans } from "next/font/google";
import { I18nProvider } from "@/i18n/client";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/i18n/server";

import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist-src" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans-src" });

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await getLocale());
  return { title: t.meta.title, description: t.meta.description };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"}>
      <body className={`${urbanist.variable} ${openSans.variable}`}>
        <I18nProvider locale={locale} dictionary={getDictionary(locale)}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
