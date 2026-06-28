# API Contract: Projects Service

## 1. Overview
* **Domain**: Projects & Engineering Showcase
* **Base Path**: `/api/v1/projects`
* **Status**: Contract Defined (Backend Deferred)

---

## 2. Endpoints Specification

### 2.1 List Projects
* **HTTP Method**: `GET`
* **Path**: `/api/v1/projects`
* **Authentication**: Optional / Public
* **Query Parameters**:
  * `category` (string, optional): Filter by category (`Enterprise`, `Fullstack`, `Frontend`, `Personal`).
  * `search` (string, optional): Search query matching title, tagline, or tech stack.
  * `page` (number, optional, default: 1): Page number.
  * `limit` (number, optional, default: 10): Items per page.
* **Response `200 OK`**:
  ```json
  [
    {
      "id": "proj-1",
      "slug": "enterprise-cloud-platform",
      "title": "Enterprise Multi-Tenant Cloud Platform",
      "tagline": "High-throughput microservices ecosystem powering distributed corporate operations.",
      "description": "A resilient multi-tenant cloud SaaS infrastructure...",
      "category": "Enterprise",
      "featured": true,
      "coverImage": "https://images.unsplash.com/...",
      "techStack": ["Next.js", "TypeScript", "Node.js", "Kubernetes"],
      "role": "Lead Software Architect",
      "responsibilities": ["Architected micro-frontend client..."],
      "challengesAndSolutions": [
        {
          "challenge": "High latency in cross-region database queries...",
          "solution": "Implemented distributed Redis cluster caching..."
        }
      ],
      "architecture": {
        "summary": "Event-driven microservices architecture...",
        "keyComponents": ["API Gateway", "Event Ingestion Cluster"]
      },
      "lessonsLearned": ["Decoupling domain logic..."],
      "liveDemoUrl": "https://example.com/cloud-demo",
      "githubUrl": "https://github.com/namkndev86/enterprise-cloud",
      "startDate": "2023-01",
      "endDate": "2024-03",
      "order": 1
    }
  ]
  ```

### 2.2 Get Project by Slug
* **HTTP Method**: `GET`
* **Path**: `/api/v1/projects/:slug`
* **Response `200 OK`**: Single `ProjectResponseDto` object.
* **Response `404 Not Found`**:
  ```json
  {
    "statusCode": 404,
    "errorCode": "PROJECT_NOT_FOUND",
    "message": "Project with slug 'invalid-slug' was not found",
    "timestamp": "2026-06-28T14:30:00.000Z",
    "path": "/api/v1/projects/invalid-slug"
  }
  ```
