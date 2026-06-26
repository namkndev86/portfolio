# Developer Onboarding & Local Setup

Welcome to the team! Follow this step-by-step guide to get the Portfolio Platform running on your local machine.

## Prerequisites
Ensure you have the following installed:
* **Docker Desktop** (or Docker Engine + Compose)
* **Node.js** v20.x
* **NPM** or **PNPM** (version 9+)

---

## 1. Initial Project Scaffolding

```bash
# Clone the repository
git clone https://github.com/namnk/portfolio.git
cd portfolio

# Install service-specific node packages
cd backend-api && npm install
cd ../frontend-web && npm install
```

---

## 2. Setting Up Local Environment Files

Copy the example environment files:
```bash
# Backend configurations
cp backend-api/.env.example backend-api/.env

# Frontend configurations
cp frontend-web/.env.example frontend-web/.env

# Local stack configurations
cp infra/docker/.env.example infra/docker/.env
```

---

## 3. Running Databases & Utilities via Docker

Start local databases (PostgreSQL, MongoDB, Redis) and monitoring utilities:
```bash
# From the root directory:
cd infra/docker
docker compose up -d postgres mongodb redis
```

---

## 4. Run Services in Development Mode

### Start NestJS Backend
In a new terminal:
```bash
cd backend-api
npm run start:dev
```
* API endpoints: `http://localhost:5000/api/v1`
* OpenAPI/Swagger: `http://localhost:5000/docs`

### Start Next.js Frontend
In a new terminal:
```bash
cd frontend-web
npm run dev
```
* Web application UI: `http://localhost:3000`
