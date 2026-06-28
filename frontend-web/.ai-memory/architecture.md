# Frontend Web Architecture

This document defines the architecture, directory structure, and technical layout for the Next.js frontend web application (`frontend-web`).

## Core Framework Stack
* **Framework**: Next.js 15 (App Router)
* **Library**: React 19 (Server Components + Client Components)
* **Language**: TypeScript (`strict: true`)
* **Styling**: TailwindCSS with CSS custom properties (`globals.css`) & shadcn/ui primitives
* **API Layer**: Centralized Axios client (`src/core/api/`) backed by formal contracts in `docs/contracts/`
* **State Management**: TanStack React Query v5 (`src/core/query/`) for server state & Zustand (`src/store/`) for client UI state
* **Internationalization**: Namespace-based i18n (`src/core/i18n/`) supporting `en`, `vi`, `ja`
* **Form Handling**: React Hook Form + Zod (`@hookform/resolvers/zod`) with shared form controls (`src/components/forms/`)
* **Theme System**: Zero-flicker ThemeProvider (`src/core/theme/`) supporting Light, Dark, System modes

## Contract Synchronization & API Layer
All API consumer services in `src/core/api/services/` (`project.service.ts`, `profile.service.ts`, `experience.service.ts`, `contact.service.ts`) strictly adhere to the OpenAPI-compatible contracts documented in `docs/contracts/`.

## Feature-Driven Module & Core Platform Architecture

The codebase strictly separates core platform scaffolding (`src/core/`) from feature domains (`src/features/`).

```txt
frontend-web/src/
├── app/                        # Next.js App Router pages and API route handlers
├── components/                 # Shared UI primitives and form controls
│   ├── ui/                     # Primitives (button, card, badge, input, textarea)
│   ├── common/                 # Layout (Navbar, Footer, Container, SectionHeader, LanguageToggle)
│   └── forms/                  # Reusable Form Controls (FormWrapper, FormField, FormInput, FormTextarea, FormSubmitButton)
├── core/                       # Platform Core Scaffolding (Zero Business Code)
│   ├── api/                    # Centralized Axios client, interceptors, services, types
│   ├── forms/                  # Reusable Zod validation schemas & types
│   ├── i18n/                   # Type-safe i18n provider & dictionaries (en, vi, ja)
│   ├── query/                  # TanStack Query client, provider, and Query Key Factory
│   └── theme/                  # Theme context provider and toggle controls
├── features/                   # Domain-Specific Feature Modules (portfolio, projects, about, experience, resume, contact)
├── hooks/                      # Custom hooks & React Query hooks (queries/)
├── store/                      # Zustand global client stores (useUIStore.ts)
└── lib/                        # Shared utility functions and constants (cn, formatDate, SITE_CONFIG)
```
