import { Skill } from '@/types/skill';

export const MOCK_SKILLS: Skill[] = [
  // Frontend
  { id: 'sk-1', name: 'React & React 19', category: 'Frontend', iconName: 'Code2', proficiency: 98, featured: true },
  { id: 'sk-2', name: 'Next.js (App Router)', category: 'Frontend', iconName: 'Globe', proficiency: 95, featured: true },
  { id: 'sk-3', name: 'TypeScript', category: 'Frontend', iconName: 'FileCode', proficiency: 96, featured: true },
  { id: 'sk-4', name: 'TailwindCSS', category: 'Frontend', iconName: 'Palette', proficiency: 95, featured: true },
  { id: 'sk-5', name: 'Framer Motion', category: 'Frontend', iconName: 'Sparkles', proficiency: 90, featured: true },
  
  // Backend
  { id: 'sk-6', name: 'Node.js & Express', category: 'Backend', iconName: 'Server', proficiency: 92, featured: true },
  { id: 'sk-7', name: 'Go (Golang)', category: 'Backend', iconName: 'Cpu', proficiency: 85, featured: true },
  { id: 'sk-8', name: 'PostgreSQL & Prisma', category: 'Backend', iconName: 'Database', proficiency: 90, featured: true },
  { id: 'sk-9', name: 'Redis & Caching', category: 'Backend', iconName: 'Layers', proficiency: 88, featured: false },
  
  // Architecture & Design
  { id: 'sk-10', name: 'Microservices Architecture', category: 'Architecture & System Design', iconName: 'Network', proficiency: 94, featured: true },
  { id: 'sk-11', name: 'Event-Driven Systems (Kafka)', category: 'Architecture & System Design', iconName: 'Workflow', proficiency: 88, featured: true },
  { id: 'sk-12', name: 'Domain-Driven Design (DDD)', category: 'Architecture & System Design', iconName: 'Boxes', proficiency: 90, featured: false },
  
  // DevOps & Cloud
  { id: 'sk-13', name: 'Kubernetes & Docker', category: 'DevOps & Cloud', iconName: 'Container', proficiency: 89, featured: true },
  { id: 'sk-14', name: 'AWS & Cloud Infrastructure', category: 'DevOps & Cloud', iconName: 'Cloud', proficiency: 87, featured: true },
  { id: 'sk-15', name: 'CI/CD Pipelines (GitHub Actions/Jenkins)', category: 'DevOps & Cloud', iconName: 'GitBranch', proficiency: 92, featured: false },
  
  // Tools & Testing
  { id: 'sk-16', name: 'Git & GitHub Workflows', category: 'Tools & Testing', iconName: 'GitCommit', proficiency: 96, featured: false },
  { id: 'sk-17', name: 'Jest, Playwright & Vitest', category: 'Tools & Testing', iconName: 'CheckCircle2', proficiency: 88, featured: false }
];

export const SKILLS_DATA = MOCK_SKILLS;
