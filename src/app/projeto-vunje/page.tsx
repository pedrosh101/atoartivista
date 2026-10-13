import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Container } from "@/components/container";
import { getI18n } from "@/i18n/server";

const eyebrow = "font-urbanist text-sm tracking-[0.2em] text-clr4/70 uppercase";

export default async function ProjetoVunje() {
  const { t } = await getI18n();
  const v = t.vunje;

  return (
    <>
      <Navbar />
      <main className="bg-clr1 font-open-sans text-clr2">
        {/* HERO */}
        <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
          <Image
            src="/projeto-vunje/a.webp"
            alt={v.heroAlt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-clr2/80 via-clr2/10 to-transparent" />

          <Container className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between py-10 md:py-14">
            <p className="pt-16 font-urbanist text-xs tracking-[0.3em] text-clr1/80 uppercase md:pt-14">
              {v.place}
            </p>

            <div className="max-w-4xl">
              <p className="mb-4 font-urbanist text-sm tracking-[0.2em] text-clr5 uppercase">
                {v.eyebrow}
              </p>
              <h1 className="font-urbanist text-4xl leading-[1.05] text-clr1 sm:text-6xl md:text-7xl">
                {v.title}
              </h1>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <section className="py-28 md:py-40">
          <Container className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <p className={`${eyebrow} md:col-span-3`}>{v.project.eyebrow}</p>
            <p className="font-urbanist text-2xl leading-snug text-clr2 sm:text-3xl md:col-span-9 md:text-4xl">
              {v.project.text}
            </p>
          </Container>
        </section>

        {/* PARCEIRO / IMAGEM */}
        <section className="pb-28 md:pb-40">
          <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden md:col-span-5">
              <Image
                src="/projeto-vunje/2.webp"
                alt={v.partner.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <p className={`mb-6 ${eyebrow}`}>{v.partner.eyebrow}</p>
              <h2 className="mb-6 font-urbanist text-3xl leading-tight text-clr2 md:text-4xl">
                {v.partner.title}
              </h2>
              <p className="max-w-md text-base leading-relaxed text-clr4">
                {v.partner.text}
              </p>
            </div>
          </Container>
        </section>

        <Container>
          <div className="h-px bg-clr4/15" />
        </Container>

        {/* PROGRAMAÇÃO */}
        <section className="py-28 md:py-40">
          <Container>
            <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12">
              <p className={`${eyebrow} md:col-span-3`}>{v.schedule.eyebrow}</p>
              <h2 className="font-urbanist text-3xl leading-tight text-clr2 md:col-span-9 md:text-4xl">
                {v.schedule.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
              <div>
                <p className="mb-6 border-b border-clr4/20 pb-4 font-urbanist text-lg text-clr2">
                  {v.schedule.morning}
                </p>
                <ul className="space-y-3 text-base text-clr4">
                  {v.schedule.morningItems.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-6 border-b border-clr4/20 pb-4 font-urbanist text-lg text-clr2">
                  {v.schedule.afternoon}
                </p>
                <ul className="space-y-3 text-base text-clr4">
                  {v.schedule.afternoonItems.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-24 aspect-[16/7] w-full overflow-hidden">
              <Image
                src="/projeto-vunje/3.webp"
                alt={v.schedule.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {v.schedule.extras.map((item) => (
                <div key={item.t}>
                  <p className="mb-2 font-urbanist text-base text-clr2">{item.t}</p>
                  <p className="text-sm leading-relaxed text-clr4">{item.d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* AMPLIAÇÃO 2025 */}
        <section className="pb-28 md:pb-40">
          <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6">
              <p className={`mb-6 ${eyebrow}`}>{v.expansion.eyebrow}</p>
              <h2 className="mb-6 font-urbanist text-3xl leading-tight text-clr2 md:text-4xl">
                {v.expansion.title}
              </h2>
              <p className="max-w-md text-base leading-relaxed text-clr4">
                {v.expansion.p1}
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-clr4">
                {v.expansion.p2}
              </p>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden md:col-span-5 md:col-start-8">
              <Image
                src="/projeto-vunje/4.webp"
                alt={v.expansion.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </Container>
        </section>

        {/* ANCESTRALIDADE — momento de destaque */}
        <section className="bg-clr2 py-28 text-clr1 md:py-40">
          <Container>
            <p className="mb-8 font-urbanist text-sm tracking-[0.2em] text-clr5 uppercase">
              {v.ancestry.eyebrow}
            </p>
            <p className="max-w-5xl font-urbanist text-2xl leading-snug sm:text-3xl md:text-4xl">
              {v.ancestry.text}
            </p>

            <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/projeto-vunje/5.webp" alt={v.ancestry.altDance} fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image src="/projeto-vunje/6.webp" alt={v.ancestry.altPercussion} fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden sm:hidden md:block">
                <Image src="/projeto-vunje/1.webp" alt={v.ancestry.altKids} fill className="object-cover" />
              </div>
            </div>
          </Container>
        </section>

        {/* CRÉDITOS */}
        <section className="py-20">
          <Container>
            <div className="flex flex-col gap-6 border-t border-clr4/15 pt-10 text-sm text-clr4 sm:flex-row sm:justify-between">
              <p>{v.credits.realization}</p>
              <p>{v.credits.support}</p>
              <p>{v.credits.place}</p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
