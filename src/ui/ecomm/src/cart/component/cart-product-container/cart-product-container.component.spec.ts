import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductContainerComponent } from './cart-product-container.component';

describe('CartProductContainerComponent', () => {
  let component: CartProductContainerComponent;
  let fixture: ComponentFixture<CartProductContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProductContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
