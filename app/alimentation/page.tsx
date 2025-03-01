"use client";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Miel Bio",
    description: "Un miel 100% naturel et pur.",
    price: "15.99€",
    image: "/images/miel.jpg",
  },
  {
    id: 2,
    name: "Fruits secs",
    description: "Des fruits secs énergétiques et naturels.",
    price: "9.99€",
    image: "/images/fruits-secs.jpg",
  },
];

export default function AlimentationPage() {
  return (
    <div className="container">
      <h1 className="title">🍎 Alimentation & Nutrition</h1>
      <p className="subtitle">
        Découvrez notre sélection de produits alimentaires naturels et sains.
      </p>
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
