import React from "react";

export default function Bio905Mendel() {
  return (
    <div className="fisa-container" data-id="bio9-05-mendel">
      <h1>Clasa a IX-a – Mendel, abateri, recombinare, genetică umană</h1>

      <p className="meta">
        <strong>Curriculum:</strong> BAC RO 2025 – Biologie vegetală și animală (IX–X) ·{" "}
        <strong>Actualizat:</strong> 2025-08-14
      </p>

      <ul className="tags">
        <li>mendel</li>
        <li>codominanță</li>
        <li>recombinare</li>
        <li>boli ereditare</li>
      </ul>

      <section id="legi-mendel">
        <h2>Legile lui Mendel</h2>
        <ul>
          <li>Puritatea gameților: fiecare gamet conține un singur alel din pereche.</li>
          <li>Segregarea independentă: distribuția alelelor perechilor nelegate este independentă.</li>
          <li>Raporturi clasice (monohibrid/dihibrid) – la nivel introductiv pentru BAC 9–10.</li>
        </ul>
      </section>

      <section id="abateri">
        <h2>Abateri de la segregarea mendeliană</h2>
        <ul>
          <li>Codominanță (ex.: grupurile sanguine AB).</li>
          <li>Dominanță incompletă (ex.: flori roz din roșu×alb).</li>
          <li>Epistazie – noțiune minimală (opțional).</li>
        </ul>
      </section>

      <section id="recombinare">
        <h2>Recombinare genetică (schimb reciproc de gene)</h2>
        <p>
          Crossing-over în profaza I a meiozei generează combinații noi de alele; crește variabilitatea.
        </p>
      </section>

      <section id="genetica-umana">
        <h2>Genetică umană – exemple</h2>
        <ul>
          <li>
            Boli monogenice: fenilcetonurie, talasemie, fibroză chistică – scurt mecanism, transmitere.
          </li>
          <li>Anomalii cromozomiale: trisomia 21 (Down).</li>
          <li>Consiliere genetică: prevenție, screening.</li>
        </ul>
      </section>
    </div>
  );
}
