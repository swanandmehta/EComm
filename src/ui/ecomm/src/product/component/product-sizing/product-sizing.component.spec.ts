import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSizingComponent } from './product-sizing.component';

describe('ProductSizingComponent', () => {
  let component: ProductSizingComponent;
  let fixture: ComponentFixture<ProductSizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
