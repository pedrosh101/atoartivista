import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Container } from "@/components/container";
import ContactForm from "@/components/contactForm";
import { contact } from "@/app/data/contact";
import { getDictionary } from "@/i18n/dictionaries";
import { getI18n, getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await getLocale());
  return { title: `${t.contact.eyebrow} · ATO Artivista` };
}

export default async function ContatoPage() {
  const { t } = await getI18n();
  const c = t.contact;

  const instagram = contact.instagram.replace(/^@/, "");
  const channels = [
    contact.email && {
      label: c.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    instagram && {
      label: c.instagram,
      value: `@${instagram}`,
      href: `https://instagram.com/${instagram}`,
    },
    contact.whatsapp && {
      label: c.whatsapp,
      value: `+${contact.whatsapp}`,
      href: `https://wa.me/${contact.whatsapp}`,
    },
    contact.location && { label: c.location, value: contact.location },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <>
      <Navbar />

      <main className="bg-clr1 pt-32 font-open-sans text-clr2 md:pt-40">
        <section className="pb-28 md:pb-40">
          <Container className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6">
              <p className="mb-6 font-urbanist text-sm tracking-[0.25em] text-clr4/70 uppercase">
                {c.eyebrow}
              </p>
              <h1 className="mb-8 font-urbanist text-5xl leading-[1.05] md:text-7xl">
                {c.title}
              </h1>
              <p className="max-w-md text-base leading-relaxed text-clr4">{c.lead}</p>

              {channels.length > 0 && (
                <dl className="mt-14 border-t border-clr4/15">
                  {channels.map((ch) => (
                    <div
                      key={ch.label}
                      className="flex items-baseline justify-between gap-6 border-b border-clr4/15 py-5"
                    >
                      <dt className="font-urbanist text-sm text-clr4/70">{ch.label}</dt>
                      <dd className="font-urbanist text-lg">
                        {ch.href ? (
                          <a
                            href={ch.href}
                            target={ch.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="border-b border-clr5 transition-opacity hover:opacity-70"
                          >
                            {ch.value}
                          </a>
                        ) : (
                          ch.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>

            {contact.email && (
              <div className="md:col-span-5 md:col-start-8">
                <ContactForm to={contact.email} />
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
