# Frontend Backend Contract Synchronization Implementation Plan

## Executive Summary
This document defines the contract-first synchronization strategy between `frontend-web` and `backend-api` in accordance with the updated platform governance rules in `AGENTS.md`. API contracts established in `docs/contracts/` serve as the single source of truth for all data models, endpoints, DTOs, error responses, and NestJS backend module specifications.

---

## 1. Contract Specifications (`docs/contracts/`)
* **`projects.md`**: Specifications for `GET /api/v1/projects` and `GET /api/v1/projects/:slug`.
* **`profile.md`**: Specifications for `GET /api/v1/profile`.
* **`experience.md`**: Specifications for `GET /api/v1/experience`.
* **`contact.md`**: Specifications for `POST /api/v1/contact`.
* **`auth.md`**: Specifications for `POST /api/v1/auth/login`, `POST /api/v1/auth/refresh`, `GET /api/v1/auth/me`.
* **`backend-todo.md`**: Roadmap specifying NestJS module targets, controller definitions, service logic, and Prisma entity models derived from contracts.

---

## 2. Service Memory Alignment
* **`frontend-web/.ai-memory/architecture.md`**: References API contracts as single source of truth.
* **`backend-api/.ai-memory/architecture.md`**: References contracts and Backend TODO roadmap for future implementation phases.
