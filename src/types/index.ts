export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string;
  github: string;
  live?: string;
  image?: string;
}

export interface Experience {
  id: string | number;
  abbreviation: string;
  companyName: string;
  title: string;
  link: string;
  date: string;
  description: string;
  skills: string;
  isActive: boolean;
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export interface FunFact {
  icon: string;
  text: string;
  color: string;
} 