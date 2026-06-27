export type SkillCategory = 
  | 'Frontend' 
  | 'Backend' 
  | 'Architecture & System Design' 
  | 'DevOps & Cloud' 
  | 'Tools & Testing';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  iconName: string;
  proficiency: number; // 1-100
  featured: boolean;
}
