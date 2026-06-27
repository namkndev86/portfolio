# Documentation Architectural Decisions

This document records architectural decision records (ADRs) specific to technical documentation standards.

---

# ADR-D001: OpenAPI (Swagger) Driven API Documentation

### Status
Accepted

### Context
Manual API documentation drifts out of sync with actual code implementations over time, causing integration errors between frontend and backend engineering teams.

### Decision
* Backend NestJS API controllers will generate OpenAPI (Swagger) JSON/YAML definitions automatically using `@nestjs/swagger` annotations.
* Formal endpoint documentation in `docs/api/endpoints.md` is compiled directly from synchronized OpenAPI specifications.

### Consequences
* Single source of truth for API contracts.
* Provides interactive Swagger UI testing interfaces for developers.
