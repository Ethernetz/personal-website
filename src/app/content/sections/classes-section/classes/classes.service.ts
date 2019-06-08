import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Class } from './class.model';
import { Project } from '../projects/project.model';

@Injectable({providedIn: 'root'})
export class ClassesService{

  private testProjects: Project[] = [
    {
      title: "Choozr",
      description: "Choose your favorite items!"
    },
    {
      title: "Spotify-Graphvizer",
      description: "Find out what your music taste is."
    }
  ];

  private classes: Class[] = [
    {
    title: "CSC-281 Introduction to Computer Science II",
    description:"Continuation of problem solving and object-oriented programming. Emphasis on larger programs built from modules. Introduction to abstract data structures: stacks, queues, graphs, and trees and their implementations and associated algorithms.",
    projects: this.testProjects
  },
  {
    title: "CSC-420 Algorithms and Data Structures",
    description: "Design and analysis of efficient algorithms. Implementation and manipulation of data structures, including linked lists, stacks, queues, trees, and graphs. Memory management. Internal and external searching and sorting.",
    projects: []
  },
  {
    title: "CSC-465 Operating Systems",
    description: "Historical background. Operating system functions and concepts: processes; processor allocation; memory management; virtual memory; I/O and files; protection; and design and implementation. Several existing operating systems are discussed. A group project to design and implement a small operating system is usually required.",
    projects: []
  }
  ];
  private classesUpdated = new Subject<Class[]>();

  getClasses() {
    return [...this.classes];
  }

  getClassUpdateListener() {
    return this.classesUpdated.asObservable();
  }


  addClass(title: string, description: string) {
    const newClass: Class = {title: title, description: description, projects: []}
    this.classes.push(newClass);
    this.classesUpdated.next([...this.classes])
  }

  addProject(project: Project, classIndex: number){
    this.classes[classIndex].projects.push(project)
  }

}
