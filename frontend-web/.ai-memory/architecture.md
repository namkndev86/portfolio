# Frontend Web Architecture

This document defines the architecture, directory structure, and technical layout for the Next.js frontend web application (`frontend-web`).

## Core Framework Stack
* **Framework**: Next.js 15 (App Router)
* **Library**: React 19 (Server Components + Client Components)
* **Language**: TypeScript (`strict: true`)
* **Styling**: TailwindCSS with CSS custom properties (`globals.css`)
* **State Management**: Zustand (`src/store/useUIStore.ts`)
* **Animation**: Framer Motion 12
* **Form Handling**: React Hook Form + Zod (`@hookform/resolvers/zod`)

## Feature-Driven Module Architecture

To support scalable product growth across future ecosystem phases, the codebase strictly adheres to **Feature-Driven Architecture** under `src/features/`.

```txt
frontend-web/src/
├── app/                        # Next.js App Router pages and API route handlers
│   ├── page.tsx                # / (Home Page)
│   ├── about/page.tsx          # /about (About & Skills Matrix)
│   ├── projects/               # /projects (Catalog & [slug] details)
│   ├── experience/page.tsx     # /experience (Career Timeline)
│   ├── resume/page.tsx         # /resume (Online CV & Print styling)
│   ├── contact/page.tsx        # /contact (Inquiry form & info)
│   └── api/contact/route.ts    # Serverless contact submission route
├── components/                 # Shared UI primitives and layout structures
│   ├── ui/                     # Primitives (button, card, badge, input, textarea)
│   ├── common/                 # Layout (Navbar, Footer, Container, SectionHeader)
│   ├── animations/             # Framer Motion containers (FadeIn, StaggerContainer)
│   └── icons/                  # Custom brand SVG icons (GithubIcon, LinkedinIcon, TwitterIcon)
├── features/                   # Domain-Specific Feature Modules
│   ├── portfolio/              # Phase 1: Home sections (Hero, FeaturedProjects, ExperienceSummary, ContactCTA)
│   ├── projects/               # Phase 1: Project cards, filter bar, catalog showcase
│   ├── about/                  # Phase 1: Bio narrative, core values, technical skills matrix
│   ├── experience/             # Phase 1: Interactive timeline cards
│   ├── resume/                 # Phase 1: Digital CV viewer and print export handlers
│   ├── contact/                # Phase 1: Zod validated contact form
│   ├── blog/                   # Phase 2 (Future): MDX readers and blog modules
│   ├── resources/              # Phase 3 (Future): Downloads and roadmaps
│   ├── courses/                # Phase 4 (Future): Lessons and video player
│   ├── labs/                   # Phase 5 (Future): WebGL and Three.js sandboxes
│   └── admin/                  # Phase 6 (Future): Content management dashboards
├── data/                       # Static mock dataset providers (projects, experiences, skills, bio)
├── types/                      # TypeScript domain entity definitions (project, experience, skill, contact)
├── store/                      # Zustand global client stores (useUIStore.ts)
└── lib/                        # Shared utility functions and constants (cn, formatDate, SITE_CONFIG)
```

## Rendering & Component Boundaries
* **Server Components (RSC)**: Default for structural pages, static content, and static site generation (SSG/ISR) ensuring zero bundle overhead and optimal SEO.
* **Client Components (`'use client'`)**: Isolated leaf nodes and feature containers requiring interactivity, hooks, or animation frames (e.g., `ProjectsCatalog`, `ContactForm`, `Navbar`, motion containers).
