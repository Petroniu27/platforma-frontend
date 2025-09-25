import React from "react";

export default function Bio1001TesuturiVegetale() {
  return (
    <div className="fisa-container" data-id="bio10-01-tesuturi-vegetale">
      <h1>Clasa a X-a – Țesuturi vegetale</h1>

      <p className="meta">
        <strong>Curriculum:</strong> BAC RO 2025 – Biologie vegetală și animală (IX–X) ·{" "}
        <strong>Actualizat:</strong> 2025-08-14
      </p>

      <ul className="tags">
        <li>tesuturi vegetale</li>
        <li>epiderma</li>
        <li>vase conducătoare</li>
      </ul>

      <section id="embrionare">
        <h2>Țesuturi embrionare</h2>
        <ul>
          <li>Apicale – la vârfuri de creștere (rădăcină/tulpină); diviziune activă.</li>
          <li>Intercalare – între țesuturi, contribuie la alungire.</li>
        </ul>
      </section>

      <section id="definitive">
        <h2>Țesuturi definitive</h2>
        <ul>
          <li>De apărare: epidermă (cuticulă, stomate).</li>
          <li>Fundamentale: asimilatoare (clorofile), de depozit (amidon, lipide).</li>
          <li>Conducătoare: xilem (apă/săruri), floem (seva elaborată).</li>
          <li>Secretoare: canale/glande – rășini, uleiuri.</li>
        </ul>
      </section>
    </div>
  );
}
