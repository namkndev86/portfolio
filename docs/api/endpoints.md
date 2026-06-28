# API Design & Endpoints Guide

This document describes the API guidelines, response formats, and endpoint specifications for the Portfolio Platform.

## General Information
* **Base URL**: `/api/v1`
* **Content-Type**: `application/json`
* **Versioning**: Major versions are set in the URL path (`v1`).

---

## Response Formats

All successful endpoints return a standard envelope:

```json
{
  "success": true,
  "data": { ... }
}
```

---

## Phase 1 Portfolio API Endpoints

### 1. Projects API (`/api/v1/projects`)

#### `GET /api/v1/projects`
Retrieves a list of projects with optional query parameters.
* **Query Parameters**:
  * `category` (optional, string): Filter by category (`Enterprise`, `Fullstack`, `Frontend`, `Personal`).
  * `search` (optional, string): Search string matching title or tech stack.
* **Response `200 OK`**:
```json
{
  "success": true,
  "data": [
    {
      "id": "proj-1",
      "slug": "enterprise-cloud-platform",
      "title": "Enterprise Multi-Tenant Cloud Platform",
      "tagline": "High-throughput microservices ecosystem powering corporate operations.",
      "category": "Enterprise",
      "featured": true,
      "coverImage": "https://images.unsplash.com/...",
      "techStack": ["Next.js", "TypeScript", "Go", "Kubernetes", "Kafka"],
      "startDate": "2023-01",
      "endDate": "2024-03"
    }
  ]
}
```

#### `GET /api/v1/projects/:slug`
Retrieves full project case study by slug.
* **Response `200 OK`**: Returns single project object including `responsibilities`, `challengesAndSolutions`, `architecture`, and `lessonsLearned`.
* **Response `404 Not Found`**: Returns error envelope if slug does not exist.

---

### 2. Profile API (`/api/v1/profile`)

#### `GET /api/v1/profile`
Retrieves developer biographical details, core philosophies, education, and technical skills taxonomy.
* **Response `200 OK`**:
```json
{
  "success": true,
  "data": {
    "name": "Nam K. Nguyen",
    "title": "Senior Software Architect & Fullstack Engineer",
    "location": "Ho Chi Minh City, Vietnam",
    "yearsOfExperience": 8,
    "shortIntroduction": "I construct high-throughput digital systems...",
    "coreValues": [ ... ],
    "skills": [ ... ]
  }
}
```

---

### 3. Experience API (`/api/v1/experience`)

#### `GET /api/v1/experience`
Retrieves chronological career timeline events and achievements.
* **Response `200 OK`**: Returns array of experience objects sorted by date.

---

### 4. Contact API (`/api/v1/contact`)

#### `POST /api/v1/contact`
Submits a contact inquiry.
* **Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "System Consultation",
  "message": "I would like to discuss..."
}
```
* **Response `201 Created`**: Returns `{ "success": true, "message": "Inquiry received" }`.

---

## Swagger OpenAPI UI
When running the NestJS API service locally in development mode, interactive Swagger documentation is hosted at:
`http://localhost:5000/docs`
