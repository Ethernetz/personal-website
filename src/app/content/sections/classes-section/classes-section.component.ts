import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ClassesSectionService } from './classes-section.service';
@Component({
  selector: 'app-classes-section',
  templateUrl: './classes-section.component.html',
  styleUrls: ['./classes-section.component.scss']
})

export class ClassesSectionComponent implements OnInit{
  private selectedClassIndex: number = -1;
  private selectedClassSub: Subscription;

  constructor( public classesSectionService: ClassesSectionService ){}

  ngOnInit(){
    //TODO: find out why selectedClassIndex is dissapearing after subscribing
    this.selectedClassIndex = this.classesSectionService.getSelectedClassIndex();
    console.log(this.selectedClassIndex);
    this.selectedClassSub = this.classesSectionService
    .getSelectedClassUpdateListener()
    .subscribe((selectedClassIndex: number) => {
      this.selectedClassIndex = selectedClassIndex;
    });
  }

}
