import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOptionComponent } from './component/menu-option/menu-option.component';
import { MenuContainerComponent } from './component/menu-container/menu-container.component';


@NgModule({
  declarations: [MenuContainerComponent, MenuOptionComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuContainerComponent]
})
export class MenuModule { }
