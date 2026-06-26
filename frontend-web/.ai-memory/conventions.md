# Frontend Web Workspace Memory

## Responsibility
Build a beautiful user experience with Next.js 15, React 19, Framer Motion, and React Three Fiber (3D graphics) sitting behind the Nginx proxy router.

## Frontend UI & Design Conventions
* **Design System Integration**: All layout blocks must use tailwind classes referencing design tokens (e.g. `bg-background-primary`, `text-text-main`, `border-border-color`).
* **Interactive Canvas**: Keep the R3F `<Canvas>` element isolated to single component boundaries and load it dynamically (`ssr: false`) to avoid server-side hydration mismatches.
* **State Management**:
  * Zustand: Handles UI state, sidebar visibility, user preferences, and animation trigger parameters.
  * React Query: Synchronizes server data tables (`projects`, `blog`, `timeline`).
* **SEO**: All metadata (title tags, descriptions, open-graph blocks) must be declared inside server layouts (`layout.tsx`).
