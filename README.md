# MentoArk - Site Institucional

Site institucional da MentoArk com automação de atendimento via WhatsApp.

## 🚀 Tecnologias

- **Frontend**: Vite + React + TypeScript
- **UI**: Tailwind CSS + shadcn/ui
- **Forms**: react-hook-form + zod
- **Deploy**: Docker + Nginx

## 📁 Estrutura do Projeto

```
├── src/
│   ├── components/     # Componentes React
│   ├── pages/          # Páginas (Index, AgentBuilder, etc.)
│   ├── services/       # Módulos de API
│   └── lib/            # Utilitários
├── public/             # Assets estáticos
├── Dockerfile          # Build de produção
├── docker-compose.yml  # Orquestração Docker
├── nginx.conf          # Configuração Nginx
└── .env.example        # Template de variáveis
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção (local)
npm run build
npm run preview
```

## 🐳 Deploy em Produção (Docker / Portainer)

### Pré-requisitos

- Docker (versão 20.10+)
- Docker Compose (versão 2.0+)
- Acesso SSH à VPS (para Portainer remoto)

### Configuração de Variáveis de Ambiente

1. Copie o arquivo de exemplo:
   ```bash
   cp .env.example .env
   ```

2. Edite com valores reais:
   ```bash
   nano .env
   ```

   ```env
   VITE_API_URL=https://dev-erp.aesirerp.com
   VITE_WHATSAPP_NUMBER=+55 11 99999-9999
   VITE_APP_ENV=production
   ```

3. **⚠️ IMPORTANTE**: Nunca commite `.env` com valores de produção!

### Build e Deploy

#### Via Docker Compose (Recomendado)

```bash
# Build da imagem
docker-compose build

# Iniciar container em background
docker-compose up -d

# Ver logs
docker-compose logs -f mentoark-site

# Parar
docker-compose down
```

#### Via Docker CLI

```bash
# Build
docker build -t mentoark-site .

# Run
docker run -d \
  --name mentoark-site \
  -p 8080:80 \
  --restart always \
  mentoark-site

# Logs
docker logs -f mentoark-site
```

### Portas

| Container | Porta Interna | Porta Externa |
|-----------|--------------|---------------|
| mentoark-site | 80 (nginx) | 8080 |

Para usar outra porta, edite `docker-compose.yml`:
```yaml
ports:
  - "3000:80"  # Muda para porta 3000
```

### Deploy no Portainer

1. Acesse seu Portainer
2. Vá em **Stacks** → **Add Stack**
3. Cole o conteúdo do `docker-compose.yml`
4. Configure variáveis de ambiente se necessário
5. Clique em **Deploy the stack**

### Proxy Reverso (Traefik/Nginx)

O container expõe a porta 8080 internamente. Configure seu proxy reverso para rotear:

```nginx
# Exemplo Nginx externo
server {
    server_name site.mentoark.com.br;
    
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🔧 Atualizando a Aplicação

```bash
# Parar containers
docker-compose down

# Atualizar código
git pull origin main

# Rebuild e reiniciar
docker-compose up -d --build
```

## 🔍 Troubleshooting

**Container não inicia:**
```bash
docker-compose logs mentoark-site
```

**Rotas do React não funcionam (404):**
- Verifique se o `nginx.conf` tem o fallback para `/index.html`
- O arquivo já está configurado corretamente

**Limpar cache do Docker:**
```bash
docker-compose down
docker system prune -a
docker-compose up -d --build
```

## 📡 API Endpoints (Backend)

O frontend espera os seguintes endpoints no `VITE_API_URL`:

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/agent-config?phone=...` | Busca config por telefone |
| GET | `/api/agent-config?tenant=...` | Busca config por tenant |
| POST | `/api/agent-config` | Cria nova config |
| PUT | `/api/agent-config/:id` | Atualiza config existente |

## 📝 Licença

Propriedade da MentoArk. Todos os direitos reservados.
