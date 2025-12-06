# ===========================================
# MentoArk - Dockerfile para Produção
# ===========================================
# Build: docker build -t mentoark-site .
# Run: docker run -d -p 8080:80 mentoark-site
#
# IMPORTANTE: As variáveis VITE_* são incorporadas no build!
# Passe via --build-arg ou configure no docker-compose.yml

# ===========================================
# Etapa 1: Build da aplicação
# ===========================================
FROM node:20-alpine AS build

WORKDIR /app

# Args para variáveis de ambiente em tempo de build
# (Vite precisa delas durante o npm run build)
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ARG VITE_API_URL
ARG VITE_WHATSAPP_NUMBER
ARG VITE_APP_ENV=production

# Exporta como ENV para o build
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER
ENV VITE_APP_ENV=$VITE_APP_ENV

# Copia arquivos de dependências primeiro (para cache do Docker)
COPY package*.json ./

# Instala dependências (usa npm install para compatibilidade)
RUN npm install --silent

# Copia o resto do código
COPY . .

# Build da aplicação Vite (variáveis VITE_* são embutidas aqui)
RUN npm run build

# ===========================================
# Etapa 2: Servidor de produção (Nginx)
# ===========================================
FROM nginx:alpine

# Remove configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia configuração customizada do Nginx (SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos buildados
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe porta 80
EXPOSE 80

# Healthcheck básico
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
