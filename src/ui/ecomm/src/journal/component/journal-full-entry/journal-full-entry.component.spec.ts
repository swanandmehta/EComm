import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalFullEntryComponent } from './journal-full-entry.component';

describe('JournalFullEntryComponent', () => {
  let component: JournalFullEntryComponent;
  let fixture: ComponentFixture<JournalFullEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalFullEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalFullEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
