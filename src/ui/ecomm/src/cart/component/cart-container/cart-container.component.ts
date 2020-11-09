import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IconDefinition, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Cart } from 'src/cart/common/dto/Cart/cart';
import { CartImg } from 'src/cart/common/dto/CartImg/cart-img';
import { CartProduct } from 'src/cart/common/dto/CartProduct/cart-product';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css']
})
export class CartContainerComponent implements OnInit {

  @Output("cartCloseEvent")
  public cartCloseEvent: EventEmitter<boolean>;
  public closeIcon: IconDefinition = faTimes;
  public cart: Cart;

  constructor() {
    const img1: CartImg = new CartImg("../../../assets/img/product1.jpg", "Product1");
    const img2: CartImg = new CartImg("../../../assets/img/product2.jpg", "Product2");
    const product1: CartProduct = new CartProduct("Awesome 1", 1, "Size 25 | Location USA | Type Gold", 1, 150, img1, "$");
    const product2: CartProduct = new CartProduct("Awesome 2", 1, "Size 25 | Location USA | Type Gold", 1, 150, img2, "$");
    const product3: CartProduct = new CartProduct("Awesome 3", 1, "Size 25 | Location USA | Type Gold", 1, 150, img1, "$");
    const product4: CartProduct = new CartProduct("Awesome 4", 1, "Size 25 | Location USA | Type Gold", 1, 150, img2, "$");
    const product5: CartProduct = new CartProduct("Awesome 5", 1, "Size 25 | Location USA | Type Gold", 1, 150, img1, "$");
    const product6: CartProduct = new CartProduct("Awesome 6", 1, "Size 25 | Location USA | Type Gold", 1, 150, img2, "$");
    const product7: CartProduct = new CartProduct("Awesome 7", 1, "Size 25 | Location USA | Type Gold", 1, 150, img1, "$");
    const product8: CartProduct = new CartProduct("Awesome 8", 1, "Size 25 | Location USA | Type Gold", 1, 150, img2, "$");
    this.cart = new Cart(450, "$", [product1, product2, product3, product4, product5, product6, product7, product8])
    this.cartCloseEvent = new EventEmitter<boolean>(false);
  }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.cartCloseEvent.emit(false);
  }

}
