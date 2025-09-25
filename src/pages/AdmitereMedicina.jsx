import React from 'react';
import { Link } from 'react-router-dom';



export default function AdmitereMedicina() {
  return (
    <div className="content-container">
      
      <h1>Admitere Medicina</h1>
      <p>
        Pregătește-te pentru admiterea la facultatea de Medicină cu materiale actualizate și structurate pentru Biologie și Chimie.
      </p>

      <h2>Alege materia:</h2>
      <ul className="subject-list">
        <li>
          <Link to="/admitere/biologie" className="subject-link">
            Biologie - Admitere Medicină
          </Link>
        </li>
        <li>
          <Link to="/admitere/chimie" className="subject-link">
            Chimie - Admitere Medicină
          </Link>
        </li>
      </ul>
    </div>
  );
}
