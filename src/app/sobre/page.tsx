import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Container } from "@/components/container";
import { getI18n } from "@/i18n/server";

const RELATORIOS = [
  { ano: "2025", href: "https://bit.ly/RelatorioATO25" },
  {
    ano: "2024",
    href: "https://www.canva.com/design/DAGdboX6Qps/Rio_hHRP-2YieYEcz1yWgg/edit?utm_content=DAGdboX6Qps&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    ano: "2023",
    href: "https://drive.google.com/file/d/1TROfOuE9-SX2lZo5oiMnw5QbsyFNibp3/view?usp=sharing",
  },
];

const eyebrow =
  "font-urbanist text-sm tracking-[0.25em] text-clr4/70 uppercase";

export default async function Sobre() {
  const { t } = await getI18n();
  const a = t.about;

  return (
    <>
      <Navbar />

      <main className="bg-clr1 font-open-sans">
        {/* HERO */}
        <section className="overflow-hidden bg-clr2 pb-20 pt-32 text-clr1 md:pb-32 md:pt-40">
          <Container>
            <p className="mb-10 font-urbanist text-sm tracking-[0.25em] text-clr5 uppercase">
              {a.eyebrow}
            </p>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end md:gap-8">
              <h1 className="font-urbanist text-4xl leading-[1.08] sm:text-5xl md:col-span-7 md:text-6xl">
                {a.title}
              </h1>

              <p className="max-w-sm text-base leading-relaxed text-clr1/75 md:col-span-4 md:col-start-9">
                {a.lead}
              </p>
            </div>

            <div className="relative mt-16 ml-auto aspect-[3/4] w-2/3 max-w-xs overflow-hidden sm:w-1/2 md:mt-24">
              <Image src="/sobre/1.webp" alt={a.heroAlt} fill className="object-cover" />
            </div>
          </Container>
        </section>

        {/* ÍNDICE */}
        <nav className="border-b border-clr4/15">
          <Container className="flex flex-wrap gap-x-8 gap-y-3 py-6">
            {a.index.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-urbanist text-sm text-clr4 transition-colors hover:text-clr2"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>

        {/* MISSÃO */}
        <section id="missao" className="scroll-mt-20 py-24 md:py-36">
          <Container>
            <p className={`mb-8 ${eyebrow}`}>{a.mission.eyebrow}</p>

            <p className="max-w-3xl font-urbanist text-2xl leading-snug text-clr2 sm:text-3xl md:text-4xl">
              {a.mission.text}
            </p>

            <div className="mt-16 flex flex-wrap gap-3">
              {a.mission.principles.map((p) => (
                <span
                  key={p}
                  className="border-b-2 border-clr5 pb-1 font-urbanist text-sm text-clr2"
                >
                  {p}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <Container>
          <div className="h-px bg-clr4/15" />
        </Container>

        {/* ESTRATÉGIAS */}
        <section id="estrategias" className="scroll-mt-20 py-24 md:py-36">
          <Container>
            <p className={`mb-16 ${eyebrow}`}>{a.strategies.eyebrow}</p>

            <div className="grid grid-cols-1 gap-px overflow-hidden bg-clr4/15 sm:grid-cols-2">
              {a.strategies.items.map((e) => (
                <div key={e.n} className="bg-clr1 p-8 md:p-12">
                  <p className="mb-8 font-urbanist text-5xl text-clr5">{e.n}</p>
                  <p className="mb-4 font-urbanist text-xl text-clr2">{e.t}</p>
                  <p className="max-w-xs text-sm leading-relaxed text-clr4">{e.d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* HISTÓRIA */}
        <section id="historia" className="scroll-mt-20 bg-clr3 py-24 md:py-36">
          <Container>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className={`mb-8 ${eyebrow}`}>{a.history.eyebrow}</p>
                <p className="mb-6 text-base leading-relaxed text-clr4">{a.history.p1}</p>
                <p className="text-base leading-relaxed text-clr4">{a.history.p2}</p>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden md:col-span-6 md:col-start-7">
                <Image
                  src="/sobre/2.webp"
                  alt={a.history.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* RELATÓRIOS */}
        <section id="relatorios" className="scroll-mt-20 py-24 md:py-36">
          <Container>
            <p className={`mb-16 ${eyebrow}`}>{a.reports.eyebrow}</p>

            <div className="max-w-md border-t border-clr4/15">
              {RELATORIOS.map((r) => (
                <a
                  key={r.ano}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-clr4/15 py-6 transition-colors hover:border-clr2"
                >
                  <span className="font-urbanist text-2xl text-clr2">{r.ano}</span>
                  <span className="font-urbanist text-sm text-clr4 transition-colors group-hover:text-clr2">
                    {a.reports.view}
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
