# Platform Roadmap

This document outlines the phased roadmap for building and deploying the Portfolio Platform.

---

## Phase 1: Scaffolding & Project Memory (Current)
* [x] Define platform topology and multi-tier structure in `architecture.md`.
* [x] Align non-functional requirements and quality levels in `requirements.md`.
* [x] Log initial architecture decisions (ADR-001, ADR-002, ADR-003) in `decisions.md`.
* [x] Set style, naming, and linting guidelines in `conventions.md`.
* [x] Draft initial core feature requirements under `.ai-memory/features/`.

## Phase 2: DevOps, Proxies & Monitoring Setup
* [ ] Configure **Nginx** gateway configurations to route static and dynamic routes.
* [ ] Write **Docker Compose** configurations representing PostgreSQL, MongoDB, Redis, Prometheus, Grafana, frontend, and backend nodes.
* [ ] Configure **Prometheus** scraper rules and **Grafana** dashboard provisions to monitor CPU/Memory, HTTP request rates, and latencies.
* [ ] Draft script files for quick bootstrapping, seed injection, and backup routines.

## Phase 3: NestJS Backend API Build
* [ ] Initialize the NestJS framework with strict TypeScript compilation.
* [ ] Generate Prisma configurations and schema tables for Postgres storage.
* [ ] Connect Mongoose schemas to MongoDB for analytics ingestion and logging.
* [ ] Build API modules:
  * **Auth**: Admin access, JWT creation, password hashing, and Redis-backed session revoking.
  * **Projects**: Relational queries, search, tags.
  * **Blog**: Document store integration for text parsing, drafts, and categories.
  * **Analytics**: Endpoint for telemetry, caching, and batch write actions.
* [ ] Integrate OpenAPI (Swagger) documents with automatic endpoint descriptions.
* [ ] Write unit and integration test blocks verifying databases.

## Phase 4: Next.js Frontend Development
* [ ] Initialize Next.js 15 App Router codebase.
* [ ] Establish the design system using vanilla tailwind configurations derived from the requirement specifications.
* [ ] Integrate **React Three Fiber (R3F)** for interactive 3D panels, dynamic particle engines, and model rendering.
* [ ] Create layout modules:
  * Zustand stores for client states.
  * React Query hooks for fetching dynamic posts and showcase objects.
  * Responsive and animated pages (Framer Motion).
* [ ] Audit against Web Vitals targets (> 90 scores on mobile and desktop).

## Phase 5: CI/CD & Deployments
* [ ] Write isolated Jenkinsfiles for frontend and backend pipelines.
* [ ] Implement Docker build caching, image registry tags, and zero-downtime deployment triggers.
* [ ] Create rolling updates and rollback scripts.
