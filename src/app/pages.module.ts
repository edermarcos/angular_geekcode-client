import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [ AuthGuardService ],
    component: HomeComponent
  }, {
    path: 'about',
    // canActivate: [ AuthGuardService ],
    component: AboutComponent
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    HomeComponent,
    AboutComponent
  ]
})
export class PagesModule { }
