"use client";

import { useTransition } from "react";
import { setLocale } from "@/i18n/actions";
import { locales, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/client";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t } = useI18n();
  const [pending, startTransition] = useTransition();

  const change = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => setLocale(next));
  };

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={cn("flex items-center gap-2 text-sm", pending && "opacity-60", className)}
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden className="opacity-40">|</span>}
          <button
            type="button"
            onClick={() => change(l)}
            lang={l}
            aria-pressed={l === locale}
            title={l === locale ? undefined : t.nav.switchTo}
            className={cn(
              "uppercase tracking-wide transition-opacity hover:opacity-70",
              l === locale ? "border-b border-clr5 font-semibold" : "opacity-70",
            )}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
