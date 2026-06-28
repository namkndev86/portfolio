import { Experience } from '@/types/experience';

export const MOCK_EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    company: 'TechCorp Global Solutions',
    companyUrl: 'https://example.com/techcorp',
    location: 'Ho Chi Minh City, Vietnam',
    position: 'Senior Software Architect & Lead',
    employmentType: 'Full-time',
    startDate: '2022-03',
    endDate: 'Present',
    current: true,
    description: 'Leading the enterprise engineering division in delivering high-availability cloud platforms and microservices architecture.',
    achievements: [
      'Spearheaded architectural transformation from legacy monolith to event-driven Kubernetes microservices, reducing infrastructure costs by 35%.',
      'Mentored a team of 14 senior and mid-level engineers across frontend, backend, and DevOps domains.',
      'Designed distributed caching and rate-limiting infrastructure handling over 10 million daily requests with 99.99% uptime.'
    ],
    technologiesUsed: ['Next.js', 'TypeScript', 'Go', 'Kubernetes', 'Apache Kafka', 'PostgreSQL', 'Redis', 'AWS']
  },
  {
    id: 'exp-2',
    company: 'Innovate Digital Labs',
    companyUrl: 'https://example.com/innovate',
    location: 'Ho Chi Minh City, Vietnam',
    position: 'Lead Fullstack Engineer',
    employmentType: 'Full-time',
    startDate: '2019-08',
    endDate: '2022-02',
    current: false,
    description: 'Managed client web product development, driving technical excellence and rapid prototyping for fintech and e-commerce startups.',
    achievements: [
      'Delivered 8 end-to-end web applications on time using React, Node.js, and automated CI/CD pipelines.',
      'Integrated real-time payment gateways and secure OAuth authorization workflows.',
      'Reduced initial web app page load times by 60% through code-splitting, image optimization, and Server-Side Rendering.'
    ],
    technologiesUsed: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'TailwindCSS', 'Docker']
  },
  {
    id: 'exp-3',
    company: 'NextGen Software House',
    companyUrl: 'https://example.com/nextgen',
    location: 'Ho Chi Minh City, Vietnam',
    position: 'Frontend Software Engineer',
    employmentType: 'Full-time',
    startDate: '2017-06',
    endDate: '2019-07',
    current: false,
    description: 'Crafted responsive user interfaces and interactive dashboards for enterprise web solutions.',
    achievements: [
      'Developed reusable UI component libraries adopted across 5 major client web portals.',
      'Collaborated closely with UX designers to translate complex wireframes into polished, pixel-perfect interfaces.',
      'Optimized client-side bundle size by 40% using Webpack dynamic imports.'
    ],
    technologiesUsed: ['JavaScript (ES6+)', 'React', 'Redux', 'Sass', 'Webpack', 'REST APIs']
  }
];

export const EXPERIENCES_DATA = MOCK_EXPERIENCES;
