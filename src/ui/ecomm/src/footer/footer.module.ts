import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { FooterInfoComponent } from './component/footer-info/footer-info.component';
import { SocialComponent } from './component/social/social.component';
import { CopyRightComponent } from './component/copy-right/copy-right.component';
import { PaymentComponent } from './component/payment/payment.component';
import { FooterMainComponent } from './component/footer-main/footer-main.component';
import { FooterExtraComponent } from './component/footer-extra/footer-extra.component';
import { StorePolicyComponent } from './component/store-policy/store-policy.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [FooterComponent, FooterInfoComponent, SocialComponent, CopyRightComponent, PaymentComponent, FooterMainComponent, FooterExtraComponent, StorePolicyComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
    FontAwesomeModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
