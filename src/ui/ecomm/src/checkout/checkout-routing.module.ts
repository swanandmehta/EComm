import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutContainerComponent } from './component/checkout-container/checkout-container.component';
import { CheckoutInformationComponent } from './component/checkout-information/checkout-information.component';
import { CheckoutPaymentComponent } from './component/checkout-payment/checkout-payment.component';
import { CheckoutShippingComponent } from './component/checkout-shipping/checkout-shipping.component';

const routes: Routes = [
  {
    path: "",
    component: CheckoutContainerComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "information"
      },
      {
        path: "information",
        pathMatch: "full",
        component: CheckoutInformationComponent
      },
      {
        path: "shipping",
        pathMatch: "full",
        component: CheckoutShippingComponent
      },
      {
        path: "payment",
        pathMatch: "full",
        component: CheckoutPaymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
