import { Component, OnInit } from '@angular/core';
import { Product } from 'src/checkout/common/dto/Product/product';
import { ProductImg } from 'src/checkout/common/dto/ProductImg/product-img';


@Component({
  selector: 'app-checkout-container',
  templateUrl: './checkout-container.component.html',
  styleUrls: ['./checkout-container.component.css']
})
export class CheckoutContainerComponent implements OnInit {

  public productList: Array<Product>;

  constructor() {
    const img1: ProductImg = new ProductImg("../../../assets/img/product1.jpg", "product img");
    const p1: Product = new Product(1, "Product 1", 2, 150, 0, "$", "Size 26 | Color Rose Gold | From USA", img1);
    const p2: Product = new Product(1, "Product 1", 1, 200, 10, "$", "Size 26 | Color Rose Gold | From USA", img1);
    const p3: Product = new Product(1, "Product 1", 3, 90, 10, "$", "Size 26 | Color Rose Gold | From USA", img1);
    this.productList = [p1, p2, p3, p1, p2, p3, p1, p2, p3, p1, p2, p3, p1, p2, p3, p1, p2, p3, p1, p2, p3, p1, p2, p3];
  }

  ngOnInit(): void {
  }

}
