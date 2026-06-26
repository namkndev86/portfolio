# Feature Spec: Projects

## Purpose
Showcases case studies of past work, complete with metadata, technical specs, images, links, and code blocks.

## Functional Requirements
* Paginated and filterable gallery showing projects.
* Rich details view featuring markdown case studies.
* Relational tags allowing users to find related projects.
* Admin panel to create, read, update, and delete projects.

## APIs
* `GET /api/v1/projects`: Paginated listing of projects, filterable by tag or category.
* `GET /api/v1/projects/:slug`: Retrieves case study details by slug.
* `POST /api/v1/projects` (Admin): Create project metadata and case study.
* `PUT /api/v1/projects/:id` (Admin): Update details.
* `DELETE /api/v1/projects/:id` (Admin): Remove project.

## UI Behaviour
* Dynamic search input with 300ms debounce on keystroke.
* Smooth card zoom animations on hover.
* Modal or separate sub-pages for project case studies using Next.js parallel/intercepting routes if applicable.

## Business Rules
* Project slugs must be unique and URL-safe, auto-generated from titles.
* Draft projects must not be visible to public requests (queries check `published = true`).

## Dependencies
* Next.js, Framer Motion
* React Query (caching list results on frontend)
* Prisma & PostgreSQL (relational schemas)
* AWS S3 / Cloudinary (or local Docker volume storage) for hosting images.

## Future Improvements
* Automated GitHub repository syncing: updates project tags and star-counts dynamically using webhooks.
