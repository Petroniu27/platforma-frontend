import React from "react";

export default function Bio903Diviziune() {
  return (
    <div className="fisa-container" data-id="bio9-03-diviziune">
      <h1>Clasa a IX-a – Ciclul celular, mitoză, meioză</h1>

      <p className="meta">
        <strong>Curriculum:</strong> BAC RO 2025 – Biologie vegetală și animală (IX–X) ·{" "}
        <strong>Actualizat:</strong> 2025-08-14
      </p>

      <ul className="tags">
        <li>mitoza</li>
        <li>meioza</li>
        <li>cromozomi</li>
      </ul>

      <section id="ciclu-celular">
        <h2>Ciclul celular</h2>
        <ul>
          <li>Interfază (G1, S, G2) + diviziune (M).</li>
          <li>Replicarea ADN în faza S.</li>
          <li>Puncte de control; rol în creștere și regenerare.</li>
        </ul>
      </section>

      <section id="mitoza">
        <h2>Mitoza (2n→2n)</h2>
        <ul>
          <li>Faze: profază, metafază, anafază, telofază + citokineză.</li>
          <li>Rol: multiplicare celulară, regenerare, dezvoltare.</li>
          <li>Fus de diviziune – separă cromatidele soră.</li>
        </ul>
      </section>

      <section id="meioza">
        <h2>Meioza (2n→n)</h2>
        <ul>
          <li>Două diviziuni succesive (reducțională, ecuațională).</li>
          <li>Profaza I: împerecherea homoloagelor, crossing-over (variabilitate).</li>
          <li>Rol: formare gameți; constanța numărului de cromozomi.</li>
        </ul>
      </section>
    </div>
  );
}
