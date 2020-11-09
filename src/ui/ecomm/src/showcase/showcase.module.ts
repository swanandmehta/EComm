import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/product/product.component';
import { ShowcaseComponent } from './component/showcase/showcase.component';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ProductComponent, ShowcaseComponent],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    FontAwesomeModule
  ],
  exports: [ShowcaseComponent]
})
export class ShowcaseModule { }
