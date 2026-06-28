# Feature Spec: Projects Showcase

## Purpose
Showcases detailed case studies of software engineering projects, system architectures, challenges, solutions, and tech stacks.

## Functional Requirements
* **Catalog Listing (`/projects`)**: Filterable project grid with category selector tabs (Enterprise, Fullstack, Frontend, Personal) and real-time text search debounced across titles and tech stacks.
* **Project Details (`/projects/[slug]`)**: SSG-generated deep dives displaying System Overview, Key Responsibilities, Engineering Challenges & Solutions, Architecture Diagrams/Summaries, Tech Stack Badges, and Lessons Learned.

## Architecture & Components
* Location: `frontend-web/src/features/projects/`
* Components: `ProjectCard.tsx`, `ProjectsCatalog.tsx`.
* Page Routes: `frontend-web/src/app/projects/page.tsx`, `frontend-web/src/app/projects/[slug]/page.tsx`.
* Entity Type: `src/types/project.ts`.
* Mock Data: `src/data/projects.ts`.

## UI Behaviour
* Client-side filter and search state management with immediate layout transitions.
* Hover zoom and elevation effects on cards.
* Responsive multi-column grid (`sm:1`, `md:2`, `lg:3`).

## Dependencies
* Next.js App Router static pre-rendering (`generateStaticParams`)
* Lucide Icons & Custom Brand Icons
* TailwindCSS glassmorphism tokens
