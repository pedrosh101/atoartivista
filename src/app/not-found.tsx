import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getI18n } from "@/i18n/server";

export default async function NotFound() {
  const { t } = await getI18n();

  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-clr1 px-6 pt-24 text-center font-urbanist text-clr2">
        <p className="text-sm tracking-[0.25em] text-clr4/70 uppercase">404</p>
        <h1 className="text-4xl md:text-5xl">{t.notFound.title}</h1>
        <Link href="/" className="border-b border-clr5 pb-1 text-sm hover:opacity-70">
          {t.notFound.back}
        </Link>
      </main>
      <Footer />
    </>
  );
}
