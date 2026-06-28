# API Contract: Experience Service

## 1. Overview
* **Domain**: Career Experience Timeline
* **Base Path**: `/api/v1/experience`
* **Status**: Contract Defined (Backend Deferred)

---

## 2. Endpoints Specification

### 2.1 List Work Experiences
* **HTTP Method**: `GET`
* **Path**: `/api/v1/experience`
* **Authentication**: Public
* **Response `200 OK`**:
  ```json
  [
    {
      "id": "exp-1",
      "company": "TechCorp Global Solutions",
      "companyUrl": "https://example.com/techcorp",
      "location": "Ho Chi Minh City, Vietnam",
      "position": "Senior Software Architect & Lead",
      "employmentType": "Full-time",
      "startDate": "2022-03",
      "endDate": "Present",
      "current": true,
      "description": "Leading the enterprise engineering division...",
      "achievements": [
        "Spearheaded architectural transformation..."
      ],
      "technologiesUsed": ["Next.js", "TypeScript", "Kubernetes"]
    }
  ]
  ```
