# System Design & Architecture

This document outlines the detailed system design, routing mechanics, and database design.

## Network Topology & Request Life Cycle

All incoming public traffic enters the platform via Port 80 (redirected to 443 in production) on the **Nginx** gateway container.

```
                  +-----------------------+
                  |  Client Browser       |
                  +-----------+-----------+
                              |
                              | HTTP/HTTPS
                              v
                  +-----------+-----------+
                  |      Nginx Gateway    |
                  +-----+-----------+-----+
                        |           |
             /api/*     |           |  /*
            (upstream)  v           v (upstream)
      +-----------------+--+     +--+-----------------+
      | NestJS Backend     |     | Next.js Frontend   |
      | (Port 5000)        |     | (Port 3000)        |
      +---------+----------+     +--------------------+
                |
                +---------------------+-------------------+
                | (Prisma)            | (Mongoose)        | (Redis Client)
                v                     v                   v
      +---------+----------+     +----+---------------+  +----+---------------+
      | PostgreSQL DB      |     | MongoDB Store      |  | Redis Cache        |
      | (Port 5432)        |     | (Port 27017)       |  | (Port 6379)        |
      +--------------------+     +--------------------+  +--------------------+
```

1. **Static Assets / Pages**: Routed directly to the Next.js production server.
2. **API Requests**: Prefixed with `/api/*` and routed to the NestJS cluster.
3. **Internal Cache Check**: The NestJS server intercepts the request and queries the Redis cache before initiating a database read.

---

## Database Schema Strategy

The database is divided across relational and document stores to optimize query latency and operational complexity.

### 1. PostgreSQL Relational Schemas (via Prisma)
Structured data is stored inside PostgreSQL, enforcing strong constraints, primary/foreign keys, and transactional integrity.

* **User**: Admins and staff accounts.
* **Profile**: Core bio description, name, social links, contact coordinates.
* **TimelineEvent**: Work experiences and education milestones.
* **Project**: Showcase items, metadata, descriptions.

### 2. MongoDB Document Schemas (via Mongoose)
Unstructured or semi-structured data logs are stored inside MongoDB to allow write-optimized throughput and schema fluidity.

* **BlogPost**: Stored as rich articles with variable custom MDX properties and comments.
* **AnalyticsEvent**: Tracks telemetry (e.g. clicks, viewport sizes, bounce metrics) without schema migrations on every new tracker addition.

### 3. Caching Strategy (via Redis)
* **API Results Cache**: Standard REST endpoints like `GET /api/v1/projects` cache their serialised JSON output in Redis.
* **Cache Eviction**: Write requests (e.g., `POST`, `PUT`, `DELETE` operations) targeting specific tables trigger a pub/sub event or direct command to purge the relevant cache keys.
