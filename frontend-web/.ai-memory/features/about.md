# Feature Spec: About & Technical Matrix

## Purpose
Presents personal background, core architectural principles, education foundation, and a comprehensive breakdown of technical skills across 8+ years of experience.

## Functional Requirements
* **Personal Bio**: Comprehensive narrative detailing engineering background, leadership evolution, and system design expertise.
* **Core Philosophies**: Highlights key engineering tenets (Architectural Elegance, Relentless Performance, Developer Empowerment).
* **Skills Matrix**: Categorized grid of technologies (Frontend, Backend, Architecture & System Design, DevOps & Cloud, Tools & Testing) with proficiency indicators.

## Architecture & Components
* Location: `frontend-web/src/features/about/` (rendered in `src/app/about/page.tsx`).
* Entity Type: `src/types/skill.ts`.
* Mock Data: `src/data/bio.ts`, `src/data/skills.ts`.

## UI Behaviour
* Categorized card containers with glowing indicator accents.
* Responsive multi-column layout with Framer Motion scroll reveals.
