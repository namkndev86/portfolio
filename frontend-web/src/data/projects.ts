import { Project } from '@/types/project';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-vtracking',
    slug: 'vtracking-viettel',
    title: 'Vtracking Viettel — Realtime Vehicle Monitoring & Streaming System',
    tagline: 'GPS tracking and high-frequency online vehicle & video monitoring on digital maps.',
    description: 'VTracking is an enterprise vehicle tracking and online monitoring solution utilizing GPS technology, mobile data transmission, and Geographic Information Systems (GIS) to provide real-time vehicle tracking and camera monitoring on digital maps.',
    category: 'Enterprise',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    ],
    techStack: ['jQuery', 'Bootstrap', 'Twirl Template', 'Viettel Maps API', 'WebSocket', 'JSMpeg', 'Jessibuca', 'Go', 'PostgreSQL', 'MongoDB', 'Kafka', 'ClickHouse'],
    role: 'Frontend Developer (Onsite)',
    responsibilities: [
      'Owned the frontend implementation of live camera playback and stream controls, including video rendering, player interaction, and error handling for streaming states.',
      'Designed and maintained interactive UI components for monitoring screens, integrating Viettel Maps API, WebSocket-driven updates, and reusable UI modules.',
      'Built and optimized frontend logic for handling high-frequency vehicle and camera data updates, improving responsiveness under real-time operational conditions.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Maintaining fluid UI rendering and low latency when rendering multiple high-frequency camera streams and live telemetry overlays on digital maps.',
        solution: 'Leveraged lightweight video players (JSMpeg, Jessibuca) and custom WebSocket update batching to minimize main thread blocking during stream loading.'
      }
    ],
    architecture: {
      summary: 'High-frequency telemetry and video streaming architecture backed by Go microservices, Kafka message streaming, and ClickHouse analytical databases.',
      keyComponents: ['Viettel Maps Engine', 'WebSocket Telemetry Streamer', 'Camera Video Player Module', 'Alert & Event Manager']
    },
    lessonsLearned: [
      'Handling high-frequency realtime binary and JSON streams requires strict event throttling and memory-efficient DOM updates.'
    ],
    liveDemoUrl: 'https://vtracking.viettel.vn',
    githubUrl: 'https://github.com/namkndev86/vtracking-viettel-demo',
    startDate: '2026-01',
    endDate: 'Present',
    order: 1
  },
  {
    id: 'proj-mesx',
    slug: 'manufacturing-execution-system-mes-x',
    title: 'Manufacturing Execution System (MES-X)',
    tagline: 'Comprehensive manufacturing management ecosystem spanning MESCore, WMS-X, MMS-X, QMS-X, and PMS-X.',
    description: 'A enterprise-grade manufacturing management platform providing real-time visibility into shop floor execution, warehouse inventory management (WMS-X), quality management, and machine telemetry across industrial plants.',
    category: 'Enterprise',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'Redux', 'Redux-Saga', 'SWR', 'React Hook Form', 'Yup', 'Material UI', 'Recharts', 'React Virtuoso', 'NestJS', 'PostgreSQL', 'MongoDB', 'Kafka', 'Redis', 'ClickHouse'],
    role: 'Frontend Lead (MESCore & WMS-X)',
    responsibilities: [
      'Led frontend development for MESCORE and WMS-X modules, managing a team of 5 frontend engineers within a 15-member frontend department.',
      'Owned sprint planning, task estimation, work allocation, code reviews, and pull request governance to ensure delivery quality and timeline adherence.',
      'Designed and maintained frontend architecture for MESCORE and WMS-X, covering component hierarchy, routing strategy, state management, and shared utilities.',
      'Developed 25+ reusable UI components shared across 6 enterprise modules and virtualized rendering for 300,000+ data records.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Extreme UI lag when operators queried large inventory and production datasets containing over 300,000 active records.',
        solution: 'Implemented windowing and list virtualization using React Virtuoso alongside strategic memoization and debounced data fetching.'
      }
    ],
    architecture: {
      summary: 'Decoupled React micro-frontend architecture consuming NestJS REST microservices with Redis caching and Kafka event bus dispatchers.',
      keyComponents: ['MESCore Operations Hub', 'WMS-X Inventory Manager', 'Shared UI Design System', 'Analytics Dashboard']
    },
    lessonsLearned: [
      'Standardized reusable component systems across multi-module teams eliminate thousands of lines of duplicated code.'
    ],
    liveDemoUrl: 'https://vti-group.htm.vn/mes-x',
    githubUrl: 'https://github.com/namkndev86/mes-x-showcase',
    startDate: '2024-07',
    endDate: '2026-01',
    order: 2
  },
  {
    id: 'proj-vimc-eoffice',
    slug: 'vimc-e-office',
    title: 'VIMC E-Office Enterprise Document Management',
    tagline: 'Internal information and automated document workflow management system for Vietnam Maritime Corporation.',
    description: 'VIMC E-Office is the core enterprise portal powering internal document processing, task assignment workflows, electronic approval pipelines, and digital records management across VIMC corporate branches.',
    category: 'Enterprise',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'MobX React', 'Ant Design', 'Styled-Components', 'CKEditor 5', 'ExcelJS', 'Java (Spring Boot)', 'MySQL'],
    role: 'Fullstack Developer',
    responsibilities: [
      'Developed new pages and features for document workflows and approval systems using React, Ant Design, and MobX.',
      'Extended and maintained existing CKEditor 5 integrations, adding new functionalities and resolving bugs in document editing modules.',
      'Implemented Excel import/export features using ExcelJS to support document reporting and data operations.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Handling complex rich text document formatting and custom metadata tags inside enterprise approval workflows.',
        solution: 'Customized CKEditor 5 plugins and synchronized DOM states with MobX observables for real-time document validation.'
      }
    ],
    architecture: {
      summary: 'Spring Boot RESTful backend paired with MobX-driven React single page application and relational MySQL schema design.',
      keyComponents: ['Document Workflow Engine', 'Task Approval Module', 'Rich Text Editor Integration', 'Reporting Exporter']
    },
    lessonsLearned: [
      'Granular state management using MobX observables significantly simplifies complex form and editor state synchronization.'
    ],
    liveDemoUrl: 'https://vimc.co/e-office',
    githubUrl: 'https://github.com/namkndev86/vimc-eoffice-demo',
    startDate: '2022-10',
    endDate: '2024-05',
    order: 3
  },
  {
    id: 'proj-vimc-lines',
    slug: 'vimc-lines-logistics-platform',
    title: 'VIMC LINES Container Transportation & Supply Chain Platform',
    tagline: 'Integrated logistics, container vessel tracking, and port operations management portal.',
    description: 'VIMC LINES provides container transportation services, port operations, and integrated supply chain logistics. The platform manages container bookings, vessel tracking schedules, and shipping document generation.',
    category: 'Fullstack',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'MobX', 'Ant Design', 'React Query', 'Axios', 'i18next', 'Tiptap Editor', 'Node.js (Express)', 'Prisma ORM', 'PostgreSQL', 'MongoDB', 'Redis', 'Puppeteer', 'ExcelJS', 'Docx'],
    role: 'Fullstack Engineer',
    responsibilities: [
      'Contributed to developing pages for container tracking, vessel schedules, and logistics operations using React and React Query.',
      'Developed API endpoints using Express and Prisma ORM for booking management and container tracking features.',
      'Implemented shipping document generation (PDF/DOCX/XLSX) using Puppeteer, Docx, and ExcelJS alongside multilingual support.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Generating high-fidelity shipping bills of lading and container manifests server-side without formatting drift.',
        solution: 'Built server-side Puppeteer rendering templates paired with Docx and ExcelJS streaming buffers.'
      }
    ],
    architecture: {
      summary: 'Node.js Express microservice consuming Prisma ORM over PostgreSQL and Redis caching, serving localized React client dashboards.',
      keyComponents: ['Container Tracker', 'Booking Manager', 'Shipping Document Generator', 'i18n Localization Engine']
    },
    lessonsLearned: [
      'Prisma ORM combined with Redis caching provides an exceptionally developer-friendly and high-performance data pipeline.'
    ],
    liveDemoUrl: 'https://vimclines.com',
    githubUrl: 'https://github.com/namkndev86/vimc-lines-demo',
    startDate: '2023-01',
    endDate: '2024-05',
    order: 4
  },
  {
    id: 'proj-samnotes',
    slug: 'samnotes-workspace',
    title: 'SamNotes Interactive Workspace App',
    tagline: 'Agile web application for structured note management, ideas, and task organization.',
    description: 'SamNotes is a responsive web application built to organize technical notes, personal ideas, and daily task workflows with anytime, anywhere cloud access.',
    category: 'Fullstack',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Ant Design', 'Python (Flask)', 'MySQL'],
    role: 'Intern Next.js Developer',
    responsibilities: [
      'Developed core note management features (list, create, edit, delete) using Next.js 13 (TypeScript) and Ant Design.',
      'Implemented App Router and dynamic routing to manage multiple note pages and navigation flows.',
      'Used Server and Client Components appropriately to optimize rendering performance and data loading.'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Ensuring fast page transitions and zero flash when navigating between complex nested note directories.',
        solution: 'Utilized Next.js App Router layouts, dynamic routing segments, and server-side pre-fetching.'
      }
    ],
    architecture: {
      summary: 'Next.js App Router frontend connected via REST API endpoints to a Flask Python backend with MySQL persistence.',
      keyComponents: ['Note Workspace UI', 'Dynamic App Router Engine', 'Flask REST API', 'MySQL Database']
    },
    lessonsLearned: [
      'Adhering strictly to Next.js App Router paradigms makes building responsive, SEO-friendly applications seamless.'
    ],
    githubUrl: 'https://github.com/namkndev86/samnotes',
    startDate: '2022-08',
    endDate: '2022-10',
    order: 5
  }
];

export const PROJECTS_MOCK = MOCK_PROJECTS;
