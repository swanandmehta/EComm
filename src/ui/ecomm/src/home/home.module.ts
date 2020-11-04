import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './component/main/main.component';
import { BannerModule } from 'src/banner/banner.module';
import { MenuModule } from 'src/menu/menu.module';
import { ShowcaseModule } from 'src/showcase/showcase.module';
import { IntroductionModule } from 'src/introduction/introduction.module';
import { HomeComponent } from './component/home/home.component';
import { FooterModule } from 'src/footer/footer.module';
import { HeaderModule } from 'src/header/header.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarModule } from 'src/sidebar/sidebar.module';
import { ProductModule } from 'src/product/product.module';

@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BannerModule,
    MenuModule,
    ShowcaseModule,
    IntroductionModule,
    FooterModule,
    HeaderModule,
    MatSidenavModule,
    SidebarModule
  ],
  bootstrap:[MainComponent]
})
export class HomeModule { }
