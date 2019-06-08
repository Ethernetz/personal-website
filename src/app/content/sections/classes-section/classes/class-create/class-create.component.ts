import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Class } from '../class.model'
import { ClassesService } from '../classes.service'

@Component({
  selector: 'app-class-create',
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.scss']
})

export class ClassCreateComponent {

  constructor(public classesService: ClassesService) {}

  onAddClass(form: NgForm){
    this.classesService.addClass(form.value.title, form.value.description);
  }
}
