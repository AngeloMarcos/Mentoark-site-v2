/**
 * Supabase Configuration Validator
 * 
 * Este módulo valida as variáveis de ambiente do Supabase
 * e lança erros claros se alguma estiver faltando.
 * 
 * Variáveis esperadas:
 * - VITE_SUPABASE_URL: URL do projeto Supabase
 * - VITE_SUPABASE_PUBLISHABLE_KEY: Chave pública (anon key) do Supabase
 */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Validação das variáveis de ambiente
const missingVars: string[] = [];

if (!SUPABASE_URL) {
  missingVars.push('VITE_SUPABASE_URL');
}

if (!SUPABASE_PUBLISHABLE_KEY) {
  missingVars.push('VITE_SUPABASE_PUBLISHABLE_KEY');
}

if (missingVars.length > 0) {
  const errorMessage = `
❌ ERRO: Variáveis de ambiente do Supabase não configuradas!

Faltando: ${missingVars.join(', ')}

Para resolver:
1. Crie um arquivo .env na raiz do projeto
2. Adicione as seguintes variáveis:
   VITE_SUPABASE_URL=https://SEU_PROJETO.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=SUA_ANON_KEY_AQUI

3. Reinicie o servidor de desenvolvimento

Para produção (Docker/Portainer):
- Configure as variáveis no docker-compose.yml ou via Portainer Environment Variables
`;
  
  console.error(errorMessage);
  
  // Em produção, também mostra um alerta visual
  if (import.meta.env.PROD) {
    throw new Error(`Supabase não configurado. Faltando: ${missingVars.join(', ')}`);
  }
}

export const supabaseConfig = {
  url: SUPABASE_URL || '',
  anonKey: SUPABASE_PUBLISHABLE_KEY || '',
  isConfigured: missingVars.length === 0,
};

export default supabaseConfig;
