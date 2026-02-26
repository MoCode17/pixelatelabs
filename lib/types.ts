export interface Project {
  id: string;
  title: string;
  slug: string;
  liveUrl: string;
  description: string;
  image: string;
  tags: string[];
  screenshots: string[];
  designBrief: {
    colors: { hex: string; label: string }[];
    fonts: { name: string; role: string }[];
  };
}

/** @deprecated Use Project instead */
export type Projects = Project;
