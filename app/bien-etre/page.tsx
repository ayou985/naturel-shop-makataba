"use client";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Huile essentielle", description: "Apaisante et relaxante.", price: "12.99€", image: "/images/huile.jpg" },
  { id: 2, name: "Thé Detox", description: "Un thé naturel pour purifier votre corps.", price: "8.99€", image: "/images/the-detox.jpg" },
];

export default function BienEtrePage() {
  return (
    <div className="container">
      <h1 className="title">💆 Bien-être & Relaxation</h1>
      <p className="subtitle">Prenez soin de vous avec nos produits bien-être.</p>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <Image src={product.image} width={200} height={200} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <Link href={`/checkout`} className="button">Acheter</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
