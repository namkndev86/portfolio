# Backend TODO Specification & Module Roadmap

## Overview
This document specifies the backend module, controller, service, and DTO plans derived directly from the API contracts in `docs/contracts/`. When NestJS backend development commences in future phases, developers must generate code conforming to these contracts.

---

## 1. Backend Modules Roadmap

### 1.1 `ProjectsModule` (`backend-api/src/modules/projects/`)
* **Controller**: `ProjectsController` (`GET /api/v1/projects`, `GET /api/v1/projects/:slug`)
* **Service**: `ProjectsService` (injects `PrismaService` / `ProjectsRepository`)
* **DTOs**: `ProjectResponseDto`, `ProjectQueryDto`
* **Prisma Model**: `model Project { id String @id @default(uuid()); slug String @unique; title String ... }`

### 1.2 `ProfileModule` (`backend-api/src/modules/profile/`)
* **Controller**: `ProfileController` (`GET /api/v1/profile`)
* **Service**: `ProfileService`
* **DTOs**: `UserProfileResponseDto`, `SkillDto`

### 1.3 `ExperienceModule` (`backend-api/src/modules/experience/`)
* **Controller**: `ExperienceController` (`GET /api/v1/experience`)
* **Service**: `ExperienceService`
* **DTOs**: `ExperienceResponseDto`

### 1.4 `ContactModule` (`backend-api/src/modules/contact/`)
* **Controller**: `ContactController` (`POST /api/v1/contact`)
* **Service**: `ContactService` (dispatches event via `EventBusService` to send email alert)
* **DTOs**: `CreateContactDto`, `ContactSubmissionResponseDto`

---

## 2. Synchronization Checklist
- [x] API Contracts documented in `docs/contracts/`
- [x] Frontend API consumers (`src/core/api/services/`) consume endpoints matching contracts
- [x] Backend TODO specifications recorded in `docs/contracts/backend-todo.md`
- [x] Service memories synchronized
