# Architectural Decisions

This document acts as the official Architectural Decision Record (ADR) registry for the Portfolio Platform.

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
