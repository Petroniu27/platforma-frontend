// frontend/src/components/ascultari/CreditsCard.jsx
import React, { useEffect, useState } from "react";
import { api } from "../../api"; // axios instance cu token inclus
import { useLocation } from "react-router-dom";
import "./credits-card.css";

export default function CreditsCard() {
  const [data, setData] = useState(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const location = useLocation();

  // === încarcă starea creditelor ===
  async function load() {
    setErr("");
    try {
      const r = await api.get("/ascultari/credits/me"); // 🔄 endpoint actualizat
      setData(r.data);
    } catch (e) {
      setErr(e.response?.data?.message || e.message);
    }
  }

  useEffect(() => {
    load();
  }, []);

  // 🔄 reîncarcă după redirect Stripe
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("status") === "success") {
      load();
      alert("✅ Credit adăugat!");
    }
  }, [location]);

  // === cumpără 1 credit prin Stripe ===
  async function buyOne() {
    setBusy(true);
    setErr("");
    try {
      const r = await api.post("/payments/buy-credit");
      if (r.data?.url) {
        window.location.href = r.data.url; // redirect la Stripe
      } else {
        setErr("Nu am primit link de plată de la server.");
      }
    } catch (e) {
      setErr(e.response?.data?.message || e.message);
    } finally {
      setBusy(false);
    }
  }

  if (!data && !err) {
    return <div className="card loading">Se încarcă creditele…</div>;
  }

  return (
    <div className="card credits-card">
      <h3>📚 Credite Ascultări</h3>
      {err && <p className="error">{err}</p>}

      {data && (
        <div className="grid-4">
          <div className="kpi-box available">
            <div className="kpi-label">Disponibile</div>
            <div className="kpi-value">{data.available}</div>
          </div>
          <div className="kpi-box used">
            <div className="kpi-label">Folosite</div>
            <div className="kpi-value">{data.used}</div>
          </div>
          <div className="kpi-box included">
            <div className="kpi-label">Incluse</div>
            <div className="kpi-value">{data.included}</div>
          </div>
          <div className="kpi-box bought">
            <div className="kpi-label">Cumpărate</div>
            <div className="kpi-value">{data.extraBought}</div>
          </div>
        </div>
      )}

      <div className="actions">
        <button disabled={busy} onClick={buyOne}>
          {busy ? "⏳ Se procesează..." : "➕ Cumpără 1 credit (75 lei)"}
        </button>
      </div>
    </div>
  );
}
