import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/cart/common/dto/Cart/cart';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

  @Input("cart")
  public cart: Cart;

  @Output("onCheckoutClick")
  public onCheckoutClick: EventEmitter<boolean>;
  
  constructor(private router: Router) {
    this.onCheckoutClick = new EventEmitter<boolean>();
    this.cart = new Cart(null, null, null);
  }

  ngOnInit(): void {

  }

  public checkout(): void {
    this.router.navigateByUrl("/checkout");
    this.onCheckoutClick.emit(false);
  }

}
