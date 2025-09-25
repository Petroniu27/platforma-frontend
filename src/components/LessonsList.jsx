import React, { useEffect, useState } from "react";

export default function LessonsList() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("/api/lessons")
      .then((res) => res.json())
      .then((data) => setLessons(data))
      .catch((err) => console.error("Eroare la încărcare lecții:", err));
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Lecții disponibile</h2>
      <ul>
        {lessons.map((l) => (
          <li key={l._id}>
            <strong>{l.title}</strong> — {l.chapter}<br />
            <small>{l.summary}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
