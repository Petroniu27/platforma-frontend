// src/api.js
import axios from "axios";

// ✅ VITE injectează doar import.meta.env.VITE_*
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
