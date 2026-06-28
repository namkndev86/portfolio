# Frontend Foundation Pillars Implementation Plan

## Executive Summary
This document provides the technical design, architectural patterns, directory structures, and implementation plan for the **5 Additional Frontend Foundation Pillars** mandated for Phase 1. All modules are designed to be production-ready, highly reusable, and strictly independent from business feature modules.

---

## 1. Architectural Designs

### 1.1 API Layer Foundation Architecture
* **Core Library**: Axios (`axios`) + TypeScript generics.
* **Token Management**: Dual-token strategy (`access_token` and `refresh_token`).
* **Refresh Token Queue Flow**: When an API request fails with a `401 Unauthorized` status:
  1. Response interceptor halts execution and sets `isRefreshing = true`.
  2. Incoming requests are queued in `failedQueue`.
  3. A single refresh request is sent to `/auth/refresh`.
  4. Upon success, the new access token is stored, `failedQueue` is resolved with the new token, and queued requests are re-executed.
  5. Upon failure, `failedQueue` is rejected, session tokens are purged, and user is redirected to `/login`.
* **Resiliency & Special Workflows**: Maintenance mode (`503`) handling, multipart file upload (`upload`), file download (`download`), and `AbortController` cancellation.

### 1.2 Internationalization Foundation (i18n) Architecture
* **Framework**: React i18n context layer (`src/core/i18n/`) compatible with Next.js App Router and SSR.
* **Supported Locales**: `en` (English - default), `vi` (Vietnamese), `ja` (Japanese - future).
* **Namespace Hierarchy**: `common`, `navigation`, `pages`, `forms`, `validation`, `project`.
* **Zero Reload Switching**: Language switching updates internal state and cookies instantly without route resets or full browser reloads.

### 1.3 Theme System Foundation Architecture
* **Modes**: `light`, `dark`, `system`.
* **Zero Hydration Mismatch & Flicker**: Inline script synchronization with `suppressHydrationWarning` on `<html>` and `<body>` tags and OS `prefers-color-scheme` media query listeners.

### 1.4 Form Architecture Foundation
* **Framework**: React Hook Form + Zod (`@hookform/resolvers/zod`).
* **Shared Component Library**: Modular form controls ([FormWrapper](file:///home/namnk/ws/github/portfolio/frontend-web/src/components/forms/FormWrapper.tsx), [FormField](file:///home/namnk/ws/github/portfolio/frontend-web/src/components/forms/FormField.tsx), `FormInput`, `FormTextarea`, `FormSubmitButton`).
* **Validation Patterns**: Common Zod validation rules (`src/core/forms/schemas.ts`) for emails, passwords, phone numbers, and URLs.

### 1.5 Server State Foundation Architecture (TanStack Query v5)
* **Query Client Strategy**: Configured with strict production defaults (`staleTime: 5 * 60 * 1000`, `gcTime: 10 * 60 * 1000`).
* **Query Key Factory**: Strongly typed factory pattern preventing string collision and standardizing cache invalidation targets (`src/core/query/keys.ts`).

---

## 2. Updated Directory Structure (`frontend-web/src/`)

```text
frontend-web/src/
├── core/
│   ├── api/                    # Centralized Axios client, interceptors, tokens, types
│   ├── forms/                  # Reusable Zod validation schemas
│   ├── i18n/                   # Type-safe i18n provider & dictionaries (en, vi, ja)
│   ├── query/                  # TanStack Query client, provider, and Query Key Factory
│   └── theme/                  # Theme context provider and toggle controls
└── components/
    └── forms/                  # Form Controls (FormInput, FormTextarea, FormSubmitButton)
```

---

## Verification Plan
* Execute `npx tsc --noEmit` on `frontend-web` ensuring 0 TypeScript errors.
* Verify smooth language switching, theme toggling, and query cache operations.
