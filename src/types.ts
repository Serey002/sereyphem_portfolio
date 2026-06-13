export interface Skill {
  name: string;
  level: number; // 0 to 100
  iconClass: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface EducationItem {
  title: string;
  subtitle: string;
  period: string;
  courses?: string[];
  description?: string;
  highlightCourse?: string;
}

export interface Project {
  title: string;
  meta: string;
  description: string;
  tech: string[];
  category: 'Full Stack' | 'Frontend' | 'UI/UX' | 'All';
  githubUrl?: string;
  liveUrl?: string;
  iconClass: string;
}

export interface Workshop {
  title: string;
  date: string;
  description: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  iconClass: string;
  link?: string;
}
