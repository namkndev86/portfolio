# API Design & Endpoints Guide

This document describes the API guidelines, response formats, and error standards for the Portfolio Platform.

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

Paginated collections return pagination metadata:

```json
{
  "success": true,
  "data": [ ... ],
  "meta": {
    "page": 1,
    "limit": 10,
    "totalCount": 42,
    "totalPages": 5
  }
}
```

---

## Error Handling

Standardized HTTP error envelopes are returned for failed requests:

```json
{
  "success": false,
  "error": {
    "code": "BAD_REQUEST",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "issue": "Must be a valid email address"
      }
    ]
  }
}
```

### Common HTTP Status Codes
* `200 OK`: Request succeeded.
* `201 Created`: Resource successfully created.
* `202 Accepted`: Task accepted for background processing.
* `400 Bad Request`: Input payload validation failure.
* `401 Unauthorized`: Authentication missing or token expired.
* `403 Forbidden`: Authenticated user lacks roles.
* `404 Not Found`: Target resource not found.
* `429 Too Many Requests`: Rate limit exceeded.
* `500 Internal Server Error`: Server exception.

---

## Swagger OpenAPI UI
When running the NestJS API service locally in development mode, the interactive documentation is available at:
`http://localhost:5000/docs`
