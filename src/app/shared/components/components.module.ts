import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPeopleComponent } from './app-people/app-people.component';
import { AppRecomendationsComponent } from './app-recomendations/app-recomendations.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppPostComponent } from './app-post/app-post.component';
import { AppSuggestionsComponent } from './app-suggestions/app-suggestions.component';
import { AppActivityFeedComponent } from './app-activity-feed/app-activity-feed.component';
import { AppTodayComponent } from './app-today/app-today.component';
import { AppWeatherComponent } from './app-weather/app-weather.component';
import { AppPagesLikeComponent } from './app-pages-like/app-pages-like.component';
import { AppBlogPostComponent } from './app-blog-post/app-blog-post.component';

@NgModule({
  declarations: [
    AppPeopleComponent,
    AppRecomendationsComponent,
    AppAboutComponent,
    AppMainComponent,
    AppPostComponent,
    AppSuggestionsComponent,
    AppActivityFeedComponent,
    AppTodayComponent,
    AppWeatherComponent,
    AppPagesLikeComponent,
    AppBlogPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppPeopleComponent,
    AppRecomendationsComponent,
    AppAboutComponent,
    AppMainComponent,
    AppPostComponent,
    AppSuggestionsComponent,
    AppActivityFeedComponent,
    AppTodayComponent,
    AppWeatherComponent,
    AppPagesLikeComponent,
    AppBlogPostComponent
  ]
})
export class ComponentsModule { }
