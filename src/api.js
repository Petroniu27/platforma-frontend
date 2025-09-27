// src/api.js
import axios from "axios";

// 🔍 Folosim variabila injectată de vite.config.js
const baseURL =
  typeof __VITE_API_URL__ !== "undefined"
    ? __VITE_API_URL__
    : "https://platforma-backend.onrender.com/api";

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
