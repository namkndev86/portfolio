# Backend API Architecture

This document defines the architecture, module structure, and data layer organization for the NestJS backend API service (`backend-api`).

## Core Technology Stack
* **Framework**: NestJS 10
* **Language**: TypeScript (`strict: true`)
* **ORMs & Drivers**: Prisma ORM (PostgreSQL master database), Mongoose (MongoDB analytics/logging), Redis Client (`ioredis`)
* **Validation**: `class-validator` and `class-transformer` DTO pipe validations
* **Documentation**: OpenAPI (Swagger) module generator (`@nestjs/swagger`)

## Contract Synchronization & API Layer
All NestJS modules, controllers, services, and DTOs in `src/modules/` are generated from and strictly synchronized with the OpenAPI contracts in `docs/contracts/` (`projects.md`, `profile.md`, `experience.md`, `contact.md`, `auth.md`) and the backend TODO roadmap in `docs/contracts/backend-todo.md`.

## Module Organization (`src/`)

```txt
backend-api/src/
├── app.module.ts               # Root application module
├── main.ts                     # Application entry point (Port 5000, Global Pipes & Swagger)
├── core/                       # Platform core modules (auth, database, logging, exceptions, audit, events)
├── health/                     # Health check module (GET /health)
└── modules/                    # Domain Feature Modules (Phase 1 Implementation Targets)
    ├── projects/               # ProjectsModule (ProjectsController, ProjectsService, DTOs)
    ├── profile/                # ProfileModule (ProfileController, ProfileService, DTOs)
    ├── experience/             # ExperienceModule (ExperienceController, ExperienceService, DTOs)
    └── contact/                # ContactModule (ContactController, ContactService, DTOs)
```
