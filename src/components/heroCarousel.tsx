"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const slides = [
  {
    image: "/art1.webp",
    title: "Arte que transforma territórios.",
    text: "Conectamos artistas, comunidades e projetos sociais para gerar impacto real.",
  },
  {
    image: "/art3.webp",
    title: "Toda transformação começa com um ato.",
    text: "Acreditamos que criatividade também é ferramenta de mudança social.",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative h-screen">
      <Carousel
        opts={{
          loop: true,
          watchDrag: false,
        }}
        plugins={[
          Autoplay({
            delay: 7000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
      >
        <CarouselContent className="h-screen">
          {slides.map((slide) => (
            <CarouselItem key={slide.title} className="relative h-screen">
              <Image
                src={slide.image}
                alt=""
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute inset-0 flex items-end">
                <div className="px-12 lg:px-24 pb-28 max-w-4xl">
                  <p className="uppercase tracking-[0.35em] text-white/80 text-sm mb-6">
                    Arte • Impacto • Comunidade
                  </p>

                  <h1 className="text-white text-6xl xl:text-8xl font-black leading-[0.95]">
                    {slide.title}
                  </h1>

                  <p className="mt-8 max-w-xl text-lg text-white/85 leading-relaxed">
                    {slide.text}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
