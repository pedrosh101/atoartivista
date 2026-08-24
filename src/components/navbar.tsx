"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);


const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  

  const links = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/projeto-vunje", label: "Projeto Vunje" },
    { href: "/acervo", label: "Galeria" },
    { href: "/contato", label: "Contato" },
  ];

  return (
<header
  className={`fixed inset-x-0 top-0 z-50 font-urbanist transition-colors duration-500 ${
    isScrolled ? "bg-clr2" : "bg-transparent"
  }`}
>
      {/* DESKTOP */}
      <div className="hidden lg:flex justify-center px-12 py-8">
        <nav className="flex items-center gap-10 text-sm tracking-wide text-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* MOBILE - BOTÃO MENU */}
      <div className="flex lg:hidden justify-end p-6">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white"
          aria-label="Abrir menu"
        >
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="currentColor"
          >
            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
          </svg>
        </button>
      </div>

      {/* OVERLAY + MENU MOBILE */}
      <div
        className={`fixed inset-0 z-50 bg-black/75 transition-opacity duration-700 ${
          isOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          ref={navRef}
          className={`fixed right-0 top-0 flex h-full w-full transform flex-col p-10 text-white transition-transform duration-700 ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* BOTÃO FECHAR */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path
                  fill="currentColor"
                  d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                />
              </svg>
            </button>
          </div>

          {/* LINKS */}
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