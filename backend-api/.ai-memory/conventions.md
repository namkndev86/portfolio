# Backend API Workspace Memory

## Responsibility
Develop, test, and expose high-throughput REST endpoints, handle authorization tokens, perform transactional PostgreSQL operations, write logs to MongoDB, and cache objects on Redis.

## Backend Architecture Conventions
* **Controller Isolation**: Keep routes and DTO bindings in the controller level. No direct DB references in controllers.
* **Service Patterns**: Services implement the core business rules. Expose interfaces when writing adapters for external integrations.
* **Prisma & Postgres**: Schema migrations must be ran before container launch. Use transaction operations where modifications hit multi-tables.
* **MongoDB & Mongoose**: Map schemas to strict interfaces and export models through dedicated modules.
* **Exception Filters**: Custom exceptions must be mapped to corporate error structures (defined in `docs/api/endpoints.md`).
