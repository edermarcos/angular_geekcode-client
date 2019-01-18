import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from './shared/components/components.module';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [ AuthGuardService ],
    component: HomeComponent
  }, {
    path: 'profile',
    // canActivate: [ AuthGuardService ],
    component: ProfileComponent
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    HomeComponent,
  ]
})
export class PagesModule { }
