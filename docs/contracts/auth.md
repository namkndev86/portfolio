# API Contract: Authentication Service

## 1. Overview
* **Domain**: JWT Authentication & Session Tokens
* **Base Path**: `/api/v1/auth`
* **Status**: Contract Defined

---

## 2. Endpoints Specification

### 2.1 User Login
* **HTTP Method**: `POST`
* **Path**: `/api/v1/auth/login`
* **Request Body (`LoginDto`)**:
  ```json
  {
    "email": "admin@portfolio.dev",
    "password": "SecurePassword123!"
  }
  ```
* **Response `200 OK`**:
  ```json
  {
    "accessToken": "eyJhbGciOi...",
    "refreshToken": "dGhpcy1pcy1hLXJlZnJlc2g...",
    "user": {
      "id": "usr-1",
      "email": "admin@portfolio.dev",
      "role": "ADMIN"
    }
  }
  ```

### 2.2 Refresh Token Renewal
* **HTTP Method**: `POST`
* **Path**: `/api/v1/auth/refresh`
* **Request Body (`RefreshTokenDto`)**:
  ```json
  {
    "refreshToken": "dGhpcy1pcy1hLXJlZnJlc2g..."
  }
  ```
* **Response `200 OK`**:
  ```json
  {
    "accessToken": "eyJhbGciOi...new",
    "refreshToken": "dGhpcy1pcy1hLXJlZnJlc2g...new"
  }
  ```
