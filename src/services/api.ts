/**
 * Módulo de API para comunicação com o backend/ERP
 * 
 * Endpoints esperados no backend (dev-erp.aesirerp.com):
 *   GET  /api/agent-config?phone=...  ou ?tenant=...
 *   POST /api/agent-config
 *   PUT  /api/agent-config/:id
 * 
 * TODO: Implementar autenticação quando necessário (Bearer token, etc.)
 */

// Tipos para a configuração do agente
export interface AgentConfigPayload {
  id?: string;
  
  // Dados do Tenant
  tenantName: string;
  whatsappNumber: string;
  tenantIdentifier?: string;
  
  // Persona e Comportamento
  agentName: string;
  persona: string;
  tone: string;
  goal: string;
  welcomeMessage: string;
  
  // Regras e Conhecimento
  rules?: string;
  knowledgeBase?: string;
  maxCharacters?: number;
  
  // Configurações Técnicas
  model?: string;
  temperature?: number;
  evolutionInstance: string;
  evolutionApiKey?: string;
  evolutionServerUrl: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Base URL da API - vem da variável de ambiente
const getBaseUrl = (): string => {
  const baseUrl = import.meta.env.VITE_API_URL;
  
  if (!baseUrl) {
    console.warn("⚠️ VITE_API_URL não configurada. Usando modo de simulação.");
    return "";
  }
  
  // Remove trailing slash se houver
  return baseUrl.replace(/\/$/, "");
};

/**
 * Busca a configuração de um agente pelo telefone ou identificador do tenant
 */
export async function getAgentConfig(phoneOrTenant: string): Promise<ApiResponse<AgentConfigPayload>> {
  const baseUrl = getBaseUrl();
  
  // Modo de simulação quando não há API configurada
  if (!baseUrl) {
    console.log("📡 [SIMULAÇÃO] getAgentConfig chamado com:", phoneOrTenant);
    return {
      success: false,
      error: "API não configurada",
      message: "Configure VITE_API_URL para conectar ao backend"
    };
  }
  
  try {
    // Determina se é telefone ou tenant baseado no formato
    const isPhone = /^[\d+]/.test(phoneOrTenant);
    const queryParam = isPhone ? `phone=${encodeURIComponent(phoneOrTenant)}` : `tenant=${encodeURIComponent(phoneOrTenant)}`;
    
    const response = await fetch(`${baseUrl}/api/agent-config?${queryParam}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // TODO: Adicionar header de autenticação quando implementado
        // "Authorization": `Bearer ${getAuthToken()}`
      },
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return {
          success: false,
          error: "not_found",
          message: "Configuração de agente não encontrada"
        };
      }
      
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: `HTTP ${response.status}`,
        message: errorData.message || "Erro ao buscar configuração"
      };
    }
    
    const data = await response.json();
    return {
      success: true,
      data: data
    };
    
  } catch (error) {
    console.error("❌ Erro ao buscar configuração do agente:", error);
    return {
      success: false,
      error: "network_error",
      message: error instanceof Error ? error.message : "Erro de conexão com o servidor"
    };
  }
}

/**
 * Cria ou atualiza a configuração de um agente
 * Se payload.id existir, faz PUT; caso contrário, faz POST
 */
export async function createOrUpdateAgentConfig(payload: AgentConfigPayload): Promise<ApiResponse<AgentConfigPayload>> {
  const baseUrl = getBaseUrl();
  
  // Modo de simulação quando não há API configurada
  if (!baseUrl) {
    console.log("📡 [SIMULAÇÃO] createOrUpdateAgentConfig chamado com:", payload);
    
    // Simula um delay de rede
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      success: true,
      data: { ...payload, id: payload.id || `sim-${Date.now()}` },
      message: "Configuração salva (simulação local)"
    };
  }
  
  try {
    const isUpdate = Boolean(payload.id);
    const url = isUpdate 
      ? `${baseUrl}/api/agent-config/${payload.id}`
      : `${baseUrl}/api/agent-config`;
    
    const response = await fetch(url, {
      method: isUpdate ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        // TODO: Adicionar header de autenticação quando implementado
        // "Authorization": `Bearer ${getAuthToken()}`
      },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: `HTTP ${response.status}`,
        message: errorData.message || "Erro ao salvar configuração"
      };
    }
    
    const data = await response.json();
    return {
      success: true,
      data: data,
      message: isUpdate ? "Configuração atualizada com sucesso" : "Configuração criada com sucesso"
    };
    
  } catch (error) {
    console.error("❌ Erro ao salvar configuração do agente:", error);
    return {
      success: false,
      error: "network_error",
      message: error instanceof Error ? error.message : "Erro de conexão com o servidor"
    };
  }
}

/**
 * Verifica se a API está configurada e acessível
 */
export async function checkApiHealth(): Promise<boolean> {
  const baseUrl = getBaseUrl();
  
  if (!baseUrl) {
    return false;
  }
  
  try {
    const response = await fetch(`${baseUrl}/health`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Retorna se estamos em modo de simulação (sem API configurada)
 */
export function isSimulationMode(): boolean {
  return !import.meta.env.VITE_API_URL;
}
