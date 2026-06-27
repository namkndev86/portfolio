# Platform Requirements

This document outlines the functional, non-functional, and operational requirements for the enterprise Personal Developer Platform.

## Product Vision & Multi-Service Phase Execution Rule

A phase is considered complete **only when all affected services are completed** (`frontend-web`, `backend-api`, `infra`, `docs`). Each phase must be synchronized across all services.

### Phase Multi-Service Roadmap Scope
- **Phase 1 — Portfolio (IN PROGRESS)**:
  - `frontend-web`: Complete UI views (`/`, `/about`, `/projects`, `/projects/[slug]`, `/experience`, `/resume`, `/contact`).
  - `backend-api`: REST endpoints (`/api/v1/projects`, `/api/v1/profile`, `/api/v1/experience`, `/api/v1/contact`), Prisma schema alignment, seed script.
  - `infra`: Nginx proxy routing (`/api/v1/*` -> backend, `/*` -> frontend), Docker Compose orchestration.
  - `docs`: OpenAPI specifications, architecture sequence diagrams, onboarding guides.
- **Phase 2 — Technical Blog (Future)**: MDX, categories, tags, search, syntax highlighting across services.
- **Phase 3 — Learning Resources (Future)**: Roadmaps, cheat sheets, guides, downloadable assets.
- **Phase 4 — Courses (Future)**: Course catalog, structured lessons, progress tracking.
- **Phase 5 — Interactive Labs (Future)**: WebSockets, performance benchmarks, Three.js experiments.
- **Phase 6 — Admin CMS (Future)**: Content management, media pipeline, analytics dashboards.

---

## Quality and Scaling Requirements (Enterprise Standard)

### 1. Developer Scale (50+ Engineers)
* **Code Isolation**: Distinct service codebases (`frontend-web` and `backend-api`) and service memory directories (`frontend-web/.ai-memory`, `backend-api/.ai-memory`, `infra/.ai-memory`, `docs/.ai-memory`).
* **Typing Rigor**: Strict TypeScript compilation configuration (`strict: true`). No implicit `any`.
* **CI/CD Independence**: Changes to frontend code only trigger the frontend pipeline; backend edits only run backend tests and deployments.

### 2. Operational Scale & Performance
* **High Availability**: Decoupled microservices architecture sitting behind Nginx reverse proxy.
* **Fast Load Times**: SSG/ISR pre-rendering on frontend with Redis caching on backend API endpoints.

### 3. Maintenance Scale (5+ Years)
* **Strict Memory Ownership**: Service memory directories track domain architecture and decisions.
* **Strict ADR Log**: Architectural Decision Records (ADRs) tracking structural choices per service.
