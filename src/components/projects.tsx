import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projetos = [
    {
        title: "Bolsas Estudantis",
        tag: "Educação",
        image: "/nossoTrabalho1.webp",
        description: "...",
    },
    {
        title: "Galeria de Criadores",
        tag: "Economia Criativa",
        image: "/nossoTrabalho2.webp",
        description: "...",
    },
    {
        title: "Residências Artísticas",
        tag: "Fomento",
        image: "/nossoTrabalho3.webp",
        description: "...",
    },
];

export default function Projects() {
  return (
    <section
    id="projetos"
    className="bg-clr4 py-40 px-12 lg:px-20"
>
    <div className="max-w-[1800px] mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 mb-32">

            <div>

                <span className="uppercase tracking-[.3em] text-xs text-clr3/70">

                    PROJETOS

                </span>

                <h2 className="mt-6 text-5xl lg:text-7xl font-black leading-[0.95] text-clr2">

                    Projetos que transformam territórios.

                </h2>

            </div>

            <p className="text-lg text-clr3/80 leading-9 self-end">

                Toda obra apoiada fortalece iniciativas reais de educação,
                cultura e desenvolvimento comunitário.

            </p>

        </div>

        <div className="space-y-40">

            {projetos.map((projeto) => (

                <article key={projeto.title}>

                    <div
                        className="
                            relative
                            aspect-[16/8]
                            rounded-[40px]
                            overflow-hidden
                            group
                        "
                    >

                        <Image
                            src={projeto.image}
                            alt={projeto.title}
                            fill
                            className="
                                object-cover
                                transition
                                duration-700
                                group-hover:scale-105
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-clr2/70
                                to-transparent
                            "
                        />

                    </div>

                    <div
                        className="
                            mt-10
                            grid
                            lg:grid-cols-[180px_1fr]
                            gap-10
                        "
                    >

                        <span
                            className="
                                uppercase
                                tracking-[0.25em]
                                text-sm
                                text-clr1
                                font-semibold
                            "
                        >

                            {projeto.tag}

                        </span>

                        <div>

                            <h3
                                className="
                                    text-4xl
                                    lg:text-6xl
                                    font-black
                                    text-clr2
                                "
                            >

                                {projeto.title}

                            </h3>

                            <p
                                className="
                                    mt-8
                                    max-w-3xl
                                    text-lg
                                    leading-9
                                    text-clr3/80
                                "
                            >

                                {projeto.description}

                            </p>

                            <Link
                                href="#"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    mt-10
                                    text-clr2
                                    font-semibold
                                    group
                                "
                            >

                                Conheça o projeto

                                <ArrowRight
                                    className="
                                        transition-transform
                                        group-hover:translate-x-2
                                    "
                                />

                            </Link>

                        </div>

                    </div>

                </article>

            ))}

        </div>

    </div>
</section>
  )
}
