import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';



export default function BacBiologie() {
  return (
    <div className="bac-container">
     
      <h1>Bacalaureat – Biologie</h1>
      <p className="intro-text">
        Alege tipul de Bacalaureat la Biologie pe care îl susții:
      </p>

      <div className="bac-buttons">
        <Link to="/bac/b1" className="bac-button">🔬 Biologie B1<br />(Vegetală și animală)</Link>
        <Link to="/bac/b2" className="bac-button">🧠 Biologie B2<br />(Anatomie și genetică)</Link>
      </div>

      <footer className="back-footer">
        <Link to="/" className="back-home">← Înapoi la pagina principală</Link>
      </footer>
    </div>
  );
}
