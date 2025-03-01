"use client";

import { useState } from "react";
import { ShoppingCart, User, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Images du slider
const featuredImages = [
  "/maktaba-banner.jpeg",
  "/nutrition-exemple.jpeg",
  "/savon.jpeg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour changer d’image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Barre du haut */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container text-center text-sm">
          Livraison offerte dès 100€ d'achat | Expédition le jour même avant 14h
        </div>
      </div>

      {/* En-tête */}
      <header className="border-b">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Naturel Shop Maktaba
          </Link>

          <div className="hidden md:block flex-1 max-w-md mx-8">
            <Input type="search" placeholder="Rechercher des produits..." className="w-full" />
          </div>

          <div className="flex items-center gap-4">
            <Link href="/compte" className="hover:text-primary">
              <User className="h-6 w-6" />
            </Link>
            <Link href="/panier" className="hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Menu de navigation */}
        <nav className="border-t">
          <div className="container">
            <NavigationMenu>
              <NavigationMenuList>
                {[
                  { title: "Alimentation & Bien-être", links: ["/alimentation", "/bien-etre"] },
                  { title: "Soins & Hygiène", links: ["/savons", "/cosmetiques", "/hygiene"] },
                  { title: "Jeux & Livres Enfants", links: ["/jeux", "/livres-enfants"] },
                ].map((category, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {category.links.map((link, idx) => (
                          <li key={idx}>
                            <NavigationMenuLink asChild>
                              <Link href={link}>
                                <div className="text-sm font-medium capitalize">{link.replace("/", "").replace("-", " ")}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
      </header>

      {/* Section principale avec slider */}
      <section className="bg-secondary relative">
        <div className="container py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Collection Ramadan 2024</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Découvrez notre sélection spéciale pour le mois béni du Ramadan.
            </p>
            <Link href="/ramadan">
              <Button size="lg" className="text-lg">Découvrir</Button>
            </Link>
          </div>
          <div className="flex-1 relative">
            <Image
              src={featuredImages[currentIndex]}
              alt="Collection Ramadan"
              width={600}
              height={400}
              className="rounded-lg shadow-lg transition-transform duration-300"
              priority
            />
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 bg-primary text-white px-3 py-1 rounded-md"
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* Catégories mises en avant */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Nos catégories phares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alimentation & Bien-être", image: "/nutrition-exemple.jpeg", link: "/alimentation" },
              { name: "Soins & Hygiène", image: "/savon.jpeg", link: "/soins" },
              { name: "Jeux & Livres Enfants", image: "/jeux-enfant.jpeg", link: "/jeux" },
            ].map((category, index) => (
              <Link key={index} href={category.link} className="group relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
