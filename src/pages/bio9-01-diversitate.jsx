import React from "react";

export default function Bio901Diversitate() {
  return (
    <div className="fisa-container" data-id="bio9-01-diversitate">
      <h1>Clasa a IX-a – Diversitatea lumii vii</h1>

      <p className="meta">
        <strong>Curriculum:</strong> BAC RO 2025 – Biologie vegetală și animală (IX–X) ·{" "}
        <strong>Actualizat:</strong> 2025-08-14
      </p>

      <ul className="tags">
        <li>diversitate</li>
        <li>virusuri</li>
        <li>regnuri</li>
        <li>taxonomie</li>
      </ul>

      <section id="notiuni-intro">
        <h2>Noțiuni introductive</h2>
        <ul className="key-terms">
          <li>taxon</li>
          <li>nomenclatură binară</li>
          <li>procariot</li>
          <li>eucariot</li>
        </ul>
        <ul className="definitions">
          <li>
            <strong>Taxon:</strong> Grup de organisme clasificate la același nivel (ex.: specie, gen, familie).
          </li>
          <li>
            <strong>Nomenclatură binară:</strong> Denumire științifică din două cuvinte: <em>Gen specie</em> (ex.:{" "}
            <em>Homo sapiens</em>).
          </li>
          <li>
            <strong>Procariot:</strong> Celulă fără nucleu delimitat; ADN liber (ex.: bacterii).
          </li>
          <li>
            <strong>Eucariot:</strong> Celulă cu nucleu; organite delimitate de membrane (ex.: plante, animale, fungi, protiste).
          </li>
        </ul>
        <ul>
          <li>Ierarhie: specie → gen → familie → ordin → clasă → încrengătură → regn.</li>
          <li>Criterii clasificare: morfologie, nutriție, respirație, reproducere, mediu, locomoție.</li>
          <li>Unitate–diversitate: structuri comune, adaptări specifice mediului.</li>
        </ul>
      </section>

      <section id="virusuri">
        <h2>Virusuri – caractere generale</h2>
        <p>
          Particule acelulare; genom ADN sau ARN; paraziți intracelulari obligați; replicare doar în celule-gazdă.
        </p>
        <ul>
          <li>Structură: capsidă proteică ± anvelopă lipidică.</li>
          <li>Clasificare simplificată: adenovirusuri (ADN), ribovirusuri (ARN).</li>
          <li>Exemple umane: gripă (ARN), herpes (ADN).</li>
          <li>Nu au metabolism propriu; inactive extracelular.</li>
        </ul>
      </section>

      <section id="regnuri">
        <h2>Regnuri – sinteză practică</h2>

        <h3>Monera (Bacterii)</h3>
        <ul>
          <li>Procariote; perete celular; multiplicare prin sciziune.</li>
          <li>Nutriție: auto/heterotrofă; respirație aerobă/anaerobă.</li>
          <li>Roluri: fixarea azotului, fermentații; patogeni (ex.: TBC).</li>
        </ul>

        <h3>Protiste</h3>
        <ul>
          <li>Eucariote simple: alge unicelulare, euglene, sporozoare.</li>
          <li>Locomoție: pseudopode/flageli/cili (în funcție de grup).</li>
          <li>Roluri: fitoplancton (producători), paraziți (ex.: <em>Plasmodium</em>).</li>
        </ul>

        <h3>Fungi</h3>
        <ul>
          <li>Eucariote heterotrofe; pereți cu chitină; hife/miceliu.</li>
          <li>Grupuri: ascomicete, bazidiomicete.</li>
          <li>Roluri: descompunători, fermentații, patogeni (candidoză).</li>
        </ul>

        <h3>Plante</h3>
        <ul>
          <li>Autotrofe clorofiliene; țesuturi/organizație variabilă.</li>
          <li>Grupuri: alge pluricelulare, briofite, pteridofite, gimnosperme, angiosperme (mono/dicot).</li>
        </ul>

        <h3>Animale</h3>
        <ul>
          <li>Heterotrofe; țesuturi, organe, sisteme; locomoție dezvoltată.</li>
          <li>
            Exemple: celenterate, platelminți/nematelminți, anelide, moluște, artropode, vertebrate (pești, amfibieni,
            reptile, păsări, mamifere).
          </li>
        </ul>
      </section>
    </div>
  );
}
