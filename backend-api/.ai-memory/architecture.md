# Backend API Architecture

This document defines the architecture, module structure, and data layer organization for the NestJS backend API service (`backend-api`).

## Core Technology Stack
* **Framework**: NestJS 10
* **Language**: TypeScript (`strict: true`)
* **ORMs & Drivers**: Prisma ORM (PostgreSQL master database), Mongoose (MongoDB analytics/logging), Redis Client (`ioredis`)
* **Validation**: `class-validator` and `class-transformer` DTO pipe validations
* **Documentation**: OpenAPI (Swagger) module generator (`@nestjs/swagger`)

## Module Organization (`src/`)

```txt
backend-api/src/
├── app.module.ts               # Root application module
├── main.ts                     # Application entry point (Port 5000, Global Pipes & Swagger)
├── common/                     # Cross-cutting concerns
│   ├── database/               # PrismaService, RedisService, Mongoose config
│   ├── filters/                # Global exception filters
│   └── guards/                 # JwtAuthGuard, RolesGuard
├── health/                     # Health check module (GET /health)
└── modules/                    # Domain Feature Modules (Phase 1 Implementation Targets)
    ├── projects/               # ProjectsModule (ProjectsController, ProjectsService, DTOs)
    ├── profile/                # ProfileModule (ProfileController, ProfileService, DTOs)
    ├── experience/             # ExperienceModule (ExperienceController, ExperienceService, DTOs)
    └── contact/                # ContactModule (ContactController, ContactService, DTOs)
```

## Data Layer & Prisma Schema (`prisma/schema.prisma`)
The PostgreSQL relational schema provides structured storage for:
- `User`: Admin credentials and role-based authorization (ADMIN, EDITOR, GUEST).
- `Profile`: Dynamic bio narrative, social links, core philosophies.
- `TimelineEvent` / `Experience`: Work and education chronological records.
- `Project`: Case studies, categories (Enterprise, Fullstack, Frontend, Personal), tech stacks, responsibilities, challenges/solutions, architecture summaries, and lessons learned.
- `ContactSubmission`: Inbound message storage with timestamps and status tracking.

## REST API Versioning & Routing
All business API endpoints are versioned with the prefix `/api/v1/`:
- `GET /api/v1/projects` (with query filters `category` and `search`)
- `GET /api/v1/projects/:slug`
- `GET /api/v1/profile`
- `GET /api/v1/experience`
- `POST /api/v1/contact`
