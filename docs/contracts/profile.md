# API Contract: Profile Service

## 1. Overview
* **Domain**: Profile & Skill Matrix
* **Base Path**: `/api/v1/profile`
* **Status**: Contract Defined (Backend Deferred)

---

## 2. Endpoints Specification

### 2.1 Get User Profile
* **HTTP Method**: `GET`
* **Path**: `/api/v1/profile`
* **Authentication**: Public
* **Response `200 OK`**:
  ```json
  {
    "name": "Nam K. Nguyen",
    "role": "Senior Software Architect & Fullstack Engineer",
    "bio": "I construct high-throughput digital systems...",
    "url": "https://namnguyen.dev",
    "github": "https://github.com/namkndev86",
    "linkedin": "https://linkedin.com",
    "twitter": "https://twitter.com",
    "skills": [
      {
        "id": "sk-1",
        "name": "React & React 19",
        "category": "Frontend",
        "iconName": "Code2",
        "proficiency": 98,
        "featured": true
      }
    ]
  }
  ```
