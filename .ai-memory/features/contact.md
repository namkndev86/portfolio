# Feature Spec: Contact

## Purpose
Enables users to send inquiries, feedback, and career opportunities to the platform owner.

## Functional Requirements
* User contact submission form validation.
* Spam filtration mechanism (reCAPTCHA, Cloudflare Turnstile).
* Storage of submitted messages.
* Immediate email/Slack dispatch on submission.

## APIs
* `POST /api/v1/contact`: Submit message payload (Name, Email, Message, Token).
* `GET /api/v1/contact/messages` (Admin): Paginated dashboard view of submissions.

## UI Behaviour
* Form submission uses optimistic state showing progress animations.
* Success toasts are displayed on submission, disabling the button to prevent duplicate clicks.

## Business Rules
* Message payloads are written to PostgreSQL.
* Rate limits of 3 contacts per hour per IP.
* Message lengths are capped at 5000 characters.

## Dependencies
* Prisma & PostgreSQL.
* Nodemailer / SendGrid for email dispatch, or Axios for Slack Webhooks.

## Future Improvements
* AI-based intent categorization: tags incoming emails as "Job Offer", "General Inquiry", "Spam", or "Bug Report".
