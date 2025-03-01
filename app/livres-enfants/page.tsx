"use client";
import Link from "next/link";

export default function LivresEnfantsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center">📚 Livres pour enfants</h1>
      <p className="text-center text-muted-foreground mt-4">
        Découvrez nos livres éducatifs et interactifs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Contes illustrés</h2>
          <p className="text-sm text-gray-500">Des histoires captivantes pour les enfants.</p>
          <Link href="/checkout" className="text-blue-500">Acheter</Link>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Livre interactif</h2>
          <p className="text-sm text-gray-500">Apprentissage et jeu combinés.</p>
          <Link href="/checkout" className="text-blue-500">Acheter</Link>
        </div>
      </div>
    </div>
  );
}
