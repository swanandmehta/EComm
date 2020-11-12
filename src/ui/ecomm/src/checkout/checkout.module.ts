import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutContainerComponent } from './component/checkout-container/checkout-container.component';
import { CheckoutInformationComponent } from './component/checkout-information/checkout-information.component';
import { CheckoutStepsComponent } from './component/checkout-steps/checkout-steps.component';
import { CheckoutCartComponent } from './component/checkout-cart/checkout-cart.component';
import { CheckoutCartProductComponent } from './component/checkout-cart-product/checkout-cart-product.component';
import { CheckoutCartTotalComponent } from './component/checkout-cart-total/checkout-cart-total.component';
import { CheckoutShippingComponent } from './component/checkout-shipping/checkout-shipping.component';
import { CheckoutPaymentComponent } from './component/checkout-payment/checkout-payment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [CheckoutContainerComponent, CheckoutInformationComponent, CheckoutStepsComponent, CheckoutCartComponent, CheckoutCartProductComponent, CheckoutCartTotalComponent, CheckoutShippingComponent, CheckoutPaymentComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatRadioModule,
    MatBadgeModule
  ]
})
export class CheckoutModule { }
