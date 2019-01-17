import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPeopleComponent } from './app-people/app-people.component';
import { AppRecomendationsComponent } from './app-recomendations/app-recomendations.component';

@NgModule({
  declarations: [AppPeopleComponent, AppRecomendationsComponent],
  imports: [
    CommonModule
  ],
  exports: []
})
export class ComponentsModule { }
