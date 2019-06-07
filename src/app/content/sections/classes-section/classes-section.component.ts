import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ClassesSectionService } from './classes-section.service';
@Component({
  selector: 'app-classes-section',
  templateUrl: './classes-section.component.html',
  styleUrls: ['./classes-section.component.scss']
})

export class ClassesSectionComponent implements OnInit{
  private selectedClassIndex: number = -1; //Placeholder initial selectedClassIndex until new one given on init from classes-section service
  private selectedClassSub: Subscription;
  
  constructor( public classesSectionService: ClassesSectionService ){}

  ngOnInit(){
 
    this.selectedClassIndex = this.classesSectionService.getSelectedClassIndex();
    
    this.selectedClassSub = this.classesSectionService
    .getSelectedClassUpdateListener()
    .subscribe((selectedClassIndex: number) => {
      this.selectedClassIndex = selectedClassIndex;
    });
  }

}
