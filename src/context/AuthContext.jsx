// frontend/src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

// 🔐 API login call (folosim api.js, nu fetch direct) + păstrăm mesajele de eroare
async function loginApi(email, password) {
  try {
    const res = await api.post("/auth/login", { email, password });
    return res.data; // { token, user }
  } catch (err) {
    let msg = "Autentificare eșuată.";
    try {
      msg =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        msg;
    } catch {}
    throw new Error(msg);
  }
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(false);

  // 🧹 Auto-logout dacă tokenul dispare
  useEffect(() => {
    if (!token) {
      localStorage.removeItem("user");
      setUser(null);
    }
  }, [token]);

  // 🔐 Login handler
  const login = async (email, password) => {
    setLoading(true);
    try {
      const { token: newToken, user: newUser } = await loginApi(email, password);
      setToken(newToken);
      setUser(newUser);
      localStorage.setItem("token", newToken);
      localStorage.setItem("user", JSON.stringify(newUser));
      return newUser;
    } finally {
      setLoading(false);
    }
  };

  // 🔓 Logout handler
  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  // 🔄 Refetch user din backend (corectat pentru /auth/me)
  const refreshUser = async () => {
    if (!token) return null;
    try {
      const res = await api.get("/auth/me");
      setUser(res.data); // direct obiect user (păstrat ca la tine)
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    } catch (err) {
      console.error("[refreshUser error]", err);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, logout, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
