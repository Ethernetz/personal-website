import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../project.model';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { ClassesSectionService } from '../../classes-section.service';

@Component({
    selector: 'app-project-create',
    templateUrl: './project-create.component.html',
    styleUrls: ['./project-create.component.scss']
})

export class ProjectCreateComponent {
    constructor(public projectsService: ProjectsService, public classesSectionService: ClassesSectionService) { }

    onAddProject(form: NgForm) {
        this.projectsService.addProject(form.value.title, form.value.description, this.classesSectionService.getSelectedClassIndex());
    }
} 