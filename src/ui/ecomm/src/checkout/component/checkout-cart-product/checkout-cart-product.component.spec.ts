import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCartProductComponent } from './checkout-cart-product.component';

describe('CheckoutCartProductComponent', () => {
  let component: CheckoutCartProductComponent;
  let fixture: ComponentFixture<CheckoutCartProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutCartProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
