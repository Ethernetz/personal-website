import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit, OnDestroy{
  projects: Project[] = [];
  private projectsSub = Subscription;
  tableHeaders = ['Title', 'Description'];

  constructor(public projectsService: ProjectsService){}

  ngOnInit(){
    this.projects = this.projectsService.getProjects(0);
    // console.log(this.projects);
    // this.projectsSub = this.projectsService.getProjectUpdateListener()
    //   .subscribe((projects: Project[]) => {
    //     this.projects = projects;
    //   });
  }

  ngOnDestroy(){
    // this.projectsSub.unsubscribe();
  }
}
