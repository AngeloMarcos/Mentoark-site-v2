# ===========================================
# MentoArk - Dockerfile Produção (FINAL)
# ===========================================

# ---------- BUILD ----------
FROM node:20-alpine AS build

WORKDIR /app

ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ARG VITE_API_URL
ARG VITE_WHATSAPP_NUMBER
ARG VITE_APP_ENV=production

ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER
ENV VITE_APP_ENV=$VITE_APP_ENV

COPY package*.json ./
RUN npm install --silent

COPY . .
RUN npm run build

# ---------- NGINX ----------
FROM nginx:alpine

# Remove config default
RUN rm /etc/nginx/conf.d/default.conf

# Copia APENAS o server block
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
