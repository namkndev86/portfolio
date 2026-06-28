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

# Integration & Phase Completion Rules

## Service Completion vs Phase Completion

Completing implementation in individual services does not mean a phase is complete.

A phase must progress through the following stages:

### 1. Service Implementation Complete

All affected services for the phase have completed their individual implementation:

- frontend-web
- backend-api
- infra
- docs

At this stage, services may still be isolated and not yet connected.

Valid status:

- SERVICE IMPLEMENTATION COMPLETE

---

### 2. Integration Complete

All affected services must be integrated and functioning together.

Requirements:

- Frontend is connected to backend APIs.
- Backend is connected to required databases.
- Backend is connected to required external services.
- Shared API contracts are validated.
- Authentication and authorization flows work end-to-end.
- Environment variables are documented and configured.
- Docker Compose environment starts successfully.
- Core business flows work across service boundaries.
- No required feature relies on mock data.

Valid statuses:

- READY FOR INTEGRATION
- INTEGRATION IN PROGRESS
- INTEGRATION COMPLETE

---

### 3. Verification Complete

Integrated functionality must be verified.

Requirements:

- Smoke tests pass.
- Critical user journeys are manually validated.
- Documentation is updated.
- Memory files are updated.
- Session logs are created.
- No blocking issues remain.

Valid status:

- READY FOR VERIFICATION

---

## Phase Completion Criteria

A phase may only be marked as:

PHASE COMPLETED

when:

- Service Implementation Complete
- Integration Complete
- Verification Complete

have all been satisfied.

Never mark a phase as completed if any requirement from these stages is missing.

---

## Mock Data Rule

Mock data is allowed during development.

However:

- Mock APIs must be clearly identified.
- Mock implementations must be isolated from production integrations.
- Mock data may only be used during service implementation.
- Mock integrations must be replaced by real integrations before phase completion.

Allowed statuses:

- UI COMPLETE
- FRONTEND COMPLETE
- SERVICE IMPLEMENTATION COMPLETE

Not allowed:

- INTEGRATION COMPLETE
- PHASE COMPLETED

A phase cannot be completed while any required feature still depends on mock data.

---

## Phase Synchronization Rule

A phase is considered complete only when all affected services are synchronized:

- frontend-web
- backend-api
- infra
- docs

Synchronization includes:

- implementation
- integration
- verification
- documentation
- memory updates

Partial completion of a single service does not constitute phase completion.

---

## Agent Enforcement Rule

The agent must never report:

- "Phase Complete"
- "Phase Finished"
- "Phase Delivered"

unless all implementation, integration, verification, documentation, and memory requirements have been satisfied.

If implementation is finished but integration has not started:

Status = READY FOR INTEGRATION

If integration is finished but verification has not started:

Status = READY FOR VERIFICATION

Only after successful verification:

Status = PHASE COMPLETED

# Phase-First Development Rule

The project is developed in phases.

Current phase:
Phase 1 - Foundation Architecture

Before implementing any feature:

1. Read all files inside .ai-memory/
2. Determine the current project phase
3. Follow the scope of the current phase only
4. Do not implement future phase features
5. Propose architecture before implementation
6. Update project memory after each completed task

During Phase 1:

Allowed:

- Project structure
- Architecture design
- Design system foundation
- Shared components
- API layer
- State management
- Authentication framework
- Authorization framework
- Error handling
- Logging
- Configuration management
- Infrastructure setup
- CI/CD setup
- Database foundation

Forbidden:

- Business modules
- Project management module
- Blog module
- Course module
- Contact module
- Any domain-specific feature

The goal of Phase 1 is to build a reusable enterprise-grade platform foundation.

Phase Completion Rule

A phase is not completed until:

- Architecture is finalized
- Folder structure is finalized
- Coding conventions are finalized
- Shared foundation is implemented
- Documentation is updated
- Memory files are updated

Only after all requirements are satisfied may the project move to the next phase.

Implementation plans belong in docs/implementation-plans/.

Technical walkthroughs belong in docs/walkthroughs/.

The agent must automatically create or update these files whenever a task introduces new architecture, implementation strategy, or feature behavior.
