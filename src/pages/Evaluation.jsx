 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [error, setError] = useState("");

  const abonamentValid =
    Array.isArray(user?.subscriptions) &&
    user.subscriptions.some((sub) => /(bio|chim|adm)/i.test(String(sub || "")));

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

  const capitoleUnice = [...new Set(data.map((ev) => ev.chapter))].sort((a, b) =>
    a.localeCompare(b, "ro")
  );

  const evaluariCapitol = data.filter((ev) => ev.chapter === selectedChapter);

  return (
    <div className="evaluation-container">
      <div className="chapters-list">
        <h2>Capitole</h2>
        <ul>
          {capitoleUnice.map((ch) => (
            <li
              key={ch}
              className={ch === selectedChapter ? "selected" : ""}
              onClick={() => setSelectedChapter(ch)}
            >
              {ch}
            </li>
          ))}
        </ul>
      </div>

      <div className="evaluations-details">
        {selectedChapter ? (
          <>
            <h2>{selectedChapter}</h2>
            {evaluariCapitol.length > 0 ? (
              <>
                {evaluariCapitol.map((ev, idx) => (
                  <div key={idx} className="evaluation-item">
                    <p>
                      <strong>Notă:</strong> {ev.score}
                    </p>
                    <p>
                      <strong>Data:</strong>{" "}
                      {new Date(ev.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}

                {evaluariCapitol.length > 1 && (
                  <div className="chart-wrapper">
                    <h3>Evoluție</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={evaluariCapitol}>
                        <XAxis
                          dataKey="date"
                          tickFormatter={(d) =>
                            new Date(d).toLocaleDateString()
                          }
                        />
                        <YAxis domain={[0, 10]} />
                        <Tooltip />
                        <Bar dataKey="score" fill="#1d4ed8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </>
            ) : (
              <p>Nu există evaluări pentru acest capitol.</p>
            )}
          </>
        ) : (
          <p>Selectează un capitol pentru detalii.</p>
        )}
      </div>
    </div>
  );
}
