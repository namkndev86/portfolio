# Production Deployment Guide

This document describes how to deploy the Portfolio Platform to enterprise staging or production environments.

## Docker Swarm Configuration

Deploying the platform to a single-node or multi-node Docker Swarm cluster is the default lightweight orchestrator setup.

```bash
# Initialize Swarm (if not active)
docker swarm init

# Set production environment variables
export JWT_SECRET="your-secure-production-jwt-key"
export POSTGRES_PASSWORD="your-postgres-db-password"
export MONGO_PASSWORD="your-mongo-db-password"

# Deploy stack using the production compose file
docker stack deploy -c infra/docker/docker-compose.prod.yml portfolio
```

---

## Kubernetes Layout

For high-availability hosting, we organize deployments into a Kubernetes cluster.

### Target Resources
1. **Namespace**: `portfolio-prod`
2. **Deployments**:
   - `frontend-web-deployment`: Serves Next.js instances.
   - `backend-api-deployment`: Serves NestJS instances.
3. **StatefulSets**:
   - `postgres-statefulset`
   - `mongodb-statefulset`
   - `redis-statefulset`
4. **Ingress**:
   - Ingress controller routing `/api/*` to `backend-api-service` and others to `frontend-web-service`.

---

## Rollback Procedures

If a deployment fails validation tests post-deployment, the pipeline triggers a roll back.

### Docker Swarm Rollback
```bash
# Rollback service to the previous image tag
docker service rollback portfolio_frontend-web
docker service rollback portfolio_backend-api
```

### Kubernetes Rollback
```bash
# Rollback deployment to the previous revision
kubectl rollout undo deployment/frontend-web-deployment -n portfolio-prod
kubectl rollout undo deployment/backend-api-deployment -n portfolio-prod
```
