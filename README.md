# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/65298c8c-a7c3-40f4-baaa-37f0abd2486b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/65298c8c-a7c3-40f4-baaa-37f0abd2486b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/65298c8c-a7c3-40f4-baaa-37f0abd2486b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Deploy em Produção (Docker)

Este projeto está pronto para deploy em produção usando Docker e Docker Compose.

### Pré-requisitos

- Docker instalado (versão 20.10 ou superior)
- Docker Compose instalado (versão 2.0 ou superior)

### Configuração de Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edite o arquivo `.env` e preencha os valores reais:
   ```bash
   VITE_API_URL=https://sua-api.com
   VITE_WHATSAPP_NUMBER=+55 11 99999-9999
   VITE_APP_ENV=production
   ```

3. **IMPORTANTE**: Nunca commite o arquivo `.env` com valores reais. O `.gitignore` já está configurado para ignorá-lo.

### Build e Deploy

#### Opção 1: Usando Docker Compose (Recomendado)

```bash
# Build e iniciar o container
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar o container
docker-compose down
```

A aplicação estará disponível em `http://localhost:3000`

#### Opção 2: Usando Docker diretamente

```bash
# Build da imagem
docker build -t mentoark-web .

# Rodar o container
docker run -d \
  -p 3000:80 \
  --name mentoark-web \
  --env-file .env \
  mentoark-web

# Ver logs
docker logs -f mentoark-web

# Parar o container
docker stop mentoark-web
docker rm mentoark-web
```

### Deploy em VPS

Para fazer deploy em uma VPS (DigitalOcean, AWS, Azure, etc.):

1. **Conecte via SSH** à sua VPS:
   ```bash
   ssh user@seu-servidor.com
   ```

2. **Clone o repositório**:
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

3. **Configure as variáveis de ambiente**:
   ```bash
   cp .env.example .env
   nano .env  # ou vim, dependendo da sua preferência
   ```

4. **Inicie com Docker Compose**:
   ```bash
   docker-compose up -d
   ```

5. **Configure um proxy reverso** (Nginx, Traefik, Caddy) para rotear o tráfego HTTPS para o container na porta 3000.

### Atualizando a Aplicação

```bash
# Parar os containers
docker-compose down

# Atualizar o código
git pull

# Rebuild e reiniciar
docker-compose up -d --build
```

### Portas

- **Porta interna do container**: 80 (nginx)
- **Porta exposta no host**: 3000 (configurável no `docker-compose.yml`)

Para usar uma porta diferente, edite o arquivo `docker-compose.yml`:
```yaml
ports:
  - "8080:80"  # Mudaria para porta 8080 no host
```

### Troubleshooting

**Container não inicia:**
```bash
docker-compose logs web
```

**Verificar se a aplicação está rodando:**
```bash
curl http://localhost:3000
```

**Limpar cache do Docker:**
```bash
docker-compose down
docker system prune -a
docker-compose up -d --build
```
