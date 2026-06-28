# Architectural Decisions

This document acts as the official Architectural Decision Record (ADR) registry for platform-wide cross-service decisions. Service-specific ADRs are located within their respective service memory directories (`frontend-web/.ai-memory/decisions.md`, `backend-api/.ai-memory/decisions.md`).

---

# ADR-001: Independent Deployment Pipelines

### Status
Accepted

### Context
A monolith build-and-deploy cycle causes bottlenecks when scaling team sizes to 50+ engineers. Deploying the frontend should not require rebuilds or regression tests of backend services, and vice-versa.

### Decision
We will decouple the frontend and backend architectures completely.
* Each microservice owns its codebase in a dedicated subdirectory (`frontend-web/` and `backend-api/`).
* Each microservice maintains its own `Dockerfile` and `Jenkinsfile`.
* There are no code imports across boundaries; interfaces are synchronized strictly via OpenAPI (Swagger) specifications.

### Consequences
* Pipelines run in parallel, dramatically improving deployment velocity.
* Service-specific scaling is simplified.
* Rollback is isolated: rolling back a frontend deployment does not affect backend database sessions or transaction states.

---

# ADR-002: Dual-Database Architecture (Prisma + Mongoose)

### Status
Accepted

### Context
The platform requires rigid relational sanity for transactional data (users, project mappings, timelines) but requires extremely high-throughput and schema flexibility for log events, user interaction analytics, and blogging metadata.

### Decision
We will adopt a hybrid database model in the backend:
1. **PostgreSQL + Prisma**: Manages structured transactional schemas, foreign key mappings, and relational tables.
2. **MongoDB + Mongoose**: Acts as a high-performance document store for unstructured telemetry logging, dynamic blog posts, and analytics event dumps.
3. **Redis**: Layered over both as a transient caching store for session management and rate-limiting payloads.

### Consequences
* Highly optimized data storage for specific access patterns.
* Minimizes schema migration headaches for logging components.
* Relational transactions are fully enforced for authentication and master data.

---

# ADR-003: Next.js 15 App Router & React 19 Integration

### Status
Accepted

### Context
Building a rich portfolio that is visually outstanding (WebGL, Three.js, animations) while maintaining peak SEO optimization and load speed.

### Decision
We will structure the client web application using Next.js 15 (App Router) and React 19.
* **Server Components**: Used as the default for structural pages, static content, and fetching initial data to ensure server-side rendering (SSR/ISR) and immediate SEO crawler indexing.
* **Client Components**: Isolated to interactive units, such as Three.js canvases, Framer Motion transitions, and real-time query forms.
* **State Managers**: Zustand for lightweight visual/client states (e.g., sidebar toggles, audio controls). React Query (TanStack Query v5) for cache-first server-state data sync.

### Consequences
* Excellent Core Web Vitals (FCP, LCP) scores.
* Decoupled server fetching from stateful client visual interactions.

---

# ADR-004: Clean Repository Pattern and Prisma ORM Abstraction

### Status
Accepted

### Context
Direct ORM leaks inside business services tightly couple logic to data layer tools, making unit testing complex and mocking database layers brittle.

### Decision
We will define an abstract `BaseRepository<T>` and generic `IRepository<T>` interface in `backend-api/src/core/database/`. `PrismaRepository<T>` will implement this interface. Services will consume injected repository abstractions rather than invoking Prisma directly.

### Consequences
* Enables effortless unit testing with standard mocks.
* Ensures database driver updates do not ripple into business modules.

---

# ADR-005: Resilient Unified API Client and Error Normalization Layer

### Status
Accepted

### Context
Inconsistent API error formats across endpoints lead to client-side crashes and unhandled promise rejections.

### Decision
Implement a centralized fetch wrapper (`core/api/client.ts`) in Next.js. Interceptors and normalizer classes will automatically inject Bearer tokens, parse structured `ApiErrorResponse` payloads into standard JS Error subclasses (`ApiError`), and handle errors predictably.

### Consequences
* Standardized user error feedback.
* Streamlined network debugging and zero boilerplate in UI components.

---

# ADR-006: Aspect-Oriented Audit Logging and RBAC Framework

### Status
Accepted

### Context
Security compliance requires tracking state-changing mutations (`POST`, `PUT`, `DELETE`), while authorization must be declaratively specified without polluting controller endpoints.

### Decision
We will build NestJS Custom Guards (`JwtAuthGuard`, `RbacGuard`) operating on custom decorators (`@Roles()`, `@Permissions()`). An aspect-oriented `AuditLogInterceptor` will automatically intercept mutating requests, extract active user tokens, and publish audit records to the event bus asynchronously.

### Consequences
* Robust security guardrails and non-blocking audit logging.

---

# ADR-007: Internal Event Bus Decoupling via RxJS Event Bus

### Status
Accepted

### Context
Backend platform features must execute reactions asynchronously without coupling calling functions.

### Decision
We will construct an event bus using RxJS Subject (`EventBusService`) with strict event payload typing defined in an `PlatformEvent` enum.

### Consequences
* Decoupled, asynchronous event handling inside backend services.

---

# ADR-008: Multi-Stage Secure Containerization & Reverse Proxy Routing

### Status
Accepted

### Context
Production containers must maintain low image footprints and avoid executing scripts under `root` privileges. Reverse proxy routing must seamlessly handle API subpaths without CORS friction.

### Decision
We will construct multi-stage Dockerfiles utilizing Alpine base images and non-root system users (`node`). Nginx proxy setup in `infra/nginx/` encapsulates internal service networking.

### Consequences
* Production-ready container security compliance and unified web gateway access points.

