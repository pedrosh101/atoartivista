"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-clr2 p-4 px-6">
      <div className="flex justify-between items-center">
        <Link href="/">
        
        <Image src={logo} alt="Logo" width={120} priority />
        </Link>

        <button
          className="md:hidden text-clr1"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

   
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-4 text-clr1">
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-md">Sobre</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-clr2 text-md">
                Projetos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white p-4 rounded shadow-md">
                <ul className="grid gap-2 w-56">
                  <li>
                    <NavigationMenuLink href="#">Residências Artísticas</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">Projeto Vunje</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">Casa Azul Criativa</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">Galeria de Criadores</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">Bolsas Estudantis</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/acervo" className="text-md">Acervo</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-md">Contato</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {isMobileMenuOpen && (
        <div className="my-6 flex flex-col justify-center text-center gap-4 text-clr1 md:hidden">
          <a href="#" className="hover:underline font-semibold">Sobre</a>
          <div>
            <span className="font-semibold">Projetos</span>
            <ul className=" mt-1 flex flex-col gap-1 text-sm">
              <li><a href="#" className="hover:underline">Residências Artísticas</a></li>
              <li><a href="#" className="hover:underline">Projeto Vunje</a></li>
              <li><a href="#" className="hover:underline">Casa Azul Criativa</a></li>
              <li><a href="#" className="hover:underline">Galeria de Criadores</a></li>
              <li><a href="#" className="hover:underline">Bolsas Estudantis</a></li>
            </ul>
          </div>
          <a href="#" className="hover:underline font-semibold">Acervo</a>
          <a href="#" className="hover:underline font-semibold">Contato</a>
        </div>
      )}
    </header>
  );
}
