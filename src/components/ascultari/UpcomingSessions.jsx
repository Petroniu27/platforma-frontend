import React, { useEffect, useMemo, useState } from "react";
import { api } from "../../api"; // 🔥 doar api, restul definite local

// utilitar: formatare dată+oră
function fmtDateTime(dateStr) {
  return new Date(dateStr).toLocaleString("ro-RO", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

// utilitar: descarcă fișier .ics
function downloadICS(text, filename) {
  const blob = new Blob([text], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function UpcomingSessions() {
  const [list, setList] = useState([]);
  const [err, setErr] = useState("");

  async function load() {
    setErr("");
    try {
      const res = await api.get("/ascultari/bookings/me"); // 🔄 endpoint actualizat
      setList(Array.isArray(res.data) ? res.data : []);
    } catch (e) {
      setErr(e.response?.data?.message || e.message);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const upcoming = useMemo(() => {
    const now = Date.now();
    return (list || [])
      .filter(
        (b) =>
          b &&
          b.status === "booked" &&
          new Date(b.start).getTime() >= now - 10 * 60 * 1000
      )
      .sort((a, b) => new Date(a.start) - new Date(b.start))
      .slice(0, 5);
  }, [list]);

  if (err) {
    return (
      <div className="card">
        <h3>Următoarele sesiuni</h3>
        <p className="error">{err}</p>
      </div>
    );
  }

  return (
    <div className="card asc-card">
      <h3>Următoarele sesiuni</h3>
      {upcoming.length === 0 ? (
        <p>Nu ai sesiuni programate.</p>
      ) : (
        <ul className="asc-list">
          {upcoming.map((b) => {
            const name =
              "ascultare-" + (b && b._id ? b._id : "sesiune") + ".ics";
            return (
              <li key={b._id} className="asc-item">
                <div className="asc-when">
                  {fmtDateTime(b.start)} – {fmtDateTime(b.end)}
                </div>
                <div className="asc-topic">{b.topicId || "—"}</div>
                <div className="asc-actions">
                  {b.meetUrl ? (
                    <a href={b.meetUrl} target="_blank" rel="noreferrer">
                      Intră
                    </a>
                  ) : null}
                  {b.icsText ? (
                    <button onClick={() => downloadICS(b.icsText, name)}>
                      .ics
                    </button>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
