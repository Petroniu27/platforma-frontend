import React, { useEffect, useState } from "react";
import { api } from "../../api";

// utilitar: formatare dată+oră frumos
function fmtDateTime(dateStr) {
  return new Date(dateStr).toLocaleString("ro-RO", {
    dateStyle: "full",
    timeStyle: "short",
  });
}

export default function BookingForm() {
  const [slots, setSlots] = useState([]);
  const [slotId, setSlotId] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const resSlots = await api.get("/ascultari/slots");
        setSlots(resSlots.data || []);
      } catch (e) {
        console.error("Eroare la slots", e);
      }
    })();
  }, []);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    setMsg("");
    setBusy(true);
    try {
      if (!slotId) throw new Error("Alege un interval.");

      const chosen = slots.find((s) => s.id === slotId || s._id === slotId);
      if (!chosen) throw new Error("Slot invalid.");

      await api.post("/ascultari/bookings", {
        profId: chosen.mentorId,
        start: chosen.start,
        end: new Date(new Date(chosen.start).getTime() + chosen.duration * 60000).toISOString(),
      });

      setMsg(
        "✅ Sesiune programată! Te rugăm să mergi la pagina Contact și să ne scrii materia și întrebările tale."
      );
    } catch (er) {
      setErr(er.response?.data?.message || er.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card asc-card">
      <h3>Programează o ascultare</h3>
      {err && <p className="error">{err}</p>}
      {msg && <p className="ok">{msg}</p>}
      <form onSubmit={submit} className="asc-form">
        <label>
          Data & ora (durata fixă 50 min)
          <select value={slotId} onChange={(e) => setSlotId(e.target.value)}>
            <option value="">— alege —</option>
            {slots.map((s) => (
              <option key={s.id || s._id} value={s.id || s._id}>
                {fmtDateTime(s.start)}
              </option>
            ))}
          </select>
        </label>

        <div className="row">
          <button disabled={busy} type="submit">
            Rezervă
          </button>
        </div>
      </form>
    </div>
  );
}
