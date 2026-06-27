# Backend Architectural Decisions

This document records architectural decision records (ADRs) specific to the `backend-api` service.

---

# ADR-B001: REST API Versioning & Global DTO Validation Pipes

### Status
Accepted

### Context
Frontend applications and external API consumers require predictable, strongly-typed endpoints with strict request payload validation to prevent corrupt data writes or unexpected runtime crashes.

### Decision
* All API routes must be explicitly prefixed with `/api/v1/` via NestJS global route prefixing.
* Request DTOs must use `class-validator` decorators.
* NestJS `ValidationPipe` is enabled globally with `whitelist: true` and `forbidNonWhitelisted: true` to strip undeclared properties automatically.

### Consequences
* Guaranteed contract sanity across microservices.
* Automatic OpenAPI documentation generation via `@nestjs/swagger`.

---

# ADR-B002: Prisma Relational Schema Alignment for Portfolio Entities

### Status
Accepted

### Context
Phase 1 frontend views require rich, structured project case studies (responsibilities, challenges & solutions, architecture details) and experience milestones.

### Decision
We extend `prisma/schema.prisma` to fully model portfolio entities with PostgreSQL JSONB fields or relational sub-tables for complex arrays (responsibilities, techStack, challengesAndSolutions) ensuring strict data alignment between backend DB and frontend TypeScript interfaces.

### Consequences
* Enables rich relational queries and fast indexed searches.
* Eliminates schema mismatches during API integration.
