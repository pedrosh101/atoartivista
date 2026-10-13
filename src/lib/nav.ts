import type { Dictionary } from "@/i18n/dictionaries";

type NavKey = keyof Pick<
  Dictionary["nav"],
  "home" | "about" | "vunje" | "collection" | "contact"
>;

/** Rotas principais do site — usadas pela Navbar e pelo Footer. */
export const NAV_ITEMS: { href: string; key: NavKey }[] = [
  { href: "/", key: "home" },
  { href: "/sobre", key: "about" },
  { href: "/projeto-vunje", key: "vunje" },
  { href: "/acervo", key: "collection" },
  { href: "/contato", key: "contact" },
];

/**
 * Páginas em que a Navbar nasce com fundo colorido (já que o fundo da página
 * é claro e o texto da Navbar é branco). Nas demais, ela só ganha fundo no scroll.
 */
export const SOLID_NAVBAR_PREFIXES = ["/acervo", "/artists", "/contato"];
