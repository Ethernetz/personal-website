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

  addProject(title: string, description: string, classIndex: number) {
    console.log('here');
    const newProject: Project = {title: title, description: description}
    this.classesService.addProject(newProject, classIndex);
    this.projectsUpdated.next(this.getProjects(classIndex))
  }

}
