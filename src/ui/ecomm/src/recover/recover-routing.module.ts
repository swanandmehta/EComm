import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoverContainerComponent } from './component/recover-container/recover-container.component';

const routes: Routes = [
  {
    path: "",
    component: RecoverContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoverRoutingModule { }
