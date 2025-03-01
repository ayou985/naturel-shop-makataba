"use client";
import Image from "next/image";
import Link from "next/link";

const games = [
  { id: 1, name: "Puzzle éducatif", price: "14.99€", image: "/images/puzzle.jpg" },
  { id: 2, name: "Jeu de société", price: "19.99€", image: "/images/jeu-societe.jpg" },
];

export default function JeuxPage() {
  return (
    <div className="container">
      <h1 className="title">🎲 Jeux & Divertissements</h1>
      <p className="subtitle">Amusez-vous avec nos jeux éducatifs et familiaux.</p>
      <div className="grid">
        {games.map((game) => (
          <div key={game.id} className="card">
            <Image src={game.image} width={200} height={200} alt={game.name} />
            <h2>{game.name}</h2>
            <p className="price">{game.price}</p>
            <Link href={`/checkout`} className="button">Acheter</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
