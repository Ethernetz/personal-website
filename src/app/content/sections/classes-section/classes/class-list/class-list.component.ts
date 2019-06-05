import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Class } from '../class.model';
import { ClassesService } from '../classes.service';
import { ClassesSectionService } from '../../classes-section.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})

export class ClassListComponent implements OnInit, OnDestroy{
  classes: Class[] = [];
  tableHeaders = ['Title', 'Description'];
  private classesSub: Subscription;

  constructor(
    public classesService: ClassesService,
    public classesSectionService: ClassesSectionService
  ) {}

  selectClass(classIndex: number){
    console.log('selecting class with index ' + classIndex)
    this.classesSectionService.selectClass(classIndex);
  }

  ngOnInit(){
     this.classes = this.classesService.getClasses();

     this.classesSub = this.classesService
     .getClassUpdateListener()
     .subscribe((classes: Class[]) => {
       this.classes = classes;
     });
  }

  ngOnDestroy(){
    this.classesSub.unsubscribe();
  }

}
