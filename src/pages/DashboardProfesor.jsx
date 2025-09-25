// src/pages/DashboardProfesor.jsx
import React, { useState } from "react";
import "../style.css";
import EvaluariProfesor from "./EvaluariProfesor";
import { useAuth } from "../context/AuthContext";

export default function DashboardProfesor() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar profesor */}
      <aside className="sidebar">
        <h2>Contul meu (profesor)</h2>

        {user && (
          <div className="user-info">
            <p><strong>{user.name} {user.surname}</strong></p>
            <p>{user.email}</p>
            <p className="role-label">Rol: {user.role}</p>
          </div>
        )}

        <ul>
          <li className={activeTab === "overview" ? "active" : ""} onClick={() => setActiveTab("overview")}>
            Overview
          </li>
          <li className={activeTab === "courses" ? "active" : ""} onClick={() => setActiveTab("courses")}>
            Cursurile mele
          </li>
          <li className={activeTab === "evaluari" ? "active" : ""} onClick={() => setActiveTab("evaluari")}>
            Evaluări elevi
          </li>
          <li className={activeTab === "settings" ? "active" : ""} onClick={() => setActiveTab("settings")}>
            Setări
          </li>
          <li onClick={() => alert("Deconectare")}>Logout</li>
        </ul>
      </aside>

      {/* Conținut taburi */}
      <main className="dashboard-content">
        {activeTab === "overview" && (
          <>
            <h1>Bine ai venit, profesor!</h1>
            <p>Aici poți gestiona lecțiile și evaluările elevilor.</p>
          </>
        )}

        {activeTab === "courses" && (
          <>
            <h2>Cursurile tale</h2>
            <ul className="course-list">
              <li>Grupa Bac B1</li>
              <li>Admitere Medicină</li>
            </ul>
          </>
        )}

        {activeTab === "evaluari" && <EvaluariProfesor />}

        {activeTab === "settings" && (
          <>
            <h2>Setări cont</h2>
            <p>Aici poți modifica preferințele contului tău.</p>
          </>
        )}
      </main>
    </div>
  );
}
