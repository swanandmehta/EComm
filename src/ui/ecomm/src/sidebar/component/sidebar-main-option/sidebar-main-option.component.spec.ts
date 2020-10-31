import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMainOptionComponent } from './sidebar-main-option.component';

describe('SidebarMainOptionComponent', () => {
  let component: SidebarMainOptionComponent;
  let fixture: ComponentFixture<SidebarMainOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMainOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMainOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
