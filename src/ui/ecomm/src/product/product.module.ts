import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ProductComponent } from './component/product/product.component';
import { ProductImgComponent } from './component/product-img/product-img.component';
import { ProductInfoComponent } from './component/product-info/product-info.component';
import { ProductSizingComponent } from './component/product-sizing/product-sizing.component';
import { ProductDescComponent } from './component/product-desc/product-desc.component';
import { ProductSocialComponent } from './component/product-social/product-social.component';
import { ProductImgExtraComponent } from './component/product-img-extra/product-img-extra.component';
import { ProductPurcharseOptionComponent } from './component/product-purcharse-option/product-purcharse-option.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ProductComponent, ProductImgComponent, ProductInfoComponent, ProductSizingComponent, ProductDescComponent, ProductSocialComponent, ProductImgExtraComponent, ProductPurcharseOptionComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
