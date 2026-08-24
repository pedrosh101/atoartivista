// app/acervo/page.tsx
"use client";

import { useState } from "react";
import { artists } from "../data/artists";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";


export default function AcervoPage() {
  const [open, setOpen] = useState(false);

  return (
    <>

      <div className="flex min-h-screen bg-clr1">
        {/* Lado esquerdo: galeria */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {artists.map((artist) => (
            <Link
              href={`/artists/${artist.id}`}
              key={artist.id}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={artist.bg}
                alt={artist.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold">
                  {artist.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Botão + Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              className="fixed bottom-6 right-6 z-50 bg-clr2 text-clr1 hover:opacity-80"
              onClick={() => setOpen(true)}
            >
              Ver todos os artistas
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64 bg-white p-6 shadow-xl overflow-y-auto"
          >
            <SheetHeader>
              <SheetTitle>Artistas</SheetTitle>
            </SheetHeader>
            <ul className="mt-4 space-y-3">
              {artists.map((artist) => (
                <li key={artist.id}>
                  <Link
                    href={`/artists/${artist.id}`}
                    className="block text-lg font-medium text-gray-800 hover:underline"
                  >
                    {artist.title}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
