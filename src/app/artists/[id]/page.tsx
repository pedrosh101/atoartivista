import Navbar from "@/components/navbar";
import { artists } from "../../../app/data/artists";
import Image from "next/image";

interface ArtistPageProps {
  params: Promise<{ id: string }>;
}

/**
 * Página do artista.
 *
 * Estrutura em duas linhas, como pedido:
 * 1. Bloco elegante: foto do artista (artist.bg) + nome/bio lado a lado,
 *    em espaço negativo generoso, seguindo o mesmo padrão das páginas
 *    Vunje / Sobre (eyebrow em maiúsculas, título em font-urbanist).
 * 2. A obra (artist.picture) em destaque, bem grande, quase full-bleed.
 *
 * Se o `data/artists` tiver (ou vier a ter) campos como `bio`, `tecnica`,
 * `ano` ou `dimensoes`, é só descomentar os trechos indicados abaixo —
 * deixei a estrutura pronta para recebê-los sem quebrar o que já existe.
 *
 * Se a Navbar do site não estiver no layout pai, adicione <Navbar />
 * antes da tag <main>, como foi feito na página /sobre.
 */

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { id } = await params;
  const artist = artists.find((a) => a.id === Number(id));

  if (!artist) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-clr1 text-clr2">
        <p className="font-urbanist text-lg">Artista não encontrado</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-clr1 font-open-sans text-clr2">
        {/* LINHA 1 — artista + informações */}
        <section className="px-6 pt-16 pb-20 md:px-16 md:pt-24 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden md:col-span-5 md:max-w-none">
              <Image
                src={artist.picture}
                alt={artist.title}
                className="h-full w-full object-cover"
                fill
              />
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <p className="mb-6 font-urbanist text-sm tracking-[0.25em] text-clr4/70 uppercase">
                Artista
              </p>
              <h1 className="mb-6 font-urbanist text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                {artist.title}
              </h1>
              <p className="max-w-md text-base leading-relaxed text-clr4">
                Aqui vai o texto e outras obras de {artist.title}.
              </p>

              {/* Campos opcionais, caso existam no data/artists:
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm text-clr4">
              {artist.tecnica && (
                <div>
                  <p className="text-clr4/60">Técnica</p>
                  <p className="text-clr2">{artist.tecnica}</p>
                </div>
              )}
              {artist.ano && (
                <div>
                  <p className="text-clr4/60">Ano</p>
                  <p className="text-clr2">{artist.ano}</p>
                </div>
              )}
            </div>
            */}
            </div>
          </div>
        </section>

        {/* LINHA 2 — a obra, em grande destaque */}
        <section className="px-6 pb-24 md:px-16 md:pb-40">
          <p className="mb-8 font-urbanist text-sm tracking-[0.25em] text-clr4/70 uppercase">
            Obra
          </p>

          <div className="relative aspect-[14/15] w-full overflow-hidden">
            <Image
              src={artist.bg}
              alt={artist.title}
              className="object-cover"
              fill
            />
          </div>
        </section>
      </main>
    </>
  );
}
