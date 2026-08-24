import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'


export default function ProjetoVunje() {
  return (
    <>
    
    <Navbar />
    <main className="bg-clr1 text-clr2 font-open-sans">

      {/* HERO */}
      <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/projeto-vunje/a.webp"
          alt="Crianças do Projeto Vunje em atividade"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-clr2/80 via-clr2/10 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between px-6 py-10 md:px-16 md:py-14">
          <p className="font-urbanist text-xs tracking-[0.3em] text-clr1/80 uppercase">
            Gongombira · Ilhéus, BA
          </p>

          <div className="max-w-4xl">
            <p className="mb-4 font-urbanist text-sm tracking-[0.2em] text-clr5 uppercase">
              Projeto Vunje
            </p>
            <h1 className="font-urbanist text-4xl leading-[1.05] text-clr1 sm:text-6xl md:text-7xl">
              Criança fazendo arte
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-28 md:px-16 md:py-40">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <p className="font-urbanist text-sm tracking-[0.2em] text-clr4/70 uppercase md:col-span-3">
            O projeto
          </p>
          <p className="font-urbanist text-2xl leading-snug text-clr2 sm:text-3xl md:col-span-9 md:text-4xl">
            Desenvolvido no bairro Alto da Conquista, em Ilhéus (BA), o Vunje
            oferece capoeira, dança afro, percussão, cinema e artes plásticas
            para 50 crianças e adolescentes — ocupação, convivência e
            aprendizado artístico para ampliar suas perspectivas de vida e
            fortalecer sua identidade cultural.
          </p>
        </div>
      </section>

      {/* SOBRE / IMAGEM */}
      <section className="mx-auto max-w-6xl px-6 pb-28 md:px-16 md:pb-40">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:col-span-5">
            <Image
              src="/projeto-vunje/2.webp"
              alt="Atividade artística do Projeto Vunje"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="mb-6 font-urbanist text-sm tracking-[0.2em] text-clr4/70 uppercase">
              Parceiro executor
            </p>
            <h2 className="mb-6 font-urbanist text-3xl leading-tight text-clr2 md:text-4xl">
              Gongombira de Cultura e Cidadania
            </h2>
            <p className="max-w-md text-base leading-relaxed text-clr4">
              Organização comunitária do Alto da Conquista que atua na
              promoção da cultura afro-brasileira e no fortalecimento da
              cidadania. Fundada para preservar e difundir as tradições
              afrodescendentes, a Gongombira idealiza e executa o Projeto
              Vunje, com apoio da ATO.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto h-px w-full max-w-6xl bg-clr4/15" />

      {/* PROGRAMAÇÃO */}
      <section className="mx-auto max-w-6xl px-6 py-28 md:px-16 md:py-40">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12">
          <p className="font-urbanist text-sm tracking-[0.2em] text-clr4/70 uppercase md:col-span-3">
            Programação
          </p>
          <h2 className="font-urbanist text-3xl leading-tight text-clr2 md:col-span-9 md:text-4xl">
            Sábados, das 8h às 17h
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 border-b border-clr4/20 pb-4 font-urbanist text-lg text-clr2">
              Manhã
            </p>
            <ul className="space-y-3 text-base text-clr4">
              <li>Oficinas de artes</li>
              <li>Teatro</li>
              <li>Percussão</li>
            </ul>
          </div>

          <div>
            <p className="mb-6 border-b border-clr4/20 pb-4 font-urbanist text-lg text-clr2">
              Tarde
            </p>
            <ul className="space-y-3 text-base text-clr4">
              <li>Capoeira</li>
              <li>Dança</li>
            </ul>
          </div>
        </div>

        <div className="relative mt-24 aspect-[16/7] w-full overflow-hidden">
          <Image
            src="/projeto-vunje/3.webp"
            alt="Roda de capoeira do Projeto Vunje"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {[
            {
              t: 'Cine-debate',
              d: 'Espaço de reflexão e discussão após a exibição de filmes.',
            },
            {
              t: 'Passeios e eventos',
              d: 'Atividades externas que ampliam o horizonte cultural dos participantes.',
            },
            {
              t: 'Ensaios semanais',
              d: 'Preparação para apresentações culturais e artísticas.',
            },
            {
              t: 'Reunião pedagógica',
              d: 'Toda quarta, a equipe planeja e avalia as atividades da semana.',
            },
          ].map((item) => (
            <div key={item.t}>
              <p className="mb-2 font-urbanist text-base text-clr2">{item.t}</p>
              <p className="text-sm leading-relaxed text-clr4">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMPLIAÇÃO 2025 */}
      <section className="mx-auto max-w-6xl px-6 pb-28 md:px-16 md:pb-40">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="mb-6 font-urbanist text-sm tracking-[0.2em] text-clr4/70 uppercase">
              Ampliação em 2025
            </p>
            <h2 className="mb-6 font-urbanist text-3xl leading-tight text-clr2 md:text-4xl">
              Apoio psicossocial
            </h2>
            <p className="max-w-md text-base leading-relaxed text-clr4">
              Iniciado no final de 2024, o eixo de apoio psicossocial oferece
              acompanhamento emocional e psicológico às crianças e
              adolescentes, fortalecendo autoestima, saúde mental e a
              capacidade de enfrentar os desafios do cotidiano. Alunos de
              psicologia já atuam como voluntários, 4 horas por semana, e
              um(a) bolsista será orientado(a) pela professora Mariana Gois,
              da Faculdade de Ilhéus.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-clr4">
              O ano também será marcado por um esforço estratégico de
              captação de recursos — editais, parcerias institucionais e
              apoio de empresas e pessoas físicas — para garantir a
              sustentabilidade do Vunje a longo prazo.
            </p>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden md:col-span-5 md:col-start-8">
            <Image
              src="/projeto-vunje/4.webp"
              alt="Acompanhamento das crianças do Projeto Vunje"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ANCESTRALIDADE — momento de destaque */}
      <section className="bg-clr2 px-6 py-28 text-clr1 md:px-16 md:py-40">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 font-urbanist text-sm tracking-[0.2em] text-clr5 uppercase">
            Ancestralidade e educação antirracista
          </p>
          <p className="font-urbanist text-2xl leading-snug sm:text-3xl md:text-4xl">
            As crianças e adolescentes são incentivados a reconhecer e
            valorizar suas raízes africanas e indígenas — a arte como
            ferramenta para debater e desconstruir estereótipos raciais,
            promovendo autoestima, igualdade e respeito à diversidade.
          </p>

          <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative aspect-square overflow-hidden">
              <Image src="/projeto-vunje/5.webp" alt="Dança afro do Projeto Vunje" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="/projeto-vunje/6.webp" alt="Percussão do Projeto Vunje" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden sm:hidden md:block">
              <Image src="/projeto-vunje/1.webp" alt="Crianças do Projeto Vunje" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CRÉDITOS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-16">
        <div className="flex flex-col gap-6 border-t border-clr4/15 pt-10 text-sm text-clr4 sm:flex-row sm:justify-between">
          <p>Realização: Gongombira de Cultura e Cidadania</p>
          <p>Apoio: ATO</p>
          <p>Alto da Conquista · Ilhéus, BA</p>
        </div>
      </section>
    </main>
    </>
  )
}