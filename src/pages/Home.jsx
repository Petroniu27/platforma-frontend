import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import logo from '../Assets/logo-academedica.png';
import salLogo from '../Assets/ANPC-SAL.png';
import solLogo from '../Assets/ANPC-SOL.png';

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO – coloană compactă, centrată */}
      <header
        className="hero-section text-center"
        style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}
      >
        <img src={logo} alt="AcadeMedica Logo" className="hero-logo" style={{ margin: '0 auto' }} />
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginTop: 8 }}>
          Bine ai venit pe <span className="brand">AcadeMedica</span>!
        </h1>
        <p style={{ fontSize: '1.1rem', marginTop: 8 }}>
          Platforma completă pentru <strong>Bacalaureat</strong> și <strong>Admitere Medicină</strong>,
          cu lecții clare, resurse moderne și testare interactivă.
        </p>
        <div className="cta-buttons" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 12 }}>
          <Link to="/bac-info" className="hero-button">📘 Bac Biologie</Link>
          <Link to="/medicina-admitere-info" className="hero-button">⚕️ Admitere Medicină</Link>
        </div>
      </header>

      {/* FEATURES – 2×2 pe desktop, 1 col pe ecrane mici; container îngust */}
      <section className="features-section" style={{ marginTop: 48 }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, marginBottom: 24 }}>
          De ce să alegi AcadeMedica?
        </h2>

        <div
          className="features-grid"
          style={{
            maxWidth: 900,
            margin: '0 auto',
            padding: '0 16px',
            display: 'grid',
            gap: 16,
            gridTemplateColumns: '1fr',
          }}
        >
          {/* mic CSS responsiv prin JS */}
          <style>
            {`
              @media (min-width: 900px) {
                .features-grid { grid-template-columns: 1fr 1fr; }
              }
            `}
          </style>

          <div className="feature-card">
            <h3>📚 Lecții Structurate</h3>
            <p>Conform programei oficiale, organizate pe capitole și explicate pas cu pas.</p>
          </div>

          <div className="feature-card">
            <h3>🎥 Videouri Interactive</h3>
            <p>Explicații detaliate, exemple practice și demonstrații video la fiecare capitol.</p>
          </div>

          <div className="feature-card">
            <h3>🧠 Teste & Evaluări</h3>
            <p>Teste grilă, recapitulări și evaluări pe capitole, pentru a-ți urmări progresul.</p>
          </div>

          <div className="feature-card">
            <h3>👥 Echipă dedicată</h3>
            <p>
              Vei învăța de la oameni care au trecut prin același drum. Înțelegem examenul, nevoile tale și
              oferim mai mult decât informație: susținere reală și empatie.
            </p>
          </div>
        </div>
      </section>

    {/* TEXTUL TĂU – coloană de lectură îngustă */}
{/* TEXTUL TĂU – coloană de lectură îngustă */}
<section className="experience-section" style={{ marginTop: 56 }}>
  <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>
    Ce ne face diferiți?
  </h2>

  <div
    className="prose"
    style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: '0 16px',
      lineHeight: 1.7,
    }}
  >
    <p>
      Această platformă este creată de tineri care au luat cu brio examenul de admitere și care,
      în procesul de a se pregăti pentru această încercare, i-au smuls toate secretele, atât pentru
      a reuși ei, cât și pentru a-i putea ajuta acum, câțiva ani mai târziu, pe frații lor mai mici
      care își doresc să pășească pe același drum.
    </p>

    <p>
      Tot ce am învățat noi despre noi înșine ca elevi (vorbim aici despre o <em>metaanaliză</em>,
      nu despre materia în sine, ci despre procesul cognitiv de a ajunge la un nivel de gândire
      necesar depășirii probei în sine) îți punem la dispoziție ție. Nu doar uneltele prin care să îți
      construiești visul, ci și know-how-ul necesar utilizării lor, astfel încât să nu le tocești
      înainte de terminarea proiectului, dar să îl și poți duce la bun sfârșit.
    </p>

    <p>
      Proiectul despre care vorbesc ești tu, cel care trebuie să evolueze și să devină un nou tu,
      un super-tu, pentru a te putea integra realist în frumoasa imagine din visul tău, în care te
      vezi în halat alb.
      <br />
      <strong>Nu crezi că a venit timpul să investești mai serios în tine?</strong>
    </p>

    <p>
      La AcadeMedica am creat un sistem nou prin care încercăm să ne adaptăm nevoilor fiecărui elev,
      dar și să aducem o evoluție graduală, rapidă, a nivelului de pregătire. Facem acest proces
      într-un mod unic în România, prin treceri repetate, stratificate ca dificultate și urmărite atent
      de echipa noastră, foarte calificată pe acest stil de lucru.
    </p>

    <p>
      Dacă ai curiozități, întrebări sau <strong>nu ești foarte convins de acest stil de lucru</strong>, 
      te așteptăm, elev sau părinte, să ne scrii în formularul din secțiunea{" "}
      <Link to="/contact" className="text-link">Contact</Link>{" "}
      sau să ne cauți la numărul de telefon pe care îl găsești tot acolo.
      Vom reveni cu un apel în cel mai scurt timp și îți vom explica pe larg despre ce este vorba!
    </p>
  </div>
</section>



      {/* CUI SE ADRESEAZĂ – listă compactă */}
      <section className="info-section" style={{ marginTop: 48 }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>
          Cui se adresează?
        </h2>
        <ul style={{ maxWidth: 720, margin: '0 auto', padding: '0 16px', fontSize: '1.1rem' }}>
          <li>📖 Elevilor care se pregătesc pentru examenul de <strong>Bacalaureat</strong></li>
          <li>⚕️ Absolvenților care vor să susțină <strong>Admiterea la Medicină</strong></li>
          <li>🔬 Oricui vrea să învețe <strong>biologie și chimie</strong> într-un mod modern</li>
        </ul>
      </section>

      {/* FOOTER – neschimbat */}
      <footer className="home-footer" style={{ marginTop: 56 }}>
        <p>© {new Date().getFullYear()} AcadeMedica. Toate drepturile rezervate.</p>

        <div className="anpc-logos">
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
            <img src={salLogo} alt="ANPC SAL" className="anpc-logo" />
          </a>
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            <img src={solLogo} alt="ANPC SOL" className="anpc-logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}
