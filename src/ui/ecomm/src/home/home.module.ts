import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './component/main/main.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule
  ],
  bootstrap:[MainComponent]
})
export class HomeModule { }
