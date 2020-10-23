import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faCcPaypal, faCcDiscover } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public visaIcon: IconDefinition = faCcVisa;
  public mastercardIcon: IconDefinition = faCcMastercard;
  public amexIcon: IconDefinition = faCcAmex;
  public paypalIcon: IconDefinition = faCcPaypal;
  public discoverIcon: IconDefinition = faCcDiscover;

  constructor() { }

  ngOnInit(): void {
  }

}
