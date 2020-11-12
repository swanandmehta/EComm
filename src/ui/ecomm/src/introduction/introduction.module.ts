import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreInfoComponent } from './component/store-info/store-info.component';
import { NewsletterComponent } from './component/newsletter/newsletter.component';
import { IntroductionComponent } from './component/introduction/introduction.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [StoreInfoComponent, NewsletterComponent, IntroductionComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [IntroductionComponent]
})
export class IntroductionModule { }
