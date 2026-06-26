# Feature Spec: Portfolio

## Purpose
Displays developer profile details, educational history, work experience, and tech stacks to prospective clients and recruiters.

## Functional Requirements
* Fetch and render biography text blocks, education chronologies, and work milestones.
* Group and organize technical skills into structured domains (e.g. Frontend, Backend, Devops, Core).

## APIs
* `GET /api/v1/profile`: Retrieves biography details.
* `GET /api/v1/profile/timeline`: Retrieves chronological list of education and experiences.
* `GET /api/v1/profile/skills`: Retrieves taxonomy of skill nodes.
* `PUT /api/v1/profile` (Admin): Update biography text.
* `POST /api/v1/profile/timeline` (Admin): Add work/education events.

## UI Behaviour
* Display biographical information with an interactive 3D layout using Framer Motion.
* Timeline is render-optimized, using lazy list rendering (virtual scroll) if the list exceeds 50 entries.
* Interactive skills graph: visual representations showing proficiency level upon hover.

## Business Rules
* Profiling data is heavily cached on Redis (cache lifetime 24 hours).
* Any admin update to profile, skills, or timeline must immediately purge the corresponding cache namespace in Redis.

## Dependencies
* Next.js, Framer Motion
* Zustand (managing timeline filters)
* Prisma & PostgreSQL (storing core profile schemas)

## Future Improvements
* Resume generation endpoint (`GET /api/v1/profile/resume` returning dynamically generated PDF).
