import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ClassesSectionService{
  private selectedClassIndex: number = -1;
  private selectedClassIndexUpdated = new Subject<number>();

  getSelectedClassIndex(){
    return this.selectedClassIndex;
  }

  selectClass(index: number){
    this.selectedClassIndex = index;
    this.selectedClassIndexUpdated.next(index);
    return this.selectedClassIndex;
  }

  getSelectedClassUpdateListener(){
    return this.selectedClassIndexUpdated.asObservable();
  }

}
