import React, { useEffect, useState } from "react";
import { subjects } from "../subjects";

export default function EvaluariProfesor() {
  const [form, setForm] = useState({
    studentId: "",
    subject: "",
    chapterCode: "",
    score: "",
    date: "",
  });
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(
          "https://platforma-backend.onrender.com/api/evaluations/students-with-admitere",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error(`Serverul a răspuns cu ${res.status}`);
        }

        const data = await res.json();

        if (!Array.isArray(data.students)) {
          throw new Error("Răspuns invalid de la server (nu e listă de elevi)");
        }

        setStudents(data.students);
      } catch (err) {
        console.error("Eroare la încărcarea elevilor:", err);
        setMessage("❌ Nu s-au putut încărca elevii eligibili.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "subject") {
      setForm((prev) => ({ ...prev, chapterCode: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(
        "https://platforma-backend.onrender.com/api/evaluations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Eroare la trimitere");

      await res.json();

      setMessage("✅ Evaluare adăugată cu succes!");
      setForm({
        studentId: "",
        subject: "",
        chapterCode: "",
        score: "",
        date: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Eroare la trimiterea evaluării.");
    }
  };

  return (
    <div className="evaluation-form">
      <h2>Adaugă evaluare elev</h2>

      {loading ? (
        <p>Se încarcă elevii...</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            {/* Select elev */}
            <select
              name="studentId"
              value={form.studentId}
              onChange={handleChange}
              required
            >
              <option value="">Selectează elevul</option>
              {students.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name} {s.surname} ({s.email})
                </option>
              ))}
            </select>

            {/* Select materie */}
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            >
              <option value="">Selectează materia</option>
              {Object.entries(subjects).map(([code, subj]) => (
                <option key={code} value={code}>
                  {subj.name}
                </option>
              ))}
            </select>

            {/* Select capitol */}
            {form.subject && (
              <select
                name="chapterCode"
                value={form.chapterCode}
                onChange={handleChange}
                required
              >
                <option value="">Selectează capitolul</option>
                {subjects[form.subject].chapters.map((ch) => (
                  <option key={ch.code} value={ch.code}>
                    {ch.label}
                  </option>
                ))}
              </select>
            )}

            {/* Notă */}
            <input
              type="number"
              name="score"
              placeholder="Notă (1-10)"
              min="1"
              max="10"
              value={form.score}
              onChange={handleChange}
              required
            />

            {/* Data */}
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />

            <button type="submit">Trimite evaluarea</button>
          </form>

          {message && <p>{message}</p>}
        </>
      )}
    </div>
  );
}
