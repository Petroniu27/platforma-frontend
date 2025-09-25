import React, { useEffect, useState } from "react";

export default function EleviiMei() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const r = await fetch("/api/evaluations/students-with-admitere", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await r.json();
        setStudents(data);
      } catch (err) {
        console.error("Eroare la încărcarea elevilor:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="elevii-mei">
      <h2>Elevii mei (eligibili pentru evaluări)</h2>
      {loading ? (
        <p>Se încarcă...</p>
      ) : students.length === 0 ? (
        <p>Nu există elevi eligibili în acest moment.</p>
      ) : (
        <ul className="student-list">
          {students.map((s) => (
            <li key={s._id} className="student-card">
              <strong>{s.name}</strong> <br />
              {s.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
