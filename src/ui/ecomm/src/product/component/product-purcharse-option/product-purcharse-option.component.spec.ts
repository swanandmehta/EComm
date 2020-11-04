import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPurcharseOptionComponent } from './product-purcharse-option.component';

describe('ProductPurcharseOptionComponent', () => {
  let component: ProductPurcharseOptionComponent;
  let fixture: ComponentFixture<ProductPurcharseOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPurcharseOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPurcharseOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
