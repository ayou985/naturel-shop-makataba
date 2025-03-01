"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="container">
      <h1 className="title">🛒 Checkout</h1>
      <p className="subtitle">Finalisez votre commande</p>
      <form className="form">
        <input type="email" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Votre adresse" value={address} onChange={(e) => setAddress(e.target.value)} />
        <button type="submit" className="button">Payer</button>
      </form>
    </div>
  );
}
