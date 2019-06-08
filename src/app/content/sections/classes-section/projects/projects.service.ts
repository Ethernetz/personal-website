import { Injectable, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import { Project } from './project.model';
import { Class } from '../classes/class.model';
import { ClassesService } from '../classes/classes.service';


@Injectable({providedIn: 'root'})
export class ProjectsService{
  private projects: Project[] = [];
  private projectsUpdated = new Subject<Project[]>();

constructor(public classesService: ClassesService){}

  getProjects(classIndex: number) {
    this.projects = this.classesService.getClasses()[classIndex].projects;
    return [...this.projects];
  }

  getProjectUpdateListener() {
    return this.projectsUpdated.asObservable();
  }

  addProject(projectTitle: string, projectDescription: string, projectClassIndex: number) {
    return null;
  }

}
