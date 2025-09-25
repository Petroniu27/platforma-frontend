import React from "react";

export default function Bio1003Nutritie() {
  return (
    <div className="fisa-container" style={{ maxWidth: 980, margin: "0 auto", lineHeight: 1.6, padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>Fișă extinsă – Nutriție (autotrofă & heterotrofă) și digestie la animale</h1>
      <p style={{ marginTop: 0, opacity: 0.85 }}>
        Rezumat aprofundat pentru recapitualare și proiecte de laborator. Include formule, procese, exemple, factori limitativi și comparații între sisteme digestive.
      </p>

      {/* ------------------------------------------------------------- */}
      <h2>1) Nutriție autotrofă – fotosinteză</h2>
      <p>
        Organismele autotrofe (plante, alge, cianobacterii) își sintetizează substanța organică din CO<sub>2</sub> și H<sub>2</sub>O, folosind energia luminoasă. Procesul are loc în <strong>cloroplaste</strong>
        (la plante) – în special în <em>tilacoide</em> (faza luminoasă) și <em>stroma</em> (ciclul Calvin).
      </p>

      <h3>1.1. Ecuația globală</h3>
      <ul>
        <li>
          <strong>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</strong> (în prezența luminii și a pigmenților fotosintetici).
        </li>
        <li>Oxigenul eliberat provine din fotoliza apei (nu din CO₂).</li>
      </ul>

      <h3>1.2. Pigmenți și absorbția luminii</h3>
      <ul>
        <li>
          <strong>Clorofila a</strong> (principalul pigment), <strong>clorofila b</strong> (auxiliară), <strong>carotenoizi</strong> (β-caroten, xantofile) – extind spectrul de absorbție și protejează împotriva fotooxidării.
        </li>
        <li>Maxime de absorbție ~albastru (≈430–470 nm) și roșu (≈640–680 nm); reflecție în verde.</li>
      </ul>

      <h3>1.3. Faza luminoasă (tilacoide)</h3>
      <ol>
        <li>
          <strong>Fotoliza apei</strong>: H<sub>2</sub>O → 2e⁻ + 2H⁺ + ½O₂ (la PSII). Furnizează electroni și protoni; O₂ este eliberat.
        </li>
        <li>
          <strong>Lanțul transportor de electroni</strong> între <em>PSII</em> (P680) și <em>PSI</em> (P700) → creează gradient de protoni → <strong>ATP-sintază</strong> produce ATP (fotofosforilare).
        </li>
        <li>
          <strong>PSI</strong> reduce NADP⁺ la <strong>NADPH</strong> (acceptor de electroni). ATP și NADPH alimentează ciclul Calvin.
        </li>
        <li>
          <em>Fotofosforilarea ciclică</em> (doar PSI) produce ATP suplimentar când e necesar raport ATP/NADPH mai mare.
        </li>
      </ol>

      <h3>1.4. Faza obscură (ciclul Calvin, în stroma)</h3>
      <ol>
        <li>
          <strong>Carboxilarea</strong>: enzima <em>RuBisCO</em> fixează CO₂ pe ribulozo-1,5-bisfosfat (RuBP) → 2× 3-PGA.
        </li>
        <li>
          <strong>Reducerea</strong>: 3-PGA → G3P folosind <em>ATP</em> și <em>NADPH</em> din faza luminoasă.
        </li>
        <li>
          <strong>Regenerarea</strong> RuBP-ului pentru a continua ciclul.
        </li>
        <li>
          <em>Fotorespirația</em>: la temperaturi înalte/CO₂ scăzut, RuBisCO leagă O₂ → scade randamentul (fenomen important la plantele C₃).
        </li>
      </ol>

      <h3>1.5. C₃ vs C₄ vs CAM (adaptări împotriva fotorespirației)</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 6 }}>Tip</th>
            <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 6 }}>Mecanism</th>
            <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 6 }}>Exemple</th>
            <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 6 }}>Avantaje</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}><strong>C₃</strong></td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Calvin direct; predispusă la fotorespirație.</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>grâu, orez, arbori</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Eficientă în climă temperată.</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}><strong>C₄</strong></td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Fixare inițială CO₂ ca oxaloacetat (PEP carboxilază) în mezofil → transport în teaca fasciculară → CO₂ eliberat pentru Calvin.</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>porumb, trestie de zahăr</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Randament bun la T înaltă și lumină puternică.</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}><strong>CAM</strong></td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Stome deschise noaptea (fixare CO₂ ca malat) și închise ziua (decarboxilare și Calvin).</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>cactuși, ananas</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Economie de apă majoră, adaptare desertică.</td>
          </tr>
        </tbody>
      </table>

      <h3>1.6. Factori limitativi și evidențiere</h3>
      <ul>
        <li><strong>Lumina</strong> (intensitate, durată, lungime de undă)</li>
        <li><strong>CO₂</strong> (concentrație atmosferică; fertilizare cu CO₂ în sere)</li>
        <li><strong>Temperatura</strong> (optime enzimatice; prea mică → reacții lente, prea mare → denaturare)</li>
        <li><strong>Apă</strong> și <strong>minerale</strong> (Mg în clorofilă, Fe și Mn în lanțul de transport)</li>
      </ul>
      <p>
        <em>Evidențiere experimentală</em>: cromatografie pe hârtie (pigmenți), reacția Hill (reducerea coloranților), electrode de O₂, experimentul Engelmann (aerobi în zonele cu O₂ maxim la lungimi de undă eficiente).
      </p>

      {/* ------------------------------------------------------------- */}
      <h2>2) Nutriție heterotrofă la fungi și plante</h2>
      <h3>2.1. Fungi</h3>
      <ul>
        <li><strong>Saprofită</strong>: descompun materie organică moartă (ciclul carbonului; sol fertil).</li>
        <li><strong>Parazită</strong>: pe plante/animale (rugini, tăciuni) – biotrofe vs necrotrofe.</li>
        <li><strong>Simbiotică</strong> – <em>micorize</em> (arbusculare/ecto): ciuperca crește absorbția de apă/minerale, planta oferă carbohidrați.</li>
        <li>Economică/ecologică: fermentații (drojdii), antibiotic (Penicillium), biodegradare.</li>
      </ul>

      <h3>2.2. Plante cu heterotrofie parțială sau specială</h3>
      <ul>
        <li>
          <strong>Parazite</strong>: <em>Viscum album</em> (vâsc, <em>hemiparazit</em> – face fotosinteză, dar fură seva elaborată), <em>Cuscuta</em> (curpen, <em>holoparazit</em> – fără clorofilă).
        </li>
        <li>
          <strong>Carnivore</strong>: dionee, Nepenthes, Drosera – captează insecte pentru <em>azot</em>/<em>fosfor</em> în medii sărace; fotosinteza rămâne sursa de carbon.
        </li>
        <li>
          <strong>Licheni</strong> = algă/cianobacterie + ciupercă (simbioză). <em>Indicatori ai calității aerului</em>, pionieri pe substraturi sterile, formează sol incipient.
        </li>
        <li>
          <strong>Fixarea simbiotică a azotului</strong> (leguminoase–Rhizobium): nu e heterotrofie, dar suplimentează azotul necesar sintezei proteinelor.
        </li>
      </ul>

      {/* ------------------------------------------------------------- */}
      <h2>3) Digestia la animale – generalități & comparații</h2>
      <p>
        Digestia transformă macromoleculele alimentare în unități mici absorbabile (<em>monozaharide</em>, <em>aminoacizi</em>, <em>acizi grași</em>, <em>glicerol</em>), prin procese <strong>mecanice</strong> și <strong>chimice</strong> (enzime).
      </p>

      <h3>3.1. Tipuri de regim alimentar</h3>
      <ul>
        <li><strong>Ierbivore</strong>: dinți molari lați; simbioză cu microbi pentru celuloză (rumegătoare, coprofage).</li>
        <li><strong>Carnivore</strong>: canini dezvoltați, stomac mai scurt; enzime proteolitice puternice.</li>
        <li><strong>Omnivore</strong>: dentiție mixtă (ex. om).</li>
      </ul>

      <h3>3.2. Comparații anatomice rapide</h3>
      <ul>
        <li>
          <strong>Păsări</strong>: <em>strumă</em> (stocare/înmuiere) + <em>pipotă</em> (mărunțire mecanică). Dinți lipsă → pietricele în pipotă.
        </li>
        <li>
          <strong>Pești</strong>: variații mari; uneori dinți faringieni; intestin scurt la carnivori, mai lung la ierbivori.
        </li>
        <li>
          <strong>Rumegătoare</strong> (vacă/oaie): 4 compartimente – <em>rumen</em>, <em>rețea</em>, <em>foios</em>, <em>cheag</em>. Fermentație microbiană → acizi grași volatili (acetat, propionat, butirat).
        </li>
        <li>
          <strong>Ierbivore monogastrice</strong> (iepure, cal): fermentație în <em>cec</em>/colon; unele practică coprofagia pentru recuperarea vitaminelor B.
        </li>
      </ul>

      {/* ------------------------------------------------------------- */}
      <h2>4) Sistemul digestiv uman – detalii</h2>

      <h3>4.1. Traseu & procese</h3>
      <ol>
        <li>
          <strong>Cavitatea bucală</strong>: masticație, <em>amilază salivară</em> (pH ≈ 6,5–7) începe hidroliza amidonului → maltoză/dextrine; <em>lipaza linguală</em> (activă mai ales la sugari).
        </li>
        <li>
          <strong>Esofag</strong>: peristaltism; nu are rol enzimatic major.
        </li>
        <li>
          <strong>Stomac</strong>: acid clorhidric (pH ≈ 1–2), <em>pepsină</em> (din pepsinogen activat), <em>gelatinază</em>; transformă bolul alimentar în chim.
        </li>
        <li>
          <strong>Intestin subțire</strong> (duoden–jejuno–ileon):
          <ul>
            <li><em>Bila</em> (ficat/vezică biliară) emulsionază grăsimile (săruri biliare).</li>
            <li><em>Pancreas</em>: amilază pancreatică, <em>trippsină/chimotrippsină</em> (din zimogeni), <em>carboxipeptidaze</em>, <em>lipază pancreatică</em>, <em>fosfolipază</em>.</li>
            <li><em>Marginea în perie</em> (enterocite): dizaharidaze (maltază, lactază, zaharază), peptidaze, nucleaze.</li>
          </ul>
        </li>
        <li>
          <strong>Intestin gros</strong>: absorbție apă/electroliți; microbiota produce vitamine (K, B<sub>7</sub>) și acizi grași cu lanț scurt.
        </li>
      </ol>

      <h3>4.2. Tabel – Enzime, substrat, produs, loc</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 6 }}>Enzimă</th>
            <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 6 }}>Substrat</th>
            <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 6 }}>Produs</th>
            <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 6 }}>Loc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Amilază salivară</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Amidon</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Maltoză, dextrine</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Glande salivare</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Pepsină</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Proteine</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Peptide</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Stomac (acid)</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Amilază pancreatică</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Amidon</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Maltotrioză, maltoză</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Duoden</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Tripsină / Chimotripsină</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Proteine/peptide</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Peptide scurte</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Duoden</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Carboxipeptidaze</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Peptide</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Aminoacizi</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Duoden</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Lipază pancreatică</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Trigliceride</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Acizi grași + monoacilglicerol</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Duoden (cu săruri biliare)</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Lactază</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Lactoză</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Gluc + Galactoză</td>
            <td style={{ borderBottom: "1px solid #eee", padding: 6 }}>Margine în perie (jejuno-ileon)</td>
          </tr>
        </tbody>
      </table>

      <h3>4.3. Reglare hormonală</h3>
      <ul>
        <li><strong>Gastrina</strong>: stimulează secreția acidă în stomac.</li>
        <li><strong>Secretina</strong>: stimulează pancreasul (bicarbonat) și fluxul biliar – neutralizează acidul în duoden.</li>
        <li><strong>CCK</strong> (colecistokinină): stimulează secrețiile enzimatice pancreatice și contracția vezicii biliare.</li>
        <li><strong>GIP</strong>, <strong>motilina</strong>: influențează motilitatea și secreția.</li>
      </ul>

      <h3>4.4. Absorbția nutrienților (mecanisme-cheie)</h3>
      <ul>
        <li>
          <strong>Glucoză/galactoză</strong>: cotransport <em>Na⁺</em> prin <em>SGLT1</em> → ieșire prin <em>GLUT2</em> în sânge.
        </li>
        <li>
          <strong>Aminoacizi/dipeptide</strong>: transportori specifici; di-/tripeptidele prin <em>PEPT1</em>.
        </li>
        <li>
          <strong>Lipide</strong>: acizi grași + monoacilglicerol → micelii (cu săruri biliare) → reesterificare în enterocite → <em>chilomicroni</em> → sistem limfatic → venă subclavie.
        </li>
        <li>
          <strong>Vitamine</strong>: A, D, E, K (liposolubile) depind de bilă; B<sub>12</sub> necesită <em>factor intrinsec</em> (stomac) și ileon funcțional.
        </li>
      </ul>

      <h3>4.5. Microbiota și sănătatea</h3>
      <ul>
        <li>Produce <em>SCFA</em> (acetat, propionat, butirat) – energie pentru colonocite, modulare imunitară.</li>
        <li>Competiție cu patogeni; sinteză vitamine (K, B).</li>
        <li>Dezechilibre: diaree post‑antibiotic, sindrom de intestin iritabil, intoleranțe.</li>
      </ul>

      <h3>4.6. Patologii/atipii întâlnite la recapitulare</h3>
      <ul>
        <li><strong>Ulcer gastric/duodenal</strong> – asociat frecvent cu <em>H. pylori</em> și AINS.</li>
        <li><strong>Intoleranță la lactoză</strong> – deficit de <em>lactază</em> → balonare, diaree osmotică.</li>
        <li><strong>Boala celiacă</strong> – reacție la gluten → atrofie vilozitară, malabsorbție.</li>
        <li><strong>Pancreatită cronică</strong> – deficit enzimatic → steatoree.</li>
      </ul>

      {/* ------------------------------------------------------------- */}
      <h2>5) Termeni-cheie & concepte</h2>
      <ul>
        <li><strong>Autotrof</strong> vs <strong>heterotrof</strong> – sursa de carbon/energie.</li>
        <li><strong>Tilacoid</strong>, <strong>stroma</strong>, <strong>PSI/PSII</strong>, <strong>RuBisCO</strong>, <strong>fotorespirație</strong>.</li>
        <li><strong>Micelii</strong>, <strong>micorize</strong>, <strong>licheni</strong>, <strong>hemiparazit/holoparazit</strong>.</li>
        <li><strong>Emulsificare</strong>, <strong>chilomicron</strong>, <strong>enterohepatic</strong>, <strong>enterocit</strong>.</li>
      </ul>

      {/* ------------------------------------------------------------- */}
      <h2>6) Mini‑quiz (auto‑verificare rapidă)</h2>
      <ol>
        <li>Ce pigment captează cel mai eficient lumina roșie? Ce lungimi de undă reflectă frunzele?</li>
        <li>Care este rolul <em>PEP carboxilazei</em> la plantele C₄?</li>
        <li>De ce plantele carnivore recurg la prinderea insectelor, deși fac fotosinteză?</li>
        <li>Numește trei enzime pancreatice și substratul fiecăreia.</li>
        <li>Explică pe scurt cum sunt absorbite lipidele și pe ce cale ajung în circulația sistemică.</li>
      </ol>

      {/* ------------------------------------------------------------- */}
      <h2>7) Idei de experimente/activități</h2>
      <ul>
        <li>Cromatografia pigmenților din frunze (sezon/expunere la lumină).</li>
        <li>Demonstrăm rolul luminii: frunză umbrită vs luminată → test cu iod pentru amidon.</li>
        <li>Observarea miceliului de mucegai și discuție despre nutriția saprofită.</li>
        <li>Simulare a emulsionării grăsimilor cu detergent (analog săruri biliare) – demers didactic.</li>
      </ul>

      <div style={{ marginTop: 28, padding: 12, borderLeft: "4px solid #4b9" }}>
        <strong>Notă practică:</strong> la examene, formulează concis: ecuația fotosintezei, rolurile PSI/PSII, diferențe C₃–C₄–CAM, traseul alimentelor și câte 2–3 enzime esențiale cu substrat/produs.
      </div>
    </div>
  );
}
