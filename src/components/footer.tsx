import Link from "next/link";
import Image from "next/image";
import { getI18n } from "@/i18n/server";
import { NAV_ITEMS } from "@/lib/nav";
import { Container } from "./container";

export default async function Footer() {
  const { t } = await getI18n();

  return (
    <footer className="bg-clr2 border-t border-clr1/10 py-12 font-urbanist text-clr1">
      <Container className="flex flex-col gap-8">
        
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="inline-block transition-opacity hover:opacity-90">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={120} 
              height={40} 
              className="h-auto w-auto object-contain"
              priority
            />
          </Link>

          <nav aria-label={t.footer.navLabel}>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium tracking-wide">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-clr1/70 transition-colors duration-200 hover:text-clr1"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-clr1/20 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs tracking-wider text-clr1/50 sm:flex-row">
          <p>{t.footer.tagline}</p>
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>

      </Container>
    </footer>
  );
}
