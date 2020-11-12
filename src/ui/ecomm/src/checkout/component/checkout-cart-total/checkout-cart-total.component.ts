import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/checkout/common/dto/Product/product';

@Component({
  selector: 'app-checkout-cart-total',
  templateUrl: './checkout-cart-total.component.html',
  styleUrls: ['./checkout-cart-total.component.css']
})
export class CheckoutCartTotalComponent implements OnInit {

  @Input("productList")
  public productList: Array<Product>;

  public subtotal: number = 10;
  public shipping: number = 10;
  public total: number = 20;
  public currency: string = "$"

  constructor() { }

  ngOnInit(): void {
  }

}
