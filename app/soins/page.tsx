"use client";
import Link from "next/link";

export default function SoinsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center">💆 Soins & Beauté</h1>
      <p className="text-center text-muted-foreground mt-4">
        Prenez soin de votre peau avec nos produits naturels.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Crème hydratante</h2>
          <p className="text-sm text-gray-500">Hydratez votre peau en profondeur.</p>
          <Link href="/checkout" className="text-blue-500">Acheter</Link>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Masque purifiant</h2>
          <p className="text-sm text-gray-500">Un soin detox naturel.</p>
          <Link href="/checkout" className="text-blue-500">Acheter</Link>
        </div>
      </div>
    </div>
  );
}
