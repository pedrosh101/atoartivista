import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Container } from "@/components/container";
import { artists, getArtistBySlug, type Work } from "@/app/data/artists";
import { fmt, localize, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getI18n } from "@/i18n/server";

interface ArtistPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: ArtistPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  return { title: artist ? `${artist.name} · ATO Artivista` : "ATO Artivista" };
}

const eyebrow =
  "font-urbanist text-sm tracking-[0.25em] text-clr4/70 uppercase";

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) notFound();

  const { locale, t } = await getI18n();
  const a = t.artist;
  const bio = localize(artist.bio, locale);
  const contact = artist.contact;

  const contactLinks = [
    contact?.email && { label: contact.email, href: `mailto:${contact.email}` },
    contact?.instagram && {
      label: `@${contact.instagram.replace(/^@/, "")}`,
      href: `https://instagram.com/${contact.instagram.replace(/^@/, "")}`,
    },
    contact?.phone && {
      label: contact.phone,
      href: `tel:${contact.phone.replace(/[^\d+]/g, "")}`,
    },
    contact?.website && {
      label: contact.website.replace(/^https?:\/\//, ""),
      href: contact.website,
    },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <Navbar />

      <main className="bg-clr1 pt-28 font-open-sans text-clr2 md:pt-36">
        {/* OBRAS */}
        <section className="pb-24 md:pb-40">
          <Container>
            <Link
              href="/acervo"
              className="mb-12 inline-block font-urbanist text-sm text-clr4 transition-colors hover:text-clr2"
            >
              {a.backToCollection}
            </Link>
          </Container>

          <div className="space-y-24 md:space-y-36">
            {artist.works.map((work, i) => (
              <WorkBlock
                key={work.image.src}
                work={work}
                artistName={artist.name}
                locale={locale}
                t={t}
                priority={i === 0}
              />
            ))}
          </div>
        </section>
        {/* ARTISTA */}
        <section className="pb-20 md:pb-28">
          <Container>
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden md:col-span-5 md:max-w-none">
                <Image
                  src={artist.portrait.src}
                  alt={fmt(a.portraitAlt, { name: artist.name })}
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <p className={`mb-6 ${eyebrow}`}>{a.eyebrow}</p>
                <h1 className="mb-8 font-urbanist text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                  {artist.name}
                </h1>

                {bio && (
                  <p className="max-w-md whitespace-pre-line text-base leading-relaxed text-clr4">
                    {bio}
                  </p>
                )}

                {contactLinks.length > 0 && (
                  <div className="mt-10 border-t border-clr4/15 pt-6">
                    <p className="mb-3 font-urbanist text-sm text-clr4/70">
                      {a.contact}
                    </p>
                    <ul className="space-y-1 font-urbanist text-base">
                      {contactLinks.map((l) => (
                        <li key={l.href}>
                          <a
                            href={l.href}
                            target={
                              l.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel="noopener noreferrer"
                            className="border-b border-clr5 transition-opacity hover:opacity-70"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

function WorkBlock({
  work,
  artistName,
  locale,
  t,
  priority,
}: {
  work: Work;
  artistName: string;
  locale: Locale;
  t: Dictionary;
  priority: boolean;
}) {
  const a = t.artist;
  const title = localize(work.title, locale) || a.untitled;
  const technique = localize(work.technique, locale);
  const description = localize(work.description, locale);

  const yesNo = (v: boolean) => (v ? a.yes : a.no);
  const details = [
    technique && { label: a.labels.technique, value: technique },
    work.dimensions && { label: a.labels.dimensions, value: work.dimensions },
    work.date && { label: a.labels.date, value: work.date },
    work.framed !== undefined && {
      label: a.labels.frame,
      value: yesNo(work.framed),
    },
    work.certificate !== undefined && {
      label: a.labels.certificate,
      value: yesNo(work.certificate),
    },
    work.imageCredit && { label: a.labels.credit, value: work.imageCredit },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <figure>

      <div className="bg-clr1">
        <Image
          src={work.image.src}
          alt={`${title} — ${artistName}`}
          width="100"
          height="100"
          priority={priority}
          sizes="100vw"
          className="px-2 md:mx-auto md:h-[90vh] h-auto w-auto max-w-full object-contain"
        />
      </div>

      <Container>
        <figcaption className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 className="font-urbanist text-2xl leading-tight md:text-3xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-md whitespace-pre-line text-base leading-relaxed text-clr4">
                {description}
              </p>
            )}
          </div>

          {details.length > 0 && (
            <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 self-start border-t border-clr4/15 pt-6 text-sm md:col-span-6 md:col-start-7">
              {details.map((d) => (
                <div key={d.label} className="contents">
                  <dt className="font-urbanist text-clr4/70">{d.label}</dt>
                  <dd className="text-clr2">{d.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {work.certificateImage && (
  <div className="md:col-span-6 md:col-start-7 mt-6 md:mt-0">
    <a
      href={work.certificateImage.src}
      download={`Certificado - ${title}`}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-clr4/15 bg-clr4/5 px-5 py-3 font-urbanist text-sm font-medium text-clr2 transition-colors hover:bg-clr4/10"
    >

      <svg
        className="h-5 w-5 text-clr4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      Baixar Certificado de Autenticidade
    </a>
  </div>
)}

        </figcaption>
      </Container>
    </figure>
  );
}
