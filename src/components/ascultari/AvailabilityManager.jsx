// @ts-nocheck
import React, { useEffect, useState } from "react";
import { api, fmtDateTime, toDatetimeLocalValue } from "./api";

export default function AvailabilityManager() {
  const [list, setList] = useState([]);
  const [start, setStart] = useState(toDatetimeLocalValue(new Date(Date.now() + 24 * 60 * 60 * 1000)));
  const [end, setEnd] = useState(toDatetimeLocalValue(new Date(Date.now() + 25 * 60 * 60 * 1000)));
  const [duration, setDuration] = useState(50);
  const [rrule, setRrule] = useState("");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  async function load() {
    setErr("");
    try {
      const r = await api("/api/availability");
      setList(Array.isArray(r) ? r : []);
    } catch (e) { setErr(e.message); }
  }

  useEffect(function () { load(); }, []);

  async function createSlot(e) {
    e.preventDefault();
    setErr(""); setMsg("");
    try {
      const payload = rrule
        ? { rrule: rrule, durationMin: Number(duration) }
        : { start: new Date(start).toISOString(), end: new Date(end).toISOString(), durationMin: Number(duration) };
      await api("/api/availability", { method: "POST", body: payload });
      setMsg("Disponibilitate adăugată.");
      setRrule("");
      await load();
    } catch (er) { setErr(er.message); }
  }

  async function removeItem(id) {
    try {
      await api("/api/availability/" + id, { method: "DELETE" }); // fără template literal
      await load();
    } catch (e) { setErr(e.message); }
  }

  return (
    <div className="card asc-card">
      <h3>Disponibilitatea mea</h3>
      {err ? <p className="error">{err}</p> : null}
      {msg ? <p className="ok">{msg}</p> : null}

      <form onSubmit={createSlot} className="asc-form">
        <details>
          <summary>Slot punctual (one-off)</summary>
          <div className="grid-2">
            <label>Start
              <input type="datetime-local" value={start} onChange={function (e) { setStart(e.target.value); }} />
            </label>
            <label>End
              <input type="datetime-local" value={end} onChange={function (e) { setEnd(e.target.value); }} />
            </label>
          </div>
        </details>

        <details>
          <summary>Recurență (RRULE) – opțional</summary>
          <label>RRULE
            <input
              type="text"
              placeholder="ex: FREQ=WEEKLY;BYDAY=MO,WE;BYHOUR=17;BYMINUTE=0"
              value={rrule}
              onChange={function (e) { setRrule(e.target.value); }}
            />
          </label>
        </details>

        <label>Durată per sesiune (minute)
          <input
            type="number" min="15" max="180" step="5"
            value={duration}
            onChange={function (e) { setDuration(e.target.value); }}
          />
        </label>

        <div className="row">
          <button type="submit">Adaugă</button>
        </div>
      </form>

      <h4 style={{ marginTop: 16 }}>Ferestre existente</h4>
      {list.length === 0 ? <p>Nu ai setat disponibilități.</p> : (
        <ul className="asc-list">
          {list.map(function (a) {
            return (
              <li key={a._id} className="asc-item">
                <div className="asc-when">
                  {a.rrule ? <code>{a.rrule}</code> : (
                    <span>{fmtDateTime(a.start)} - {fmtDateTime(a.end)}</span>
                  )}
                </div>
                <div className="asc-actions">
                  <button onClick={function () { removeItem(a._id); }}>Șterge</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}