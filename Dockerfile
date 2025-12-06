# ===========================================
# MentoArk - Dockerfile para Produção
# ===========================================
# Build: docker build -t mentoark-site .
# Run: docker run -d -p 8080:80 mentoark-site

# Etapa 1: Build da aplicação
FROM node:20-alpine AS build

WORKDIR /app

# Copia arquivos de dependências primeiro (para cache do Docker)
COPY package*.json ./

# Instala dependências
RUN npm ci --silent

# Copia o resto do código
COPY . .

# Build da aplicação Vite
RUN npm run build

# ===========================================
# Etapa 2: Servidor de produção (Nginx)
# ===========================================
FROM nginx:alpine

# Remove configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia configuração customizada do Nginx
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
