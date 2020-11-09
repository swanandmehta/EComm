import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './component/cart-container/cart-container.component';
import { CartProductContainerComponent } from './component/cart-product-container/cart-product-container.component';
import { CartProductComponent } from './component/cart-product/cart-product.component';
import { CartCheckoutComponent } from './component/cart-checkout/cart-checkout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [CartContainerComponent, CartProductContainerComponent, CartProductComponent, CartCheckoutComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    FontAwesomeModule,
    MatButtonModule
  ],
  exports: [CartContainerComponent]
})
export class CartModule { }
