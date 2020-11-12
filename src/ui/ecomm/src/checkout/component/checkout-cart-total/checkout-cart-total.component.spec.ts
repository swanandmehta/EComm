import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCartTotalComponent } from './checkout-cart-total.component';

describe('CheckoutCartTotalComponent', () => {
  let component: CheckoutCartTotalComponent;
  let fixture: ComponentFixture<CheckoutCartTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutCartTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
