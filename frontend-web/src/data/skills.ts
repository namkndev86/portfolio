import { Skill } from '@/types/skill';

export const MOCK_SKILLS: Skill[] = [
  // Frontend Frameworks & Languages
  { id: 'sk-1', name: 'React & Next.js', category: 'Frontend', iconName: 'Code2', proficiency: 96, featured: true },
  { id: 'sk-2', name: 'TypeScript & JavaScript', category: 'Frontend', iconName: 'FileCode', proficiency: 95, featured: true },
  { id: 'sk-3', name: 'Vue.js', category: 'Frontend', iconName: 'Globe', proficiency: 85, featured: false },
  { id: 'sk-4', name: 'TailwindCSS, MUI & Ant Design', category: 'Frontend', iconName: 'Palette', proficiency: 94, featured: true },

  // State Management & Validation
  { id: 'sk-5', name: 'Redux, MobX, React Query & SWR', category: 'Frontend', iconName: 'Layers', proficiency: 95, featured: true },
  { id: 'sk-6', name: 'React Hook Form, Formik & Yup/Zod', category: 'Frontend', iconName: 'CheckCircle2', proficiency: 92, featured: true },

  // Realtime & Streaming
  { id: 'sk-7', name: 'WebSocket & SSE', category: 'Frontend', iconName: 'Workflow', proficiency: 90, featured: true },
  { id: 'sk-8', name: 'Video Streaming (JSMpeg, Jessibuca)', category: 'Frontend', iconName: 'Sparkles', proficiency: 88, featured: true },

  // Performance & Virtualization
  { id: 'sk-9', name: 'Rendering & Virtualization (React Virtuoso)', category: 'Architecture & System Design', iconName: 'Cpu', proficiency: 94, featured: true },
  { id: 'sk-10', name: 'Code Splitting & Bundle Optimization', category: 'Architecture & System Design', iconName: 'Boxes', proficiency: 92, featured: true },
  { id: 'sk-11', name: 'Component-Driven & Scalable Architecture', category: 'Architecture & System Design', iconName: 'Network', proficiency: 95, featured: true },

  // Build Tools & Monorepo
  { id: 'sk-12', name: 'Webpack, Vite & RSBuild', category: 'Tools & Testing', iconName: 'GitBranch', proficiency: 90, featured: false },
  { id: 'sk-13', name: 'Nx, Turborepo & pnpm Workspace', category: 'Tools & Testing', iconName: 'Container', proficiency: 88, featured: false },

  // Backend & Integration
  { id: 'sk-14', name: 'Node.js, Express & NestJS', category: 'Backend', iconName: 'Server', proficiency: 88, featured: true },
  { id: 'sk-15', name: 'Spring Boot & Java', category: 'Backend', iconName: 'Code2', proficiency: 82, featured: false },
  { id: 'sk-16', name: 'PostgreSQL, MongoDB & MySQL', category: 'Backend', iconName: 'Database', proficiency: 88, featured: true }
];

export const SKILLS_DATA = MOCK_SKILLS;
