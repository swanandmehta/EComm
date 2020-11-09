import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CartProduct } from 'src/cart/common/dto/CartProduct/cart-product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input("product")
  public product: CartProduct;

  @Output("onProductSelect")
  public onProductSelect: EventEmitter<boolean>;

  public addIcon: IconDefinition = faPlus;
  public minusIcon: IconDefinition = faMinus;


  constructor(private router: Router) {
    this.onProductSelect = new EventEmitter(false);
  }

  ngOnInit(): void {

  }

  public onProductClick(id: number): void {
    this.onProductSelect.emit(false);
    this.router.navigateByUrl("product/"+id);
  }

}
