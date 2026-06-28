# Feature Spec: Career Experience Timeline

## Purpose
Renders a detailed chronological record of software engineering roles, company positions, achievements, and technology stacks.

## Functional Requirements
* **Chronological Timeline**: Vertical timeline rendering career milestones with active indicator nodes.
* **Position Details**: Displays role title, company name, external company link, employment type (Full-time/Part-time/Contract), date range, and location.
* **Bullet Achievements**: Detailed list of technical impact metrics and team achievements for each role.
* **Tech Tags**: Badges representing technologies utilized in each role.

## Architecture & Components
* Location: `frontend-web/src/features/experience/` (rendered in `src/app/experience/page.tsx`).
* Entity Type: `src/types/experience.ts`.
* Mock Data: `src/data/experiences.ts`.

## UI Behaviour
* Hover glow and scale animations on timeline marker nodes.
* Responsive card layout with clean contrast styling.
