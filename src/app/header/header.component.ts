import { Component, OnInit, HostListener } from '@angular/core'

import { HeaderTextComponent } from './header-text/header-text.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{

  //Do these need to be public?
  public innerWidth: any;
  public onMobile: boolean = true;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
      this.onMobile = this.innerWidth < 800;
    }

  ngOnInit(){
    this.innerWidth = window.innerWidth;
    this.onMobile = this.innerWidth < 800;
  }

}
