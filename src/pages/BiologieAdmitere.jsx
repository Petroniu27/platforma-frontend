import React from 'react';
import CelulaNotes from './CelulaNotite'; // Asigură-te că numele și calea fișierului sunt corecte
import LessonsList from "../components/LessonsList";




export default function BiologieAdmitere() {
  return (
    <div className="content-container">
      <h1>Biologie Admitere Medicină</h1>
      <p>
        Aici găsești toate materialele necesare pentru admiterea la Medicină la biologie.
      </p>

      {/* Afișează notițele despre Celulă */}
      <section style={{ marginTop: '2rem' }}>
        <h2>Capitolul 1: Celula</h2>
        <CelulaNotes />
      </section>
        <LessonsList />
      

    </div>
  );
}


