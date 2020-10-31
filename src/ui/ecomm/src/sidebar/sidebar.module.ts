import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarContainerComponent } from './component/sidebar-container/sidebar-container.component';
import { SidebarOptionComponent } from './component/sidebar-option/sidebar-option.component';
import { SidebarMainOptionComponent } from './component/sidebar-main-option/sidebar-main-option.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [SidebarContainerComponent, SidebarOptionComponent, SidebarMainOptionComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [SidebarContainerComponent]
})
export class SidebarModule { }
