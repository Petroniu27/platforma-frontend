import React, { useState } from "react";
import '../style.css';
import medschoolexam from '../images/medschoolexam.jpg'; // presupun că ai pus imaginea în src/images
import videoTest from '../videos/video-test.mp4'; // pune video-ul în src/Videos

export default function HomePage() {
  const [videoVisible, setVideoVisible] = useState(true);
  const [muted, setMuted] = useState(true);

  const handleUnmute = () => {
    setMuted(false);
  };

  const handleCloseVideo = () => {
    setVideoVisible(false);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <h1>Haide să te ajutăm să îți îndeplinești visul!</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Acasă</a></li>
            <li><a href="/meditatii">Meditații</a></li>
            <li><a href="/masterclass">Masterclass</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/despre_noi">Despre noi</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="intro">
          <div className="container">
            <img src={medschoolexam} alt="Imagine explicativa" />
            <div className="text">
              <h2>Sa vorbim putin despre admiterea la medicina!</h2>
              <p>
                Asa cum probabil ti-ai dat seama, admiterea la medicina nu est un sprint, este un maraton...
                Conteaza la fel de mult cat de bine dormi si ce mananci, cum conteaza cat de mult inveti.
                Ca si in cazul unui maraton, ai nevoie de un antrenor si conteaza cel putin la fel de mult sa fii compatibil cu antrenorul tau,
                pe cat conteaza cat de bun este acest antrenor...
                Daca aceste ambe afirmatii iti par logice, vei vrea probabil sa incerci mai multi meditatori inainte sa incepi cu adevarat sa lucrezi cu unul.
                Pentru a te ajuta in acest sens, noi iti oferim prima sedinta gratuit.
              </p>

              <h2>Sa invatam sa gandim!</h2>
              <p>
                Daca intelegi ca pentru un rezultat bun la acest gen de examen nu sunt suficiente cunostintele teoretice, ai venit in locul potrivit!
                Daca inca nu ai inteles acest lucru, esti tot in locul potrivit, pentru ca urmeaza sa iti explic situatia reala!
              </p>
              <p>
                E ca la sah. Inveti destul de repede sa muti piesele (teoria), dar cat dureaza pana reusesti cu adevarat sa stapanesti mutarile?
                Si dupa ce inveti destul de bine sa manevrezi pe tabla, jocul depinde mereu de diferenta de nivel dintre tine si adversar...
                Cu alte cuvinte cat de bine stie el sa manevreze fata de tine. Adversarul la medicina este caietul de intrebari.
                Cat de "tricky" este conceput raportat la cat de bine stii tu sa iti utilizezi cunostintele...
              </p>
              <p>Pentru ca despre asta este vorba de fapt...despre utilizarea cunostintelor</p>

              <h2>Fa saltul calitativ!</h2>
              <p>
                Okay, deci stii manualul cap coada, de la coada la cap si pe diagonala si vrei sa poti jongla cu informatia!
              </p>
              <p>
                In primul rand, felicitari! In sfarsit ai intrat in joc si acum putem dansa!
                Un profesor in varsta mi-a spus in anul I ca teoria e foarte importanta..."Nu poti avea un salt calitativ fara acumulare cantitativa!"
                Deci pana acum ai acumulat informatie, pe cont propriu sau cu ajutorul unui meditator. Grozav! Acum te pot ajuta sa progresezi exponential!
              </p>

              <h2>Tipuri de candidati</h2>
              <p>
                Trebuie sa discutam si reversul monezii. Elevii cu care lucram, cu care am lucrat si pe care i-am putut urmari in evolutie sunt si ei de mai multe tipuri.
                Unii mai dornici sa invete, altii mai delasatori, unii care prind mai repede anumite informatii,
                altii care au nevoie de mai multa munca pentru a intelege diverse parti din materie.
              </p>
              <p>
                Noi suntem alaturi de toti si incercam sa oferim un program de pregatire cat mai personalizat,
                adaptat nevoilor fiecaruia. Suntem foarte flexibili si incercam sa ii invatam si pe clientii nostri cum sa isi obtina flexibilitatea mentala
                de care au nevoie pentru a naviga usor atat perioada de pregatire, cat si examenul in sine.
              </p>
              <p>
                In ceea ce priveste punctele slabe si punctele forte ale fiecarui elev, avem ochiul format.
                Si de fapt, pentru acest serviciu care este adeseori trecut cu vederea suntem foarte capabili sa ne pregatim elevii foarte bine.
              </p>
              <p>
                Ne orientam foarte repede asupra informatiilor care le lipsesc tinerilor cu care lucram,
                si mai mult decat atat, ne dam seama foarte bine unde au scapari in utilizarea corecta a respectivelor informatii,
                astfel incat sa ii putem aduce la punctul la care sa isi atinga potentialul maxim.
                Asta nu e o treaba usor de facut si mai mult, din experienta noastra, nu multa lume depune efortul de a oferi acest serviciu.
                Dar cu el iti deblochezi adevarata valoare.
                Din nou, nu este vorba numai despre informatie teoretica. Este vorba despre cum o accesezi si o aplici rapid,
                sub presiunea timpului si a stresului examinarii...
                Multa lume ofera meditatii pentru biologie, dar nu multi ofera aceste lucruri practic vitale pregatirii tale...
              </p>
            </div>
          </div>
        </section>
      </main>

      {/*
  {videoVisible && (
    <div className="video-container">
      <button className="close-button" onClick={handleCloseVideo}>×</button>
      <video autoPlay muted={muted} loop playsInline>
        <source src={videoTest} type="video/mp4" />
        Browserul tau nu suporta video.
      </video>
      {muted && <button className="unmute-button" onClick={handleUnmute}>Unmute</button>}
    </div>
  )}
*/}
    </div>
  );
}
