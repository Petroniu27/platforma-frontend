import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const bioLessons = [
  { slug: "bio-b1-celula-01", title: "Compoziția chimică a materiei vii" },
  { slug: "bio-b1-celula-02", title: "Structura celulei" },
  { slug: "bio-b1-celula-03", title: "Funcțiile celulei" },
];

const chimLessons = [
  { slug: "chim-b1-atom-01", title: "Structura atomului" },
  { slug: "chim-b1-legaturi-02", title: "Legăturile chimice" },
];

export default function AdmitereLectii() {
  const { user } = useAuth();

  const subs = (user?.subscriptions || []).map((s) => s.toLowerCase());

  const hasBio = subs.some((s) => ["bio1", "bio2", "adm1", "adm2"].includes(s));
  const hasChim = subs.some((s) => ["chim1", "chim2", "adm1", "adm2"].includes(s));

  return (
    <div className="container page">
      <h1 className="text-2xl font-bold mb-6">Lecțiile pentru Admitere Medicină</h1>

      {hasBio && (
        <>
          <h2 className="text-xl font-semibold mb-2">Biologie</h2>
          <ul className="mb-6 space-y-2">
            {bioLessons.map((lesson) => (
              <li key={lesson.slug}>
                <Link
                  to={`/lectie/${lesson.slug}`}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {lesson.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {hasChim && (
        <>
          <h2 className="text-xl font-semibold mb-2">Chimie</h2>
          <ul className="space-y-2">
            {chimLessons.map((lesson) => (
              <li key={lesson.slug}>
                <Link
                  to={`/lectie/${lesson.slug}`}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {lesson.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {!hasBio && !hasChim && (
        <p className="text-red-600">Nu ai abonament activ pentru lecțiile de admitere.</p>
      )}
    </div>
  );
}
