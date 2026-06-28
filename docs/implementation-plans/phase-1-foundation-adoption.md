# Phase 1 Foundation Adoption & Integration Implementation Plan

## Executive Summary
This document defines the technical integration strategy, code usage patterns, and exhaustive **Feature-to-Foundation Mapping** for actively adopting the core platform foundation layer across all Phase 1 pages and feature modules in `frontend-web`. Direct `fetch()` calls, inline un-translated text strings, uncontrolled forms, and direct un-cached data fetching are strictly prohibited.

---

## 1. Foundation Integration Strategies & Code Usage Examples

### 1.1 Centralized API Layer Integration
* **Rule**: All HTTP communication must invoke `ApiClient` (`src/core/api/client.ts`). Inline `fetch()` and direct Axios instantiations outside `src/core/api/` are forbidden.
* **Services Layer**: Encapsulated inside `src/core/api/services/` (`project.service.ts`, `profile.service.ts`, `experience.service.ts`, `contact.service.ts`).

### 1.2 Internationalization (i18n) Integration
* **Rule**: Hardcoded text strings inside components or pages are forbidden. All user-facing labels, titles, buttons, and placeholders must consume `useTranslation()`.
* **Language Switcher**: Integrated in Navbar alongside ThemeToggle for smooth, zero-reload switching across `en`, `vi`, and `ja`.

### 1.3 Theme System Integration
* **Rule**: Component styling must utilize semantic design tokens (`bg-background`, `text-foreground`, `border-border`, `bg-card`) ensuring automatic instant adaptation across Light, Dark, and System modes without visual flashes or hydration errors.

### 1.4 Form Architecture Integration
* **Rule**: Interactive forms must be wrapped in `FormWrapper` and utilize `useForm` with Zod schema resolvers and modular controls (`FormInput`, `FormTextarea`, `FormSubmitButton`).

### 1.5 Server State Integration (TanStack Query)
* **Rule**: Asynchronous server data access inside components must utilize custom query hooks wrapping `useQuery` / `useMutation` linked with `queryKeys` (`src/hooks/queries/`).

---

## 2. Exhaustive Feature-to-Foundation Mapping Matrix

| Route | Feature Domain | API Layer Usage | i18n Usage | Theme Usage | Server State (Query) | Form Architecture |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `portfolio` | `API_ENDPOINTS.PROFILE`, `PROJECTS.LIST` | `pages.heroTitle`, `heroSubtitle`, `pages.projectsTitle` | Semantic card gradients, background tokens | `useProfileQuery()`, `useProjectsQuery()` | N/A |
| `/about` | `portfolio` | `API_ENDPOINTS.PROFILE` | `navigation.about`, `pages.aboutBio`, `project.technologies` | Dynamic skill matrix badges & contrast text | `useProfileQuery()` | N/A |
| `/projects` | `projects` | `API_ENDPOINTS.PROJECTS.LIST` | `navigation.projects`, `project.viewProject`, `project.sourceCode` | Filter bar buttons, grid cards with hover highlights | `useProjectsQuery(filters)` | Filter search inputs via `FormInput` |
| `/projects/[slug]`| `projects` | `API_ENDPOINTS.PROJECTS.DETAIL(slug)` | `common.back`, `project.technologies`, `common.loading` | Deep detail layout, contrast markdown prose container | `useProjectDetailQuery(slug)` | N/A |
| `/experience` | `portfolio` | `API_ENDPOINTS.EXPERIENCE` | `navigation.experience`, `pages.experienceTitle` | Timeline line node highlights, dark glass cards | `useExperienceQuery()` | N/A |
| `/resume` | `resume` | `API_ENDPOINTS.PROFILE` | `navigation.resume`, `common.save`, `common.loading` | Digital CV preview container & print CSS rules | `useProfileQuery()` | N/A |
| `/contact` | `contact` | `API_ENDPOINTS.CONTACT` (POST) | `navigation.contact`, `forms.nameLabel`, `forms.emailLabel`, `validation.*` | Accessible form card, focus ring states | N/A | `ContactForm` using RHF + Zod + `FormWrapper` |

---

## Verification Plan
* Execute `npx tsc --noEmit` on `frontend-web` ensuring 0 TypeScript errors.
* Verify smooth language switching, theme toggling, and query cache operations across all Phase 1 pages.
