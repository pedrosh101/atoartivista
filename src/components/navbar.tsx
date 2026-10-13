"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/client";
import { NAV_ITEMS, SOLID_NAVBAR_PREFIXES } from "@/lib/nav";
import LanguageSwitcher from "./languageSwitcher";

export default function Navbar() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Em algumas páginas o fundo colorido aparece desde o início
  const alwaysSolid = SOLID_NAVBAR_PREFIXES.some((p) => pathname.startsWith(p));
  const solid = alwaysSolid || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const links = NAV_ITEMS.map((item) => ({
    href: item.href,
    label: t.nav[item.key],
  }));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 font-urbanist transition-colors duration-500 ${
        solid ? "bg-clr2" : "bg-transparent"
      }`}
    >
      {/* DESKTOP */}
      <div className="relative hidden items-center justify-center px-12 py-8 lg:flex">
        <nav className="flex items-center gap-10 text-sm tracking-wide text-clr3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`transition-opacity hover:opacity-70 ${
                pathname === link.href ? "border-b border-clr5 pb-0.5" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher className="absolute right-12 text-clr3" />
      </div>

      {/* MOBILE - BARRA */}
      <div className="flex items-center justify-end gap-6 p-6 lg:hidden">
        <LanguageSwitcher className="text-clr3" />
        <button
          onClick={() => setIsOpen(true)}
          className="text-clr3"
          aria-label={t.nav.openMenu}
        >
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
          </svg>
        </button>
      </div>

      {/* OVERLAY + MENU MOBILE */}
      <div
        className={`fixed inset-0 z-50 bg-clr2/90 transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          ref={navRef}
          className={`fixed right-0 top-0 flex h-full w-full transform flex-col p-10 text-clr3 transition-transform duration-700 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} aria-label={t.nav.closeMenu}>
              <svg fill="none" viewBox="0 0 24 24" width="32" height="32">
                <path
                  fill="currentColor"
                  d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-16">
            <ul className="flex flex-col gap-10 text-2xl font-light">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
