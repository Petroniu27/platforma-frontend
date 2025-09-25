import React, { useEffect, useState } from "react";
import { api, fmtDateTime } from "./api";

export default function CalendarProfesor() {
  const [list, setList] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try { setList(await api("/api/bookings/me")); }
      catch (e) { setErr(e.message); }
    })();
  }, []);

  const upcoming = (list || []).filter(b => b.status === "booked").sort((a,b) => new Date(a.start)-new Date(b.start));

  return (
    <div className="card asc-card">
      <h3>Programările mele</h3>
      {err && <p className="error">{err}</p>}
      {upcoming.length === 0 ? <p>Nu ai programări.</p> : (
        <table className="asc-table">
          <thead><tr><th>Start</th><th>End</th><th>Tema</th><th>Acțiuni</th></tr></thead>
          <tbody>
            {upcoming.map(b => (
              <tr key={b._id}>
                <td>{fmtDateTime(b.start)}</td>
                <td>{fmtDateTime(b.end)}</td>
                <td>{b.topicId || "—"}</td>
                <td>
                  {b.meetUrl && <a href={b.meetUrl} target="_blank" rel="noreferrer">Intră</a>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}