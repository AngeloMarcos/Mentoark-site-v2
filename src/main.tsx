import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Valida configuração do Supabase antes de iniciar
import supabaseConfig from "./lib/supabase-config";

// Log environment information for debugging
const appEnv = import.meta.env.VITE_APP_ENV || 'development';
console.log(`🚀 MentoArk running in ${appEnv} mode`);
console.log(`📍 API URL: ${import.meta.env.VITE_API_URL || 'not configured'}`);
console.log(`🔗 Supabase: ${supabaseConfig.isConfigured ? 'Configurado ✅' : 'NÃO CONFIGURADO ❌'}`);

// Additional environment validation for production
if (appEnv === 'production' && !import.meta.env.VITE_API_URL) {
  console.warn('⚠️ VITE_API_URL not configured for production environment');
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
