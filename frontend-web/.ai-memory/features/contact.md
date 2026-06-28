# Feature Spec: Contact & Strategic Collaboration

## Purpose
Enables prospective clients, recruiters, and collaborators to submit direct inquiries and access social channels.

## Functional Requirements
* **Contact Form**: Interactive form with real-time Zod validation for Name, Email, Subject, and Message.
* **State Feedback**: Displays submitting spinner, success banner on completion, and inline field error hints.
* **Serverless Route Handler (`/api/contact`)**: POST endpoint verifying request payload integrity.
* **Direct Channels & Socials**: Displays direct email, location/timezone (UTC+7), response SLA (< 24 hrs), and links to GitHub, LinkedIn, and Twitter.

## Architecture & Components
* Location: `frontend-web/src/features/contact/`
* Components: `ContactForm.tsx`.
* Page Route: `frontend-web/src/app/contact/page.tsx`.
* API Route: `frontend-web/src/app/api/contact/route.ts`.
* Entity Type: `src/types/contact.ts`.

## UI Behaviour
* Smooth state transitions between idle, submitting, success, and error.
* Form reset capability after successful dispatch.

## Dependencies
* React Hook Form + `@hookform/resolvers/zod` + Zod
* Next.js Serverless Route Handlers
