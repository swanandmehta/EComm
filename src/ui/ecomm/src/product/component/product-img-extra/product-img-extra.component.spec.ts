import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImgExtraComponent } from './product-img-extra.component';

describe('ProductImgExtraComponent', () => {
  let component: ProductImgExtraComponent;
  let fixture: ComponentFixture<ProductImgExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImgExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImgExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
