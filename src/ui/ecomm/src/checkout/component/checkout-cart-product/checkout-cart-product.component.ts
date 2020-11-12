import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/checkout/common/dto/Product/product';

@Component({
  selector: 'app-checkout-cart-product',
  templateUrl: './checkout-cart-product.component.html',
  styleUrls: ['./checkout-cart-product.component.css']
})
export class CheckoutCartProductComponent implements OnInit {

  @Input("product")
  public product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
