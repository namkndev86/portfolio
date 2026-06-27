# Infrastructure Conventions

This document establishes DevOps standards and conventions for Docker, Nginx, and monitoring configs.

## Nginx Conventions
* Config files must be modularized under `infra/nginx/conf.d/`.
* Upstream server declarations must use Docker service names (`frontend-web`, `backend-api`).

## Docker & Compose Conventions
* Always use official minimal base images (`node:20-alpine`, `postgres:16-alpine`, `redis:7-alpine`).
* Never run application containers as `root`.
* Health checks (`healthcheck`) must be declared for all database and service dependencies in `docker-compose.yml`.
