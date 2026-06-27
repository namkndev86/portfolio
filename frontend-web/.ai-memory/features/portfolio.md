# Feature Spec: Portfolio (Home Page)

## Purpose
Displays developer profile hero introduction, featured project highlights, experience highlights, and collaboration call-to-actions on the root route (`/`).

## Functional Requirements
* **Hero Section**: Headline, animated role subtitle, quick action buttons ("Explore Featured Work", "Get in Touch"), and key metrics badge.
* **Featured Projects Showcase**: Renders curated top engineering case studies using responsive `ProjectCard` components.
* **Experience Highlights**: High-level summary of senior software engineering positions with quick link to full career timeline.
* **Contact CTA**: Strategic call-to-action banner promoting architecture consulting and collaboration.

## Architecture & Components
* Location: `frontend-web/src/features/portfolio/`
* Components: `HeroSection.tsx`, `FeaturedProjectsSection.tsx`, `ExperienceSummarySection.tsx`, `ContactCTASection.tsx`.
* Page Route: `frontend-web/src/app/page.tsx`.

## UI & Animation Behaviour
* Smooth Framer Motion reveal transitions (`FadeIn`, `StaggerContainer`).
* Glassmorphic cards with subtle glowing mesh backgrounds.
* Responsive desktop top navigation and mobile drawer menu.

## Dependencies
* Next.js App Router (RSC)
* Framer Motion, Lucide Icons, Custom Brand Icons
* Mock Data: `src/data/projects.ts`, `src/data/experiences.ts`, `src/data/bio.ts`
