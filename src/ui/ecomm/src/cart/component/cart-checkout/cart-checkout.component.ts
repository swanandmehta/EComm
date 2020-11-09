import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/cart/common/dto/Cart/cart';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

  @Input("cart")
  public cart: Cart;
  
  constructor() { }

  ngOnInit(): void {
  }

}
