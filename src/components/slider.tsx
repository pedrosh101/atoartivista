// components/Slider.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

const slides = [
  { text: "P. Da Silva", bg: "/art1.webp" },
  { text: "Cabelo", bg: "/art2.png" },
  { text: "Deborah Engel", bg: "/art3.webp" },
];

export default function Slider() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="h-[86vh] w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-full w-full flex items-end"
            style={{
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-white text-3xl md:text-5xl p-20 font-bold text-center z-10">
              {slide.text}
            </h2>
            <div className="absolute inset-0 bg-black/40 z-0" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
