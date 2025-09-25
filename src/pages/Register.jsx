import React, { useState } from "react";
import "../style.css";
import { api } from "../api.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    parentName: "",
    parentPhone: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Parolele nu coincid.");
      return;
    }

    setSubmitting(true);
    try {
      await api.post("/auth/register", {
        name: form.name,
        surname: form.surname,
        phone: form.phone,
        email: form.email,
        password: form.password,
        parentName: form.parentName,
        parentPhone: form.parentPhone,
      });

      alert("Cont creat cu succes! Te poți autentifica acum.");
      navigate("/login");
    } catch (err) {
      const msg =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        "A apărut o problemă la înregistrare.";
      alert(msg);
      console.error("Register error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Înregistrare</h2>
      <form onSubmit={onSubmit} className="register-form">
        <label>
          Prenume:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
        </label>

        <label>
          Nume de familie:
          <input
            type="text"
            name="surname"
            value={form.surname}
            onChange={onChange}
            required
          />
        </label>

        <label>
          Telefon elev:
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            required
          />
        </label>

        <label>
          Email elev:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </label>

        <p className="text-sm text-gray-600 mt-4 mb-2">
          📞 Pentru eficientizarea comunicării te rugăm să ne lași și numele și
          numărul de telefon al unui părinte.
        </p>

        <label>
          Nume părinte:
          <input
            type="text"
            name="parentName"
            value={form.parentName}
            onChange={onChange}
            required
          />
        </label>

        <label>
          Telefon părinte:
          <input
            type="tel"
            name="parentPhone"
            value={form.parentPhone}
            onChange={onChange}
            required
          />
        </label>

        <label>
          Parolă:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            required
            minLength={6}
          />
        </label>

        <label>
          Confirmă parola:
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onChange}
            required
            minLength={6}
          />
        </label>

        <button type="submit" disabled={submitting}>
          {submitting ? "Se creează..." : "Creează cont"}
        </button>
      </form>
    </div>
  );
}
