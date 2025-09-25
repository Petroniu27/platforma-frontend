import React from "react";

export default function CelulaNotes() {
  return (
    <main className="prose max-w-none px-4 md:px-8 lg:px-12 font-sans">
      <header className="not-prose border-b py-4 mb-6">
        <h1 className="text-3xl font-bold leading-tight">Cap. 1 — Celula</h1>
        <p className="text-sm opacity-80">
          Notițe schematizate pentru admiterea la Medicină: definiții, structură,
          organite, transport transmembranar, potențial de membrană, proprietăți.
        </p>
        {/* Intro + structură generală ale celulei. :contentReference[oaicite:0]{index=0} */}
      </header>

      {/* 1. Introducere */}
      <section id="intro">
        <h2>1) Introducere</h2>
        <ul>
          <li>
            <strong>Definiție:</strong> celula este unitatea morfofuncțională și genetică a
            organizării materiei vii; poate exista singură sau în grup (formează
            țesuturi). {/* :contentReference[oaicite:1]{index=1} */}
          </li>
          <li>
            <strong>Formă:</strong> inițial globuloasă; ulterior, în funcție de funcție:
            fusiformă, stelată, cubică, cilindrică etc.; unele rămân globuloase
            (celulele sangvine, ovul, adipocit, condrocit). {/* :contentReference[oaicite:2]{index=2} */}
          </li>
          <li>
            <strong>Dimensiuni uzuale:</strong> hematie ≈ 7,5 μm; ovul ≈ 150–200 μm;
            fibra musculară striată poate ajunge la 5–15 cm; media ≈ 20–30 μm. {/* :contentReference[oaicite:3]{index=3} */}
          </li>
          <li>
            <strong>Componente majore:</strong> 1) membrana celulară; 2) citoplasma;
            3) nucleul. {/* :contentReference[oaicite:4]{index=4} */}
          </li>
        </ul>
      </section>

      {/* 2. Structura celulei */}
      <section id="structura" className="mt-6">
        <h2>2) Structura celulei — overview</h2>
        <p>
          Celula este alcătuită din <em>membrană celulară</em> (plasmalemă),{" "}
          <em>citoplasmă</em> (hialoplasmă + organite + incluziuni) și{" "}
          <em>nucleu</em> cu material genetic. {/* :contentReference[oaicite:5]{index=5} */}
        </p>
      </section>

      {/* 2.1 Membrana celulară */}
      <section id="membrana" className="mt-6">
        <h3>2.1) Membrana celulară (plasmalema)</h3>
        <ul>
          <li>
            <strong>Rol:</strong> înconjoară celula, îi conferă forma și separă
            compartimentul intracelular de mediul extracelular. {/* :contentReference[oaicite:6]{index=6} */}
          </li>
          <li>
            <strong>Compoziție:</strong> fosfolipide (bistrat cu porțiuni hidrofile
            externe și miez hidrofob) + proteine (periferice, integrale,
            transmembranare) + glucide la fața externă (glicoproteine/glicolipide,
            încărcate negativ). {/* :contentReference[oaicite:7]{index=7} */}
          </li>
          <li>
            <strong>Model:</strong> „mozaic fluid” (proteine distribuite neuniform în
            matricea lipidică; colesterol de stabilizare). {/* :contentReference[oaicite:8]{index=8} */}
          </li>
        </ul>
      </section>

      {/* 2.2 Citoplasma */}
      <section id="citoplasma" className="mt-6">
        <h3>2.2) Citoplasma</h3>
        <ul>
          <li>
            <strong>Hialoplasma:</strong> sistem coloidal (apă ca mediu de dispersie,
            micelii coloidale în mișcare browniană). {/* :contentReference[oaicite:9]{index=9} */}
          </li>
          <li>
            <strong>Conține:</strong> organite <em>comune</em>, organite{" "}
            <em>specifice</em>, <em>incluziuni</em> temporare (rezerve, secreții,
            pigmenți). {/* :contentReference[oaicite:10]{index=10} */}
          </li>
        </ul>
      </section>

      {/* 2.2.1 Organite celulare */}
      <section id="organite" className="mt-6">
        <h4>2.2.1) Organite celulare</h4>

        <article className="mt-3">
          <h5>A) Organite comune</h5>
          <ul>
            <li>
              <strong>Reticul endoplasmatic (RE):</strong>
              <ul>
                <li>
                  <em>RE neted:</em> sistem canalicular care leagă plasmalema de stratul
                  extern al membranei nucleare; rol în metabolism (ex. glicogen),
                  „sistem circulator intracitoplasmatic”. {/* :contentReference[oaicite:11]{index=11} */}
                </li>
                <li>
                  <em>RE rugos (ergastoplasmă):</em> formă diferențiată a RE, cu
                  ribozomi pe fața externă ⇒ sinteză proteică. {/* :contentReference[oaicite:12]{index=12} */}
                </li>
              </ul>
            </li>
            <li>
              <strong>Ribozomi (corpusculii lui Palade):</strong> granule
              (≈150–250 Å), liberi în citoplasmă sau asociați cu RE; sediul sintezei
              proteice. {/* :contentReference[oaicite:13]{index=13} */}
            </li>
            <li>
              <strong>Aparatul Golgi (dictiozomi):</strong> micro/macrovezicule + cisterne;
              procesează și excretă produși celulari (ambalare/condensare). {/* :contentReference[oaicite:14]{index=14} */}
            </li>
            <li>
              <strong>Mitocondrii:</strong> membrană externă + membrană internă plicaturată
              (creste) + matrice cu enzime ⇒ <em>fosforilare oxidativă, sinteza ATP</em>. {/*  */}
            </li>
            <li>
              <strong>Lizozomi:</strong> corpusculi sferici cu <em>enzime hidrolitice</em>;
              importanți în fagocitoză (leucocite, macrofage). {/* :contentReference[oaicite:16]{index=16} */}
            </li>
            <li>
              <strong>Centrozom:</strong> 2 centrioli cilindrici perpendiculare + centrosferă;
              <em> rol în diviziunea celulară</em> (lipsește în neuroni). {/* :contentReference[oaicite:17]{index=17} */}
            </li>
          </ul>
        </article>

        <article className="mt-4">
          <h5>B) Organite specifice</h5>
          <ul>
            <li>
              <strong>Miofibrile:</strong> elemente contractile în sarcoplasma fibrelor
              musculare. {/* :contentReference[oaicite:18]{index=18} */}
            </li>
            <li>
              <strong>Neurofibrile:</strong> rețea în neuron (axoplasmă și dendrite). {/* :contentReference[oaicite:19]{index=19} */}
            </li>
            <li>
              <strong>Corpi Nissl (tigroizi):</strong> echivalenți ai ergastoplasmei în
              neuron. {/* :contentReference[oaicite:20]{index=20} */}
            </li>
          </ul>
          <p className="mt-2">
            <strong>Incluziuni citoplasmatice:</strong> granule de rezervă, produși de
            secreție, pigmenți — caracter temporar. {/* :contentReference[oaicite:21]{index=21} */}
          </p>
        </article>
      </section>

      {/* 2.3 Nucleul */}
      <section id="nucleul" className="mt-6">
        <h3>2.3) Nucleul</h3>
        <ul>
          <li>
            <strong>Rol:</strong> coordonează procesele biologice celulare fundamentale:
            conține material genetic, controlează metabolismul celular, transmite
            informația genetică. {/* :contentReference[oaicite:22]{index=22} */}
          </li>
          <li>
            <strong>Poziție și formă:</strong> centrală sau excentrică (adipocite, mucoase);
            de obicei are forma celulei. {/* :contentReference[oaicite:23]{index=23} */}
          </li>
          <li>
            <strong>Număr:</strong> în mod obișnuit mononucleate; excepții — binucleate
            (hepatocite), polinucleate (fibra musculară striată), anucleate (hematie
            adultă). {/* :contentReference[oaicite:24]{index=24} */}
          </li>
          <li>
            <strong>Dimensiuni:</strong> 3–20 μm; raport nucleu/citoplasmă ≈ 1/3–1/4. {/* :contentReference[oaicite:25]{index=25} */}
          </li>
          <li>
            <strong>Structură:</strong> membrană nucleară, carioplasmă, 1+ nucleoli. {/* :contentReference[oaicite:26]{index=26} */}
          </li>
        </ul>
      </section>

      {/* 2.4 Prelungiri / specializări membranare */}
      <section id="prelungiri" className="mt-6">
        <h3>2.4) Prelungiri / specializări</h3>
        <ul>
          <li>
            <strong>Temporare:</strong> pseudopode (ex. leucocite). {/* :contentReference[oaicite:27]{index=27} */}
          </li>
          <li>
            <strong>Permanente:</strong> microvili (epiteliu mucoasă intestinală, tubi
            renali), cili (epiteliu mucoasă traheală), desmozomi (corpusculi de
            legătură ce solidarizează celulele epiteliale). {/* :contentReference[oaicite:28]{index=28} */}
          </li>
        </ul>
      </section>

      {/* 3. Transport transmembranar */}
      <section id="transport" className="mt-8">
        <h2>3) Transport transmembranar</h2>

        <article className="mt-3">
          <h3>3.1) Principii generale</h3>
          <ul>
            <li>
              Membrana are <strong>permeabilitate selectivă</strong>; pasajul ionic liber nu
              este permis, ionii traversează prin <em>canale ionice</em> proteice
              voltaj/ligand-dependente, invizibile chiar și la microscopul
              electronic. {/* :contentReference[oaicite:29]{index=29} */}
            </li>
          </ul>
        </article>

        <article className="mt-4">
          <h3>3.2) Transport pasiv</h3>
          <ul>
            <li>
              <strong>Difuziune simplă:</strong> deplasare conform gradientului de
              concentrație (prin bilayer/canale). {/* :contentReference[oaicite:30]{index=30} */}
            </li>
            <li>
              <strong>Osmoză:</strong> difuziunea apei prin membrană semipermeabilă —
              apa trece din soluția mai diluată spre cea mai concentrată; forța
              necesară pentru a o opri = <em>presiune osmotică</em>, proporțională cu nr.
              de particule dizolvate. {/* :contentReference[oaicite:31]{index=31} */}
            </li>
            <li>
              <strong>Difuziune facilitată:</strong> prin proteine transportoare, specifică,
              <em> saturabilă</em>, poate apărea <em>competiție</em> între molecule; se face
              pe gradient și <u>nu consumă ATP</u>. {/*  */}
            </li>
          </ul>
        </article>

        <article className="mt-4">
          <h3>3.3) Transport activ</h3>
          <ul>
            <li>
              <strong>Definiție:</strong> deplasare împotriva gradientului de
              concentrație; <u>consumă energie din ATP</u>. {/* :contentReference[oaicite:33]{index=33} */}
            </li>
            <li>
              <strong>Primar:</strong> proteina transportoare hidrolizează direct ATP
              (pompe ionice). {/* :contentReference[oaicite:34]{index=34} */}
            </li>
            <li>
              <strong>Secundar (cotransport):</strong> folosește energia eliberată de un
              flux pe gradient pentru a urca alt solvit împotriva gradientului;
              exemplu: pompa Na⁺/K⁺ ca sistem energetic al altor cotransporturi. {/* :contentReference[oaicite:35]{index=35} */}
            </li>
          </ul>
        </article>

        <article className="mt-4">
          <h3>3.4) Transport vezicular</h3>
          <ul>
            <li>
              <strong>Endocitoză:</strong> material extracelular captat în vezicule prin
              invaginarea membranei, transferat intracelular; forme particulare:
              <em> fagocitoză</em>, <em>pinocitoză</em>. {/* :contentReference[oaicite:36]{index=36} */}
            </li>
            <li>
              <strong>Exocitoză:</strong> vezicule intracelulare fuzionează cu membrana,
              eliberând conținutul în exterior. {/* :contentReference[oaicite:37]{index=37} */}
            </li>
          </ul>
        </article>
      </section>

      {/* 4. Potențial de membrană */}
      <section id="pmem" className="mt-8">
        <h2>4) Potențial de membrană</h2>
        <ul>
          <li>
            <strong>Origine:</strong> permeabilitate selectivă + molecule intracelulare
            nedifuzibile încărcate negativ + activitatea pompei Na⁺/K⁺ ⇒
            distribuție inegală a sarcinilor de-o parte și de alta a membranei. {/* :contentReference[oaicite:38]{index=38} */}
          </li>
          <li>
            <strong>Potențial de repaus:</strong> ≈ −65…−85 mV (aproape de E<sub>K</sub>),
            menținut de pompa Na⁺/K⁺ (raport 2 K⁺ intra / 3 Na⁺ extra) și de
            permeabilități diferențiale. {/* :contentReference[oaicite:39]{index=39} */}
          </li>
        </ul>

        <article className="mt-4">
          <h3>4.1) Potențial de acțiune (ex. neuron)</h3>
          <ul>
            <li>
              <strong>Pragul:</strong> depolarizare rapidă când se atinge valoarea critică
              („potențial prag”); răspuns <em>tot sau nimic</em>. {/* :contentReference[oaicite:40]{index=40} */}
            </li>
            <li>
              <strong>Panta ascendentă (depolarizare):</strong> crește permeabilitatea
              pentru Na⁺ → intră prin canale voltaj-dependente. {/* :contentReference[oaicite:41]{index=41} */}
            </li>
            <li>
              <strong>Panta descendentă (repolarizare):</strong> iese K⁺ prin canale
              voltaj-dependente. {/* :contentReference[oaicite:42]{index=42} */}
            </li>
            <li>
              <strong>Perioada refractară:</strong> interval în care e dificil de obținut
              un nou PA (absolută/relativă). {/* :contentReference[oaicite:43]{index=43} */}
            </li>
          </ul>
        </article>
      </section>

      {/* 5. Proprietăți relevante pentru examen (din acest capitol) */}
      <section id="propspec" className="mt-8">
        <h2>5) Proprietăți / puncte-cheie</h2>
        <ul>
          <li>
            Membrana: bistrat fosfolipidic + proteine + glucide la exterior;
            model „mozaic fluid”. {/*  */}
          </li>
          <li>
            Organite comune: RE (neted/rugos), ribozomi, Golgi, mitocondrii,
            lizozomi, centrozom. {/* :contentReference[oaicite:45]{index=45} */}
          </li>
          <li>
            Organite specifice: miofibrile, neurofibrile, corpi Nissl. {/* :contentReference[oaicite:46]{index=46} */}
          </li>
          <li>
            Transport: difuziune simplă, osmoză, difuziune facilitată (specifică,
            saturabilă), activ (primar/ secundar), vezicular (endo-/exo-). {/*  */}
          </li>
          <li>
            PM de repaus ~ −65…−85 mV; PA: prag → depolarizare (Na⁺) →
            repolarizare (K⁺) → perioadă refractară. {/*  */}
          </li>
        </ul>
      </section>

      {/* 6. Mic dicționar (ajută la grile) */}
      <section id="glosar" className="mt-8">
        <h2>6) Mic dicționar</h2>
        <ul>
          <li>
            <strong>Ergastoplasmă:</strong> RE rugos bogat în ribozomi (sinteză proteică).
            {/* :contentReference[oaicite:49]{index=49} */}
          </li>
          <li>
            <strong>Centrosferă:</strong> zonă vâscoasă din jurul centriolilor, parte a
            centrozomului. {/* :contentReference[oaicite:50]{index=50} */}
          </li>
          <li>
            <strong>Presiune osmotică:</strong> forța necesară pentru a preveni osmoza,
            proporțională cu nr. de particule dizolvate. {/* :contentReference[oaicite:51]{index=51} */}
          </li>
        </ul>
      </section>

      {/* 7. Întrebări-fulger (opțional pentru recapitulare rapidă) */}
      <section id="quiz" className="mt-8">
        <h2>7) Întrebări-fulger</h2>
        <ol>
          <li>Care este compoziția de bază a plasmalemei și ce model structural o descrie?</li>
          <li>Enumerați organitele <em>comune</em> și două funcții esențiale ale fiecăruia.</li>
          <li>Diferențiați difuziunea facilitată de transportul activ secundar.</li>
          <li>Ce valori are PM de repaus și care este rolul pompei Na⁺/K⁺?</li>
          <li>Enumerați fazele potențialului de acțiune într-un neuron.</li>
        </ol>
      </section>

      <footer className="not-prose mt-10 text-xs opacity-70">
        <p>
          Notițe sintetizate fidel după manualul încărcat — capitolul „Celula”
          (structura, organite, transport, potențial). Citează PDF-ul tău în dreptul fiecărei
          secțiuni prin comentariile marcate. {/* :contentReference[oaicite:52]{index=52} */}
        </p>
      </footer>
    </main>
  );
}
