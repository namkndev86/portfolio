import { Project } from '@/types/project';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    slug: 'enterprise-cloud-platform',
    title: 'Enterprise Multi-Tenant Cloud Platform',
    tagline: 'High-throughput microservices ecosystem powering distributed corporate operations.',
    description: 'A resilient multi-tenant cloud SaaS infrastructure engineered to handle real-time financial telemetry, automated compliance reporting, and distributed workflow authorization across global offices.',
    category: 'Enterprise',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'Go', 'Kubernetes', 'Apache Kafka', 'PostgreSQL', 'Redis'],
    role: 'Lead Software Architect',
    responsibilities: [
      'Architected micro-frontend decoupled client and scalable backend API gateways.',
      'Designed event-driven streaming pipelines processing over 50k events per second.',
      'Implemented zero-trust RBAC authorization and automated GDPR compliance auditing.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'High latency in cross-region database queries causing authorization delays.',
        solution: 'Implemented distributed Redis cluster caching with stale-while-revalidate strategy and localized read-replicas.'
      },
      {
        challenge: 'Complexity in managing multi-tenant state isolation across frontend micro-apps.',
        solution: 'Established unified atomic state synchronization protocols and dynamic schema namespacing.'
      }
    ],
    architecture: {
      summary: 'Event-driven microservices architecture utilizing Kafka queues, gRPC internal protocols, and Next.js edge-rendered client dashboards.',
      keyComponents: ['API Gateway', 'Event Ingestion Cluster', 'RBAC Security Service', 'Analytical Warehouse']
    },
    lessonsLearned: [
      'Decoupling domain logic from UI framework lifecycles greatly improved long-term maintainability.',
      'Proactive telemetry and distributed tracing (OpenTelemetry) are essential for identifying bottlenecks in async event processing.'
    ],
    liveDemoUrl: 'https://example.com/cloud-demo',
    githubUrl: 'https://github.com/namkndev86/enterprise-cloud',
    startDate: '2023-01',
    endDate: '2024-03',
    order: 1
  },
  {
    id: 'proj-2',
    slug: 'developer-learning-hub',
    title: 'Interactive Developer Learning Ecosystem',
    tagline: 'Fullstack educational web platform with live code compilation & collaborative sandboxes.',
    description: 'An interactive learning workspace featuring real-time collaborative coding, step-by-step technical roadmaps, and automated code evaluation pipelines.',
    category: 'Fullstack',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'Next.js', 'TailwindCSS', 'WebSockets', 'Docker', 'Prisma', 'PostgreSQL'],
    role: 'Fullstack Architect & Creator',
    responsibilities: [
      'Built interactive code editor component with syntax highlighting and dynamic autocompletion.',
      'Engineered sandboxed Docker execution runners for safe execution of untrusted user code.',
      'Developed real-time WebSocket messaging for pair programming sessions.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Preventing malicious code execution in user submitted scripts.',
        solution: 'Containerized execution using isolated Docker environments with CPU/memory limits and disabled network egress.'
      }
    ],
    architecture: {
      summary: 'Next.js client interfacing via WebSockets to a pool of isolated execution pods orchestrating container runtimes.',
      keyComponents: ['Web Client', 'Sandbox Execution Pool', 'WebSocket Dispatcher', 'Progress Database']
    },
    lessonsLearned: [
      'WebAssembly and isolated container execution are complementary tools for browser and server safety.',
      'Smooth optimistic UI updates significantly boost user satisfaction in learning exercises.'
    ],
    liveDemoUrl: 'https://example.com/learning-hub',
    githubUrl: 'https://github.com/namkndev86/learning-hub',
    startDate: '2023-08',
    endDate: '2024-01',
    order: 2
  },
  {
    id: 'proj-3',
    slug: 'design-system-core',
    title: 'Next-Gen Glassmorphic Design System',
    tagline: 'Accessible, component-driven UI library tailored for high-density dashboards.',
    description: 'A comprehensive modern React component library designed with WCAG AA accessibility compliance, theme customization support, and physics-based fluid micro-animations.',
    category: 'Frontend',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Radix UI', 'Storybook'],
    role: 'Principal Frontend Engineer',
    responsibilities: [
      'Developed 40+ accessible headless UI primitives built upon Radix UI primitives.',
      'Crafted design token system supporting multi-theme switching (Dark, Light, High Contrast).',
      'Created automated visual regression testing pipeline using Percy and Storybook.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Maintaining consistent 60fps frame rates during complex Framer Motion transitions.',
        solution: 'Utilized hardware-accelerated CSS transforms and optimized component rerender boundaries.'
      }
    ],
    architecture: {
      summary: 'Atomic design architecture separated into Tokens, Primitives, Molecules, and Templates with Storybook documentation.',
      keyComponents: ['Design Tokens', 'Headless Primitives', 'Motion Library', 'Documentation Portal']
    },
    lessonsLearned: [
      'Strict TypeScript prop constraints prevent misuse across multi-engineering teams.',
      'Building with accessibility in mind from day one requires significantly less refactoring later.'
    ],
    liveDemoUrl: 'https://example.com/design-system',
    githubUrl: 'https://github.com/namkndev86/design-system-core',
    startDate: '2022-05',
    endDate: '2022-12',
    order: 3
  },
  {
    id: 'proj-4',
    slug: 'personal-developer-platform',
    title: 'Personal Developer Platform & Ecosystem',
    tagline: 'Modern extensible personal brand website designed for scalable future expansion.',
    description: 'The foundation platform built with Next.js App Router, feature-driven architecture, and rich aesthetic showcase components.',
    category: 'Personal',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    techStack: ['Next.js', 'React 19', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Zustand'],
    role: 'Creator & Architect',
    responsibilities: [
      'Engineered scalable modular architecture for multi-phase expansion.',
      'Designed responsive glassmorphic UI layout with dark/light themes.',
      'Implemented SEO schemas and dynamic Open Graph image routes.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Designing a folder structure that supports future CMS and MDX integration without code rot.',
        solution: 'Implemented Feature-Driven Architecture separating domains (portfolio, blog, courses) into modular packages.'
      }
    ],
    lessonsLearned: [
      'Planning for multi-phase expansion upfront clarifies data contracts and component boundaries.'
    ],
    githubUrl: 'https://github.com/namkndev86/portfolio',
    startDate: '2024-04',
    endDate: 'Present',
    order: 4
  }
];
