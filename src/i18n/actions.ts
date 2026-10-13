"use server";

import { cookies } from "next/headers";
import { isLocale, LOCALE_COOKIE } from "./config";

/** Salva o idioma escolhido. A rota atual é re-renderizada automaticamente. */
export async function setLocale(locale: string) {
  if (!isLocale(locale)) return;
  const store = await cookies();
  store.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
