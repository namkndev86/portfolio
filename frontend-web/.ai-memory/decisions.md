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
