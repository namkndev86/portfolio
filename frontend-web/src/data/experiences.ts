import { Experience } from '@/types/experience';

export const MOCK_EXPERIENCES: Experience[] = [
  {
    id: 'exp-viettel',
    company: 'Viettel High Tech',
    companyUrl: 'https://viettelhightech.vn',
    location: 'Hanoi, Vietnam',
    position: 'Frontend Developer (Onsite)',
    employmentType: 'Full-time',
    startDate: '2026-01',
    endDate: 'Present',
    current: true,
    description: 'Project: Vtracking Viettel — A vehicle tracking and online monitoring solution utilizing GPS technology, mobile data transmission, and Geographic Information Systems (GIS) to provide real-time vehicle tracking and location monitoring on digital maps (Team size: 20).',
    achievements: [
      'Owned the frontend implementation of live camera playback and stream controls, including video rendering, player interaction, and error handling for streaming states.',
      'Designed and maintained interactive UI components for monitoring screens, integrating Viettel Maps API, WebSocket-driven updates, and reusable UI modules for enterprise workflows.',
      'Built and optimized frontend logic for handling high-frequency vehicle and camera data updates, improving responsiveness and stability under real-time operational conditions.',
      'Developed reusable frontend patterns for map views, modal flows, and data tables, reducing duplicated efforts and accelerating feature delivery across monitoring modules.'
    ],
    technologiesUsed: ['jQuery', 'Bootstrap', 'Twirl Template', 'Viettel Maps API', 'WebSocket', 'JSMpeg', 'Jessibuca', 'Go', 'PostgreSQL', 'MongoDB', 'Kafka', 'ClickHouse']
  },
  {
    id: 'exp-vti',
    company: 'VTI Joint Stock Company',
    companyUrl: 'https://vti-group.htm.vn',
    location: 'Hanoi, Vietnam',
    position: 'Frontend Developer',
    employmentType: 'Full-time',
    startDate: '2024-07',
    endDate: '2026-01',
    current: false,
    description: 'Project: Manufacturing Execution System (MES-X) — A comprehensive management solution providing an overview of the entire manufacturing process with 5 modules: MESCore, WMS-X, MMS-X, QMS-X, PMS-X (Team size: 60).',
    achievements: [
      'Led frontend development for MESCORE and WMS-X modules, managing a team of 5 frontend engineers within a 15-member frontend department.',
      'Owned sprint planning, task estimation, work allocation, code reviews, and pull request governance to ensure delivery quality and timeline adherence.',
      'Designed and maintained frontend architecture for MESCORE and WMS-X, covering component hierarchy, routing strategy, state management, and shared utilities.',
      'Established scalable data flow patterns across Redux, SWR, and local state layers while building a centralized API client for microservice integration.',
      'Developed and maintained 25+ reusable UI components shared across 6 enterprise modules, reducing duplicated implementation effort and accelerating feature delivery.',
      'Optimized rendering for datasets exceeding 300,000 records using virtualization and memoization, reducing UI lag and improving responsiveness for operators.'
    ],
    technologiesUsed: ['React', 'Redux', 'Redux-Saga', 'SWR', 'React Hook Form', 'Formik', 'Yup', 'Material UI', 'Recharts', 'React Virtuoso', 'React Window', 'NestJS', 'PostgreSQL', 'MongoDB', 'Kafka', 'Redis']
  },
  {
    id: 'exp-vimc',
    company: 'Vietnam Maritime Corporation (VIMC)',
    companyUrl: 'https://vimc.co',
    location: 'Hanoi, Vietnam',
    position: 'Fullstack Developer (Onsite)',
    employmentType: 'Full-time',
    startDate: '2022-10',
    endDate: '2024-05',
    current: false,
    description: 'Projects: VIMC E-Office & VIMC LINES — Internal enterprise document processing, task management, container transportation, and port operations supply chain services (Team size: 15 / 12).',
    achievements: [
      'Developed new pages and features for document workflows, task tracking, and approval systems using React, Ant Design, and MobX.',
      'Extended and maintained CKEditor 5 and Tiptap Editor integrations, adding new functionalities and resolving bugs in document editing modules.',
      'Integrated RESTful APIs with Express, Spring Boot, Prisma ORM, and React Query for container tracking, vessel schedules, and logistics operations.',
      'Implemented Excel import/export and shipping file generation features using ExcelJS, Puppeteer, Docx, and Day.js to support reporting workflows.'
    ],
    technologiesUsed: ['React', 'MobX', 'Ant Design', 'Styled-Components', 'Spring Boot', 'Node.js (Express)', 'Prisma ORM', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Puppeteer', 'ExcelJS']
  },
  {
    id: 'exp-thinkdiff',
    company: 'Thinkdiff Artificial Intelligence Company Limited',
    companyUrl: 'https://thinkdiff.ai',
    location: 'Hanoi, Vietnam',
    position: 'Intern Next.js Developer',
    employmentType: 'Internship',
    startDate: '2022-08',
    endDate: '2022-10',
    current: false,
    description: 'Project: SamNotes — A web app to note information, ideas, and tasks with anytime, anywhere access (Team size: 7).',
    achievements: [
      'Developed core note management features (list, create, edit, delete) using Next.js 13 (TypeScript) and Ant Design.',
      'Implemented App Router and dynamic routing to manage multiple note pages and navigation flows efficiently.',
      'Used Server and Client Components appropriately to optimize rendering performance and data loading.',
      'Styled user interfaces with TailwindCSS, ensuring responsive design and consistent layout across devices.'
    ],
    technologiesUsed: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Ant Design', 'Python (Flask)', 'MySQL']
  }
];

export const EXPERIENCES_DATA = MOCK_EXPERIENCES;
