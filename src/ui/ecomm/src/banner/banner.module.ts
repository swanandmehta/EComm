import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './component/banner/banner.component';
import { MatButtonModule } from '@angular/material/button';
import { SliderComponent } from './component/slider/slider.component';
import { SiderImgComponent } from './component/sider-img/sider-img.component';
import { SiderNavComponent } from './component/sider-nav/sider-nav.component';
import { SiderPlaceholderComponent } from './component/sider-placeholder/sider-placeholder.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [BannerComponent, SliderComponent, SiderImgComponent, SiderNavComponent, SiderPlaceholderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule
  ],
  exports: [BannerComponent]
})
export class BannerModule { }
