import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'



const NAV = [
  { href: '#missao', label: 'Missão' },
  { href: '#estrategias', label: 'Estratégias' },
  { href: '#historia', label: 'História' },
  { href: '#relatorios', label: 'Relatórios' },
]

const PRINCIPIOS = ['Justiça social e racial', 'Equidade de gênero', 'Consciência ecológica']

const ESTRATEGIAS = [
  {
    n: '01',
    t: 'Investimento direto',
    d: 'Apoio direto e individualizado a artistas: formação, mentoria, oportunidades de remuneração e projetos dedicados à ocupação artística temporária.',
  },
  {
    n: '02',
    t: 'Investimento em escala',
    d: 'Ampliação do impacto por meio de projetos que beneficiam coletivamente comunidades e grupos vulneráveis, com foco em crianças e públicos em desenvolvimento.',
  },
]

const RELATORIOS = [
  { ano: '2025', href: 'https://bit.ly/RelatorioATO25' },
  {
    ano: '2024',
    href: 'https://www.canva.com/design/DAGdboX6Qps/Rio_hHRP-2YieYEcz1yWgg/edit?utm_content=DAGdboX6Qps&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  { ano: '2023', href: 'https://drive.google.com/file/d/1TROfOuE9-SX2lZo5oiMnw5QbsyFNibp3/view?usp=sharing' },
]

export default function Sobre() {
  return (
    <>
      <Navbar />
      

      <div className="bg-clr1 font-open-sans">
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-clr2 px-6 pb-20 pt-16 text-clr1 md:px-16 md:pb-32 md:pt-24">
          <p className="mb-10 font-urbanist text-sm tracking-[0.25em] text-clr5 uppercase">
            ATO Artivista
          </p>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end md:gap-8">
            <h1 className="font-urbanist text-4xl leading-[1.08] sm:text-5xl md:col-span-7 md:text-6xl">
              Arte como ferramenta de transformação social
            </h1>

            <p className="max-w-sm text-base leading-relaxed text-clr1/75 md:col-span-4 md:col-start-9">
              Incentivamos, produzimos e realizamos projetos artísticos e
              culturais, com foco em grupos em situação de vulnerabilidade
              socioeconômica.
            </p>
          </div>

          <div className="relative mt-16 ml-auto aspect-[3/4] w-2/3 max-w-xs overflow-hidden sm:w-1/2 md:mt-24">
            <Image src="/sobre/1.webp" alt="Ação da ATO Artivista" fill className="object-cover" />
          </div>
        </section>

        {/* ÍNDICE */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3 border-b border-clr4/15 px-6 py-6 md:px-16">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-urbanist text-sm text-clr4 transition-colors hover:text-clr2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* MISSÃO */}
        <section id="missao" className="scroll-mt-10 px-6 py-24 md:px-16 md:py-36">
          <p className="mb-8 font-urbanist text-sm tracking-[0.25em] text-clr4/70 uppercase">
            Missão
          </p>

          <p className="max-w-3xl font-urbanist text-2xl leading-snug text-clr2 sm:text-3xl md:text-4xl">
            Atuamos como agente transformador no cenário artístico e social,
            promovendo justiça social por meio de ações concretas que
            democratizam o acesso à arte.
          </p>

          <div className="mt-16 flex flex-wrap gap-3">
            {PRINCIPIOS.map((p) => (
              <span
                key={p}
                className="border-b-2 border-clr5 pb-1 font-urbanist text-sm text-clr2"
              >
                {p}
              </span>
            ))}
          </div>
        </section>

        <div className="mx-6 h-px bg-clr4/15 md:mx-16" />

        {/* ESTRATÉGIAS */}
        <section id="estrategias" className="scroll-mt-10 px-6 py-24 md:px-16 md:py-36">
          <p className="mb-16 font-urbanist text-sm tracking-[0.25em] text-clr4/70 uppercase">
            Estratégias
          </p>

          <div className="grid grid-cols-1 gap-px overflow-hidden bg-clr4/15 sm:grid-cols-2">
            {ESTRATEGIAS.map((e) => (
              <div key={e.n} className="bg-clr1 p-8 md:p-12">
                <p className="mb-8 font-urbanist text-5xl text-clr5">{e.n}</p>
                <p className="mb-4 font-urbanist text-xl text-clr2">{e.t}</p>
                <p className="max-w-xs text-sm leading-relaxed text-clr4">{e.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HISTÓRIA */}
        <section id="historia" className="scroll-mt-10 bg-clr3 px-6 py-24 md:px-16 md:py-36">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="mb-8 font-urbanist text-sm tracking-[0.25em] text-clr4/70 uppercase">
                Nossa história
              </p>
              <p className="mb-6 text-base leading-relaxed text-clr4">
                Desde a nossa fundação, em maio de 2023, empenhamo-nos em
                utilizar a arte como uma ferramenta para criar mudanças
                significativas em nossa sociedade.
              </p>
              <p className="text-base leading-relaxed text-clr4">
                Acreditamos no potencial da arte para inspirar, educar e unir
                comunidades. É com essa convicção que conduzimos nossas
                iniciativas e apoiamos projetos colaborativos, expandindo as
                possibilidades de criação, troca de experiências e impacto na
                comunidade local.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden md:col-span-6 md:col-start-7">
              <Image src="/sobre/2.webp" alt="Comunidade apoiada pela ATO Artivista" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* RELATÓRIOS — linha do tempo */}
        <section id="relatorios" className="scroll-mt-10 px-6 py-24 md:px-16 md:py-36">
          <p className="mb-16 font-urbanist text-sm tracking-[0.25em] text-clr4/70 uppercase">
            Relatórios de atividade
          </p>

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
                  Ver relatório ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20 md:px-16">
          <div className="border-t border-clr4/15 pt-10 text-sm text-clr4">
            <p>ATO Artivista · fundada em maio de 2023</p>
          </div>
        </section>
      </main>
      </div>
    </>
  )
}