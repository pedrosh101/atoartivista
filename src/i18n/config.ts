export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

/** Idioma padrão do site. */
export const defaultLocale: Locale = "pt";

/** Nome do cookie onde a escolha do visitante fica salva. */
export const LOCALE_COOKIE = "ato-locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** Texto que existe nos dois idiomas. Se faltar `en`, cai para `pt`. */
export type Localized = { pt: string; en?: string };

export function localize(text: Localized | undefined, locale: Locale): string {
  if (!text) return "";
  return text[locale] ?? text.pt;
}

/** Troca `{chave}` pelos valores: fmt("Retrato de {name}", { name: "Ana" }) */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ""));
}
