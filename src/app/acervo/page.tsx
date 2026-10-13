import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Container } from "@/components/container";
import ArtistsSheet from "@/components/artistsSheet";
import { artistsSorted } from "@/app/data/artists";
import { fmt } from "@/i18n/config";
import { getI18n } from "@/i18n/server";

export default async function AcervoPage() {
  const { t } = await getI18n();
  const c = t.collection;

  return (
    <>
      <Navbar />

      <main className="bg-clr1 pt-32 font-open-sans text-clr2 md:pt-40">
        {/* CABEÇALHO */}
        <Container>
          <header className="flex flex-col gap-8 border-b border-clr4/15 pb-10 md:flex-row md:items-end md:justify-between md:pb-14">
            <div className="max-w-2xl">
              <p className="mb-6 font-urbanist text-sm tracking-[0.25em] text-clr4/70 uppercase">
                {c.eyebrow}
              </p>
              <h1 className="mb-6 font-urbanist text-5xl leading-[1.05] md:text-7xl">
                {c.title}
              </h1>
              <p className="text-base leading-relaxed text-clr4">{c.intro}</p>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <p className="font-urbanist text-sm text-clr4/70">
                {fmt(
                  artistsSorted.length === 1 ? c.artistsOne : c.artistsMany,
                  {
                    n: artistsSorted.length,
                  },
                )}
              </p>
              <ArtistsSheet
                artists={artistsSorted.map((a) => ({
                  slug: a.slug,
                  name: a.name,
                  portrait: a.portrait.src,
                  works: a.works.length,
                }))}
              />
            </div>
          </header>
        </Container>

        {/* GRADE (masonry: respeita a proporção de cada obra) */}
        <Container className="py-12 md:py-16">
          <ul className="columns-1 gap-x-6 sm:columns-2 lg:columns-3">
            {artistsSorted.map((artist) => {
              const cover = artist.works[0].image;
              return (
                <li key={artist.slug} className="mb-12 break-inside-avoid">
                  <Link
                    href={`/artists/${artist.slug}`}
                    className="group block"
                  >
                    <div className="overflow-hidden bg-clr4/5">
                      <Image
                        src={cover.src}
                        alt={artist.name}
                        width={cover.width}
                        height={cover.height}
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="h-72 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-clr4/15 pb-3 transition-colors group-hover:border-clr2">
                      <h2 className="font-urbanist text-xl">{artist.name}</h2>
                      <span className="shrink-0 font-urbanist text-sm text-clr4/70">
                        {fmt(
                          artist.works.length === 1 ? c.worksOne : c.worksMany,
                          {
                            n: artist.works.length,
                          },
                        )}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </main>

      <Footer />
    </>
  );
}
