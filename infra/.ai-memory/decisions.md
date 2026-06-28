# Infrastructure Architectural Decisions

This document records architectural decision records (ADRs) specific to infrastructure, networking, and DevOps.

---

# ADR-I001: Path-Based Gateway Routing via Nginx

### Status
Accepted

### Context
Client web browsers require seamless communication with both static web pages and API backends without exposing internal microservice ports or triggering CORS issues across domains.

### Decision
Nginx is deployed as an edge reverse proxy handling SSL termination and path routing. Routes starting with `/api/` are forwarded internally to `backend-api:5000`, while all other web traffic routes to `frontend-web:3000`.

### Consequences
* Eliminates cross-origin resource sharing (CORS) friction in production.
* Hides internal container ports behind a single secure gateway.

---

# ADR-I002: Multi-Stage Docker Builds for Production Optimization

### Status
Accepted

### Context
Production container images must remain small and free of build tools (compilers, devDependencies) to minimize attack surfaces and deployment transfer times.

### Decision
Both `frontend-web` and `backend-api` Dockerfiles utilize multi-stage builds (`builder` stage for compilation, `runner` stage for lightweight runtime deployment using Alpine base images).

### Consequences
* Dramatically smaller Docker image sizes (~150MB runtime vs >1GB build image).
* Improved container security posture.
