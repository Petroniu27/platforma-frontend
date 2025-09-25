import React, { useEffect, useState } from "react";
import { chaptersBySubscription } from "../data/chaptersBySubscription";

export default function EvaluariProfesor() {
  const [form, setForm] = useState({
    studentId: "",
    chapter: "",
    score: "",
    date: "",
  });
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [capitole, setCapitole] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const r = await fetch("/api/evaluations/students-with-admitere", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!r.ok) {
          throw new Error(`Serverul a răspuns cu ${r.status}`);
        }

        const data = await r.json();

        if (!Array.isArray(data)) {
          throw new Error("Răspuns invalid de la server (nu e listă)");
        }

        setStudents(data);
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

    if (name === "studentId") {
      const elev = students.find((s) => s._id === value);
      if (elev) {
        const abonament = elev.subscription?.toLowerCase();
        const lista = chaptersBySubscription[abonament] || [];
        setCapitole(lista);
        setForm((prev) => ({ ...prev, chapter: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const r = await fetch("/api/evaluations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(form),
      });

      if (!r.ok) throw new Error("Eroare la trimitere");

      setMessage("✅ Evaluare adăugată cu succes!");
      setForm({ studentId: "", chapter: "", score: "", date: "" });
      setCapitole([]);
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

            <select
              name="chapter"
              value={form.chapter}
              onChange={handleChange}
              required
              disabled={!capitole.length}
            >
              <option value="">Selectează capitolul</option>
              {capitole.map((ch, idx) => (
                <option key={idx} value={ch}>
                  {ch}
                </option>
              ))}
            </select>

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
