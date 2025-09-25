import React from "react";

export default function Bio902Celula() {
  return (
    <div className="fisa-container" data-id="bio9-02-celula">
      <h1>Clasa a IX-a – Celula: structură și rol</h1>

      <p className="meta">
        <strong>Curriculum:</strong> BAC RO 2025 – Biologie vegetală și animală (IX–X) ·{" "}
        <strong>Actualizat:</strong> 2025-08-14
      </p>

      <ul className="tags">
        <li>celula</li>
        <li>organite</li>
        <li>nucleu</li>
      </ul>

      <section id="procariot-vs-eucariot">
        <h2>Procariot vs. eucariot</h2>
        <ul>
          <li>Procariot: fără nucleu; ADN circular; ribozomi 70S; fără organite delimitate.</li>
          <li>Eucariot: nucleu; ADN liniar + histone; ribozomi 80S; organite membranare.</li>
        </ul>
      </section>

      <section id="invelis">
        <h2>Învelișul celulei</h2>
        <ul>
          <li>
            <strong>Membrană celulară:</strong> Bicatenă fosfolipidică + proteine (model mozaic
            fluid); selectiv-permeabilă; rol în transport și semnalizare.
          </li>
          <li>
            <strong>Perete celular:</strong> Rigid; la plante (celuloză), fungi (chitină), bacterii
            (peptidoglican); protecție și formă.
          </li>
        </ul>
      </section>

      <section id="citoplasma">
        <h2>Citoplasmă și organite</h2>
        <ul>
          <li>Citoplasmă fundamentală (hialoplasmă) – mediu al reacțiilor.</li>
          <li>Reticul endoplasmatic (RER: sinteză proteică; REL: lipide, detox).</li>
          <li>Ribozomi – sinteză proteine; liberi/RER.</li>
          <li>Aparat Golgi – modifică/ambalează produse celulare.</li>
          <li>Mitocondrii – respirație aerobă, ATP.</li>
          <li>Lizozomi – digestie intracelulară.</li>
          <li>Centrozom – organizează microtubuli, fus de diviziune (absent la plante superioare).</li>
          <li>
            Plastide (cloroplaste: fotosinteză; cromoplaste: pigmenți; leucoplaste: depozitare).
          </li>
          <li>Vacuole – depozit/rol osmotic (dezvoltate la plante).</li>
        </ul>
      </section>

      <section id="nucleu">
        <h2>Nucleu</h2>
        <ul>
          <li>Anvelopă nucleară cu pori; nucleol – ARN ribozomal.</li>
          <li>Carioplasmă + cromatină (ADN + proteine).</li>
          <li>Cromozomi: purtători de gene; vizibili în diviziune.</li>
        </ul>
      </section>
    </div>
  );
}
