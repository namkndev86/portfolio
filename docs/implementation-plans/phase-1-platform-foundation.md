# Phase 1 - Platform Foundation Implementation Plan

## Executive Summary
This document outlines the architecture, directory topology, dependency governance, architectural decision records (ADRs), and detailed step-by-step execution plan for building an enterprise-grade platform foundation across `frontend-web`, `backend-api`, `infra`, and `docs`. In accordance with platform governance, no business domain logic or project-specific features are implemented during this phase; the focus is solely on reusable core platform frameworks and abstractions.

---

## 1. Architecture Overview

### 1.1 Frontend Architecture (`frontend-web`)
* **Core Framework**: Next.js 15 (App Router) + React 19 + TypeScript (`strict: true`).
* **Design & Theme System**: CSS variables managed via `ThemeProvider`, integrating Tailwind CSS and `shadcn/ui` atomic UI primitives.
* **API & Data Access Layer**: Axios wrapper client with request/response interceptors, automated JWT authorization injection, unified error normalization, and TanStack React Query v5 integration.
* **State Management**: Zustand for global client-side visual states combined with React Query for server-side state.
* **Form & Validation Architecture**: React Hook Form with Zod schema resolvers for client-side validation and automated field error mapping.
* **Error & Resiliency Layer**: Hierarchical React Error Boundaries catching runtime exceptions with structured fallback visual states.

### 1.2 Backend Architecture (`backend-api`)
* **Core Framework**: NestJS + TypeScript (`strict: true`).
* **Clean Architecture & Repository Pattern**: Decoupled domain contracts from data persistence layers. Generic repository interfaces (`IRepository<T>`) implemented via Prisma ORM (`BaseRepository<T>`).
* **Authentication & Authorization**: Passport JWT strategy, dynamic `@Roles()` and `@Permissions()` metadata decorators, custom `JwtAuthGuard` and `RbacGuard`.
* **Logging System**: Custom structured JSON logger module (`AppLoggerService`), formatted for centralized log aggregators, supporting request tracing.
* **Exception Handling**: Global `GlobalHttpExceptionFilter` capturing standard NestJS exceptions and unhandled errors, formatting them into standardized API Error Responses.
* **Validation Pipe System**: Global `ValidationPipe` leveraging `class-validator` and `class-transformer` with strict DTO sanitization.
* **Event & Audit Framework**: Decoupled event bus using RxJS Subject (`EventBusService`). Global `AuditLogInterceptor` intercepting mutating HTTP requests (`POST`, `PUT`, `PATCH`, `DELETE`) to dispatch asynchronous audit events.

### 1.3 Infrastructure Architecture (`infra`)
* **Container Orchestration**: Multi-stage `Dockerfile` configurations optimized for layer caching and non-root security execution (`node` user). Docker Compose setup tying together frontend, backend API, PostgreSQL, MongoDB, Redis, and Nginx.
* **API Gateway & Reverse Proxy**: Nginx routing rules enforcing upstream path routing (`/api/v1/*` -> NestJS upstream, `/*` -> Next.js upstream), header forwarding, and gzip compression.

---

## 2. Folder Structure

### 2.1 Frontend Folder Structure (`frontend-web/src/`)
```text
frontend-web/src/
├── app/                        # App Router routing architecture
├── core/                       # Core Platform Frameworks (Pure Scaffolding)
│   ├── api/                    # API Client Layer & Axios config
│   ├── auth/                   # Auth context & guard components
│   ├── errors/                 # Error boundary & logger
│   └── theme/                  # Theme system provider
├── components/                 # Shared UI System
│   ├── common/                 # Common layout components (Navbar, Footer)
│   ├── forms/                  # Form architecture controls
│   └── ui/                     # Atomic UI primitives
└── types/                      # Platform-wide TypeScript declarations
```

### 2.2 Backend Folder Structure (`backend-api/src/`)
```text
backend-api/src/
├── core/                       # Platform Core Modules
│   ├── audit/                  # Audit Log Interceptor & Service
│   ├── auth/                   # JWT & RBAC Framework
│   ├── database/               # Base Repository & Prisma Service
│   ├── events/                 # RxJS EventBus Service
│   ├── exceptions/             # Global Exception Filter
│   ├── logging/                # AppLogger & Logging Interceptor
│   └── pipes/                  # Global Validation Pipe
└── app.module.ts               # Root Application Module orchestrating core systems
```

---

## 3. Execution Plan & Component Mapping

### Component 1: Frontend Foundation (`frontend-web`)
* Centralized API Client (`src/core/api/client.ts`, `errors.ts`, `types.ts`).
* Auth Context & Guards (`src/core/auth/auth-context.tsx`, `guard.tsx`, `tokens.ts`).
* Theme Provider & Toggle (`src/core/theme/theme-provider.tsx`, `theme-toggle.tsx`).
* Error Boundary (`src/core/errors/ErrorBoundary.tsx`, `logger.ts`).
* Form Wrappers (`src/components/forms/FormWrapper.tsx`, `FormField.tsx`).

### Component 2: Backend Foundation (`backend-api`)
* Base Repository & Prisma (`src/core/database/base.repository.ts`, `prisma.service.ts`).
* Auth Guards & Decorators (`src/core/auth/guards/`, `decorators/`, `strategies/`).
* Logging System (`src/core/logging/logger.service.ts`, `logging.interceptor.ts`).
* Exception Filter (`src/core/exceptions/http-exception.filter.ts`).
* Validation Pipe (`src/core/pipes/validation.pipe.ts`).
* Event Bus & Audit Interceptor (`src/core/events/`, `src/core/audit/`).

---

## Verification Plan
* Execute `npx tsc --noEmit` across all services to ensure 0 TypeScript errors.
* Verify Docker Compose topology booting cleanly behind Nginx reverse proxy gateway.
