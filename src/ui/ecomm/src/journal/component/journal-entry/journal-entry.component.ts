import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { JournalEntry } from 'src/journal/common/dto/JournalEntry/journal-entry';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {

  @Input("entry")
  public entry: JournalEntry;

  public rightArrow: IconDefinition = faArrowRight;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  public onFullEntry(id: number): void {
    this.router.navigateByUrl("/journal/"+id);
  }
}
