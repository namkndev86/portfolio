# API Contract: Contact Service

## 1. Overview
* **Domain**: Inquiry & Contact Submissions
* **Base Path**: `/api/v1/contact`
* **Status**: Contract Defined (Backend Deferred)

---

## 2. Endpoints Specification

### 2.1 Submit Contact Inquiry
* **HTTP Method**: `POST`
* **Path**: `/api/v1/contact`
* **Authentication**: Public / Rate-Limited
* **Request Body (`CreateContactDto`)**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "System Architecture Consultation",
    "message": "We would like to consult on enterprise cloud migration."
  }
  ```
* **Validation Rules**:
  * `name`: string, min 2 chars.
  * `email`: string, valid email format.
  * `subject`: string, min 3 chars.
  * `message`: string, min 10 chars.
* **Response `201 Created`**:
  ```json
  {
    "success": true,
    "message": "Contact inquiry received successfully."
  }
  ```
* **Response `400 Bad Request`**:
  ```json
  {
    "statusCode": 400,
    "errorCode": "VALIDATION_FAILED",
    "message": ["email must be an email"],
    "timestamp": "2026-06-28T14:30:00.000Z",
    "path": "/api/v1/contact"
  }
  ```
