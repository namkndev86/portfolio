# Portfolio Platform Documentation

Welcome to the enterprise documentation portal for the Portfolio Platform. This directory contains detailed specifications, guidelines, and manuals designed to onboard new engineers, support active operations, and record major architectural changes.

## Directory Structure

```
docs/
├── README.md               # You are here
│
├── architecture/           # Deep dives into system topology and data schemas
│   └── system_design.md
│
├── api/                    # OpenAPI specs and endpoint guidelines
│   └── endpoints.md
│
├── deployment/             # Deployment configurations (Swarm, K8s, Cloud)
│   └── docker_swarm_k8s.md
│
├── adr/                    # Architectual Decision Records
│   └── index.md
│
├── runbooks/               # Operational guides for handling incidents
│   └── disaster_recovery.md
│
└── onboarding/             # Quick start guides for new engineers
    └── local_setup.md
```

## Documentation Guidelines
* **Accuracy**: Always verify document changes against current implementations.
* **Format**: All documents must be written in Markdown. Use diagrams (Mermaid) where appropriate.
* **Review**: Any changes to architecture or API endpoints must be peer-reviewed and merge-requested.
