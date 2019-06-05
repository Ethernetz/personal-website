import { Project } from '../projects/project.model';

export interface Class {
  title: string;
  description: string;
  projects: Project[];
}
