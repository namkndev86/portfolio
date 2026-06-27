# Feature Spec: Online Resume & PDF Export

## Purpose
Provides a clean, digital Curriculum Vitae and printable resume for recruiters and enterprise clients.

## Functional Requirements
* **Structured Document View**: Displays executive summary, professional experience history, and skills taxonomy in a clean document layout.
* **Print Optimization**: Configured `@media print` rules hiding navigation bars and adjusting colors for clean printer output.
* **PDF Download Action**: Single-click trigger activating system print / PDF export dialog.

## Architecture & Components
* Location: `frontend-web/src/features/resume/`
* Components: `ResumeViewer.tsx`.
* Page Route: `frontend-web/src/app/resume/page.tsx`.

## UI Behaviour
* Clean document card container on screen; full-bleed clean white document when printed.
