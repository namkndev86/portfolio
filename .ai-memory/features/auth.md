# Feature Spec: Authentication

## Purpose
Secures administrative access to the platform, enabling content management, analytics viewing, and database configuration.

## Functional Requirements
* Administrator sign-in using secure email and password credentials.
* JWT generation upon successful login.
* Redis-based session token storage to support immediate sign-out / invalidation.
* Route protection for all administrative API endpoints and pages.

## APIs
* `POST /api/v1/auth/login`: Admin credential check. Returns access token (JWT) and refresh token.
* `POST /api/v1/auth/logout`: Revokes the user token in Redis.
* `POST /api/v1/auth/refresh`: Refresh expired access token.
* `GET /api/v1/auth/me`: Retrieves current session data.

## UI Behaviour
* Admin login page is hidden under `/admin/login`.
* Display interactive validation warnings for invalid credentials.
* Keep admin logged in using refresh tokens with a silent background fetch.
* Clear dashboard state on sign-out and redirect to `/`.

## Business Rules
* Passwords must be hashed using bcrypt (rounds = 10 or 12).
* Failed login attempts are throttled via Redis rate-limiting (max 5 attempts in 15 minutes per IP address).
* JWT expiration: Access token (15 minutes), Refresh token (7 days).

## Dependencies
* NestJS `@nestjs/jwt`, `passport-jwt`, `bcrypt`
* Prisma Client (fetching admin credentials from Postgres)
* Redis (storing blacklisted/revoked tokens)

## Future Improvements
* Multi-factor Authentication (MFA) via TOTP.
* OAuth2 integration (Google/GitHub single sign-on).
