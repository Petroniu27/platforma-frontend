import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { subjects } from "../subjects";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { api } from "../api";

export default function Evaluation() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [error, setError] = useState("");

  const abonamentValid =
    Array.isArray(user?.subscriptions) &&
    user.subscriptions.some((sub) => /(bio|chim|adm|romana)/i.test(String(sub || "")));

  useEffect(() => {
    if (!abonamentValid) {
      navigate("/abonamente");
      return;
    }

    const fetchData = async () => {
      try {
        const r = await api.get("/evaluations");
        const json = r.data;

        const arr = Array.isArray(json)
          ? json
          : Array.isArray(json?.evaluations)
          ? json.evaluations
          : null;

        if (arr) {
          setData(arr);
        } else {
          setError("Format invalid primit de la server");
          setData([]);
        }
      } catch (err) {
        console.error("❌ Eroare la fetch evaluări:", err);
        setError("Nu s-au putut încărca evaluările");
      }
    };

    fetchData();
  }, [abonamentValid, navigate]);

  if (!abonamentValid) {
    return <p>🔒 Ai nevoie de un abonament activ. Redirecționare...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>❌ {error}</p>;
  }

  // Filtru materii accesibile elevului
  const allowedSubjects = Object.entries(subjects).filter(([code]) =>
    user?.subscriptions?.includes(code)
  );

  const filteredEvals = data.filter(
    (ev) =>
      (!selectedSubject || ev.subject === selectedSubject) &&
      (!selectedChapter || ev.chapterCode === selectedChapter)
  );

  return (
    <div className="evaluation-container">
      <h2>Evaluările mele</h2>

      {/* Select materie */}
      <select
        value={selectedSubject}
        onChange={(e) => {
          setSelectedSubject(e.target.value);
          setSelectedChapter("");
        }}
      >
        <option value="">Toate materiile</option>
        {allowedSubjects.map(([code, subj]) => (
          <option key={code} value={code}>
            {subj.name}
          </option>
        ))}
      </select>

      {/* Select capitol */}
      {selectedSubject && (
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
        >
          <option value="">Toate capitolele</option>
          {subjects[selectedSubject].chapters.map((ch) => (
            <option key={ch.code} value={ch.code}>
              {ch.label}
            </option>
          ))}
        </select>
      )}

      {/* Lista evaluări */}
      {selectedChapter && filteredEvals.length > 0 ? (
        <div className="evaluations-details">
          <h3>
            {subjects[selectedSubject]?.chapters.find(
              (c) => c.code === selectedChapter
            )?.label || "Capitol selectat"}
          </h3>

          {filteredEvals.map((ev, idx) => (
            <div key={idx} className="evaluation-item">
              <p>
                <strong>Notă:</strong> {ev.score}
              </p>
              <p>
                <strong>Data:</strong>{" "}
                {new Date(ev.date).toLocaleDateString("ro-RO")}
              </p>
            </div>
          ))}

          {filteredEvals.length > 1 && (
            <div className="chart-wrapper">
              <h3>Evoluție</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={filteredEvals}>
                  <XAxis
                    dataKey="date"
                    tickFormatter={(d) => new Date(d).toLocaleDateString()}
                  />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#1d4ed8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      ) : (
        <p>Selectează materie și capitol pentru a vedea evaluările.</p>
      )}
    </div>
  );
}
