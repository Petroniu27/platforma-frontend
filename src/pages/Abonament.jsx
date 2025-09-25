import React, { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import "./Abonament.css"; // importăm CSS separat

export default function Abonament() {
  const { refreshUser } = useAuth();
  const location = useLocation();

  const handlePay = async (priceId) => {
    try {
      const res = await api.post("/payments/checkout-subscription", { priceId });
      if (res.data?.url) {
        window.location.href = res.data.url;
      } else {
        alert("Nu am primit link de la server.");
      }
    } catch (err) {
      alert("Eroare la inițializarea plății.");
      console.error(err);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("status") === "success") {
      refreshUser();
      alert("✅ Abonament activat!");
    }
  }, [location, refreshUser]);

  const plans = [
    {
      id: "price_1S9m4kQwqpbp0xyy4OmYhzXi",
      title: "BioStart",
      desc: "Acces complet la toate lecțiile video de biologie.",
      price: "400 lei/lună",
    },
    {
      id: "price_1SAG2KQwqpbp0xyyZcPOwtH0",
      title: "BioMaster",
      desc: "Video Biologie + 4 ascultări/lună + masterclassuri + testări.",
      price: "600 lei/lună",
      highlight: true,
    },
    {
      id: "price_1SAG4pQwqpbp0xyyGRfRFbyP",
      title: "ChimStart",
      desc: "Acces complet la toate lecțiile video de chimie.",
      price: "400 lei/lună",
    },
    {
      id: "price_1SAGdnQwqpbp0xyyb29gNGH1",
      title: "ChimExpert",
      desc: "Video Chimie + 4 ascultări/lună + masterclassuri + testări.",
      price: "600 lei/lună",
      highlight: true,
    },
    {
      id: "price_1SAGfyQwqpbp0xyyuqPdL6rZ",
      title: "Admitere Smart",
      desc: "Biologie + Chimie (varianta basic, doar video la ambele).",
      price: "700 lei/lună",
    },
    {
      id: "price_1SAGiFQwqpbp0xyy3za7jlUR",
      title: "Admitere Pro+",
      desc: "All-inclusive: Bio + Chimie video + 8 ascultări/lună + masterclassuri + testări.",
      price: "1100 lei/lună",
      highlight: true,
    },
  ];

  return (
    <div className="abonament-page">
      <h1 className="abonament-title">Abonamente AcadeMedica</h1>

      <div className="plans-grid">
        {plans.map((p) => (
          <div
            key={p.id}
            className={`plan-card ${p.highlight ? "highlight" : ""}`}
          >
            <h2>{p.title}</h2>
            <p className="desc">{p.desc}</p>
            <p className="price"><strong>{p.price}</strong></p>
            <button onClick={() => handlePay(p.id)}>Abonează-te</button>
          </div>
        ))}
      </div>

      {/* ✅ Mesaj informativ sub lista de abonamente */}
      <div className="abonament-info">
        <p>
          Vă rugăm după efectuarea plății să închideți fereastra, să reîncărcați site-ul, iar dacă
          abonamentul nu este activ, vă rugăm să vă delogați și să vă relogați.
        </p>
        <p>
          Pentru orice erori, ne puteți contacta în formularul de contact sau, mai rapid, la numărul
          de telefon din secțiunea Contact.
        </p>
      </div>
    </div>
  );
}
