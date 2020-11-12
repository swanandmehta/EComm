import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/checkout/common/dto/Address/address';
import { Personal } from 'src/checkout/common/dto/Personal/personal';
import { Shipping } from 'src/checkout/common/dto/Shipping/shipping';

@Component({
  selector: 'app-checkout-shipping',
  templateUrl: './checkout-shipping.component.html',
  styleUrls: ['./checkout-shipping.component.css']
})
export class CheckoutShippingComponent implements OnInit {

  public personal: Personal;
  public address: Address;
  public shippingOptions: Shipping[];

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.personal = new Personal("John", "Smith", "username@domain.com", "123 123 1234");
    this.address = new Address("4813  Woodhill Avenue", "", "Willards", "United States", "Maryland", "21874");

    let type3: Shipping = new Shipping(3, "No Rush", "0", "$")
    let type1: Shipping = new Shipping(1, "Normal", "10", "$");
    let type2: Shipping = new Shipping(2, "Priority", "20", "$");
  
    this.shippingOptions = [type3, type1, type2];

  }

  ngOnInit(): void {

  }

  public navigateToInformation(): void {
    this.router.navigate(["../information"], {relativeTo:this.activeRoute});
  }

  public navigateToPayment(): void {
    this.router.navigate(["../payment"], {relativeTo:this.activeRoute});
  }

}
