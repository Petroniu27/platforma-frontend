// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') // încarcă variabilele .env

  console.log("🚀 VITE_API_URL =", env.VITE_API_URL)

  return {
    plugins: [react()],
    define: {
      __VITE_API_URL__: JSON.stringify(env.VITE_API_URL),
    },
    server: {
      port: 5173,
      proxy: {
        "/api": "http://localhost:5001",
      },
    },
  }
})
