import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from './shared/components/components.module';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CoursesComponent } from './courses/courses.component';
import { FriendsComponent } from './friends/friends.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: 'home',
    // canActivate: [ AuthGuardService ],
    component: HomeComponent
  }, {
    path: 'courses',
    // canActivate: [ AuthGuardService ],
    component: CoursesComponent
  }, {
    path: 'news',
    // canActivate: [ AuthGuardService ],
    component: NewsComponent
  }, {
    path: 'friends',
    // canActivate: [ AuthGuardService ],
    component: FriendsComponent
  }, {
    path: 'profile',
    // canActivate: [ AuthGuardService ],
    component: ProfileComponent
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    CoursesComponent,
    FriendsComponent,
    NewsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    HomeComponent,
    ProfileComponent,
    CoursesComponent,
    FriendsComponent,
    NewsComponent,
  ]
})
export class PagesModule { }
