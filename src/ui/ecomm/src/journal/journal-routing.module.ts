import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalContainerComponent } from './component/journal-container/journal-container.component';
import { JournalFullEntryComponent } from './component/journal-full-entry/journal-full-entry.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: JournalContainerComponent
  },
  {
    path: ":id",
    pathMatch: "full",
    component: JournalFullEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
