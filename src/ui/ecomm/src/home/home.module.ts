import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './component/main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { SearchModule } from 'src/search/search.module';
import { BannerModule } from 'src/banner/banner.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    SearchModule,
    BannerModule
  ],
  bootstrap:[MainComponent]
})
export class HomeModule { }
