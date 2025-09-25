 import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api", 
  // dacă VITE_API_URL nu e setat pe Render, folosește fallback-ul "/api" (merge local)
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
