# Frontend Development Conventions

This document establishes development standards and conventions specific to `frontend-web`.

## Architecture & Structure
* **Feature Modularity**: Domain components must be grouped under `src/features/<domain>/`.
* **App Router**: Routes defined under `src/app/`. Keep pages thin wrappers importing feature containers.
* **Shared Primitives**: Generic UI primitives belong in `src/components/ui/`.
* **Shared Layouts**: Top-level layouts (Navbar, Footer, Container) belong in `src/components/common/`.
* **TypeScript Entities**: Entity interface definitions belong in `src/types/`.
* **Static Data Mocks**: Local datasets belong in `src/data/`.

## Coding & Component Guidelines
* **Server Components (RSC)**: RSC by default. Use `"use client"` only at leaf nodes or interactive feature containers requiring state or Framer Motion animation hooks.
* **Forms & Validation**: Always use React Hook Form paired with Zod resolvers (`@hookform/resolvers/zod`).
* **Icons**: Use Lucide icons for generic UI actions. Brand icons (GitHub, LinkedIn, Twitter) must use custom inline SVG components in `src/components/icons/BrandIcons.tsx` to prevent barrel import failures.
* **Styling**: Use TailwindCSS with semantic variables. Merge classes using `cn()` from `@/lib/utils`.
