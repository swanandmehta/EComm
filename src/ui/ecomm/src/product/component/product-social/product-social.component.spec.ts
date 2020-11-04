import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSocialComponent } from './product-social.component';

describe('ProductSocialComponent', () => {
  let component: ProductSocialComponent;
  let fixture: ComponentFixture<ProductSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
