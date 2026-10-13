"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useI18n } from "@/i18n/client";
import { fmt } from "@/i18n/config";

export type SheetArtist = {
  slug: string;
  name: string;
  portrait: string;
  works: number;
};

/** Botão + barra lateral "Ver todos os artistas" da página Acervo. */
export default function ArtistsSheet({ artists }: { artists: SheetArtist[] }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const c = t.collection;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="h-11 gap-2 rounded-full bg-clr2 px-6 font-urbanist text-clr1 hover:bg-clr2/85 cursor-pointer">
          <Users aria-hidden />
          {c.viewAll}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full overflow-y-auto border-clr4/15 bg-clr1 p-0 font-urbanist text-clr2 sm:max-w-sm"
      >
        <SheetHeader className="border-b border-clr4/15 p-6 pr-14">
          <SheetTitle className="text-2xl font-normal">{c.sheetTitle}</SheetTitle>
          <SheetDescription className="text-clr4/70">
            {c.sheetDescription}
          </SheetDescription>
        </SheetHeader>

        <ul className="px-3 pb-8">
          {artists.map((artist) => (
            <li key={artist.slug}>
              <Link
                href={`/artists/${artist.slug}`}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-clr2/5"
              >
                <Image
                  src={artist.portrait}
                  alt=""
                  width={96}
                  height={96}
                  className="size-12 rounded-full object-cover"
                />
                <span className="flex flex-col">
                  <span className="text-lg leading-tight group-hover:underline">
                    {artist.name}
                  </span>
                  <span className="text-sm text-clr4/70">
                    {fmt(artist.works === 1 ? c.worksOne : c.worksMany, { n: artist.works })}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
