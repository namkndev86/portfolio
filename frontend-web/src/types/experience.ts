export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  logoUrl?: string;
  location: string;
  position: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  startDate: string;
  endDate: string | 'Present';
  current: boolean;
  description: string;
  achievements: string[];
  technologiesUsed: string[];
}
