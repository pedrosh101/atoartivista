import { cookies } from "next/headers";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

/** Idioma atual (cookie) — para Server Components. */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : defaultLocale;
}

/** Idioma + dicionário — para Server Components. */
export async function getI18n() {
  const locale = await getLocale();
  return { locale, t: getDictionary(locale) };
}
