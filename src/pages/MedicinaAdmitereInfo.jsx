import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MedicinaAdmitereInfo() {
  const { user } = useAuth();

  const subs = (user?.subscriptions || []).map((s) => s.toLowerCase());

  const hasBio = subs.some((s) => ["bio1", "bio2", "adm1", "adm2"].includes(s));
  const hasChim = subs.some((s) => ["chim1", "chim2", "adm1", "adm2"].includes(s));

  const hasAdmitere = hasBio || hasChim;

  return (
    <div className="container page">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coloana stângă: titlu + text */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold mb-4">Admitere Medicină</h1>

          <div className="prose max-w-none leading-relaxed">
            <p>
              Admiterea la Medicină nu este un examen pentru care este suficient
              să acumulezi informații. Cel puțin partea de biologie necesită
              formarea unei viziuni asupra proceselor, precum și adoptarea unui
              limbaj specific.
            </p>

            <p>
              Un profesor bun îți va evidenția toate detaliile și chichițele. Un
              profesor excepțional se va asigura că aceste detalii și chichițe
              devin o a doua natură pentru elevii lui.
            </p>

            <p>
              Noi am creat și continuăm să dezvoltăm un sistem unic în România,
              în care îți punem la dispoziție informația în format video ca să o
              poți accesa oricând, de oriunde. Ne asigurăm că ai înțeles-o bine
              și te ajutăm să o menții proaspătă prin programul nostru de{" "}
              <strong>ascultări</strong>. Apoi venim cu{" "}
              <strong>masterclass-uri</strong>, unde îți arătăm toate
              chichițele, și cu <strong>workshop-uri</strong>, unde înveți cum să
              aplici practic.
            </p>

            <p>
              Nu am făcut încă RMN-uri funcționale abonaților noștri, dar
              suntem destul de siguri că, dacă am realiza un astfel de studiu,
              am vedea modificări importante care să marcheze evoluția cognitivă
              privind materia pentru admitere și modul de utilizare al acesteia.
            </p>

            <hr className="my-6" />

            <p>
              Suntem chiar foarte siguri că, dacă ne urmezi instrucțiunile și
              revii constant către noi pentru un{" "}
              <strong>feedback reciproc</strong>, putem să te ajutăm nu doar să
              obții informațiile necesare și să le aplici corespunzător, dar
              chiar să devii mai inteligent 🤯.
            </p>

            <p>
              Pentru că vrem să te ajutăm și să îți fim alături,{" "}
              <strong>contactează-ne prin formularul de contact</strong> pentru
              orice problemă și vei vedea că revenim destul de repede.
            </p>

            <p>
              Înțelegem că pentru unii dintre voi abonamentele pot fi o povară
              financiară și suntem deschiși să găsim soluții. Avem un program
              prin care <em>sprijinim elevii care merită să devină doctori</em>,
              dar uneori nu își permit anumite costuri.
            </p>

            <p>
              Înțelegem și că unii dintre voi își doresc abonamente
              personalizate (mai multe ascultări, mai puține ascultări etc).
              Putem discuta astfel de variante, inclusiv cu{" "}
              <strong>personalizarea prețului</strong>.
            </p>

            <p>
              Pentru orice dorință, neclaritate, sugestie sau reclamație,{" "}
              <strong>vă încurajăm</strong> să ne contactați prin formularul din
              secțiunea{" "}
              <Link to="/contact" className="text-blue-600 underline">
                Contact
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Coloana dreaptă: butoane */}
        <div className="flex flex-col space-y-4">
          {!user && (
            <>
              <Link to="/register" className="hero-button">
                Înregistrează-te
              </Link>
              <Link to="/login" className="hero-button">
                Autentificare
              </Link>
            </>
          )}

          {user && !hasAdmitere && (
            <>
              <p className="text-red-600">
                Pentru a avea acces la lecții este nevoie de un abonament activ.
              </p>
              <Link to="/abonamente" className="hero-button">
                Vezi abonamente
              </Link>
            </>
          )}

          {user && hasAdmitere && (
            <Link to="/admitere" className="hero-button">
              Intră în lecții
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
