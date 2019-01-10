import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { FilterListPipe } from './filter-list.pipe';

@NgModule({
  imports: [ ],
  declarations: [
    CapitalizePipe,
    FilterListPipe
  ],
  exports: [
    CapitalizePipe,
    FilterListPipe
  ]
})
export class PipesModule { }
