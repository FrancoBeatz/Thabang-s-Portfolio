export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
}