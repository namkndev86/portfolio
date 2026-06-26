# Project Conventions

This document establishes the code quality standards, naming conventions, and workflow rules.

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

## Backend (NestJS) Conventions
* **Structure**: Domain-driven directory organization. Group controller, service, module, and dto classes together under a feature directory.
* **Naming**:
  * Files: `name.controller.ts`, `name.service.ts`, `name.module.ts`, `create-name.dto.ts`.
  * Classes: `PascalCase` with suffix (`NameController`, `NameService`).
  * Methods: `camelCase` describing the action (`findAll`, `createOne`).
* **Route Prefixes**: Always prefix API routes with `/api/v1/...`.

## Frontend (Next.js 15) Conventions
* **Structure**: Folder-based routing in `app/`. UI components stored in `src/components/`. State files in `src/store/`. Hooks in `src/hooks/`.
* **CSS & Styles**: Use TailwindCSS with semantic tokens defined in `global.css` or Tailwind config. Ensure all colors use variables from the design system.
* **Components**: React Server Components (RSC) by default. Use `"use client"` only at the leaf nodes where user interactivity, hooks, or animation frames are needed.

## Docker Conventions
* **Images**: Always use official, minimal base images (e.g. `node:20-alpine` or `node:20-slim`).
* **Security**: Never run containers as `root`. Define a dedicated service user inside the Dockerfile.
* **Multi-Stage**: Structure build stages clearly to keep final images small:
  * `builder`: installs devDependencies, runs build tasks.
  * `runner`: copies only built outputs and production node_modules.
