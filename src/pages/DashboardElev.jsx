// frontend/src/pages/DashboardElev.jsx
import React, { useState, useEffect } from "react";
import "../style.css";
import Evaluation from "./Evaluation";
import Ascultari from "./Ascultari";
import CreditsCard from "../components/ascultari/CreditsCard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export default function DashboardElev() {
  const [activeTab, setActiveTab] = useState("home");
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const SUB_NAMES = {
    bio1: "BioStart",
    bio2: "BioMaster",
    chim1: "ChimStart",
    chim2: "ChimExpert",
    adm1: "Admitere Smart",
    adm2: "Admitere Pro+",
    biologie: "Biologie (legacy)",
    chimie: "Chimie (legacy)",
    admitere: "Admitere (legacy)",
  };

  const isValidSubscription = () => {
    if (!user) return false;
    if (user.role === "admin" || user.role === "prof") return true;
    if (!user.subscriptions || !user.subscriptions.length) return false;

    return user.subscriptions.some((sub) => {
      const plan = typeof sub === "string" ? sub : sub.plan;
      return plan.toLowerCase().match(/chim|bio|adm/);
    });
  };

  const renderNoSubscription = () => (
    <div className="actions">
      <p>Nu ai niciun abonament activ.</p>
      <button onClick={() => navigate("/abonamente")}>Fă-ți un abonament</button>
    </div>
  );

  const [nextAscultare, setNextAscultare] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchAscultari = async () => {
      try {
        const res = await api.get("/ascultari/bookings/me");
        const ascultari = res.data || [];

        const upcoming = ascultari
          .filter((a) => a.status === "booked")
          .sort((a, b) => new Date(a.start) - new Date(b.start));

        if (upcoming.length > 0) {
          setNextAscultare(upcoming[0]);
        } else {
          setNextAscultare(null);
        }
      } catch (err) {
        console.error("Eroare la fetch ascultari:", err);
      }
    };

    fetchAscultari();
  }, [user]);

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <h2>Contul meu</h2>

        {user && (
          <div className="user-info">
            <p>
              <strong>Nume:</strong> {user.surname}
            </p>
            <p>
              <strong>Prenume:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Rol:</strong> {user.role}
            </p>
          </div>
        )}

        <ul>
          <li className={activeTab === "home" ? "active" : ""} onClick={() => setActiveTab("home")}>Acasă</li>
          <li className={activeTab === "courses" ? "active" : ""} onClick={() => setActiveTab("courses")}>Cursurile mele</li>
          <li className={activeTab === "evaluari" ? "active" : ""} onClick={() => setActiveTab("evaluari")}>Evaluările mele</li>
          <li className={activeTab === "ascultari" ? "active" : ""} onClick={() => setActiveTab("ascultari")}>Ascultări</li>
          <li className={activeTab === "settings" ? "active" : ""} onClick={() => setActiveTab("settings")}>Setări</li>
          <li onClick={logout}>Logout</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        {activeTab === "home" && (
          <>
            <h1>Bine ai venit, {user?.name}!</h1>

            <div className="cards">
              <div className="card">
                <h3>📚 Abonamente active</h3>
                {user?.subscriptions?.length ? (
                  <ul>
                    {user.subscriptions.map((sub, idx) => {
                      const plan = typeof sub === "string" ? sub : sub.plan;
                      return <li key={idx}>{SUB_NAMES[plan] || plan}</li>;
                    })}
                  </ul>
                ) : (
                  <p>Nu ai abonamente active</p>
                )}
              </div>

              <div className="card">
                <h3>📝 Evaluări</h3>
                <p>Verifică rezultatele tale în tab-ul „Evaluările mele”.</p>
              </div>

              <div className="card">
                <h3>🎤 Ascultări</h3>
                {nextAscultare ? (
                  <p>
                    Următoarea ascultare programată: {" "}
                    <strong>
                      {new Date(nextAscultare.start).toLocaleString("ro-RO", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </strong>
                  </p>
                ) : (
                  <p>Rezervă ședințe în tab-ul „Ascultări”.</p>
                )}
              </div>
            </div>

            <div className="credits-overview">
              <CreditsCard />
            </div>

            <div className="quick-actions">
              <h3>Acțiuni rapide</h3>
              <button onClick={() => setActiveTab("courses")}>Vezi cursurile</button>
              <button onClick={() => setActiveTab("evaluari")}>Evaluările mele</button>
              <button onClick={() => setActiveTab("ascultari")}>Programează ascultare</button>
            </div>
          </>
        )}

        {activeTab === "courses" && (
          <>
            <h2>Cursurile mele</h2>

            {isValidSubscription() ? (
              <>
                <ul className="course-list">
                  {user.subscriptions?.map((sub, idx) => {
                    const plan = typeof sub === "string" ? sub : sub.plan;
                    return <li key={idx}>{SUB_NAMES[plan] || plan}</li>;
                  })}
                </ul>
                <div className="actions">
                  <p>📈 Upgradează-ți abonamentul pentru mai multe cursuri și avantaje!</p>
                  <button onClick={() => navigate("/abonamente")}>Upgradează abonamentul</button>
                </div>
              </>
            ) : (
              renderNoSubscription()
            )}

            <div className="suggestion-box">
              <h3>Sugerează-ne tu un abonament</h3>
              <p>
                Ce ți-ai dori să includă abonamentele noastre?
                <br />– cursuri înregistrate
                <br />– meditații online
                <br />– ședințe de ascultări
                <br />– masterclass-uri pe nivele
                <br />– simulări de examen
              </p>
              <p>👉 Spune-ne și cât ai fi dispus să plătești!</p>
              <button onClick={() => navigate("/contact")}>Trimite sugestia ta</button>
            </div>
          </>
        )}

        {activeTab === "evaluari" && (
          <>
            <h2>Evaluările mele</h2>
            {isValidSubscription() ? <Evaluation /> : renderNoSubscription()}
          </>
        )}

        {activeTab === "ascultari" && (
          <>
            <h2>Ascultări</h2>
            {isValidSubscription() ? <Ascultari /> : renderNoSubscription()}
          </>
        )}

        {activeTab === "settings" && (
          <>
            <h2>Setări cont</h2>
            <p>Aici poți modifica preferințele tale.</p>
          </>
        )}
      </main>
    </div>
  );
}
