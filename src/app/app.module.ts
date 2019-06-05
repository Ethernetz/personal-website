import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MDBBootstrapModule,
  InputsModule,
  WavesModule,
  ButtonsModule,
  CardsFreeModule  } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component'
import { HeaderTextComponent } from './header/header-text/header-text.component'
import { HeaderImageComponent } from './header/header-image/header-image.component'

import { ContentComponent } from './content/content.component'
import { SectionTitleComponent } from './content/sections/section-title/section-title.component'
import { ClassesSectionComponent } from './content/sections/classes-section/classes-section.component'
import { ClassCreateComponent } from './content/sections/classes-section/classes/class-create/class-create.component'
import { ClassListComponent } from './content/sections/classes-section/classes/class-list/class-list.component'
import { ProjectListComponent } from './content/sections/classes-section/projects/project-list/project-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTextComponent,
    HeaderImageComponent,
    ContentComponent,
    SectionTitleComponent,
    ClassesSectionComponent,
    ClassCreateComponent,
    ClassListComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    InputsModule.forRoot(),
    WavesModule.forRoot(),
    ButtonsModule.forRoot(),
    CardsFreeModule .forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
