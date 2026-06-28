# Frontend Architectural Decisions

This document records architectural decision records (ADRs) specific to the `frontend-web` application.

---

# ADR-004: Feature-Based Modular Architecture for Content Ecosystem Expansion

### Status
Accepted

### Context
The platform starts with Phase 1 (Portfolio) but will evolve into Blog (Phase 2), Resources (Phase 3), Courses (Phase 4), Labs (Phase 5), and Admin CMS (Phase 6). Standard monolithic component folder structures cause tight coupling and maintenance bottlenecks as feature domains multiply.

### Decision
We adopt a **Feature-Driven Architecture** under `src/features/<domain>`:
* Each product domain is encapsulated inside its dedicated feature module directory (e.g., `src/features/portfolio/`, `src/features/projects/`, `src/features/about/`, `src/features/experience/`, `src/features/resume/`, `src/features/contact/`).
* Domain views, cards, and specialized hooks belong strictly inside their respective feature directory.
* Shared UI primitives live in `src/components/ui/` and shared layouts live in `src/components/common/`.

### Consequences
* Future phases (Blog, Courses, Labs) can be added as isolated modules without refactoring existing portfolio components.
* Clear code ownership and modular boundaries across engineering tasks.

---

# ADR-005: Form Validation Strategy with React Hook Form & Zod

### Status
Accepted

### Context
Interactive forms (such as the contact inquiry form and future administrative content editors) require client-side type safety, immediate validation feedback, and zero unneeded re-render overhead.

### Decision
We adopt **React Hook Form** paired with **Zod** schema resolvers (`@hookform/resolvers/zod`):
* Validation constraints and form fields are defined using TypeScript-first Zod schemas.
* Client-side validation is executed seamlessly before dispatching API calls.
* Server route handlers mirror or import shared Zod schemas to guarantee payload integrity.

### Consequences
* Low memory overhead and fast form interactions.
* Provides clear, accessible error feedback on invalid inputs.

---

# ADR-008: API Layer Strategy

### Status
Accepted

### Context
Enterprise web apps require resilient API clients that handle authentication refresh token queues, global error formatting, upload/download streams, and request cancellation without polluting UI code.

### Decision
We adopt a centralized **Axios-based API Client** (`src/core/api/client.ts`) with request interceptors for Bearer token injection and response interceptors for an automated 401 token renewal queue (`failedQueue`), maintenance mode handling, multipart upload, file download, and AbortController request cancellation.

### Consequences
* Robust token management and error handling across all microservice calls.
* Seamless background session renewal without user interruption.

---

# ADR-009: Internationalization Strategy

### Status
Accepted

### Context
The platform requires multilingual support (`en`, `vi`, `ja`) with type-safe keys, App Router compatibility, and zero page reloads on language switching.

### Decision
We implement a **Namespace-Based i18n Architecture** (`src/core/i18n/`) organizing translation dictionaries into domain namespaces (`common`, `navigation`, `pages`, `forms`, `validation`, `project`) loaded dynamically via a React context provider.

### Consequences
* Instant, smooth language switching without route resets or page reloads.
* Type-safe translation key autocomplete across components.

---

# ADR-010: Theme Strategy

### Status
Accepted

### Context
User experience requires instant theme switching (Light, Dark, System) matching OS preferences without layout shifts or hydration flashes.

### Decision
We implement a **Zero-Flicker Theme Provider** (`src/core/theme/`) leveraging CSS custom properties, `suppressHydrationWarning`, and localStorage persistence linked with Tailwind CSS and shadcn/ui tokens.

### Consequences
* Instant theme toggling without visual flicker or hydration warnings.

---

# ADR-011: Form Architecture Strategy

### Status
Accepted

### Context
Standardizing form fields, validation states, error displays, and async validation across enterprise forms.

### Decision
We expand our form architecture with reusable form field controls (`src/components/forms/FormInput`, `FormTextarea`, `FormSelect`, `FormSubmitButton`) paired with shared Zod validation schemas (`src/core/forms/schemas.ts`).

### Consequences
* Accelerated form development with consistent accessible styling and validation feedback.

---

# ADR-012: Server State Strategy

### Status
Accepted

### Context
Managing server-side asynchronous data caching, mutations, loading states, and automated cache invalidation.

### Decision
We adopt **TanStack React Query v5** (`src/core/query/`) with a strongly typed Query Key Factory (`keys.ts`), standardized stale/gc time configurations, and global QueryClient provider bindings.

### Consequences
* Predictable data fetching, optimistic updates, and clean cache invalidation strategies.

