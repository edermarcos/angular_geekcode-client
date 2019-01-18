import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPeopleComponent } from './app-people/app-people.component';
import { AppRecomendationsComponent } from './app-recomendations/app-recomendations.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppMainComponent } from './app-main/app-main.component';

@NgModule({
  declarations: [
    AppPeopleComponent,
    AppRecomendationsComponent,
    AppAboutComponent,
    AppMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppPeopleComponent,
    AppRecomendationsComponent,
    AppAboutComponent,
    AppMainComponent
  ]
})
export class ComponentsModule { }
