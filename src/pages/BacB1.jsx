// BacB1.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

export default function BacB1() {
  return (
    <div className="bac-container">
    
      <h1>Bacalaureat Biologie – B1</h1>
      <p className="intro-text">
        Pregătește-te pentru proba B1 la Bacalaureat, cu accent pe anatomie și fiziologie umană.
      </p>

      <section className="material-section">
        <h2>📹 Lecții video</h2>
        <div className="video-list">
          <div className="video-card">
            <iframe src="https://player.vimeo.com/video/123456789" title="Celula" allowFullScreen></iframe>
            <p>Structura și funcțiile celulei</p>
          </div>
          <div className="video-card">
            <iframe src="https://player.vimeo.com/video/987654321" title="Sistemul nervos" allowFullScreen></iframe>
            <p>Sistemul nervos</p>
          </div>
          {/* Adaugă mai multe video-uri pentru B1 */}
        </div>
      </section>

      <section className="material-section">
        <h2>📄 Fișe de învățare</h2>
        <ul className="pdf-list">
          {/* înlocuit „Celula” și „Sistemul nervos” cu fișe JSX */}
          <li><Link to="/bio10-03-nutritie">🧾 Fișă: Nutriție & Digestie</Link></li>
          <li><Link to="/bio10-04-respiratia">🧾 Fișă: Respirația</Link></li>
         
          <li><Link to="/bio10-02-tesuturi-animale">🧾 Fișă: Țesuturi animale</Link></li>
          {/* Mai multe fișe B1 */}
        </ul>
      </section>

      <section className="material-section">
        <h2>🧠 Teste grilă</h2>
        <ul className="test-list">
          <li><Link to="/teste-b1/celula">✅ Test grilă: Celula</Link></li>
          <li><Link to="/teste-b1/sistem-nervos">✅ Test grilă: Sistemul nervos</Link></li>
          {/* Mai multe teste grilă */}
        </ul>
      </section>

      <footer className="back-footer">
        <Link to="/bac" className="back-home">← Înapoi la alegerea B1/B2</Link>
      </footer>
    </div>
  );
}
