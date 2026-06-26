# Infrastructure Workspace Memory

## Responsibility
This workspace maintains all configurations related to Nginx routing, Docker container virtualization, Prometheus/Grafana metrics monitoring, and Jenkins CI/CD files.

## Conventions
* Hardcoded credentials inside docker-compose files or configuration blocks are strictly prohibited. Always inject parameters using environment variables (`.env`).
* Container network aliases must be clearly mapped: `postgres-db`, `mongodb-db`, `redis-cache`, `backend-api`, `frontend-web`.
