import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './component/search/search.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    FontAwesomeModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
