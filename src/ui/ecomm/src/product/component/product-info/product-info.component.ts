import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/product/common/dto/Product/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  @Input("product")
  public product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
