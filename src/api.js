﻿import axios from "axios";

// Dacă există VITE_API_URL o folosim, altfel mergem direct pe backend Render
const baseURL =
  import.meta.env.VITE_API_URL || "https://platforma-backend.onrender.com/api";

console.log("🔎 API baseURL =", baseURL);

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
