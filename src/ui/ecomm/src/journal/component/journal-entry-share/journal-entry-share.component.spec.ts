import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntryShareComponent } from './journal-entry-share.component';

describe('JournalEntryShareComponent', () => {
  let component: JournalEntryShareComponent;
  let fixture: ComponentFixture<JournalEntryShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalEntryShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEntryShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
