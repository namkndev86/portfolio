export type ProjectCategory = 'Enterprise' | 'Fullstack' | 'Frontend' | 'Personal';

export interface ArchitectureDetail {
  diagramUrl?: string;
  summary: string;
  keyComponents: string[];
}

export interface ProjectChallengeSolution {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  featured: boolean;
  coverImage: string;
  galleryImages?: string[];
  techStack: string[];
  role: string;
  responsibilities: string[];
  challengesAndSolutions: ProjectChallengeSolution[];
  architecture?: ArchitectureDetail;
  lessonsLearned: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  startDate: string;
  endDate: string | 'Present';
  order: number;
}
