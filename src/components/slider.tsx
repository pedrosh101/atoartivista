"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Link from "next/link";
import { artists } from "../app/data/artists";

export default function Slider() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="h-[86vh] w-full"
    >
      {artists.map((artist) => (
        <SwiperSlide key={artist.id}>
          <Link href={`/artists/${artist.id}`} className="block h-full w-full">
            <div
              className="relative h-full w-full flex items-end cursor-auto"
              style={{
                backgroundImage: `url(${artist.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-white text-3xl md:text-5xl p-20 font-bold text-center z-10 cursor-pointer">
                {artist.title}
              </h2>
              <div className="absolute inset-0 bg-black/40 z-0" />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
