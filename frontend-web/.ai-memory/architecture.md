# Frontend Web Architecture

This document defines the architecture, directory structure, and technical layout for the Next.js frontend web application (`frontend-web`).

## Core Framework Stack
* **Framework**: Next.js 15 (App Router)
* **Library**: React 19 (Server Components + Client Components)
* **Language**: TypeScript (`strict: true`)
* **Styling**: TailwindCSS with CSS custom properties (`globals.css`) & shadcn/ui primitives
* **API Layer**: Centralized Axios client (`src/core/api/`) with interceptors, token refresh queue, upload/download handlers
* **State Management**: TanStack React Query v5 (`src/core/query/`) for server state & Zustand (`src/store/`) for client UI state
* **Internationalization**: Namespace-based i18n (`src/core/i18n/`) supporting `en`, `vi`, `ja`
* **Form Handling**: React Hook Form + Zod (`@hookform/resolvers/zod`) with shared form controls (`src/components/forms/`)
* **Theme System**: Zero-flicker ThemeProvider (`src/core/theme/`) supporting Light, Dark, System modes

## Feature-Driven Module & Core Platform Architecture

The codebase strictly separates core platform scaffolding (`src/core/`) from feature domains (`src/features/`).

```txt
frontend-web/src/
├── app/                        # Next.js App Router pages and API route handlers
├── components/                 # Shared UI primitives and form controls
│   ├── ui/                     # Primitives (button, card, badge, input, textarea)
│   ├── common/                 # Layout (Navbar, Footer, Container, SectionHeader)
│   └── forms/                  # Reusable Form Controls (FormWrapper, FormField, FormInput, FormTextarea, FormSubmitButton)
├── core/                       # Platform Core Scaffolding (Zero Business Code)
│   ├── api/                    # Centralized Axios client, interceptors, refresh queue, types
│   ├── forms/                  # Reusable Zod validation schemas & types
│   ├── i18n/                   # Type-safe i18n provider & dictionaries (en, vi, ja)
│   ├── query/                  # TanStack Query client, provider, and Query Key Factory
│   └── theme/                  # Theme context provider and toggle controls
├── features/                   # Domain-Specific Feature Modules (portfolio, projects, about, experience, resume, contact)
├── store/                      # Zustand global client stores (useUIStore.ts)
└── lib/                        # Shared utility functions and constants (cn, formatDate, SITE_CONFIG)
```

## 5 Foundation Pillar Specifications

### 1. API Layer Foundation
Centralized Axios client (`src/core/api/client.ts`) with request interceptors for token injection and response interceptors for 401 token refresh queue handling, maintenance mode handling, multipart upload, file download, and request cancellation.

### 2. Internationalization Foundation (i18n)
App Router & SSR compatible multilingual system (`src/core/i18n/`) supporting `en`, `vi`, and `ja`. Features zero page reloads on language switching and namespace-based translation loading (`common`, `navigation`, `pages`, `forms`, `validation`, `project`).

### 3. Theme System Foundation
Context-driven theme management supporting Light, Dark, and System modes with instant switching, zero hydration mismatch, and OS preference synchronization.

### 4. Form Architecture Foundation
React Hook Form + Zod integration featuring standardized field containers ([FormField](file:///home/namnk/ws/github/portfolio/frontend-web/src/components/forms/FormField.tsx)), submit wrappers ([FormWrapper](file:///home/namnk/ws/github/portfolio/frontend-web/src/components/forms/FormWrapper.tsx)), typed inputs, and common validation schemas.

### 5. Server State Foundation
TanStack React Query v5 integration with centralized query keys ([keys.ts](file:///home/namnk/ws/github/portfolio/frontend-web/src/core/query/keys.ts)), configurable stale/cache times, and unified mutation invalidation patterns.
