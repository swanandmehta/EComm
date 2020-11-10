import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalRoutingModule } from './journal-routing.module';
import { JournalContainerComponent } from './component/journal-container/journal-container.component';
import { JournalEntryComponent } from './component/journal-entry/journal-entry.component';
import { JournalFullEntryComponent } from './component/journal-full-entry/journal-full-entry.component';
import { JournalEntryShareComponent } from './component/journal-entry-share/journal-entry-share.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [JournalContainerComponent, JournalEntryComponent, JournalFullEntryComponent, JournalEntryShareComponent],
  imports: [
    CommonModule,
    JournalRoutingModule,
    FontAwesomeModule
  ]
})
export class JournalModule { }
