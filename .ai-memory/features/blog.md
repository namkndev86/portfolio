# Feature Spec: Blog

## Purpose
Acts as a medium for publishing technical articles, guides, and updates.

## Functional Requirements
* Rich-text editing or MDX syntax parsing.
* Article categorization and tag associations.
* Reading time calculation.
* Admin drafting, publishing, and scheduling engine.

## APIs
* `GET /api/v1/blog`: Paginated articles list.
* `GET /api/v1/blog/:slug`: Fetch full blog post document.
* `POST /api/v1/blog` (Admin): Create post.
* `PUT /api/v1/blog/:id` (Admin): Modify content or publication status.
* `DELETE /api/v1/blog/:id` (Admin): Delete article.

## UI Behaviour
* Syntax highlighting for code blocks inside blog posts.
* Floating table of contents generated dynamically from markdown headings.
* Social media sharing link controls.

## Business Rules
* Blog documents are saved in MongoDB to support rich schemas and unstructured JSON blocks.
* Blog search indices must be refreshed on post updates.
* Drafts are hidden from public API queries.

## Dependencies
* MongoDB & Mongoose (data persistence)
* `mdx-bundler` or `next-mdx-remote` for rendering MDX.
* `prismjs` or `shiki` for syntax highlighting.

## Future Improvements
* Newsletter sign-up integration.
* Interactive comment sections using database integrations or third-party web components.
