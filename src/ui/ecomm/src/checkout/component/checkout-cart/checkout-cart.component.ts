import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/checkout/common/dto/Product/product';
import { ProductImg } from 'src/checkout/common/dto/ProductImg/product-img';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {

  @Input("productList")
  public productList: Array<Product>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
