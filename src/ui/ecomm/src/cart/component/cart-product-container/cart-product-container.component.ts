import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/cart/common/dto/Cart/cart';

@Component({
  selector: 'app-cart-product-container',
  templateUrl: './cart-product-container.component.html',
  styleUrls: ['./cart-product-container.component.css']
})
export class CartProductContainerComponent implements OnInit {

  @Input("cart")
  public cart: Cart;

  @Output("onProductSelect")
  public onProductSelect: EventEmitter<boolean>;

  constructor() {
    this.onProductSelect = new EventEmitter<boolean>(false);
  }

  ngOnInit(): void {

  }

  public close(): void {
    this.onProductSelect.emit(false);
  }

}
