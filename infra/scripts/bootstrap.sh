#!/usr/bin/env bash

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0;0m'

echo -e "${BLUE}=== Portfolio Platform Local Bootstrapper ===${NC}"

# Check for Docker
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: Docker is not installed or not in PATH.${NC}" >&2
    exit 1
fi

# Copy Env files if they do not exist
echo -e "${BLUE}Copying environment templates...${NC}"
[[ ! -f backend-api/.env ]] && cp backend-api/.env.example backend-api/.env && echo "Created backend-api/.env" || true
[[ ! -f frontend-web/.env ]] && cp frontend-web/.env.example frontend-web/.env && echo "Created frontend-web/.env" || true
[[ ! -f infra/docker/.env ]] && cp infra/docker/.env.example infra/docker/.env && echo "Created infra/docker/.env" || true

# Start local databases
echo -e "${BLUE}Starting backing databases (Postgres, MongoDB, Redis)...${NC}"
cd infra/docker
docker compose up -d postgres-db mongodb-db redis-cache

echo -e "${GREEN}Backing databases are online.${NC}"
echo -e "Access Postgres at: localhost:5432"
echo -e "Access MongoDB at: localhost:27017"
echo -e "Access Redis at: localhost:6379"

echo -e "${BLUE}Bootstrapping complete. Ready for NestJS migrations & frontend runs.${NC}"
