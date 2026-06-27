# Platform Roadmap

This document outlines the phased roadmap for building, expanding, and deploying the Personal Developer Platform.

---

## Phase 1 — Portfolio Platform (IN PROGRESS - Multi-Service Sync)

### Service Status Matrix
| Service | Status | Remaining Tasks |
| :--- | :--- | :--- |
| **`frontend-web`** | 🟢 UI Implemented | Connect client query hooks to live backend API endpoints (`NEXT_PUBLIC_API_URL`). |
| **`backend-api`** | 🟡 Pending Implementation | Implement NestJS modules (`projects`, `profile`, `experience`, `contact`), Prisma schema alignment, and seed script. |
| **`infra`** | 🟡 Pending Synchronization | Synchronize Nginx proxy routing (`/api/v1/*` & `/*`), Docker Compose orchestration, and health checks. |
| **`docs`** | 🟡 Pending Documentation | Document Phase 1 OpenAPI specs, architecture sequence diagrams, and local onboarding runbooks. |

### Detailed Phase 1 Task Checklist
- [x] **Frontend Web**: Feature modular structure, UI views (`/`, `/about`, `/projects`, `/projects/[slug]`, `/experience`, `/resume`, `/contact`), Zod validation, Framer Motion animations.
- [ ] **Backend API**: Prisma schema alignment, NestJS modules (`ProjectsModule`, `ProfileModule`, `ExperienceModule`, `ContactModule`), REST controllers (`/api/v1/...`), database seed script (`prisma/seed.ts`).
- [ ] **Infra**: Nginx reverse proxy routing (`conf.d/default.conf`), Docker Compose multi-service build config, container healthchecks.
- [ ] **Docs**: OpenAPI specs in `docs/api/endpoints.md`, system sequence diagrams in `docs/architecture/system_design.md`, local setup runbook in `docs/onboarding/local_setup.md`.

---

## Phase 2 — Technical Blog (Future)
- [ ] Routes: `/blog`, `/blog/[slug]`.
- [ ] MDX article compiler with custom code block syntax highlighting.
- [ ] MongoDB document storage for blog posts and tag telemetry.
- [ ] Incremental Static Regeneration (ISR) for fast content updates.

---

## Phase 3 — Learning Resources (Future)
- [ ] Routes: `/resources`, `/resources/[slug]`.
- [ ] Developer roadmaps, cheat sheets, and technical guides.

---

## Phase 4 — Courses & Workshops (Future)
- [ ] Routes: `/courses`, `/courses/[slug]`.
- [ ] Course catalog, structured lesson views, and video player support.

---

## Phase 5 — Interactive Labs & Experiments (Future)
- [ ] Routes: `/labs`, `/labs/[slug]`.
- [ ] Interactive WebGL / Three.js 3D demos and particle playgrounds.

---

## Phase 6 — Admin CMS & Telemetry (Future)
- [ ] Routes: `/admin`, `/admin/projects`, `/admin/posts`, `/admin/courses`.
- [ ] Content management dashboards for CRUD operations on portfolio assets, blog posts, and courses.
