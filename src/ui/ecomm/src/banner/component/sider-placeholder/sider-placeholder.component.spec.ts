import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderPlaceholderComponent } from './sider-placeholder.component';

describe('SiderPlaceholderComponent', () => {
  let component: SiderPlaceholderComponent;
  let fixture: ComponentFixture<SiderPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
