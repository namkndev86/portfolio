# System Design & Architecture Overview

This document provides system design architecture diagrams and sequence flows for the Portfolio Platform.

## High-Level System Topology

```mermaid
graph TD
    User([Client Web Browser]) -->|HTTP/HTTPS Port 80/443| Gateway[Nginx Edge Proxy]
    Gateway -->|/api/v1/*| API[NestJS Backend API Service: 5000]
    Gateway -->|/*| Web[Next.js Frontend Web Service: 3000]
    
    API -->|Prisma Client| Postgres[(PostgreSQL Relational DB)]
    API -->|Redis Client| Redis[(Redis Cache Store)]
```

## Phase 1 Sequence Flow: Client Data Fetching & Gateway Routing

```mermaid
sequenceDiagram
    autonumber
    actor User as Client Browser
    participant Nginx as Nginx Gateway (Port 80)
    participant NextJS as Frontend Web (Port 3000)
    participant NestJS as Backend API (Port 5000)
    participant Postgres as PostgreSQL Database

    User->>Nginx: GET /projects (Navigate to Projects Page)
    Nginx->>NextJS: Forward request to frontend_upstream
    NextJS-->>User: Render SSG HTML + React Client Hydration

    User->>Nginx: GET /api/v1/projects?category=Enterprise
    Nginx->>NestJS: Forward request to backend_upstream (/api/v1/*)
    NestJS->>Postgres: Query projects by category filter via Prisma
    Postgres-->>NestJS: Return project rows
    NestJS-->>Nginx: Return JSON { success: true, data: [...] }
    Nginx-->>User: JSON Response rendered in React UI grid
```

## Phase 1 Sequence Flow: Contact Inquiry Submission

```mermaid
sequenceDiagram
    autonumber
    actor User as Client Browser
    participant Nginx as Nginx Gateway
    participant NestJS as Backend API
    participant Postgres as PostgreSQL Database

    User->>Nginx: POST /api/v1/contact { name, email, subject, message }
    Nginx->>NestJS: Forward POST payload
    NestJS->>NestJS: Validate payload via ValidationPipe DTO
    NestJS->>Postgres: Insert record into ContactSubmission table
    Postgres-->>NestJS: Record created
    NestJS-->>Nginx: 201 Created { success: true, message: "Inquiry received" }
    Nginx-->>User: Success feedback displayed in UI
```
