# Project Conventions

This document establishes the code quality standards, naming conventions, and workflow rules across the platform.

## Git & Commits
* **Workflow**: Trunk-based development with short-lived branches.
* **Commit Messages**: Must adhere to Conventional Commits:
  * `feat(scope): ...`
  * `fix(scope): ...`
  * `docs(scope): ...`
  * `style(scope): ...`
  * `refactor(scope): ...`
  * `test(scope): ...`
  * `chore(scope): ...`

## Code Formatting & Quality
* **Linter**: ESLint with strict TypeScript rules.
* **Formatter**: Prettier configured with 2-space indentation, double quotes, and trailing commas.
* **TypeScript**:
  * `strict: true` must be enabled.
  * No implicit `any` usage. Avoid `as any` type assertions; construct proper interfaces or generics.
  * Explicit return types must be declared on all public-facing module functions and API controllers.

## Frontend (Next.js 15) Conventions
* **Architecture**: Feature-Driven Architecture under `src/features/<domain>/` (e.g. `portfolio`, `projects`, `about`, `experience`, `resume`, `contact`).
* **Structure**:
  * App Router pages in `src/app/`. Keep pages as thin wrappers importing top-level feature containers.
  * Shared UI primitives in `src/components/ui/` (e.g., `button.tsx`, `card.tsx`, `badge.tsx`, `input.tsx`).
  * Shared layout components in `src/components/common/` (e.g., `Navbar.tsx`, `Footer.tsx`, `Container.tsx`).
  * Shared animation helpers in `src/components/animations/` (`MotionComponents.tsx`).
  * Brand SVG icons in `src/components/icons/` (`BrandIcons.tsx`).
  * Global stores in `src/store/` (`useUIStore.ts`).
  * TypeScript domain entity definitions in `src/types/` (`project.ts`, `experience.ts`, `skill.ts`, `contact.ts`).
  * Data mock sources in `src/data/` (`projects.ts`, `experiences.ts`, `skills.ts`, `bio.ts`).
* **CSS & Styles**: Use TailwindCSS with semantic tokens defined in `global.css` or Tailwind config. Ensure all colors use variables from the design system.
* **Components**: React Server Components (RSC) by default. Use `"use client"` only at the leaf nodes or feature containers where interactivity, hooks, or Framer Motion animation frames are required.
* **Forms & Validation**: React Hook Form with Zod schemas (`@hookform/resolvers/zod`) for all interactive client forms.

## Backend (NestJS) Conventions
* **Structure**: Domain-driven directory organization under `backend-api/src/`. Group controller, service, module, and dto classes together under a feature directory.
* **Naming**:
  * Files: `name.controller.ts`, `name.service.ts`, `name.module.ts`, `create-name.dto.ts`.
  * Classes: `PascalCase` with suffix (`NameController`, `NameService`).
  * Methods: `camelCase` describing the action (`findAll`, `createOne`).
* **Route Prefixes**: Always prefix API routes with `/api/v1/...`.

## Docker Conventions
* **Images**: Always use official, minimal base images (e.g. `node:20-alpine` or `node:20-slim`).
* **Security**: Never run containers as `root`. Define a dedicated service user inside the Dockerfile.
* **Multi-Stage**: Structure build stages clearly to keep final images small (`builder` vs `runner`).
