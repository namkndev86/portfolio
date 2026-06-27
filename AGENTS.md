# Portfolio Platform Agent Instructions

## Mandatory Memory Workflow

Before performing any task:

1. Read:
   - .ai-memory/architecture.md
   - .ai-memory/requirements.md
   - .ai-memory/decisions.md
   - .ai-memory/conventions.md

2. Read related feature documents:
   - .ai-memory/features/\*

3. Treat memory as source of truth.

4. If requirements conflict:
   architecture.md

   > decisions.md
   > requirements.md
   > conventions.md
   > feature docs
   > session logs

5. After task completion:
   - Update memory files
   - Record ADR decisions
   - Create session log

6. Never delete historical records.

Failure to follow this workflow is considered a project bug.

# Memory Ownership Rules

Platform-wide information:

.ai-memory/

Contains:

- system architecture
- cross-service decisions
- shared conventions
- roadmap
- platform ADRs

---

Frontend-specific information:

frontend-web/.ai-memory/

Contains:

- frontend architecture
- frontend decisions
- frontend conventions
- frontend features
- frontend session logs

---

Backend-specific information:

backend-api/.ai-memory/

Contains:

- backend architecture
- backend decisions
- backend APIs
- backend session logs

---

Infra-specific information:

infra/.ai-memory/

Contains:

- deployment
- CI/CD
- Docker
- Kubernetes
- monitoring
- infrastructure session logs

---

Documentation-specific information:

docs/.ai-memory/

Contains:

- documentation decisions
- documentation session logs

---

Memory Update Rule

When working inside a service:

- frontend-web/\* → update frontend-web/.ai-memory
- backend-api/\* → update backend-api/.ai-memory
- infra/\* → update infra/.ai-memory
- docs/\* → update docs/.ai-memory

Only update root .ai-memory when changes affect multiple services or platform architecture.

## Phase Execution Rule

A phase is considered complete only when all affected services are completed:

- frontend-web
- backend-api
- infra
- docs

Do not mark a phase as completed when only one service has been implemented.

Each phase must be synchronized across all services.
