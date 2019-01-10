import { NgModule } from '@angular/core';

import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
  ]
})
export class ComponentsModule { }
